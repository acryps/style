import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { LineWidth } from './primitives';
import { ColorValue } from './color';
import { Length } from './primitives';
import { Percentage } from './primitives';

// border style
export type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Variable<BorderStyle> | Calculation<Partial<BorderStyle>>;

// border inline
export class BorderInlineStyleProperty extends StyleProperty {
	constructor(
		public borderLeft: BorderLeftStyleProperty,
		public borderRight: BorderRightStyleProperty
	) {
		super('border-inline', [borderLeft, borderRight]);
	}
}

// border block
export class BorderBlockStyleProperty extends StyleProperty {
	constructor(
		public borderTop: BorderTopStyleProperty,
		public borderBottom: BorderBottomStyleProperty
	) {
		super('border-block', [borderTop, borderBottom]);
	}
}

// border
export class BorderStyleProperty extends StyleProperty {
	constructor(
		public borderInline: BorderInlineStyleProperty,
		public borderBlock: BorderBlockStyleProperty
	) {
		super('border', [borderInline, borderBlock]);
	}
}

// border radius size
export type BorderRadiusSize = Length | Percentage | Variable<BorderRadiusSize> | Calculation<Partial<BorderRadiusSize>>;

// border radius
export class BorderRadiusStyleProperty extends StyleProperty {
	constructor(
		public borderTopLeftRadius: BorderTopLeftRadiusStyleProperty,
		public borderTopRightRadius: BorderTopRightRadiusStyleProperty,
		public borderBottomRightRadius: BorderBottomRightRadiusStyleProperty,
		public borderBottomLeftRadius: BorderBottomLeftRadiusStyleProperty
	) {
		super('border-radius', [borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius]);
	}
}

// border left width
export class BorderLeftWidthStyleProperty extends StyleProperty {
	static properties = ['width'];

	public width: LineWidth;

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
	static properties = ['style'];

	public style: BorderStyle;

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
	static properties = ['color'];

	public color: ColorValue;

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
		public borderLeftWidth: BorderLeftWidthStyleProperty,
		public borderLeftStyle: BorderLeftStyleStyleProperty,
		public borderLeftColor: BorderLeftColorStyleProperty
	) {
		super('border-left', [borderLeftWidth, borderLeftStyle, borderLeftColor]);
	}
}

// border right width
export class BorderRightWidthStyleProperty extends StyleProperty {
	static properties = ['width'];

	public width: LineWidth;

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
	static properties = ['style'];

	public style: BorderStyle;

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
	static properties = ['color'];

	public color: ColorValue;

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
		public borderRightWidth: BorderRightWidthStyleProperty,
		public borderRightStyle: BorderRightStyleStyleProperty,
		public borderRightColor: BorderRightColorStyleProperty
	) {
		super('border-right', [borderRightWidth, borderRightStyle, borderRightColor]);
	}
}

// border top width
export class BorderTopWidthStyleProperty extends StyleProperty {
	static properties = ['width'];

	public width: LineWidth;

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
	static properties = ['style'];

	public style: BorderStyle;

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
	static properties = ['color'];

	public color: ColorValue;

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
		public borderTopWidth: BorderTopWidthStyleProperty,
		public borderTopStyle: BorderTopStyleStyleProperty,
		public borderTopColor: BorderTopColorStyleProperty
	) {
		super('border-top', [borderTopWidth, borderTopStyle, borderTopColor]);
	}
}

// border bottom width
export class BorderBottomWidthStyleProperty extends StyleProperty {
	static properties = ['width'];

	public width: LineWidth;

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
	static properties = ['style'];

	public style: BorderStyle;

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
	static properties = ['color'];

	public color: ColorValue;

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
		public borderBottomWidth: BorderBottomWidthStyleProperty,
		public borderBottomStyle: BorderBottomStyleStyleProperty,
		public borderBottomColor: BorderBottomColorStyleProperty
	) {
		super('border-bottom', [borderBottomWidth, borderBottomStyle, borderBottomColor]);
	}
}

// border top left radius
export class BorderTopLeftRadiusStyleProperty extends StyleProperty {
	static properties = ['radius'];

	public radius: BorderRadiusSize;

	constructor(
		radius: BorderRadiusSize
	) {
		super('border-top-left-radius');

		this.radius = radius;
	}

	toValueString() {
		return `${this.radius}`;
	}
}

export const borderTopLeftRadius = (radius: BorderRadiusSize) => new BorderTopLeftRadiusStyleProperty(radius);

// border top right radius
export class BorderTopRightRadiusStyleProperty extends StyleProperty {
	static properties = ['radius'];

	public radius: BorderRadiusSize;

	constructor(
		radius: BorderRadiusSize
	) {
		super('border-top-right-radius');

		this.radius = radius;
	}

	toValueString() {
		return `${this.radius}`;
	}
}

export const borderTopRightRadius = (radius: BorderRadiusSize) => new BorderTopRightRadiusStyleProperty(radius);

// border bottom right radius
export class BorderBottomRightRadiusStyleProperty extends StyleProperty {
	static properties = ['radius'];

	public radius: BorderRadiusSize;

	constructor(
		radius: BorderRadiusSize
	) {
		super('border-bottom-right-radius');

		this.radius = radius;
	}

	toValueString() {
		return `${this.radius}`;
	}
}

export const borderBottomRightRadius = (radius: BorderRadiusSize) => new BorderBottomRightRadiusStyleProperty(radius);

// border bottom left radius
export class BorderBottomLeftRadiusStyleProperty extends StyleProperty {
	static properties = ['radius'];

	public radius: BorderRadiusSize;

	constructor(
		radius: BorderRadiusSize
	) {
		super('border-bottom-left-radius');

		this.radius = radius;
	}

	toValueString() {
		return `${this.radius}`;
	}
}

export const borderBottomLeftRadius = (radius: BorderRadiusSize) => new BorderBottomLeftRadiusStyleProperty(radius);

export function borderInline(borderLeft: BorderLeftStyleProperty, borderRight: BorderRightStyleProperty): BorderInlineStyleProperty
export function borderInline(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: ColorValue): BorderInlineStyleProperty
export function borderInline(width: LineWidth, style: BorderStyle, color: ColorValue): BorderInlineStyleProperty
export function borderInline(): BorderInlineStyleProperty {
	if (arguments[0] instanceof BorderLeftStyleProperty && arguments[1] instanceof BorderRightStyleProperty) { return new BorderInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 3) { return new BorderInlineStyleProperty(borderLeft(arguments[0], arguments[1], arguments[2]), borderRight(arguments[0], arguments[1], arguments[2])); }
	if (arguments.length == 3) { return new BorderInlineStyleProperty(borderLeft(arguments[0], arguments[1], arguments[2]), borderRight(arguments[0], arguments[1], arguments[2])); }
}

BorderInlineStyleProperty.shorthand = [BorderLeftStyleProperty, BorderRightStyleProperty];

export function borderBlock(borderTop: BorderTopStyleProperty, borderBottom: BorderBottomStyleProperty): BorderBlockStyleProperty
export function borderBlock(borderTopWidthWidth: LineWidth, borderTopStyleStyle: BorderStyle, borderTopColorColor: ColorValue): BorderBlockStyleProperty
export function borderBlock(width: LineWidth, style: BorderStyle, color: ColorValue): BorderBlockStyleProperty
export function borderBlock(): BorderBlockStyleProperty {
	if (arguments[0] instanceof BorderTopStyleProperty && arguments[1] instanceof BorderBottomStyleProperty) { return new BorderBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 3) { return new BorderBlockStyleProperty(borderTop(arguments[0], arguments[1], arguments[2]), borderBottom(arguments[0], arguments[1], arguments[2])); }
	if (arguments.length == 3) { return new BorderBlockStyleProperty(borderTop(arguments[0], arguments[1], arguments[2]), borderBottom(arguments[0], arguments[1], arguments[2])); }
}

BorderBlockStyleProperty.shorthand = [BorderTopStyleProperty, BorderBottomStyleProperty];

export function border(borderInline: BorderInlineStyleProperty, borderBlock: BorderBlockStyleProperty): BorderStyleProperty
export function border(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: ColorValue): BorderStyleProperty
export function border(width: LineWidth, style: BorderStyle, color: ColorValue): BorderStyleProperty
export function border(): BorderStyleProperty {
	if (arguments[0] instanceof BorderInlineStyleProperty && arguments[1] instanceof BorderBlockStyleProperty) { return new BorderStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 3) { return new BorderStyleProperty(borderInline(arguments[0], arguments[1], arguments[2]), borderBlock(arguments[0], arguments[1], arguments[2])); }
	if (arguments.length == 3) { return new BorderStyleProperty(borderInline(arguments[0], arguments[1], arguments[2]), borderBlock(arguments[0], arguments[1], arguments[2])); }
}

BorderStyleProperty.shorthand = [BorderInlineStyleProperty, BorderBlockStyleProperty];

export function borderRadius(borderTopLeftRadius: BorderTopLeftRadiusStyleProperty, borderTopRightRadius: BorderTopRightRadiusStyleProperty, borderBottomRightRadius: BorderBottomRightRadiusStyleProperty, borderBottomLeftRadius: BorderBottomLeftRadiusStyleProperty): BorderRadiusStyleProperty
export function borderRadius(borderTopLeftRadiusRadius: BorderRadiusSize, borderTopRightRadiusRadius: BorderRadiusSize, borderBottomRightRadiusRadius: BorderRadiusSize, borderBottomLeftRadiusRadius: BorderRadiusSize): BorderRadiusStyleProperty
export function borderRadius(radius: BorderRadiusSize): BorderRadiusStyleProperty
export function borderRadius(): BorderRadiusStyleProperty {
	if (arguments[0] instanceof BorderTopLeftRadiusStyleProperty && arguments[1] instanceof BorderTopRightRadiusStyleProperty && arguments[2] instanceof BorderBottomRightRadiusStyleProperty && arguments[3] instanceof BorderBottomLeftRadiusStyleProperty) { return new BorderRadiusStyleProperty(arguments[0], arguments[1], arguments[2], arguments[3]); }
	if (arguments.length == 4) { return new BorderRadiusStyleProperty(new BorderTopLeftRadiusStyleProperty(arguments[0]), new BorderTopRightRadiusStyleProperty(arguments[1]), new BorderBottomRightRadiusStyleProperty(arguments[2]), new BorderBottomLeftRadiusStyleProperty(arguments[3])); }
	if (arguments.length == 1) { return new BorderRadiusStyleProperty(new BorderTopLeftRadiusStyleProperty(arguments[0]), new BorderTopRightRadiusStyleProperty(arguments[0]), new BorderBottomRightRadiusStyleProperty(arguments[0]), new BorderBottomLeftRadiusStyleProperty(arguments[0])); }
}

BorderRadiusStyleProperty.shorthand = [BorderTopLeftRadiusStyleProperty, BorderTopRightRadiusStyleProperty, BorderBottomRightRadiusStyleProperty, BorderBottomLeftRadiusStyleProperty];

export function borderLeft(borderLeftWidth: BorderLeftWidthStyleProperty, borderLeftStyle: BorderLeftStyleStyleProperty, borderLeftColor: BorderLeftColorStyleProperty): BorderLeftStyleProperty
export function borderLeft(borderLeftWidthWidth: LineWidth, borderLeftStyleStyle: BorderStyle, borderLeftColorColor: ColorValue): BorderLeftStyleProperty
export function borderLeft(): BorderLeftStyleProperty {
	if (arguments[0] instanceof BorderLeftWidthStyleProperty && arguments[1] instanceof BorderLeftStyleStyleProperty && arguments[2] instanceof BorderLeftColorStyleProperty) { return new BorderLeftStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderLeftStyleProperty(new BorderLeftWidthStyleProperty(arguments[0]), new BorderLeftStyleStyleProperty(arguments[1]), new BorderLeftColorStyleProperty(arguments[2])); }
}

BorderLeftStyleProperty.shorthand = [BorderLeftWidthStyleProperty, BorderLeftStyleStyleProperty, BorderLeftColorStyleProperty];

export function borderRight(borderRightWidth: BorderRightWidthStyleProperty, borderRightStyle: BorderRightStyleStyleProperty, borderRightColor: BorderRightColorStyleProperty): BorderRightStyleProperty
export function borderRight(borderRightWidthWidth: LineWidth, borderRightStyleStyle: BorderStyle, borderRightColorColor: ColorValue): BorderRightStyleProperty
export function borderRight(): BorderRightStyleProperty {
	if (arguments[0] instanceof BorderRightWidthStyleProperty && arguments[1] instanceof BorderRightStyleStyleProperty && arguments[2] instanceof BorderRightColorStyleProperty) { return new BorderRightStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderRightStyleProperty(new BorderRightWidthStyleProperty(arguments[0]), new BorderRightStyleStyleProperty(arguments[1]), new BorderRightColorStyleProperty(arguments[2])); }
}

BorderRightStyleProperty.shorthand = [BorderRightWidthStyleProperty, BorderRightStyleStyleProperty, BorderRightColorStyleProperty];

export function borderTop(borderTopWidth: BorderTopWidthStyleProperty, borderTopStyle: BorderTopStyleStyleProperty, borderTopColor: BorderTopColorStyleProperty): BorderTopStyleProperty
export function borderTop(borderTopWidthWidth: LineWidth, borderTopStyleStyle: BorderStyle, borderTopColorColor: ColorValue): BorderTopStyleProperty
export function borderTop(): BorderTopStyleProperty {
	if (arguments[0] instanceof BorderTopWidthStyleProperty && arguments[1] instanceof BorderTopStyleStyleProperty && arguments[2] instanceof BorderTopColorStyleProperty) { return new BorderTopStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderTopStyleProperty(new BorderTopWidthStyleProperty(arguments[0]), new BorderTopStyleStyleProperty(arguments[1]), new BorderTopColorStyleProperty(arguments[2])); }
}

BorderTopStyleProperty.shorthand = [BorderTopWidthStyleProperty, BorderTopStyleStyleProperty, BorderTopColorStyleProperty];

export function borderBottom(borderBottomWidth: BorderBottomWidthStyleProperty, borderBottomStyle: BorderBottomStyleStyleProperty, borderBottomColor: BorderBottomColorStyleProperty): BorderBottomStyleProperty
export function borderBottom(borderBottomWidthWidth: LineWidth, borderBottomStyleStyle: BorderStyle, borderBottomColorColor: ColorValue): BorderBottomStyleProperty
export function borderBottom(): BorderBottomStyleProperty {
	if (arguments[0] instanceof BorderBottomWidthStyleProperty && arguments[1] instanceof BorderBottomStyleStyleProperty && arguments[2] instanceof BorderBottomColorStyleProperty) { return new BorderBottomStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new BorderBottomStyleProperty(new BorderBottomWidthStyleProperty(arguments[0]), new BorderBottomStyleStyleProperty(arguments[1]), new BorderBottomColorStyleProperty(arguments[2])); }
}

BorderBottomStyleProperty.shorthand = [BorderBottomWidthStyleProperty, BorderBottomStyleStyleProperty, BorderBottomColorStyleProperty];

