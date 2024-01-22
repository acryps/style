import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// text alignment direction
export type TextAlignmentDirection = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'match-parent' | Variable<TextAlignmentDirection> | Calculation<Partial<TextAlignmentDirection>>;

// text align
export class TextAlignStyleProperty extends StyleProperty {
	public direction: TextAlignmentDirection;

	constructor(
		direction: TextAlignmentDirection
	) {
		super('text-align');

		this.direction = direction;
	}

	toValueString() {
		return `${this.direction}`;
	}
}

export const textAlign = (direction: TextAlignmentDirection) => new TextAlignStyleProperty(direction);

// text transformation mode
export type TextTransformationMode = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana' | Variable<TextTransformationMode> | Calculation<Partial<TextTransformationMode>>;

// text transform
export class TextTransformStyleProperty extends StyleProperty {
	public mode: TextTransformationMode;

	constructor(
		mode: TextTransformationMode
	) {
		super('text-transform');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const textTransform = (mode: TextTransformationMode) => new TextTransformStyleProperty(mode);

// text wrap mode
export type TextWrapMode = 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable' | Variable<TextWrapMode> | Calculation<Partial<TextWrapMode>>;

// text wrap
export class TextWrapStyleProperty extends StyleProperty {
	public mode: TextWrapMode;

	constructor(
		mode: TextWrapMode
	) {
		super('text-wrap');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const textWrap = (mode: TextWrapMode) => new TextWrapStyleProperty(mode);

