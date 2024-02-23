import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { String } from './primitives';
import { Integer } from './primitives';
import { Length } from './primitives';

// font family identifier
export type FontFamilyIdentifier = String | Variable<FontFamilyIdentifier> | Calculation<Partial<FontFamilyIdentifier>>;

// font weights
export type FontWeights = Integer | 'normal' | 'bold' | 'lighter' | 'bolder' | Variable<FontWeights> | Calculation<Partial<FontWeights>>;

// font family
export class FontFamilyStyleProperty extends StyleProperty {
	static properties = ['name'];

	public name: FontFamilyIdentifier[];

	constructor(
		...name: FontFamilyIdentifier[]
	) {
		super('font-family');

		this.name = name;
	}

	toValueString() {
		return `${this.name}`;
	}
}

export const fontFamily = (...name: FontFamilyIdentifier[]) => new FontFamilyStyleProperty(...name);

// font size
export class FontSizeStyleProperty extends StyleProperty {
	static properties = ['size'];

	public size: Length;

	constructor(
		size: Length
	) {
		super('font-size');

		this.size = size;
	}

	toValueString() {
		return `${this.size}`;
	}
}

export const fontSize = (size: Length) => new FontSizeStyleProperty(size);

// font weight
export class FontWeightStyleProperty extends StyleProperty {
	static properties = ['weight'];

	public weight: FontWeights;

	constructor(
		weight: FontWeights
	) {
		super('font-weight');

		this.weight = weight;
	}

	toValueString() {
		return `${this.weight}`;
	}
}

export const fontWeight = (weight: FontWeights) => new FontWeightStyleProperty(weight);

// font style mode
export type FontStyleMode = 'normal' | 'italic' | 'oblique' | Variable<FontStyleMode> | Calculation<Partial<FontStyleMode>>;

// font style
export class FontStyleStyleProperty extends StyleProperty {
	static properties = ['style'];

	public style: FontStyleMode;

	constructor(
		style: FontStyleMode
	) {
		super('font-style');

		this.style = style;
	}

	toValueString() {
		return `${this.style}`;
	}
}

export const fontStyle = (style: FontStyleMode) => new FontStyleStyleProperty(style);

// font
export class FontStyleProperty extends StyleProperty {
	constructor(
		public fontSize: FontSizeStyleProperty,
		public fontWeight: FontWeightStyleProperty,
		public fontFamily: FontFamilyStyleProperty
	) {
		super('font', [fontSize, fontWeight, fontFamily]);
	}
}

export function font(fontSize: FontSizeStyleProperty, fontWeight: FontWeightStyleProperty, fontFamily: FontFamilyStyleProperty): FontStyleProperty
export function font(fontSizeSize: Length, fontWeightWeight: FontWeights, ...fontFamilyName: FontFamilyIdentifier[]): FontStyleProperty
export function font(): FontStyleProperty {
	if (arguments[0] instanceof FontSizeStyleProperty && arguments[1] instanceof FontWeightStyleProperty && arguments[2] instanceof FontFamilyStyleProperty) { return new FontStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new FontStyleProperty(new FontSizeStyleProperty(arguments[0]), new FontWeightStyleProperty(arguments[1]), new FontFamilyStyleProperty(...arguments[2])); }
}

FontStyleProperty.shorthand = [FontSizeStyleProperty, FontWeightStyleProperty, FontFamilyStyleProperty];

