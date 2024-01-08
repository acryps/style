import { StyleProperty } from "..";
import { Style } from "../../style";
import { Calculate } from "../../units/calculate";
import { AbsoluteGlobalLength, AbsoluteLength } from "../../units/length";

export type PaddingDimension = AbsoluteLength;

export class PaddingProperty extends StyleProperty {
	constructor(
		private top: PaddingDimension,
		private right: PaddingDimension,
		private bottom: PaddingDimension,
		private left: PaddingDimension
	) {
		super('padding');
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

export function padding(all: PaddingDimension | number);
export function padding(block: PaddingDimension | number, inline: PaddingDimension | number);
export function padding(top: PaddingDimension | number, inline: PaddingDimension | number, bottom: PaddingDimension | number);
export function padding(top: PaddingDimension | number, right: PaddingDimension | number, bottom: PaddingDimension | number, left: PaddingDimension | number);

export function padding(...sides: PaddingDimension[]) {
	sides = sides.map(side => Style.resolveUnit(side));

	switch (sides.length) {
		case 1: return new PaddingProperty(sides[0], sides[0], sides[0], sides[0]);
		case 2: return new PaddingProperty(sides[0], sides[1], sides[0], sides[1]);
		case 3: return new PaddingProperty(sides[0], sides[1], sides[2], sides[1]);
		case 4: return new PaddingProperty(sides[0], sides[1], sides[2], sides[3]);
	}

	throw new Error('Invalid padding dimensions');
}

export const paddingInline = (offset: PaddingDimension | number) => new PaddingProperty(Style.resolveUnit(offset), null, Style.resolveUnit(offset), null);
export const paddingBlock = (offset: PaddingDimension | number) => new PaddingProperty(null, Style.resolveUnit(offset), null, Style.resolveUnit(offset));

export const paddingTop = (offset: PaddingDimension | number) => new PaddingProperty(Style.resolveUnit(offset), null, null, null);
export const paddingRight = (offset: PaddingDimension | number) => new PaddingProperty(null, Style.resolveUnit(offset), null, null);
export const paddingBottom = (offset: PaddingDimension | number) => new PaddingProperty(null, null, Style.resolveUnit(offset), null);
export const paddingLeft = (offset: PaddingDimension | number) => new PaddingProperty(null, null, null, Style.resolveUnit(offset));