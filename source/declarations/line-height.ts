import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { Number } from './primitives';

// line height size
export type LineHeightSize = Number | Variable<LineHeightSize>;

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

