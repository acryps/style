import { Style } from '../style';
import { StyleProperty } from '../property';

import { String } from './primitives';
import { Number } from './primitives';
import { AlphaValue } from './opacity';
import { Angle } from './angle';
import { Percentage } from './primitives';

// hex
export class Hex {
	private color: String;

	constructor(
		color: String
	) {
		this.color = color.replace('#', '').toLowerCase();
	
		if (!(this.color.length == 3 || this.color.length == 4 || this.color.length == 6 || this.color.length == 8)) {
			throw new Error(`Invalid hex color format '${color}'`);
		}
	}

	toString() {
		return `#${this.color}`;
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

	toString() {
		return `rgb(${this.red} ${this.green} ${this.blue}${this.alpha == null ? '' : ` / ${this.alpha}`})`;
	}
}

export function rgb(red: Number, green: Number, blue: Number, alpha?: AlphaValue) { return new Rgb(red, green, blue, alpha); }

// hsl
export class Hsl {
	private hue: Angle;
	private saturation: Percentage;
	private lightness: Percentage;
	private alpha: AlphaValue | undefined;

	constructor(
		hue: Angle,
		saturation: Percentage,
		lightness: Percentage,
		alpha?: AlphaValue
	) {
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
	
		this.alpha = alpha;
	}

	toString() {
		return `hsl(${this.hue} ${this.saturation} ${this.lightness}${this.alpha == null ? '' : ` / ${this.alpha}`})`;
	}
}

export function hsl(hue: Angle, saturation: Percentage, lightness: Percentage, alpha?: AlphaValue) { return new Hsl(Style.resolveNumber('angle', hue), saturation, lightness, alpha); }

// color value
export type ColorValue = Hex | Rgb | 'currentColor' | 'transparent';

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

