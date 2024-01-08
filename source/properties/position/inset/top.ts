import { InsetDimension } from ".";
import { StyleProperty } from "../..";

export class TopProperty extends StyleProperty {
	constructor(
		private offset: InsetDimension
	) {
		super('top');
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export function top(offset: InsetDimension) {
	return new TopProperty(offset);
}