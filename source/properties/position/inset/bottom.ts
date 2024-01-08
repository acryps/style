import { InsetDimension } from ".";
import { StyleProperty } from "../..";

export class BottomProperty extends StyleProperty {
	constructor(
		private offset: InsetDimension
	) {
		super('bottom');
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export function bottom(offset: InsetDimension) {
	return new BottomProperty(offset);
}