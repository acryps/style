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
		private overflowX: OverflowXStyleProperty,
		private overflowY: OverflowYStyleProperty
	) {
		super('overflow', [overflowX, overflowY]);
	}
}

// overflow x
export class OverflowXStyleProperty extends StyleProperty {
	private mode: OverflowMode;

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
	private mode: OverflowMode;

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

export function overflow(overflowX: OverflowXStyleProperty, overflowY: OverflowYStyleProperty)
export function overflow(overflowXMode: OverflowMode, overflowYMode: OverflowMode)
export function overflow(mode: OverflowMode)
export function overflow() {
	if (arguments[0] instanceof OverflowXStyleProperty && arguments[1] instanceof OverflowYStyleProperty) { return new OverflowStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new OverflowStyleProperty(new OverflowXStyleProperty(arguments[0]), new OverflowYStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new OverflowStyleProperty(new OverflowXStyleProperty(arguments[0]), new OverflowYStyleProperty(arguments[0])); }
}

OverflowStyleProperty.shorthand = [OverflowXStyleProperty, OverflowYStyleProperty];

