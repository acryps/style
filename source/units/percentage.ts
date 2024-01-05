export class Percentage {
	constructor(
		private size: number
	) {}

	toString() {
		return `${this.size}%`;
	}
}

export function percentage(size: number) {
	return new Percentage(size);
}