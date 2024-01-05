import { StyleProperty } from "..";

export class ZIndexProperty extends StyleProperty {
	constructor(
		private index: number
	) {
		super();

		if (Math.floor(index) != index) {
			throw new Error('Z-Index must be an integer');
		}
	}

	toString() {
		return `z-index:${this.index}`;
	}
}

export function zIndex(index: number) {
	return new ZIndexProperty(index);
}