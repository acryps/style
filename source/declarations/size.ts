import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Length } from './primitives';
import { Percentage } from './primitives';
import { Number } from './primitives';

// size dimension
export type SizeDimension = Length | Percentage | 'auto' | 'max-content' | 'min-content' | 'fit-content' | Variable<SizeDimension> | Calculation<Partial<SizeDimension>>;

// size bounding dimension
export type SizeBoundingDimension = Length | Percentage | 'max-content' | 'min-content' | 'fit-content' | Variable<SizeBoundingDimension> | Calculation<Partial<SizeBoundingDimension>>;

// box sizing mode
export type BoxSizingMode = 'border-box' | 'content-box' | Variable<BoxSizingMode> | Calculation<Partial<BoxSizingMode>>;

// box sizing
export class BoxSizingStyleProperty extends StyleProperty {
	public mode: BoxSizingMode;

	constructor(
		mode: BoxSizingMode
	) {
		super('box-sizing');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const boxSizing = (mode: BoxSizingMode) => new BoxSizingStyleProperty(mode);

// ratio
export class Ratio extends StyleMethod {
	private width: Number;
	private height: Number;

	constructor(
		width: Number,
		height: Number
	) {
		super();

	this.width = width;
		this.height = height;
	}

	toValueString() {
		return `${this.width} / ${this.height}`;
	}
}

export function ratio(width: Number, height: Number) { return new Ratio(width, height); }

// aspect ratio
export class AspectRatioStyleProperty extends StyleProperty {
	public ratio: Ratio;

	constructor(
		ratio: Ratio
	) {
		super('aspect-ratio');

		this.ratio = ratio;
	}

	toValueString() {
		return `${this.ratio}`;
	}
}

export const aspectRatio = (ratio: Ratio) => new AspectRatioStyleProperty(ratio);

// resize mode
export type ResizeMode = 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline' | Variable<ResizeMode> | Calculation<Partial<ResizeMode>>;

// resize
export class ResizeStyleProperty extends StyleProperty {
	public mode: ResizeMode;

	constructor(
		mode: ResizeMode
	) {
		super('resize');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const resize = (mode: ResizeMode) => new ResizeStyleProperty(mode);

// height
export class HeightStyleProperty extends StyleProperty {
	public size: SizeDimension;

	constructor(
		size: SizeDimension
	) {
		super('height');

		this.size = size;
	}

	toValueString() {
		return `${this.size}`;
	}
}

export const height = (size: SizeDimension) => new HeightStyleProperty(size);

// min height
export class MinHeightStyleProperty extends StyleProperty {
	public limit: SizeDimension;

	constructor(
		limit: SizeDimension
	) {
		super('min-height');

		this.limit = limit;
	}

	toValueString() {
		return `${this.limit}`;
	}
}

export const minHeight = (limit: SizeDimension) => new MinHeightStyleProperty(limit);

// max height
export class MaxHeightStyleProperty extends StyleProperty {
	public limit: SizeDimension;

	constructor(
		limit: SizeDimension
	) {
		super('max-height');

		this.limit = limit;
	}

	toValueString() {
		return `${this.limit}`;
	}
}

export const maxHeight = (limit: SizeDimension) => new MaxHeightStyleProperty(limit);

// width
export class WidthStyleProperty extends StyleProperty {
	public size: SizeDimension;

	constructor(
		size: SizeDimension
	) {
		super('width');

		this.size = size;
	}

	toValueString() {
		return `${this.size}`;
	}
}

export const width = (size: SizeDimension) => new WidthStyleProperty(size);

// min width
export class MinWidthStyleProperty extends StyleProperty {
	public limit: SizeDimension;

	constructor(
		limit: SizeDimension
	) {
		super('min-width');

		this.limit = limit;
	}

	toValueString() {
		return `${this.limit}`;
	}
}

export const minWidth = (limit: SizeDimension) => new MinWidthStyleProperty(limit);

// max width
export class MaxWidthStyleProperty extends StyleProperty {
	public limit: SizeDimension;

	constructor(
		limit: SizeDimension
	) {
		super('max-width');

		this.limit = limit;
	}

	toValueString() {
		return `${this.limit}`;
	}
}

export const maxWidth = (limit: SizeDimension) => new MaxWidthStyleProperty(limit);

