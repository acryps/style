import { StyleProperty } from "..";
import { Calculate } from "../../units/calculate";
import { AbsoluteLength } from "../../units/length";
import { Percentage } from "../../units/percentage";

export type WidthDimension = AbsoluteLength | Percentage | 'auto' | 'maxContent' | 'minContent' | 'fitContent';

export class WidthProperty extends StyleProperty {
	constructor(
		private size: WidthDimension
	) {
		super('width');
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

export function width(size: WidthDimension) {
	return new WidthProperty(size);
}