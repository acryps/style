import { StyleMethod } from "../method";
import { MediaQuery } from "./query";
import { MediaQueryable } from "./queryable";

export class MediaFeature implements MediaQueryable {
	constructor (
		private type: string,
		private value?: string | number | StyleMethod
	) {}

	and = (queryable: MediaQueryable) => new MediaQuery(this).and(queryable);

	toMediaQueryString() {
		if (!this.value) {
			return this.type;
		}

		return `(${this.type}: ${typeof this.value == 'object' ? this.value.toValueString() : this.value})`;
	}
}
