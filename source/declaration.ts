import { StyleProperty } from "./properties";

export class StyleDeclaration {
	private children: StyleDeclaration[] = [];
	private properties: StyleProperty[] = [];

	constructor(
		public selector: string
	) {

	}

	appendChild(child: StyleDeclaration) {
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
			this.properties.join('')
		}}${
			this.children.map(child => child.toString(selector)).join('')
		}`
	}
}