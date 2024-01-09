

// color value
export type ColorValue = HexColor | RgbColor | HslColor;

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

