import { StyleProperty } from "../..";
import { Style } from "../../../style";
import { Calculate } from "../../../units/calculate";
import { AbsoluteGlobalLength, AbsoluteLength } from "../../../units/length";

export type MarginDimension = AbsoluteLength;

export class MarginProperty extends StyleProperty {
	constructor(
		private top: MarginDimension,
		private right: MarginDimension,
		private bottom: MarginDimension,
		private left: MarginDimension
	) {
		super('margin');
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

export function margin(all: MarginDimension | number);
export function margin(block: MarginDimension | number, inline: MarginDimension | number);
export function margin(top: MarginDimension | number, inline: MarginDimension | number, bottom: MarginDimension | number);
export function margin(top: MarginDimension | number, right: MarginDimension | number, bottom: MarginDimension | number, left: MarginDimension | number);

export function margin(...sides: MarginDimension[]) {
	sides = sides.map(side => Style.resolveUnit(side));

	switch (sides.length) {
		case 1: return new MarginProperty(sides[0], sides[0], sides[0], sides[0]);
		case 2: return new MarginProperty(sides[0], sides[1], sides[0], sides[1]);
		case 3: return new MarginProperty(sides[0], sides[1], sides[2], sides[1]);
		case 4: return new MarginProperty(sides[0], sides[1], sides[2], sides[3]);
	}

	throw new Error('Invalid margin dimensions');
}

export const marginInline = (offset: MarginDimension | number) => new MarginProperty(Style.resolveUnit(offset), null, Style.resolveUnit(offset), null);
export const marginBlock = (offset: MarginDimension | number) => new MarginProperty(null, Style.resolveUnit(offset), null, Style.resolveUnit(offset));

export const marginTop = (offset: MarginDimension | number) => new MarginProperty(Style.resolveUnit(offset), null, null, null);
export const marginRight = (offset: MarginDimension | number) => new MarginProperty(null, Style.resolveUnit(offset), null, null);
export const marginBottom = (offset: MarginDimension | number) => new MarginProperty(null, null, Style.resolveUnit(offset), null);
export const marginLeft = (offset: MarginDimension | number) => new MarginProperty(null, null, null, Style.resolveUnit(offset));