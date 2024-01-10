import { Style } from '../index';
import { StyleProperty } from '../property';

import { String } from './primitives';
import { Number } from './primitives';
import { AlphaValue } from './opacity';

// hex
export class Hex {
	private color: String;

	constructor(
		color: String
	) {
		this.color = color;
	}
}

export function hex(color: String) { return new Hex(color); }

// rgb
export class Rgb {
	private red: Number;
	private green: Number;
	private blue: Number;
	private alpha: AlphaValue | undefined;

	constructor(
		red: Number,
		green: Number,
		blue: Number,
		alpha?: AlphaValue
	) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}
}

export function rgb(red: Number, green: Number, blue: Number, alpha?: AlphaValue) { return new Rgb(red, green, blue, alpha); }

// color value
export type ColorValue = Hex | Rgb;

// color
export class ColorStyleProperty extends StyleProperty {
	private color: ColorValue;

	constructor(
		color: ColorValue
	) {
		super('color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const color = (color: ColorValue) => new ColorStyleProperty(color);

