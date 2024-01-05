import { StyleProperty } from "..";
import { AlphaValue } from "../../units/color";

export class OpacityProperty extends StyleProperty {
	constructor(
		private alpha: AlphaValue
	) {
		super();
	}

	toString() {
		return `opacity:${this.alpha}`;
	}
}

export function opacity(index: AlphaValue) {
	return new OpacityProperty(index);
}