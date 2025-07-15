import { StyleProperty } from "../property";
import { MediaQuery } from "./query";
import { MediaQueryable } from "./queryable";

export class MediaQueryableStyleProperty extends StyleProperty implements MediaQueryable {
	and = (queryable: MediaQueryable) => new MediaQuery(this).and(queryable);
	toMediaQueryString = () => `(${this.toPropertyString(false)})`;

	toValueString() {
		return `${this.children?.map(child => child.toValueString()).join(' ')}`;
	}
}
