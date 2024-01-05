import { StyleProperty } from "..";
import { Style } from "../../style";
import { AbsoluteLength } from "../../units/length";
import { Percentage } from "../../units/percentage";

export type InsetDimension = AbsoluteLength | Percentage | 'auto';

class InsetDimensionProperty extends StyleProperty {
	constructor(
		private dimension: string,
		private offset: InsetDimension
	) {
		super();
	}

	toString() {
		return `${this.dimension}:${this.offset};`;
	}
}

export class Top extends InsetDimensionProperty {
	constructor(offset: InsetDimension) { super('top', offset); }
}

export function top(offset: InsetDimension) {
	return new Top(offset);
}

export class Right extends InsetDimensionProperty {
	constructor(offset: InsetDimension) { super('right', offset); }
}

export function right(offset: InsetDimension) {
	return new Right(offset);
}

export class Bottom extends InsetDimensionProperty {
	constructor(offset: InsetDimension) { super('bottom', offset); }
}

export function bottom(offset: InsetDimension) {
	return new Bottom(offset);
}

export class Left extends InsetDimensionProperty {
	constructor(offset: InsetDimension) { super('left', offset); }
}

export function left(offset: InsetDimension) {
	return new Left(offset);
}

export function inset(all: InsetDimension | number);
export function inset(block: InsetDimension | number, inline: InsetDimension | number);
export function inset(top: InsetDimension | number, inline: InsetDimension | number, bottom: InsetDimension | number);
export function inset(top: InsetDimension | number, right: InsetDimension | number, bottom: InsetDimension | number, left: InsetDimension | number);

export function inset(...sides: InsetDimension[]) {
	sides = sides.map(side => Style.toUnit(side));

	switch (sides.length) {
		case 1: return [new Top(sides[0]), new Right(sides[0]), new Bottom(sides[0]), new Left(sides[0])];
		case 2: return [new Top(sides[0]), new Right(sides[1]), new Bottom(sides[0]), new Left(sides[1])];
		case 3: return [new Top(sides[0]), new Right(sides[1]), new Bottom(sides[2]), new Left(sides[1])];
		case 4: return [new Top(sides[0]), new Right(sides[1]), new Bottom(sides[2]), new Left(sides[3])];
	}

	throw new Error('Invalid inset dimensions');
}

export const insetInline = (offset: InsetDimension | number) => [new Left(Style.toUnit(offset)), new Right(Style.toUnit(offset))];
export const insetBlock = (offset: InsetDimension | number) => [new Top(Style.toUnit(offset)), new Bottom(Style.toUnit(offset))];