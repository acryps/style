import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { ColorValue } from './color';
import { Length } from './primitives';

// stroke color
export type StrokeColor = ColorValue | 'none' | Variable<StrokeColor> | Calculation<Partial<StrokeColor>>;

// stroke
export class StrokeStyleProperty extends StyleProperty {
	public color: StrokeColor;

	constructor(
		color: StrokeColor
	) {
		super('stroke');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const stroke = (color: StrokeColor) => new StrokeStyleProperty(color);

// stroke width
export class StrokeWidthStyleProperty extends StyleProperty {
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

export const strokeWidth = (width: Length) => new StrokeWidthStyleProperty(Style.resolveNumber('length', width));

// vector effect mode
export type VectorEffectMode = 'none' | 'non-scaling-stroke' | 'non-scaling-size' | 'non-rotation' | 'fixed-position' | Variable<VectorEffectMode> | Calculation<Partial<VectorEffectMode>>;

// vector effect
export class VectorEffectStyleProperty extends StyleProperty {
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

