import { StyleProperty } from "..";

export class ZIndexProperty extends StyleProperty {
	constructor(
		private index: number
	) {
		super('z-index');

		if (Math.floor(index) != index) {
			throw new Error('Z-Index must be an integer');
		}
	}

	toValueString() {
		return `${this.index}`;
	}
}

export function zIndex(index: number) {
	return new ZIndexProperty(index);
}