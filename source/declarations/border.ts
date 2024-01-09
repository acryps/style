// border style
export type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

// border inline
export class BorderInlineStyleProperty {

}

// border block
export class BorderBlockStyleProperty {

}

// border
export class BorderStyleProperty {

}

// border left width
export class BorderLeftWidthStyleProperty {
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
export class BorderLeftStyleStyleProperty {
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
export class BorderLeftColorStyleProperty {
	private color: Color;

	constructor(
		color: Color
	) {
		super('border-left-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderLeftColor = (color: Color) => new BorderLeftColorStyleProperty(color);

// border left
export class BorderLeftStyleProperty {

}

// border right width
export class BorderRightWidthStyleProperty {
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
export class BorderRightStyleStyleProperty {
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
export class BorderRightColorStyleProperty {
	private color: Color;

	constructor(
		color: Color
	) {
		super('border-right-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderRightColor = (color: Color) => new BorderRightColorStyleProperty(color);

// border right
export class BorderRightStyleProperty {

}

// border top width
export class BorderTopWidthStyleProperty {
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
export class BorderTopStyleStyleProperty {
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
export class BorderTopColorStyleProperty {
	private color: Color;

	constructor(
		color: Color
	) {
		super('border-top-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderTopColor = (color: Color) => new BorderTopColorStyleProperty(color);

// border top
export class BorderTopStyleProperty {

}

// border bottom width
export class BorderBottomWidthStyleProperty {
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
export class BorderBottomStyleStyleProperty {
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
export class BorderBottomColorStyleProperty {
	private color: Color;

	constructor(
		color: Color
	) {
		super('border-bottom-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const borderBottomColor = (color: Color) => new BorderBottomColorStyleProperty(color);

// border bottom
export class BorderBottomStyleProperty {

}

export function borderInline(borderLeft: BorderLeftStyleProperty, borderRight: BorderRightStyleProperty)
export function borderInline(width: LineWidth, style: BorderStyle, color: Color)
export function borderInline() {
	if (arguments[0] instanceof BorderLeftStyleProperty && arguments[1] instanceof BorderRightStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [borderLeft(arguments[0], arguments[1], arguments[2]), borderRight(arguments[0], arguments[1], arguments[2])] }
}

export function borderBlock(borderTop: BorderTopStyleProperty, borderBottom: BorderBottomStyleProperty)
export function borderBlock(width: LineWidth, style: BorderStyle, color: Color)
export function borderBlock() {
	if (arguments[0] instanceof BorderTopStyleProperty && arguments[1] instanceof BorderBottomStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [borderTop(arguments[0], arguments[1], arguments[2]), borderBottom(arguments[0], arguments[1], arguments[2])] }
}

export function border(borderInline: BorderInlineStyleProperty, borderBlock: BorderBlockStyleProperty)
export function border(width: LineWidth, style: BorderStyle, color: Color)
export function border() {
	if (arguments[0] instanceof BorderInlineStyleProperty && arguments[1] instanceof BorderBlockStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [borderInline(arguments[0], arguments[1], arguments[2]), borderBlock(arguments[0], arguments[1], arguments[2])] }
}

export function borderLeft(borderLeftWidth: BorderLeftWidthStyleProperty, borderLeftStyle: BorderLeftStyleStyleProperty, borderLeftColor: BorderLeftColorStyleProperty)
export function borderLeft(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: Color)
export function borderLeft() {
	if (arguments[0] instanceof BorderLeftWidthStyleProperty && arguments[1] instanceof BorderLeftStyleStyleProperty && arguments[2] instanceof BorderLeftColorStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [new BorderLeftWidthStyleProperty(arguments[0]), new BorderLeftStyleStyleProperty(arguments[1]), new BorderLeftColorStyleProperty(arguments[2])] }
}

export function borderRight(borderRightWidth: BorderRightWidthStyleProperty, borderRightStyle: BorderRightStyleStyleProperty, borderRightColor: BorderRightColorStyleProperty)
export function borderRight(borderRightWidthWidth: LineWidth, borderRightStyleStyle: BorderStyle, borderRightColorColor: Color)
export function borderRight() {
	if (arguments[0] instanceof BorderRightWidthStyleProperty && arguments[1] instanceof BorderRightStyleStyleProperty && arguments[2] instanceof BorderRightColorStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [new BorderRightWidthStyleProperty(arguments[0]), new BorderRightStyleStyleProperty(arguments[1]), new BorderRightColorStyleProperty(arguments[2])] }
}

export function borderTop(borderTopWidth: BorderTopWidthStyleProperty, borderTopStyle: BorderTopStyleStyleProperty, borderTopColor: BorderTopColorStyleProperty)
export function borderTop(borderTopWidthWidth: LineWidth, borderTopStyleStyle: BorderStyle, borderTopColorColor: Color)
export function borderTop() {
	if (arguments[0] instanceof BorderTopWidthStyleProperty && arguments[1] instanceof BorderTopStyleStyleProperty && arguments[2] instanceof BorderTopColorStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [new BorderTopWidthStyleProperty(arguments[0]), new BorderTopStyleStyleProperty(arguments[1]), new BorderTopColorStyleProperty(arguments[2])] }
}

export function borderBottom(borderBottomWidth: BorderBottomWidthStyleProperty, borderBottomStyle: BorderBottomStyleStyleProperty, borderBottomColor: BorderBottomColorStyleProperty)
export function borderBottom(borderBottomWidthWidth: LineWidth, borderBottomStyleStyle: BorderStyle, borderBottomColorColor: Color)
export function borderBottom() {
	if (arguments[0] instanceof BorderBottomWidthStyleProperty && arguments[1] instanceof BorderBottomStyleStyleProperty && arguments[2] instanceof BorderBottomColorStyleProperty) { return [arguments] }
	if (arguments.length == 3) { return [new BorderBottomWidthStyleProperty(arguments[0]), new BorderBottomStyleStyleProperty(arguments[1]), new BorderBottomColorStyleProperty(arguments[2])] }
}

