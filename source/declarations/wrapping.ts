import { Style } from '../index';
import { StyleProperty } from '../property';



// white space mode
export type WhiteSpaceMode = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';

// white space
export class WhiteSpaceStyleProperty extends StyleProperty {
	private mode: WhiteSpaceMode;

	constructor(
		mode: WhiteSpaceMode
	) {
		super('white-space');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const whiteSpace = (mode: WhiteSpaceMode) => new WhiteSpaceStyleProperty(mode);

// overflow wrap mode
export type OverflowWrapMode = 'normal' | 'break-word' | 'anywhere';

// overflow wrap
export class OverflowWrapStyleProperty extends StyleProperty {
	private mode: OverflowWrapMode;

	constructor(
		mode: OverflowWrapMode
	) {
		super('overflow-wrap');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const overflowWrap = (mode: OverflowWrapMode) => new OverflowWrapStyleProperty(mode);

// word break mode
export type WordBreakMode = 'normal' | 'break-word' | 'keep-all' | 'auto-phrase';

// word break
export class WordBreakStyleProperty extends StyleProperty {
	private mode: WordBreakMode;

	constructor(
		mode: WordBreakMode
	) {
		super('word-break');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const wordBreak = (mode: WordBreakMode) => new WordBreakStyleProperty(mode);

// hyphens mode
export type HyphensMode = 'none' | 'manual' | 'auto';

// hyphens
export class HyphensStyleProperty extends StyleProperty {
	private mode: HyphensMode;

	constructor(
		mode: HyphensMode
	) {
		super('hyphens');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const hyphens = (mode: HyphensMode) => new HyphensStyleProperty(mode);

