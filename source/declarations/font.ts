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

export const fontSize = (size: Length) => new FontSizeStyleProperty(Style.resolveNumber('length', size));

// font weight
export class FontWeightStyleProperty extends StyleProperty {
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
	if (arguments.length == 3) { return new FontStyleProperty(new FontSizeStyleProperty(Style.resolveNumber('length', arguments[0])), new FontWeightStyleProperty(arguments[1]), new FontFamilyStyleProperty(...arguments[2])); }
}

FontStyleProperty.shorthand = [FontSizeStyleProperty, FontWeightStyleProperty, FontFamilyStyleProperty];

