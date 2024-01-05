export class Radians {
	constructor(
		private rotation: number
	) {}

	toString() {
		return `${this.rotation}rad`;
	}
}

export function rad(rotation: number) {
	return new Radians(rotation);
}