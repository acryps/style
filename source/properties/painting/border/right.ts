import { BorderWidth, BorderStyle } from ".";
import { StyleProperty } from "../..";
import { Style } from "../../../style";
import { Color } from "../../../units/color";
import { AbsoluteLength } from "../../../units/length";

export class RightBorderWidthProperty extends StyleProperty {
	constructor(
		public width: BorderWidth
	) {
		super();
	}

	toString() {
		return `border-right-width:${this.width}`;
	}
}

export function rightBorderWidth(width: number | BorderWidth) {
	return new RightBorderWidthProperty(Style.resolveUnit(width));
}

export class RightBorderStyleProperty extends StyleProperty {
	constructor(
		public style: BorderStyle
	) {
		super();
	}

	toString() {
		return `border-right-style:${this.style}`;
	}
}

export function rightBorderStyle(style: BorderStyle) {
	return new RightBorderStyleProperty(style);
}

export class RightBorderColorProperty extends StyleProperty {
	constructor(
		public color: Color
	) {
		super();
	}

	toString() {
		return `border-right-color:${this.color}`;
	}
}

export function rightBorderColor(color: Color) {
	return new RightBorderColorProperty(color);
}

export class RightBorderProperty extends StyleProperty {
	static alias = [RightBorderWidthProperty, RightBorderStyleProperty, RightBorderColorProperty];

	constructor(
		public size: RightBorderWidthProperty,
		public style: RightBorderStyleProperty,
		public color: RightBorderColorProperty
	) {
		super();
	}

	toStyle() {
		return `border-right:${this.size.width} ${this.style.style} ${this.color.color}`;
	}
}

export function rightBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new RightBorderProperty(
		rightBorderWidth(width),
		rightBorderStyle(style),
		rightBorderColor(color)
	);
}