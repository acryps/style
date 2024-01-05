import { StyleProperty } from "..";
import { Calculate } from "../../units/calculate";
import { AbsoluteLength } from "../../units/length";
import { Percentage } from "../../units/percentage";

export type WidthDimension = AbsoluteLength | Percentage | 'auto' | 'maxContent' | 'minContent' | 'fitContent';

export class WidthProperty extends StyleProperty {
	constructor(
		private size: WidthDimension
	) {
		super();
	}

	toString() {
		switch (this.size) {
			case 'auto': return 'width:auto;';
			case 'maxContent': return 'width:max-content;';
			case 'minContent': return 'width:min-content;';
			case 'fitContent': return 'width:fit-content;';

			default: return `width:${this.size};`;
		}
	}
}

export function width(size: WidthDimension) {
	return new WidthProperty(size);
}