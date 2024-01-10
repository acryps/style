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

		return `${selector}{${
			this.properties.flatMap(property => property.use(selector)).filter(property => property).join(';')
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
