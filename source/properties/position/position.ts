import { StyleProperty } from "..";

export type PositionMode = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export class Position extends StyleProperty {
	constructor(
		private mode: PositionMode
	) {
		super();
	}

	toString() {
		return `position:${this.mode}`;
	}
}

export function position(mode: PositionMode) {
	return new Position(mode);
}