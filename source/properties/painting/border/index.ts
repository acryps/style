import { StyleProperty } from "../..";
import { Color } from "../../../units/color";
import { AbsoluteLength } from "../../../units/length";
import { BottomBorderProperty, bottomBorder } from "./sides/bottom";
import { LeftBorderProperty, leftBorder } from "./sides/left";
import { RightBorderProperty, rightBorder } from "./sides/right";
import { TopBorderProperty, topBorder } from "./sides/top";

export type BorderWidth = AbsoluteLength | 'thin' | 'medium' | 'thick';
export type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'; 

class InlineBorderProperty extends StyleProperty {
	static merge = [LeftBorderProperty, RightBorderProperty];

	constructor(
		public left: LeftBorderProperty,
		public right: RightBorderProperty
	) {
		super('border-inline');
	}

	toValueString() {
		return `${this.left.size.width} ${this.left.style.style} ${this.left.color.color}`;
	}
}

function inlineBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new InlineBorderProperty(
		leftBorder(width, style, color),
		rightBorder(width, style, color)
	);
}

class BlockBorderProperty extends StyleProperty {
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

function blockBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new BlockBorderProperty(
		topBorder(width, style, color),
		bottomBorder(width, style, color)
	);
}

class BorderProperty extends StyleProperty {
	static merge = [InlineBorderProperty, BlockBorderProperty];

	constructor(
		public inline: InlineBorderProperty,
		public block: BlockBorderProperty
	) {
		super('border');
	}

	toValueString() {
		return `${this.inline.left.size.width} ${this.inline.left.style.style} ${this.inline.left.color.color}`;
	}
}

function border(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new BorderProperty(
		inlineBorder(width, style, color),
		blockBorder(width, style, color)
	);
}