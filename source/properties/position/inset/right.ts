import { InsetDimension } from ".";
import { StyleProperty } from "../..";

export class RightProperty extends StyleProperty {
	constructor(
		private offset: InsetDimension
	) {
		super();
	}

	toString() {
		return `right:${this.offset};`;
	}
}

export function right(offset: InsetDimension) {
	return new RightProperty(offset);
}