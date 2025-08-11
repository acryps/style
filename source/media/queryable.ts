export interface MediaQueryable {
	and(queryable: MediaQueryable): MediaQueryable;
	toMediaQueryString(): string;
}