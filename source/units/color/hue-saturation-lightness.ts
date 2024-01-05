import { AlphaValue, Hue } from ".";
import { Angle } from "../angle";
import { Percentage } from "../percentage";

export class HueSaturationLightnessColor {
	constructor(
		public hue: Hue,
		public saturation: Percentage,
		public lightness: Percentage,
		public alpha?: AlphaValue
	) {}

	toString() {
		return `hsl(${this.hue} ${this.saturation} ${this.lightness}${this.alpha ? ` / ${this.alpha}` : ''})`;
	}
}

export function hsl(hue: Hue, saturation: Percentage | number, lightness: Percentage | number, alpha?: AlphaValue | number) {
	return new HueSaturationLightnessColor(
		hue,
		typeof saturation == 'number' ? new Percentage(saturation) : saturation,
		typeof lightness == 'number' ? new Percentage(lightness) : lightness,
		alpha
	);
}

export function hsla(hue: Hue, saturation: Percentage | number, lightness: Percentage | number, alpha: AlphaValue | number) {
	return hsl(hue, saturation, lightness, alpha);
}