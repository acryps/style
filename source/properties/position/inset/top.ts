import { InsetDimension } from ".";
import { StyleProperty } from "../..";

export class TopProperty extends StyleProperty {
	constructor(
		private offset: InsetDimension
	) {
		super();
	}

	toString() {
		return `top:${this.offset};`;
	}
}

export function top(offset: InsetDimension) {
	return new TopProperty(offset);
}