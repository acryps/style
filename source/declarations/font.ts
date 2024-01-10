import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { String } from './primitives';
import { Integer } from './primitives';
import { Length } from './primitives';

// font family identifier
export type FontFamilyIdentifier = String | Variable<FontFamilyIdentifier>;

// font weights
export type FontWeights = Integer | 'normal' | 'bold' | 'lighter' | 'bolder' | Variable<FontWeights>;

// font family
export class FontFamilyStyleProperty extends StyleProperty {
	private name: FontFamilyIdentifier[];

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
	private size: Length;

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
	private weight: FontWeights;

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

// font
export class FontStyleProperty extends StyleProperty {
	constructor(
		private fontSize: FontSizeStyleProperty,
		private fontWeight: FontWeightStyleProperty,
		private fontFamily: FontFamilyStyleProperty
	) {
		super('font', [fontSize, fontWeight, fontFamily]);
	}
}

export function font(fontSize: FontSizeStyleProperty, fontWeight: FontWeightStyleProperty, fontFamily: FontFamilyStyleProperty)
export function font(fontSizeSize: Length, fontWeightWeight: FontWeights, ...fontFamilyName: FontFamilyIdentifier[])
export function font() {
	if (arguments[0] instanceof FontSizeStyleProperty && arguments[1] instanceof FontWeightStyleProperty && arguments[2] instanceof FontFamilyStyleProperty) { return new FontStyleProperty(arguments[0], arguments[1], arguments[2]); }
	if (arguments.length == 3) { return new FontStyleProperty(new FontSizeStyleProperty(arguments[0]), new FontWeightStyleProperty(arguments[1]), new FontFamilyStyleProperty(...arguments[2])); }
}

FontStyleProperty.shorthand = [FontSizeStyleProperty, FontWeightStyleProperty, FontFamilyStyleProperty];

