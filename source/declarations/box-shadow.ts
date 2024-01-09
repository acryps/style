import { ColorValue } from './color';
import { Length } from './numbers';

// box shadow type
export type BoxShadowType = 'inset' | 'outset';

// box shadow
export class BoxShadowStyleProperty {
	private color: ColorValue;
	private offsetX: Length;
	private offsetY: Length;
	private blurRadius: Length;
	private spreadRadius: Length;
	private type: BoxShadowType;

	constructor(
		color: ColorValue,
		offsetX: Length,
		offsetY: Length,
		blurRadius: Length,
		spreadRadius: Length = 0,
		type: BoxShadowType = 'outset'
	) {
		super('box-shadow');

		this.color = color;
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.blurRadius = blurRadius;
		this.spreadRadius = spreadRadius;
		this.type = type;
	}

	toValueString() {
		return `${this.offsetX} ${this.offsetY} ${this.blurRadius ?? ''} ${this.spreadRadius ?? ''} ${this.type == 'inset' ? ' inset' : ''}`;
	}
}

export const boxShadow = (color: ColorValue, offsetX: Length, offsetY: Length, blurRadius: Length, spreadRadius: Length = 0, type: BoxShadowType = 'outset') => new BoxShadowStyleProperty(color, offsetX, offsetY, blurRadius, spreadRadius, type);

