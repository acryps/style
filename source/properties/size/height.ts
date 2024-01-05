import { StyleProperty } from "..";
import { Calculate } from "../../units/calculate";
import { AbsoluteLength } from "../../units/length";
import { Percentage } from "../../units/percentage";

export type HeightDimension = AbsoluteLength | Percentage | 'auto' | 'maxContent' | 'minContent' | 'fitContent';

export class HeightProperty extends StyleProperty {
	constructor(
		private size: HeightDimension
	) {
		super();
	}

	toString() {
		switch (this.size) {
			case 'auto': return 'height:auto;';
			case 'maxContent': return 'height:max-content;';
			case 'minContent': return 'height:min-content;';
			case 'fitContent': return 'height:fit-content;';

			default: return `height:${this.size};`;
		}
	}
}

export function height(size: HeightDimension) {
	return new HeightProperty(size);
}