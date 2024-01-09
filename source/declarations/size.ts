import { Length } from './primitives';
import { Percentage } from './primitives';

// size dimension
export type SizeDimension = Length | Percentage | 'auto' | 'max-content' | 'min-content' | 'fit-content';

// height
export class HeightStyleProperty {
	private size: SizeDimension;

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

// width
export class WidthStyleProperty {
	private size: SizeDimension;

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

