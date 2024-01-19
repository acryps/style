import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { ColorValue } from './color';
import { Length } from './primitives';

// box shadow type
export type BoxShadowType = 'inset' | 'outset' | Variable<BoxShadowType> | Calculation<Partial<BoxShadowType>>;

// box shadow
export class BoxShadowStyleProperty extends StyleProperty {
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

export const boxShadow = (color: ColorValue, offsetX: Length, offsetY: Length, blurRadius: Length, spreadRadius: Length = 0, type: BoxShadowType = 'outset') => new BoxShadowStyleProperty(color, Style.resolveNumber('length', offsetX), Style.resolveNumber('length', offsetY), Style.resolveNumber('length', blurRadius), Style.resolveNumber('length', spreadRadius), type);

