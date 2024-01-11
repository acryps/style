import { ContentStyleProperty } from "./declarations";
import { StyleProperty } from "./property";
import { StyleSelectorBody, style } from "./query";

const createPseudo = (group: StyleGroup, selector: string) => (content: string[] | string, ...items: StyleSelectorBody[]) => {
	content = Array.isArray(content) ? content : [content];

	group.appendChild(style(selector, new ContentStyleProperty(...content), items));
};

const createState = (group: StyleGroup, selector: string) => (...items: StyleSelectorBody[]) => {
	group.appendChild(style(selector, items));
};

export class StyleGroup {
	private children: StyleGroup[] = [];
	private properties: StyleProperty[] = [];

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

	appendChild(child: StyleGroup) {
		this.children.push(child);

		return this;
	}

	appendProperty(property: StyleProperty) {
		this.properties.push(property);

		return this;
	}

	toString(parentSelector: string = '') {
		const selector = `${parentSelector}${this.selector}`;

		const useProperties = (source: StyleProperty[]) => {
			const flattenedProperties: StyleProperty[] = [];

			for (let property of source) {
				const used = property.use(selector);

				if (used) {
					for (let child of Array.isArray(used) ? used : [used]) {
						if (child.children) {
							flattenedProperties.push(...useProperties(child.children));
						} else {
							flattenedProperties.push(child);
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
		}`
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
		styleSheet.textContent = this.toString();

		document.head.appendChild(styleSheet);
	}
}
