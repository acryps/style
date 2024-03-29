import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// overflow mode
export type OverflowMode = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | Variable<OverflowMode> | Calculation<Partial<OverflowMode>>;

// overflow
export class OverflowStyleProperty extends StyleProperty {
	constructor(
		public overflowX: OverflowXStyleProperty,
		public overflowY: OverflowYStyleProperty
	) {
		super('overflow', [overflowX, overflowY]);
	}
}

// text overflow mode
export type TextOverflowMode = 'clip' | 'ellipsis' | Variable<TextOverflowMode> | Calculation<Partial<TextOverflowMode>>;

// text overflow
export class TextOverflowStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: TextOverflowMode;

	constructor(
		mode: TextOverflowMode
	) {
		super('text-overflow');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const textOverflow = (mode: TextOverflowMode) => new TextOverflowStyleProperty(mode);

// overflow x
export class OverflowXStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: OverflowMode;

	constructor(
		mode: OverflowMode
	) {
		super('overflow-x');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const overflowX = (mode: OverflowMode) => new OverflowXStyleProperty(mode);

// overflow y
export class OverflowYStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: OverflowMode;

	constructor(
		mode: OverflowMode
	) {
		super('overflow-y');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const overflowY = (mode: OverflowMode) => new OverflowYStyleProperty(mode);

export function overflow(overflowX: OverflowXStyleProperty, overflowY: OverflowYStyleProperty): OverflowStyleProperty
export function overflow(overflowXMode: OverflowMode, overflowYMode: OverflowMode): OverflowStyleProperty
export function overflow(mode: OverflowMode): OverflowStyleProperty
export function overflow(): OverflowStyleProperty {
	if (arguments[0] instanceof OverflowXStyleProperty && arguments[1] instanceof OverflowYStyleProperty) { return new OverflowStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new OverflowStyleProperty(new OverflowXStyleProperty(arguments[0]), new OverflowYStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new OverflowStyleProperty(new OverflowXStyleProperty(arguments[0]), new OverflowYStyleProperty(arguments[0])); }
}

OverflowStyleProperty.shorthand = [OverflowXStyleProperty, OverflowYStyleProperty];

