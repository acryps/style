import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// text decoration line mode
export type TextDecorationLineMode = 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | Variable<TextDecorationLineMode> | Calculation<Partial<TextDecorationLineMode>>;

// text decoration line
export class TextDecorationLineStyleProperty extends StyleProperty {
	private modes: TextDecorationLineMode[];

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

