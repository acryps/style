import { StyleProperty } from "..";

export type DisplayMode = ['block'] | ['inline'] | ['inline', 'block'] | ['flex'] | ['inline', 'flex'] | ['grid'] | ['inline', 'grid'] | ['flow-root'] | ['none'] | ['contents'];

export class DisplayProperty extends StyleProperty {
	private mode: DisplayMode;

	constructor(
		...mode: DisplayMode
	) {
		super('display');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode.join('-')}`;
	}
}

export function display(...mode: DisplayMode) {
	return new DisplayProperty(...mode);
}