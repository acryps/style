export class RootFontSize {
	constructor(
		private size: number
	) {}

	toString() {
		return `${this.size}rem`;
	}
}

export function rem(size: number) {
	return new RootFontSize(size);
}