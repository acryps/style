import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Length } from './primitives';

// position mode
export type PositionMode = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | Variable<PositionMode> | Calculation<Partial<PositionMode>>;

// position
export class PositionStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: PositionMode;

	constructor(
		mode: PositionMode
	) {
		super('position');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const position = (mode: PositionMode) => new PositionStyleProperty(mode);

// inset inline
export class InsetInlineStyleProperty extends StyleProperty {
	constructor(
		public left: LeftStyleProperty,
		public right: RightStyleProperty
	) {
		super('inset-inline', [left, right]);
	}
}

// inset block
export class InsetBlockStyleProperty extends StyleProperty {
	constructor(
		public top: TopStyleProperty,
		public bottom: BottomStyleProperty
	) {
		super('inset-block', [top, bottom]);
	}
}

// inset
export class InsetStyleProperty extends StyleProperty {
	constructor(
		public insetInline: InsetInlineStyleProperty,
		public insetBlock: InsetBlockStyleProperty
	) {
		super('inset', [insetInline, insetBlock]);
	}
}

// left
export class LeftStyleProperty extends StyleProperty {
	static properties = ['offset'];

	public offset: Length;

	constructor(
		offset: Length
	) {
		super('left');

		this.offset = offset;
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export const left = (offset: Length) => new LeftStyleProperty(offset);

// right
export class RightStyleProperty extends StyleProperty {
	static properties = ['offset'];

	public offset: Length;

	constructor(
		offset: Length
	) {
		super('right');

		this.offset = offset;
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export const right = (offset: Length) => new RightStyleProperty(offset);

// top
export class TopStyleProperty extends StyleProperty {
	static properties = ['offset'];

	public offset: Length;

	constructor(
		offset: Length
	) {
		super('top');

		this.offset = offset;
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export const top = (offset: Length) => new TopStyleProperty(offset);

// bottom
export class BottomStyleProperty extends StyleProperty {
	static properties = ['offset'];

	public offset: Length;

	constructor(
		offset: Length
	) {
		super('bottom');

		this.offset = offset;
	}

	toValueString() {
		return `${this.offset}`;
	}
}

export const bottom = (offset: Length) => new BottomStyleProperty(offset);

export function insetInline(left: LeftStyleProperty, right: RightStyleProperty): InsetInlineStyleProperty
export function insetInline(leftOffset: Length, rightOffset: Length): InsetInlineStyleProperty
export function insetInline(offset: Length): InsetInlineStyleProperty
export function insetInline(): InsetInlineStyleProperty {
	if (arguments[0] instanceof LeftStyleProperty && arguments[1] instanceof RightStyleProperty) { return new InsetInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new InsetInlineStyleProperty(new LeftStyleProperty(arguments[0]), new RightStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new InsetInlineStyleProperty(new LeftStyleProperty(arguments[0]), new RightStyleProperty(arguments[0])); }
}

InsetInlineStyleProperty.shorthand = [LeftStyleProperty, RightStyleProperty];

export function insetBlock(top: TopStyleProperty, bottom: BottomStyleProperty): InsetBlockStyleProperty
export function insetBlock(topOffset: Length, bottomOffset: Length): InsetBlockStyleProperty
export function insetBlock(offset: Length): InsetBlockStyleProperty
export function insetBlock(): InsetBlockStyleProperty {
	if (arguments[0] instanceof TopStyleProperty && arguments[1] instanceof BottomStyleProperty) { return new InsetBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new InsetBlockStyleProperty(new TopStyleProperty(arguments[0]), new BottomStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new InsetBlockStyleProperty(new TopStyleProperty(arguments[0]), new BottomStyleProperty(arguments[0])); }
}

InsetBlockStyleProperty.shorthand = [TopStyleProperty, BottomStyleProperty];

export function inset(insetInline: InsetInlineStyleProperty, insetBlock: InsetBlockStyleProperty): InsetStyleProperty
export function inset(leftOffset: Length, rightOffset: Length): InsetStyleProperty
export function inset(offset: Length): InsetStyleProperty
export function inset(): InsetStyleProperty {
	if (arguments[0] instanceof InsetInlineStyleProperty && arguments[1] instanceof InsetBlockStyleProperty) { return new InsetStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new InsetStyleProperty(insetInline(arguments[0], arguments[1]), insetBlock(arguments[0], arguments[1])); }
	if (arguments.length == 1) { return new InsetStyleProperty(insetInline(arguments[0]), insetBlock(arguments[0])); }
}

InsetStyleProperty.shorthand = [InsetInlineStyleProperty, InsetBlockStyleProperty];

