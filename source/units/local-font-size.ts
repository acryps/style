export class LocalFontSize {
	constructor(
		private size: number
	) {}

	toString() {
		return `${this.size}em`;
	}
}

export function em(size: number) {
	return new LocalFontSize(size);
}