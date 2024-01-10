import { Style } from '../index';
import { StyleProperty } from '../property';

import { Number } from './primitives';

// line height size
export type LineHeightSize = Number;

// line height
export class LineHeightStyleProperty extends StyleProperty {
	private size: LineHeightSize;

	constructor(
		size: LineHeightSize
	) {
		super('line-height');

		this.size = size;
	}

	toValueString() {
		return `${this.size}`;
	}
}

export const lineHeight = (size: LineHeightSize) => new LineHeightStyleProperty(size);

