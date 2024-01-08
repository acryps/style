import { StyleProperty } from "..";
import { Calculate } from "../../units/calculate";
import { AbsoluteLength } from "../../units/length";
import { Percentage } from "../../units/percentage";

export type HeightDimension = AbsoluteLength | Percentage | 'auto' | 'maxContent' | 'minContent' | 'fitContent';

export class HeightProperty extends StyleProperty {
	constructor(
		private size: HeightDimension
	) {
		super('height');
	}

	toValueString() {
		switch (this.size) {
			case 'auto': return 'auto';
			case 'maxContent': return 'max-content';
			case 'minContent': return 'min-content';
			case 'fitContent': return 'fit-content';

			default: return `${this.size};`;
		}
	}
}

export function height(size: HeightDimension) {
	return new HeightProperty(size);
}