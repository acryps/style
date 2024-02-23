import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// white space mode
export type WhiteSpaceMode = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces' | Variable<WhiteSpaceMode> | Calculation<Partial<WhiteSpaceMode>>;

// white space
export class WhiteSpaceStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: WhiteSpaceMode;

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
export type OverflowWrapMode = 'normal' | 'break-word' | 'anywhere' | Variable<OverflowWrapMode> | Calculation<Partial<OverflowWrapMode>>;

// overflow wrap
export class OverflowWrapStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: OverflowWrapMode;

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
export type WordBreakMode = 'normal' | 'break-word' | 'keep-all' | 'auto-phrase' | Variable<WordBreakMode> | Calculation<Partial<WordBreakMode>>;

// word break
export class WordBreakStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: WordBreakMode;

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
export type HyphensMode = 'none' | 'manual' | 'auto' | Variable<HyphensMode> | Calculation<Partial<HyphensMode>>;

// hyphens
export class HyphensStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: HyphensMode;

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

