import { StyleProperty } from "..";

export type PositionMode = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export class PositionProperty extends StyleProperty {
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
	return new PositionProperty(mode);
}