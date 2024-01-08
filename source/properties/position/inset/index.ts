import { Style } from "../../../style";
import { AbsoluteLength } from "../../../units/length";
import { Percentage } from "../../../units/percentage";
import { BottomProperty } from "./bottom";
import { LeftProperty } from "./left";
import { RightProperty } from "./right";
import { TopProperty } from "./top";

export type InsetDimension = AbsoluteLength | Percentage | 'auto';
export type InsetDimensionProperty = TopProperty | RightProperty | BottomProperty | LeftProperty;  

export function inset(all: InsetDimension | number);
export function inset(block: InsetDimension | number, inline: InsetDimension | number);
export function inset(top: InsetDimension | number, inline: InsetDimension | number, bottom: InsetDimension | number);
export function inset(top: InsetDimension | number, right: InsetDimension | number, bottom: InsetDimension | number, left: InsetDimension | number);

export function inset(...sides: InsetDimension[]) {
	sides = sides.map(side => Style.toUnit(side));

	switch (sides.length) {
		case 1: return [new TopProperty(sides[0]), new RightProperty(sides[0]), new BottomProperty(sides[0]), new LeftProperty(sides[0])];
		case 2: return [new TopProperty(sides[0]), new RightProperty(sides[1]), new BottomProperty(sides[0]), new LeftProperty(sides[1])];
		case 3: return [new TopProperty(sides[0]), new RightProperty(sides[1]), new BottomProperty(sides[2]), new LeftProperty(sides[1])];
		case 4: return [new TopProperty(sides[0]), new RightProperty(sides[1]), new BottomProperty(sides[2]), new LeftProperty(sides[3])];
	}

	throw new Error('Invalid inset dimensions');
}

export const insetInline = (offset: InsetDimension | number) => [new LeftProperty(Style.toUnit(offset)), new RightProperty(Style.toUnit(offset))];
export const insetBlock = (offset: InsetDimension | number) => [new TopProperty(Style.toUnit(offset)), new BottomProperty(Style.toUnit(offset))];