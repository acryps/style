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

// text decoration line mode
export type TextDecorationLineMode = 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | Variable<TextDecorationLineMode> | Calculation<Partial<TextDecorationLineMode>>;

// text decoration line
export class TextDecorationLineStyleProperty extends StyleProperty {
	public modes: TextDecorationLineMode[];

	constructor(
		...modes: TextDecorationLineMode[]
	) {
		super('text-decoration-line');

		this.modes = modes;
	}

	toValueString() {
		return `${this.modes.join(' ')}`;
	}
}

export const textDecorationLine = (...modes: TextDecorationLineMode[]) => new TextDecorationLineStyleProperty(...modes);

// text decoration
export class TextDecorationStyleProperty extends StyleProperty {
	constructor(
		public textDecorationLine: TextDecorationLineStyleProperty
	) {
		super('text-decoration', [textDecorationLine]);
	}
}

export function textDecoration(textDecorationLine: TextDecorationLineStyleProperty): TextDecorationStyleProperty
export function textDecoration(...textDecorationLineModes: TextDecorationLineMode[]): TextDecorationStyleProperty
export function textDecoration(...modes: TextDecorationLineMode[]): TextDecorationStyleProperty
export function textDecoration(): TextDecorationStyleProperty {
	if (arguments[0] instanceof TextDecorationLineStyleProperty) { return new TextDecorationStyleProperty(arguments[0]); }
	if (arguments.length == 1) { return new TextDecorationStyleProperty(new TextDecorationLineStyleProperty(...arguments[0])); }
	if (arguments.length == 1) { return new TextDecorationStyleProperty(new TextDecorationLineStyleProperty(...arguments[0])); }
}

TextDecorationStyleProperty.shorthand = [TextDecorationLineStyleProperty];

