import { StyleProperty } from '../property';

import { LineWidth } from './primitives';
import { ColorValue } from './color';

// border style
export type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

// border inline
export class BorderInlineStyleProperty extends StyleProperty {
	constructor(
		private borderLeft: BorderLeftStyleProperty,
		private borderRight: BorderRightStyleProperty
	) {
		super('border-inline', [borderLeft, borderRight]);
	}
}

// border block
export class BorderBlockStyleProperty extends StyleProperty {
	constructor(
		private borderTop: BorderTopStyleProperty,
		private borderBottom: BorderBottomStyleProperty
	) {
		super('border-block', [borderTop, borderBottom]);
	}
}

// border
export class BorderStyleProperty extends StyleProperty {
	constructor(
		private borderInline: BorderInlineStyleProperty,
		private borderBlock: BorderBlockStyleProperty
	) {
		super('border', [borderInline, borderBlock]);
	}
}

// border left width
export class BorderLeftWidthStyleProperty extends StyleProperty {
	private width: LineWidth;

	constructor(
		width: LineWidth
	) {
		super('border-left-width');

		this.width = width;
	}

	toValueString() {
		return `${this.width}`;
	}
}

export const borderLeftWidth = (width: LineWidth) => new BorderLeftWidthStyleProperty(width);

// border left style
export class BorderLeftStyleStyleProperty extends StyleProperty {
	private style: BorderStyle;

	constructor(
		style: BorderStyle
	) {
		super('border-left-style');

		this.style = style;
	}

	toValueString() {
		return `${this.style}`;
	}
}

export const borderLeftStyle = (style: BorderStyle) => new BorderLeftStyleStyleProperty(style);

// border left color
export class BorderLeftColorStyleProperty extends StyleProperty {
	private color: ColorValue;

	constructor(
		color: ColorValue
	) {
		super('border-left-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderLeftColor = (color: ColorValue) => new BorderLeftColorStyleProperty(color);

// border left
export class BorderLeftStyleProperty extends StyleProperty {
	constructor(
		private borderLeftWidth: BorderLeftWidthStyleProperty,
		private borderLeftStyle: BorderLeftStyleStyleProperty,
		private borderLeftColor: BorderLeftColorStyleProperty
	) {
		super('border-left', [borderLeftWidth, borderLeftStyle, borderLeftColor]);
	}
}

// border right width
export class BorderRightWidthStyleProperty extends StyleProperty {
	private width: LineWidth;

	constructor(
		width: LineWidth
	) {
		super('border-right-width');

		this.width = width;
	}

	toValueString() {
		return `${this.width}`;
	}
}

export const borderRightWidth = (width: LineWidth) => new BorderRightWidthStyleProperty(width);

// border right style
export class BorderRightStyleStyleProperty extends StyleProperty {
	private style: BorderStyle;

	constructor(
		style: BorderStyle
	) {
		super('border-right-style');

		this.style = style;
	}

	toValueString() {
		return `${this.style}`;
	}
}

export const borderRightStyle = (style: BorderStyle) => new BorderRightStyleStyleProperty(style);

// border right color
export class BorderRightColorStyleProperty extends StyleProperty {
	private color: ColorValue;

	constructor(
		color: ColorValue
	) {
		super('border-right-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderRightColor = (color: ColorValue) => new BorderRightColorStyleProperty(color);

// border right
export class BorderRightStyleProperty extends StyleProperty {
	constructor(
		private borderRightWidth: BorderRightWidthStyleProperty,
		private borderRightStyle: BorderRightStyleStyleProperty,
		private borderRightColor: BorderRightColorStyleProperty
	) {
		super('border-right', [borderRightWidth, borderRightStyle, borderRightColor]);
	}
}

// border top width
export class BorderTopWidthStyleProperty extends StyleProperty {
	private width: LineWidth;

	constructor(
		width: LineWidth
	) {
		super('border-top-width');

		this.width = width;
	}

	toValueString() {
		return `${this.width}`;
	}
}

export const borderTopWidth = (width: LineWidth) => new BorderTopWidthStyleProperty(width);

// border top style
export class BorderTopStyleStyleProperty extends StyleProperty {
	private style: BorderStyle;

	constructor(
		style: BorderStyle
	) {
		super('border-top-style');

		this.style = style;
	}

	toValueString() {
		return `${this.style}`;
	}
}

export const borderTopStyle = (style: BorderStyle) => new BorderTopStyleStyleProperty(style);

// border top color
export class BorderTopColorStyleProperty extends StyleProperty {
	private color: ColorValue;

	constructor(
		color: ColorValue
	) {
		super('border-top-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderTopColor = (color: ColorValue) => new BorderTopColorStyleProperty(color);

// border top
export class BorderTopStyleProperty extends StyleProperty {
	constructor(
		private borderTopWidth: BorderTopWidthStyleProperty,
		private borderTopStyle: BorderTopStyleStyleProperty,
		private borderTopColor: BorderTopColorStyleProperty
	) {
		super('border-top', [borderTopWidth, borderTopStyle, borderTopColor]);
	}
}

// border bottom width
export class BorderBottomWidthStyleProperty extends StyleProperty {
	private width: LineWidth;

	constructor(
		width: LineWidth
	) {
		super('border-bottom-width');

		this.width = width;
	}

	toValueString() {
		return `${this.width}`;
	}
}

export const borderBottomWidth = (width: LineWidth) => new BorderBottomWidthStyleProperty(width);

// border bottom style
export class BorderBottomStyleStyleProperty extends StyleProperty {
	private style: BorderStyle;

	constructor(
		style: BorderStyle
	) {
		super('border-bottom-style');

		this.style = style;
	}

	toValueString() {
		return `${this.style}`;
	}
}

export const borderBottomStyle = (style: BorderStyle) => new BorderBottomStyleStyleProperty(style);

// border bottom color
export class BorderBottomColorStyleProperty extends StyleProperty {
	private color: ColorValue;

	constructor(
		color: ColorValue
	) {
		super('border-bottom-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderBottomColor = (color: ColorValue) => new BorderBottomColorStyleProperty(color);

// border bottom
export class BorderBottomStyleProperty extends StyleProperty {
	constructor(
		private borderBottomWidth: BorderBottomWidthStyleProperty,
		private borderBottomStyle: BorderBottomStyleStyleProperty,
		private borderBottomColor: BorderBottomColorStyleProperty
	) {
		super('border-bottom', [borderBottomWidth, borderBottomStyle, borderBottomColor]);
	}
}

export function borderInline(borderLeft: BorderLeftStyleProperty, borderRight: BorderRightStyleProperty)
export function borderInline(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: ColorValue)
export function borderInline(width: LineWidth, style: BorderStyle, color: ColorValue)
export function borderInline() {
	if (arguments[0] instanceof BorderLeftStyleProperty && arguments[1] instanceof BorderRightStyleProperty) { return new BorderInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 3) { return new BorderInlineStyleProperty(borderLeft(arguments[0], arguments[1], arguments[2]), borderRight(arguments[0], arguments[1], arguments[2])); }
	if (arguments.length == 3) { return new BorderInlineStyleProperty(borderLeft(arguments[0], arguments[1], arguments[2]), borderRight(arguments[0], arguments[1], arguments[2])); }
}

BorderInlineStyleProperty.shorthand = [BorderLeftStyleProperty, BorderRightStyleProperty];

export function borderBlock(borderTop: BorderTopStyleProperty, borderBottom: BorderBottomStyleProperty)
export function borderBlock(borderTopWidthWidth: LineWidth, borderTopStyleStyle: BorderStyle, borderTopColorColor: ColorValue)
export function borderBlock(width: LineWidth, style: BorderStyle, color: ColorValue)
export function borderBlock() {
	if (arguments[0] instanceof BorderTopStyleProperty && arguments[1] instanceof BorderBottomStyleProperty) { return new BorderBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 3) { return new BorderBlockStyleProperty(borderTop(arguments[0], arguments[1], arguments[2]), borderBottom(arguments[0], arguments[1], arguments[2])); }
	if (arguments.length == 3) { return new BorderBlockStyleProperty(borderTop(arguments[0], arguments[1], arguments[2]), borderBottom(arguments[0], arguments[1], arguments[2])); }
}

BorderBlockStyleProperty.shorthand = [BorderTopStyleProperty, BorderBottomStyleProperty];

export function border(borderInline: BorderInlineStyleProperty, borderBlock: BorderBlockStyleProperty)
export function border(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: ColorValue)
export function border(width: LineWidth, style: BorderStyle, color: ColorValue)
export function border() {
	if (arguments[0] instanceof BorderInlineStyleProperty && arguments[1] instanceof BorderBlockStyleProperty) { return new BorderStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 3) { return new BorderStyleProperty(borderInline(arguments[0], arguments[1], arguments[2]), borderBlock(arguments[0], arguments[1], arguments[2])); }
	if (arguments.length == 3) { return new BorderStyleProperty(borderInline(arguments[0], arguments[1], arguments[2]), borderBlock(arguments[0], arguments[1], arguments[2])); }
}

BorderStyleProperty.shorthand = [BorderInlineStyleProperty, BorderBlockStyleProperty];

export function borderLeft(borderLeftWidth: BorderLeftWidthStyleProperty, borderLeftStyle: BorderLeftStyleStyleProperty, borderLeftColor: BorderLeftColorStyleProperty)
export function borderLeft(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: ColorValue)
export function borderLeft() {
	if (arguments[0] instanceof BorderLeftWidthStyleProperty && arguments[1] instanceof BorderLeftStyleStyleProperty && arguments[2] instanceof BorderLeftColorStyleProperty) { return new BorderLeftStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderLeftStyleProperty(new BorderLeftWidthStyleProperty(arguments[0]), new BorderLeftStyleStyleProperty(arguments[1]), new BorderLeftColorStyleProperty(arguments[2])); }
}

BorderLeftStyleProperty.shorthand = [BorderLeftWidthStyleProperty, BorderLeftStyleStyleProperty, BorderLeftColorStyleProperty];

export function borderRight(borderRightWidth: BorderRightWidthStyleProperty, borderRightStyle: BorderRightStyleStyleProperty, borderRightColor: BorderRightColorStyleProperty)
export function borderRight(borderRightWidthWidth: LineWidth, borderRightStyleStyle: BorderStyle, borderRightColorColor: ColorValue)
export function borderRight() {
	if (arguments[0] instanceof BorderRightWidthStyleProperty && arguments[1] instanceof BorderRightStyleStyleProperty && arguments[2] instanceof BorderRightColorStyleProperty) { return new BorderRightStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderRightStyleProperty(new BorderRightWidthStyleProperty(arguments[0]), new BorderRightStyleStyleProperty(arguments[1]), new BorderRightColorStyleProperty(arguments[2])); }
}

BorderRightStyleProperty.shorthand = [BorderRightWidthStyleProperty, BorderRightStyleStyleProperty, BorderRightColorStyleProperty];

export function borderTop(borderTopWidth: BorderTopWidthStyleProperty, borderTopStyle: BorderTopStyleStyleProperty, borderTopColor: BorderTopColorStyleProperty)
export function borderTop(borderTopWidthWidth: LineWidth, borderTopStyleStyle: BorderStyle, borderTopColorColor: ColorValue)
export function borderTop() {
	if (arguments[0] instanceof BorderTopWidthStyleProperty && arguments[1] instanceof BorderTopStyleStyleProperty && arguments[2] instanceof BorderTopColorStyleProperty) { return new BorderTopStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderTopStyleProperty(new BorderTopWidthStyleProperty(arguments[0]), new BorderTopStyleStyleProperty(arguments[1]), new BorderTopColorStyleProperty(arguments[2])); }
}

BorderTopStyleProperty.shorthand = [BorderTopWidthStyleProperty, BorderTopStyleStyleProperty, BorderTopColorStyleProperty];

export function borderBottom(borderBottomWidth: BorderBottomWidthStyleProperty, borderBottomStyle: BorderBottomStyleStyleProperty, borderBottomColor: BorderBottomColorStyleProperty)
export function borderBottom(borderBottomWidthWidth: LineWidth, borderBottomStyleStyle: BorderStyle, borderBottomColorColor: ColorValue)
export function borderBottom() {
	if (arguments[0] instanceof BorderBottomWidthStyleProperty && arguments[1] instanceof BorderBottomStyleStyleProperty && arguments[2] instanceof BorderBottomColorStyleProperty) { return new BorderBottomStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderBottomStyleProperty(new BorderBottomWidthStyleProperty(arguments[0]), new BorderBottomStyleStyleProperty(arguments[1]), new BorderBottomColorStyleProperty(arguments[2])); }
}

BorderBottomStyleProperty.shorthand = [BorderBottomWidthStyleProperty, BorderBottomStyleStyleProperty, BorderBottomColorStyleProperty];

