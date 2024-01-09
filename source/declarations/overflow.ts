

// overflow mode
export type OverflowMode = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

// overflow
export class OverflowStyleProperty {

}

// overflow x
export class OverflowXStyleProperty {
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
export class OverflowYStyleProperty {
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
	if (arguments[0] instanceof OverflowXStyleProperty && arguments[1] instanceof OverflowYStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [new OverflowXStyleProperty(arguments[0]), new OverflowYStyleProperty(arguments[1])] }
	if (arguments.length == 1) { return [new OverflowXStyleProperty(arguments[0]), new OverflowYStyleProperty(arguments[0])] }
}

