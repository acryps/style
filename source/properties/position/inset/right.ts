import { InsetDimension } from ".";
import { StyleProperty } from "../..";

export class RightProperty extends StyleProperty {
	constructor(
		private offset: InsetDimension
	) {
		super('right');
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export function right(offset: InsetDimension) {
	return new RightProperty(offset);
}