import { AtRule } from "./at-rule";
import { StyleProperty } from "./property";
import { StyleSelectorBody } from "./query";
import { Transition } from "./transition";

export class StyleGroup {
	public children: StyleGroup[] = [];
	public properties: StyleProperty[] = [];
	public atRules: AtRule[] = [];

	// for external code to modify
	static wrapSelector(selector: string) {
		return selector;
	}

	constructor(
		public selector: string
	) {
		this.selector = StyleGroup.wrapSelector(selector);
	}

	append(...items: StyleSelectorBody[]) {
		const add = (items: StyleSelectorBody[]) => {
			for (let item of items) {
				// at rules may be defined and used simultaneously
				if (item instanceof AtRule) {
					this.atRules.push(item);
				}

				if (item instanceof StyleGroup) {
					this.children.push(item);
				} else if (item instanceof StyleProperty) {
					this.properties.push(item);
				} else if (Array.isArray(item)) {
					add(item);
				} else if ('toStyleGroup' in item) {
					add([item.toStyleGroup()]);
				} else if ('toStyleProperty' in item) {
					add([item.toStyleProperty()]);
				} else if ('toStyleProperties' in item) {
					add(item.toStyleProperties());
				} else if ('toStyle' in item) {
					add([item.toStyle()]);
				} else {
					throw new Error(`Invalid style declaration: ${item}`);
				}
			}
		};

		add(items);

		return this;
	}

	/**
	 * Apply the styles
	 *
	 * This creates a stylesheet and adds it to the documents head
	 * Will fail in non-browser contexts (like node)
	 *
	 * Awaiting will wait for the stylesheet to load
	 */
	apply(document = (globalThis as any).document) {
		if (!document || !document.createElement || !document.head) {
			throw new Error('Cannot apply styles in non-DOM context.');
		}

		const styleSheet = document.createElement('style');
		styleSheet.textContent = this.toString('', true);

		document.head.appendChild(styleSheet);

		return new Promise<void>(done => styleSheet.onload = () => done());
	}

	/**
	 * Stringify all styles
	 *
	 * Iterates through all children recursively and combines all style declarations into a stylesheet
	 *
	 * @param parentSelector Selector path
	 * @param includeAtRules Only include them once
	 * @returns Stringified stylesheet
	 */
	toString(parentSelector: string = '', includeAtRules = false) {
		const selector = `${parentSelector}${this.selector}`;
		const transitions: Transition[] = [];

		const useProperties = (source: StyleProperty[]) => {
			const flattenedProperties: string[] = [];

			for (let property of source) {
				const used = property.use(selector);

				if (used) {
					for (let child of Array.isArray(used) ? used : [used]) {
						if (child.children) {
							flattenedProperties.push(...useProperties(child.children));
						} else {
							if (child.transitionRule) {
								transitions.push(child.transitionRule);
							}

							flattenedProperties.push(child.toPropertyString());
						}
					}
				}
			}

			return flattenedProperties;
		};

		const atRules = this.getAllAtRules().sort((a, b) => a.rule.sortingOrder - b.rule.sortingOrder);

		return `${
			includeAtRules ? atRules.filter(rule => !rule.rule.afterRules).map(rule => rule.rule.toRuleString(rule.selector)).join('') : ''
		}${selector}{${
			useProperties(this.properties).join('')
		}${
			transitions.length ? `;transition:${transitions.map(transition => transition.toValueString()).join(',')}` : ''
		}}${
			this.children.map(child => child.toString(selector)).join('')
		}${
			includeAtRules ? atRules.filter(rule => rule.rule.afterRules).map(rule => rule.rule.toRuleString(rule.selector)).join('') : ''
		}`;
	}

	private getAllAtRules() {
		const rules = [...this.atRules.map(rule => ({
			rule,
			selector: this.selector
		}))];

		for (let child of this.children) {
			for (let rule of child.getAllAtRules()) {
				if (!rules.includes(rule)) {
					rule.selector = `${this.selector}${rule.selector}`;
					rules.push(rule);
				}
			}
		}

		return rules;
	}
}
