import { AtRule } from "./at-rule";
import { ContentStyleProperty } from "./declarations/content";
import { StyleProperty } from "./property";
import { StyleSelectorBody, style } from "./query";
import { Transition } from "./transition";

const createPseudo = (group: StyleGroup, selector: string) => (content: string[] | string, ...items: StyleSelectorBody[]) => {
	content = Array.isArray(content) ? content : [content];

	group.appendChild(style(selector, new ContentStyleProperty(...content), items));

	return group;
};

const createState = (group: StyleGroup, selector: string) => (...items: StyleSelectorBody[]) => {
	group.appendChild(style(selector, items));

	return group;
};

const styleAttribute = (group: StyleGroup, selector: string, items: StyleSelectorBody) => {
	group.appendChild(style(selector, items));

	return group;
};

export class StyleGroup {
	public children: StyleGroup[] = [];
	public properties: StyleProperty[] = [];
	public atRules: AtRule[] = [];

	// for external code to modifiy
	static wrapSelector(selector: string) {
		return selector;
	}

	constructor(
		public selector: string
	) {
		this.selector = StyleGroup.wrapSelector(selector);
	}

	// pseudo elements
	before = createPseudo(this, '::before');
	after = createPseudo(this, '::after');

	// states
	hover = createState(this, ':hover');
	active = createState(this, ':active');
	checked = createState(this, ':checked');

	empty = createState(this, ':empty');

	// attributes
	attribute = (name: string, valueOrFirstStyle: string | StyleSelectorBody, ...items: StyleSelectorBody[]) => {
		// catch values
		if (typeof valueOrFirstStyle == 'string') {
			return styleAttribute(this, `[${name}=${JSON.stringify(valueOrFirstStyle)}]`, items);
		}

		return styleAttribute(this, `[${name}]`, [valueOrFirstStyle, ...items]);
	}

	attributeContains = (name: string, substring: string, ...items: StyleSelectorBody[]) => styleAttribute(this, `[${name}*=${JSON.stringify(substring)}]`, items);
	attributeStartsWith = (name: string, substring: string, ...items: StyleSelectorBody[]) => styleAttribute(this, `[${name}^=${JSON.stringify(substring)}]`, items);
	attributeEndsWith = (name: string, substring: string, ...items: StyleSelectorBody[]) => styleAttribute(this, `[${name}$=${JSON.stringify(substring)}]`, items);
	attributeDashPrefixes = (name: string, substring: string, ...items: StyleSelectorBody[]) => styleAttribute(this, `[${name}|=${JSON.stringify(substring)}]`, items);
	attributeIn = (name: string, options: string[], ...items: StyleSelectorBody[]) => styleAttribute(this, `[${name}~=${options.map(option => JSON.stringify(option)).join(' ')}]`, items);

	append(...items: StyleSelectorBody[]) {
		const add = (items: StyleSelectorBody[]) => {
			for (let item of items) {
				// at rules may be defined and used simultaneously
				if (item instanceof AtRule) {
					this.appendRule(item);
				}

				if (item instanceof StyleGroup) {
					this.appendChild(item);
				} else if (item instanceof StyleProperty) {
					this.appendProperty(item);
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

	appendChild(child: StyleGroup) {
		this.children.push(child);

		return this;
	}

	appendProperty(property: StyleProperty) {
		this.properties.push(property);

		return this;
	}

	appendRule(rule: AtRule) {
		this.atRules.push(rule);

		return this;
	}

	get allAtRules() {
		const rules = [...this.atRules.map(rule => ({
			rule,
			selector: this.selector
		}))];

		for (let child of this.children) {
			for (let rule of child.allAtRules) {
				if (!rules.includes(rule)) {
					rule.selector = `${this.selector}${rule.selector}`;
					rules.push(rule);
				}
			}
		}

		return rules;
	}

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

		const atRules = this.allAtRules.sort((a, b) => a.rule.sortingOrder - b.rule.sortingOrder);

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

	/**
	 * Apply the styles
	 *
	 * This creates a stylesheet and adds it to the documents head
	 * Will fail in non-browser contexts (like node)
	 *
	 * Awaiting will wait for the stylesheet to load
	 */
	apply(document?) {
		document = (globalThis as any).document;

		if (!document || !document.createElement || !document.head) {
			throw new Error('Cannot apply styles in non-DOM context.');
		}

		const styleSheet = document.createElement('style');
		styleSheet.textContent = this.toString('', true);

		document.head.appendChild(styleSheet);

		return new Promise<void>(done => styleSheet.onload = () => done());
	}
}
