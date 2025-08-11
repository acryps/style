import { MediaQueryable } from "./queryable";

export class NotMediaQuery implements MediaQueryable {
	constructor(
		private inner: MediaQueryable
	) {}

	and(queryable: MediaQueryable) {
		this.inner = this.inner.and(queryable);

		return this;
	}

	toMediaQueryString(): string {
		return `not ${this.inner.toMediaQueryString()}`;
	}
}
