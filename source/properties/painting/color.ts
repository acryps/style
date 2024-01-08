import { StyleProperty } from "..";
import { Color } from "../../units/color";

export class ColorProperty extends StyleProperty {
	constructor(
		private color: Color
	) {
		super('color');
	}

	toValueString() {
		return `${this.color}`;
	}
}

export function color(color: Color) {
	return new ColorProperty(color);
}