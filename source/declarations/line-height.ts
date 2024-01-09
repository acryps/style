import { Number } from './primitives';

// line height size
export type LineHeightSize = Number;

// line height
export class LineHeightStyleProperty {
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

