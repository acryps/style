import { BorderStyle } from "..";
import { StyleProperty } from "../../..";
import { Color } from "../../../../units/color";
import { AbsoluteLength } from "../../../../units/length";
import { BottomBorderProperty, bottomBorder } from "../sides/bottom";
import { TopBorderProperty, topBorder } from "../sides/top";

export class BlockBorderProperty extends StyleProperty {
	static merge = [TopBorderProperty, BottomBorderProperty];

	constructor(
		public top: TopBorderProperty,
		public bottom: BottomBorderProperty
	) {
		super('border-block');
	}

	toValueString() {
		return `${this.top.size.width} ${this.top.style.style} ${this.top.color.color}`;
	}
}

export function blockBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new BlockBorderProperty(
		topBorder(width, style, color),
		bottomBorder(width, style, color)
	);
}