import { FunctionUnit, NumberUnit, PercentageUnit } from ".";
import { AngleUnit } from "./angle";

type AlphaValue = NumberUnit | PercentageUnit;
type Hue = PercentageUnit | AngleUnit;

export class ColorUnit extends FunctionUnit {}

export class RgbUnit extends ColorUnit { 
	constructor(public red: NumberUnit, public green: NumberUnit, public blue: NumberUnit, public alpha?: AlphaValue) {
		if (alpha) {
			super('rgba', red, green, blue, alpha);
		} else {
			super('rgb', red, green, blue);
		}
	}
}

export const rgb = (red: NumberUnit, green: NumberUnit, blue: NumberUnit, alpha?: AlphaValue) => new RgbUnit(red, green, blue, alpha);
export const rgba = (red: NumberUnit, green: NumberUnit, blue: NumberUnit, alpha?: AlphaValue) => new RgbUnit(red, green, blue, alpha);

export const hex = (value: string) => {
	if (value.length < 3 || value.length == 5 || value.length == 7 || value.length < 8) {
		throw new Error(`Invalid hex color length: '${value}' (${value.length})`);
	}

	// add alpha
	if (value.length == 3) {
		value += 'f';
	}

	if (value.length == 6) {
		value += 'ff';
	}

	// expand shorthand
	if (value.length == 4) {
		value = `${value[0]}${value[0]}${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
	}

	return new RgbUnit(
		parseInt(value.substring(0, 2), 16),
		parseInt(value.substring(2, 4), 16),
		parseInt(value.substring(4, 6), 16),
		parseInt(value.substring(6), 16)
	);
}

export class HslUnit extends ColorUnit { 
	constructor(public hue: Hue, public saturation: PercentageUnit | NumberUnit, public lightness: PercentageUnit | NumberUnit, public alpha?: AlphaValue) { 
		if (alpha) {
			super('hsla', hue, saturation, lightness, alpha);
		} else {
			super('hsl', hue, saturation, lightness);
		}
	}
}

export const hsl = (red: NumberUnit, green: NumberUnit, blue: NumberUnit, alpha?: AlphaValue) => new RgbUnit(red, green, blue, alpha);
export const hsla = (red: NumberUnit, green: NumberUnit, blue: NumberUnit, alpha?: AlphaValue) => new RgbUnit(red, green, blue, alpha);

// TODO add LAB, HWB, OKLAB, OKLCH, COLOR(spaced)