import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { ColorValue } from './color';
import { Length } from './primitives';

// paint color
export type PaintColor = ColorValue | 'none' | Variable<PaintColor> | Calculation<Partial<PaintColor>>;

// stroke
export class StrokeStyleProperty extends StyleProperty {
	static properties = ['color'];

	public color: PaintColor;

	constructor(
		color: PaintColor
	) {
		super('stroke');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const stroke = (color: PaintColor) => new StrokeStyleProperty(color);

// stroke width
export class StrokeWidthStyleProperty extends StyleProperty {
	static properties = ['width'];

	public width: Length;

	constructor(
		width: Length
	) {
		super('stroke-width');

		this.width = width;
	}

	toValueString() {
		return `${this.width}`;
	}
}

export const strokeWidth = (width: Length) => new StrokeWidthStyleProperty(width);

// fill
export class FillStyleProperty extends StyleProperty {
	static properties = ['color'];

	public color: PaintColor;

	constructor(
		color: PaintColor
	) {
		super('fill');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const fill = (color: PaintColor) => new FillStyleProperty(color);

// vector effect mode
export type VectorEffectMode = 'none' | 'non-scaling-stroke' | 'non-scaling-size' | 'non-rotation' | 'fixed-position' | Variable<VectorEffectMode> | Calculation<Partial<VectorEffectMode>>;

// vector effect
export class VectorEffectStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: VectorEffectMode;

	constructor(
		mode: VectorEffectMode
	) {
		super('vector-effect');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const vectorEffect = (mode: VectorEffectMode) => new VectorEffectStyleProperty(mode);

