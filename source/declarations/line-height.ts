import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Number } from './primitives';
import { Length } from './primitives';

// line height size
export type LineHeightSize = Number | Length | Variable<LineHeightSize> | Calculation<Partial<LineHeightSize>>;

// line height
export class LineHeightStyleProperty extends StyleProperty {
	static properties = ['size'];

	public size: LineHeightSize;

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

