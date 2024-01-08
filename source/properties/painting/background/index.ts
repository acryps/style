import { StyleProperty } from "../..";
import { Color } from "../../../units/color";

export class BackgroundProperty extends StyleProperty {
	constructor(
		private color: Color
	) {
		super('background');
	}

	toValueString() {
		return `${this.color};`;
	}
}

export function background(color: Color) {
	return new BackgroundProperty(color);
}