import { BorderWidth, BorderStyle } from ".";
import { StyleProperty } from "../..";
import { Style } from "../../../style";
import { Color } from "../../../units/color";
import { AbsoluteLength } from "../../../units/length";

export class TopBorderWidthProperty extends StyleProperty {
	constructor(
		public width: BorderWidth
	) {
		super();
	}

	toString() {
		return `border-top-width:${this.width}`;
	}
}

export function topBorderWidth(width: number | BorderWidth) {
	return new TopBorderWidthProperty(Style.resolveUnit(width));
}

export class TopBorderStyleProperty extends StyleProperty {
	constructor(
		public style: BorderStyle
	) {
		super();
	}

	toString() {
		return `border-top-style:${this.style}`;
	}
}

export function topBorderStyle(style: BorderStyle) {
	return new TopBorderStyleProperty(style);
}

export class TopBorderColorProperty extends StyleProperty {
	constructor(
		public color: Color
	) {
		super();
	}

	toString() {
		return `border-top-color:${this.color}`;
	}
}

export function topBorderColor(color: Color) {
	return new TopBorderColorProperty(color);
}

export class TopBorderProperty extends StyleProperty {
	static alias = [TopBorderWidthProperty, TopBorderStyleProperty, TopBorderColorProperty];

	constructor(
		public size: TopBorderWidthProperty,
		public style: TopBorderStyleProperty,
		public color: TopBorderColorProperty
	) {
		super();
	}

	toStyle() {
		return `border-top:${this.size.width} ${this.style.style} ${this.color.color}`;
	}
}

export function topBorder(width: number | AbsoluteLength, style: BorderStyle, color: Color) {
	return new TopBorderProperty(
		topBorderWidth(width),
		topBorderStyle(style),
		topBorderColor(color)
	);
}