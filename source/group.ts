import { AtRule } from "./at-rule";
import { ContentStyleProperty } from "./declarations";
import { StyleProperty } from "./property";
import { StyleSelectorBody, style } from "./query";

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
	private children: StyleGroup[] = [];
	private properties: StyleProperty[] = [];
	private atRules: AtRule[] = [];

	constructor(
		public selector: string
	) {}

	// pseudo elements
	before = createPseudo(this, '::before');
	after = createPseudo(this, '::after');

	// states
	hover = createState(this, ':hover');
	active = createState(this, ':active');
	checked = createState(this, ':checked');

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
	}

	get allAtRules() {
		const rules = new Set(this.atRules);

		for (let child of this.children) {
			for (let rule of child.allAtRules) {
				rules.add(rule);
			}
		}

		return Array.from(rules);
	}

	toString(parentSelector: string = '', includeAtRules = false) {
		const selector = `${parentSelector}${this.selector}`;

		const useProperties = (source: StyleProperty[]) => {
			const flattenedProperties: string[] = [];

			for (let property of source) {
				const used = property.use(selector);

				if (used) {
					for (let child of Array.isArray(used) ? used : [used]) {
						if (child.children) {
							flattenedProperties.push(...useProperties(child.children));
						} else {
							flattenedProperties.push(child.toPropertyString());
						}
					}
				}
			}

			return flattenedProperties;
		};

		return `${selector}{${
			useProperties(this.properties).join(';')
		}}${
			this.children.map(child => child.toString(selector)).join('')
		}${
			includeAtRules ? this.allAtRules.map(rule => rule.toRuleString()).join('') : ''
		}`;
	}

	/**
	 * Apply the styles
	 * 
	 * This creates a stylesheet and adds it to the documents head
	 * Will fail in non-browser contexts (like node)
	 */
	apply(document?) {
		document = (globalThis as any).document;

		if (!document || !document.createElement || !document.head) {
			throw new Error('Cannot apply styles in non-DOM context.');
		}
		
		const styleSheet = document.createElement('style');
		styleSheet.textContent = this.toString('', true);

		document.head.appendChild(styleSheet);
	}
}
