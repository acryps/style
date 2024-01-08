import { BorderWidth, BorderStyle } from ".";
import { StyleProperty } from "../..";
import { Style } from "../../../style";
import { Color } from "../../../units/color";
import { AbsoluteLength } from "../../../units/length";

export class BottomBorderWidthProperty extends StyleProperty {
	constructor(
		public width: BorderWidth
	) {
		super();
	}

	toString() {
		return `border-bottom-width:${this.width}`;
	}
}

export function bottomBorderWidth(width: number | BorderWidth) {
	return new BottomBorderWidthProperty(Style.resolveUnit(width));
}

export class BottomBorderStyleProperty extends StyleProperty {
	constructor(
		public style: BorderStyle
	) {
		super();
	}

	toString() {
		return `border-bottom-style:${this.style}`;
	}
}

export function bottomBorderStyle(style: BorderStyle) {
	return new BottomBorderStyleProperty(style);
}

export class BottomBorderColorProperty extends StyleProperty {
	constructor(
		public color: Color
	) {
		super();
	}

	toString() {
		return `border-bottom-color:${this.color}`;
	}
}

export function bottomBorderColor(color: Color) {
	return new BottomBorderColorProperty(color);
}

export class BottomBorderProperty extends StyleProperty {
	static alias = [BottomBorderWidthProperty, BottomBorderStyleProperty, BottomBorderColorProperty];

	constructor(
		public size: BottomBorderWidthProperty,
		public style: BottomBorderStyleProperty,
		public color: BottomBorderColorProperty
	) {
		super();
	}

	toStyle() {
		return `border-bottom:${this.size.width} ${this.style.style} ${this.color.color}`;
	}
}

export function bottomBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new BottomBorderProperty(
		bottomBorderWidth(width),
		bottomBorderStyle(style),
		bottomBorderColor(color)
	);
}