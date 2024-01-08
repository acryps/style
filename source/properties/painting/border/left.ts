import { BorderWidth, BorderStyle } from ".";
import { StyleProperty } from "../..";
import { Style } from "../../../style";
import { Color } from "../../../units/color";
import { AbsoluteLength } from "../../../units/length";

export class LeftBorderWidthProperty extends StyleProperty {
	constructor(
		public width: BorderWidth
	) {
		super();
	}

	toString() {
		return `border-left-width:${this.width}`;
	}
}

export function leftBorderWidth(width: number | BorderWidth) {
	return new LeftBorderWidthProperty(Style.resolveUnit(width));
}

export class LeftBorderStyleProperty extends StyleProperty {
	constructor(
		public style: BorderStyle
	) {
		super();
	}

	toString() {
		return `border-left-style:${this.style}`;
	}
}

export function leftBorderStyle(style: BorderStyle) {
	return new LeftBorderStyleProperty(style);
}

export class LeftBorderColorProperty extends StyleProperty {
	constructor(
		public color: Color
	) {
		super();
	}

	toString() {
		return `border-left-color:${this.color}`;
	}
}

export function leftBorderColor(color: Color) {
	return new LeftBorderColorProperty(color);
}

export class LeftBorderProperty extends StyleProperty {
	static alias = [LeftBorderWidthProperty, LeftBorderStyleProperty, LeftBorderColorProperty];

	constructor(
		public size: LeftBorderWidthProperty,
		public style: LeftBorderStyleProperty,
		public color: LeftBorderColorProperty
	) {
		super();
	}

	toStyle() {
		return `border-left:${this.size.width} ${this.style.style} ${this.color.color}`;
	}
}

export function leftBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new LeftBorderProperty(
		leftBorderWidth(width),
		leftBorderStyle(style),
		leftBorderColor(color)
	);
}