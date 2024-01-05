export class Turn {
	constructor(
		private rotation: number
	) {}

	toString() {
		return `${this.rotation}turn`;
	}
}

export function turn(rotation: number) {
	return new Turn(rotation);
}