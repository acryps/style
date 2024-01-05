import { AlphaValue } from ".";
import { Percentage } from "../percentage";

export type ColorChannel = number | Percentage;

export class RedGreenBlueColor {
	constructor(
		public red: ColorChannel,
		public green: ColorChannel,
		public blue: ColorChannel,
		public alpha?: AlphaValue
	) {}

	toString() {
		return `rgb(${this.red} ${this.green} ${this.blue}${this.alpha ? ` / ${this.alpha}` : ''})`;
	}
}

export function rgb(red: ColorChannel, green: ColorChannel, blue: ColorChannel, alpha?: AlphaValue) {
	return new RedGreenBlueColor(red, green, blue, alpha);
}

export function rgba(red: ColorChannel, green: ColorChannel, blue: ColorChannel, alpha: AlphaValue) {
	return new RedGreenBlueColor(red, green, blue, alpha);
}

export function hex(color: string) {
	color = color.replace('#', '');

	switch (color.length) {
		case 3: {
			return new RedGreenBlueColor(
				parseInt(`${color[0]}${color[0]}`, 16),
				parseInt(`${color[1]}${color[1]}`, 16),
				parseInt(`${color[2]}${color[2]}`, 16)
			);
		}

		case 4: {
			return new RedGreenBlueColor(
				parseInt(`${color[0]}${color[0]}`, 16),
				parseInt(`${color[1]}${color[1]}`, 16),
				parseInt(`${color[2]}${color[2]}`, 16),
				parseInt(`${color[3]}${color[3]}`, 16)
			);
		}

		case 6: {
			return new RedGreenBlueColor(
				parseInt(color.substring(0, 2), 16),
				parseInt(color.substring(2, 4), 16),
				parseInt(color.substring(4, 6), 16)
			);
		}

		case 8: {
			return new RedGreenBlueColor(
				parseInt(color.substring(0, 2), 16),
				parseInt(color.substring(2, 4), 16),
				parseInt(color.substring(4, 6), 16),
				parseInt(color.substring(6, 8), 16)
			);
		}
	}
}