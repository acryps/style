export class Degrees {
	constructor(
		private rotation: number
	) {}

	toString() {
		return `${this.rotation}deg`;
	}
}

export function deg(rotation: number) {
	return new Degrees(rotation);
}