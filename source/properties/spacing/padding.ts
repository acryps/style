import { StyleProperty } from "..";
import { Style } from "../../style";
import { Calculate } from "../../units/calculate";
import { AbsoluteGlobalLength, AbsoluteLength } from "../../units/length";

export type PaddingDimension = AbsoluteLength;

export class Padding extends StyleProperty {
	constructor(
		private top: PaddingDimension,
		private right: PaddingDimension,
		private bottom: PaddingDimension,
		private left: PaddingDimension
	) {
		super();
	}

	toString() {
		const styles = [];
		
		if (this.top) {
			styles.push(`padding-top:${this.top.toString()};`);
		}

		if (this.right) {
			styles.push(`padding-right:${this.right.toString()};`);
		}

		if (this.bottom) {
			styles.push(`padding-bottom:${this.bottom.toString()};`);
		}

		if (this.left) {
			styles.push(`padding-left:${this.left.toString()};`);
		}

		return styles.join('');
	}
}

export function padding(sideOffset: PaddingDimension | number);
export function padding(topBottom: PaddingDimension | number, leftRight: PaddingDimension | number);
export function padding(top: PaddingDimension | number, leftRight: PaddingDimension | number, bottom: PaddingDimension | number);
export function padding(top: PaddingDimension | number, right: PaddingDimension | number, bottom: PaddingDimension | number, left: PaddingDimension | number);

export function padding(...sides: PaddingDimension[]) {
	sides = sides.map(side => Style.toUnit(side));

	switch (sides.length) {
		case 1: return new Padding(sides[0], sides[0], sides[0], sides[0]);
		case 2: return new Padding(sides[0], sides[1], sides[0], sides[1]);
		case 3: return new Padding(sides[0], sides[1], sides[2], sides[1]);
		case 4: return new Padding(sides[0], sides[1], sides[2], sides[3]);
	}

	throw new Error('Invalid padding dimensions');
}