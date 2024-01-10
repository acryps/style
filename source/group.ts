import { StyleProperty } from "./property";

export class StyleGroup {
	private children: StyleGroup[] = [];
	private properties: StyleProperty[] = [];

	constructor(
		public selector: string
	) {}

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
			this.properties.join('')
		}}${
			this.children.map(child => child.toString(selector)).join('')
		}`
	}
}
