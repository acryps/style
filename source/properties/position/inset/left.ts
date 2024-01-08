import { InsetDimension } from ".";
import { StyleProperty } from "../..";

export class LeftProperty extends StyleProperty {
	constructor(
		private offset: InsetDimension
	) {
		super();
	}

	toString() {
		return `left:${this.offset};`;
	}
}

export function left(offset: InsetDimension) {
	return new LeftProperty(offset);
}