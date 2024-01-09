// box shadow type
export type BoxShadowType = 'inset' | 'outset';

// box shadow
export class BoxShadowStyleProperty {
	private color: Color;
	private offsetX: Length;
	private offsetY: Length;
	private blurRadius: Length;
	private spreadRadius: Length;
	private type: BoxShadowType;

	constructor(
		color: Color,
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

export const boxShadow = (color: Color, offsetX: Length, offsetY: Length, blurRadius: Length, spreadRadius: Length = 0, type: BoxShadowType = 'outset') => new BoxShadowStyleProperty(color, offsetX, offsetY, blurRadius, spreadRadius, type);

