import { MediaQuery } from "./query";
import { MediaQueryable } from "./queryable";

export type MediaTypeName = 'all' | 'screen' | 'print';

export class MediaType implements MediaQueryable {
	constructor (
		private name: MediaTypeName,
	) {}

	and = (queryable: MediaQueryable) => new MediaQuery(this).and(queryable);

	toMediaQueryString() {
		return this.name;
	}
}
