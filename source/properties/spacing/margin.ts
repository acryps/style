import { StyleProperty } from "..";
import { Style } from "../../style";
import { Calculate } from "../../units/calculate";
import { AbsoluteGlobalLength, AbsoluteLength } from "../../units/length";

export type MarginDimension = AbsoluteLength;

export class Margin extends StyleProperty {
	constructor(
		private top: MarginDimension,
		private right: MarginDimension,
		private bottom: MarginDimension,
		private left: MarginDimension
	) {
		super();
	}

	toString() {
		const styles = [];
		
		if (this.top) {
			styles.push(`margin-top:${this.top.toString()};`);
		}

		if (this.right) {
			styles.push(`margin-right:${this.right.toString()};`);
		}

		if (this.bottom) {
			styles.push(`margin-bottom:${this.bottom.toString()};`);
		}

		if (this.left) {
			styles.push(`margin-left:${this.left.toString()};`);
		}

		return styles.join('');
	}
}

export function margin(sideOffset: MarginDimension | number);
export function margin(topBottom: MarginDimension | number, leftRight: MarginDimension | number);
export function margin(top: MarginDimension | number, leftRight: MarginDimension | number, bottom: MarginDimension | number);
export function margin(top: MarginDimension | number, right: MarginDimension | number, bottom: MarginDimension | number, left: MarginDimension | number);

export function margin(...sides: MarginDimension[]) {
	sides = sides.map(side => Style.toUnit(side));

	switch (sides.length) {
		case 1: return new Margin(sides[0], sides[0], sides[0], sides[0]);
		case 2: return new Margin(sides[0], sides[1], sides[0], sides[1]);
		case 3: return new Margin(sides[0], sides[1], sides[2], sides[1]);
		case 4: return new Margin(sides[0], sides[1], sides[2], sides[3]);
	}

	throw new Error('Invalid margin dimensions');
}