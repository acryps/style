import { MediaQueryable } from "./queryable";

export class MediaQuery {
	private parts: MediaQueryable[];

	constructor (
		...parts: MediaQueryable[]
	) {
		this.parts = parts;
	}

	and(queryable: MediaQueryable) {
		this.parts.push(queryable);

		return this;
	}

	toMediaQueryString() {
		return this.parts.map(part => part.toMediaQueryString()).join(' and ');
	}
}
