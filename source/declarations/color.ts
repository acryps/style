

// hex color
export type HexColor = ;

// rgb color
export type RgbColor = ;

// color value
export type ColorValue = HexColor | RgbColor;

// color
export class ColorStyleProperty {
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

