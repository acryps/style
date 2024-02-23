import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Length } from './primitives';

// spacing length
export type SpacingLength = 'auto' | Length | Variable<SpacingLength> | Calculation<Partial<SpacingLength>>;

// margin left
export class MarginLeftStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('margin-left');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginLeft = (length: SpacingLength) => new MarginLeftStyleProperty(length);

// margin right
export class MarginRightStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('margin-right');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginRight = (length: SpacingLength) => new MarginRightStyleProperty(length);

// margin inline
export class MarginInlineStyleProperty extends StyleProperty {
	constructor(
		public marginLeft: MarginLeftStyleProperty,
		public marginRight: MarginRightStyleProperty
	) {
		super('margin-inline', [marginLeft, marginRight]);
	}
}

// margin top
export class MarginTopStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('margin-top');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginTop = (length: SpacingLength) => new MarginTopStyleProperty(length);

// margin bottom
export class MarginBottomStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('margin-bottom');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginBottom = (length: SpacingLength) => new MarginBottomStyleProperty(length);

// margin block
export class MarginBlockStyleProperty extends StyleProperty {
	constructor(
		public marginTop: MarginTopStyleProperty,
		public marginBottom: MarginBottomStyleProperty
	) {
		super('margin-block', [marginTop, marginBottom]);
	}
}

// margin
export class MarginStyleProperty extends StyleProperty {
	constructor(
		public marginInline: MarginInlineStyleProperty,
		public marginBlock: MarginBlockStyleProperty
	) {
		super('margin', [marginInline, marginBlock]);
	}
}

// padding left
export class PaddingLeftStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('padding-left');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingLeft = (length: SpacingLength) => new PaddingLeftStyleProperty(length);

// padding right
export class PaddingRightStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('padding-right');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingRight = (length: SpacingLength) => new PaddingRightStyleProperty(length);

// padding inline
export class PaddingInlineStyleProperty extends StyleProperty {
	constructor(
		public paddingLeft: PaddingLeftStyleProperty,
		public paddingRight: PaddingRightStyleProperty
	) {
		super('padding-inline', [paddingLeft, paddingRight]);
	}
}

// padding top
export class PaddingTopStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('padding-top');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingTop = (length: SpacingLength) => new PaddingTopStyleProperty(length);

// padding bottom
export class PaddingBottomStyleProperty extends StyleProperty {
	static properties = ['length'];

	public length: SpacingLength;

	constructor(
		length: SpacingLength
	) {
		super('padding-bottom');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingBottom = (length: SpacingLength) => new PaddingBottomStyleProperty(length);

// padding block
export class PaddingBlockStyleProperty extends StyleProperty {
	constructor(
		public paddingTop: PaddingTopStyleProperty,
		public paddingBottom: PaddingBottomStyleProperty
	) {
		super('padding-block', [paddingTop, paddingBottom]);
	}
}

// padding
export class PaddingStyleProperty extends StyleProperty {
	constructor(
		public paddingInline: PaddingInlineStyleProperty,
		public paddingBlock: PaddingBlockStyleProperty
	) {
		super('padding', [paddingInline, paddingBlock]);
	}
}

export function marginInline(marginLeft: MarginLeftStyleProperty, marginRight: MarginRightStyleProperty): MarginInlineStyleProperty
export function marginInline(marginLeftLength: SpacingLength, marginRightLength: SpacingLength): MarginInlineStyleProperty
export function marginInline(length: SpacingLength): MarginInlineStyleProperty
export function marginInline(): MarginInlineStyleProperty {
	if (arguments[0] instanceof MarginLeftStyleProperty && arguments[1] instanceof MarginRightStyleProperty) { return new MarginInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new MarginInlineStyleProperty(new MarginLeftStyleProperty(arguments[0]), new MarginRightStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new MarginInlineStyleProperty(new MarginLeftStyleProperty(arguments[0]), new MarginRightStyleProperty(arguments[0])); }
}

MarginInlineStyleProperty.shorthand = [MarginLeftStyleProperty, MarginRightStyleProperty];

export function marginBlock(marginTop: MarginTopStyleProperty, marginBottom: MarginBottomStyleProperty): MarginBlockStyleProperty
export function marginBlock(marginTopLength: SpacingLength, marginBottomLength: SpacingLength): MarginBlockStyleProperty
export function marginBlock(length: SpacingLength): MarginBlockStyleProperty
export function marginBlock(): MarginBlockStyleProperty {
	if (arguments[0] instanceof MarginTopStyleProperty && arguments[1] instanceof MarginBottomStyleProperty) { return new MarginBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new MarginBlockStyleProperty(new MarginTopStyleProperty(arguments[0]), new MarginBottomStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new MarginBlockStyleProperty(new MarginTopStyleProperty(arguments[0]), new MarginBottomStyleProperty(arguments[0])); }
}

MarginBlockStyleProperty.shorthand = [MarginTopStyleProperty, MarginBottomStyleProperty];

export function margin(marginInline: MarginInlineStyleProperty, marginBlock: MarginBlockStyleProperty): MarginStyleProperty
export function margin(marginLeftLength: SpacingLength, marginRightLength: SpacingLength): MarginStyleProperty
export function margin(length: SpacingLength): MarginStyleProperty
export function margin(): MarginStyleProperty {
	if (arguments[0] instanceof MarginInlineStyleProperty && arguments[1] instanceof MarginBlockStyleProperty) { return new MarginStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new MarginStyleProperty(marginInline(arguments[0], arguments[1]), marginBlock(arguments[0], arguments[1])); }
	if (arguments.length == 1) { return new MarginStyleProperty(marginInline(arguments[0]), marginBlock(arguments[0])); }
}

MarginStyleProperty.shorthand = [MarginInlineStyleProperty, MarginBlockStyleProperty];

export function paddingInline(paddingLeft: PaddingLeftStyleProperty, paddingRight: PaddingRightStyleProperty): PaddingInlineStyleProperty
export function paddingInline(paddingLeftLength: SpacingLength, paddingRightLength: SpacingLength): PaddingInlineStyleProperty
export function paddingInline(length: SpacingLength): PaddingInlineStyleProperty
export function paddingInline(): PaddingInlineStyleProperty {
	if (arguments[0] instanceof PaddingLeftStyleProperty && arguments[1] instanceof PaddingRightStyleProperty) { return new PaddingInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new PaddingInlineStyleProperty(new PaddingLeftStyleProperty(arguments[0]), new PaddingRightStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new PaddingInlineStyleProperty(new PaddingLeftStyleProperty(arguments[0]), new PaddingRightStyleProperty(arguments[0])); }
}

PaddingInlineStyleProperty.shorthand = [PaddingLeftStyleProperty, PaddingRightStyleProperty];

export function paddingBlock(paddingTop: PaddingTopStyleProperty, paddingBottom: PaddingBottomStyleProperty): PaddingBlockStyleProperty
export function paddingBlock(paddingTopLength: SpacingLength, paddingBottomLength: SpacingLength): PaddingBlockStyleProperty
export function paddingBlock(length: SpacingLength): PaddingBlockStyleProperty
export function paddingBlock(): PaddingBlockStyleProperty {
	if (arguments[0] instanceof PaddingTopStyleProperty && arguments[1] instanceof PaddingBottomStyleProperty) { return new PaddingBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new PaddingBlockStyleProperty(new PaddingTopStyleProperty(arguments[0]), new PaddingBottomStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new PaddingBlockStyleProperty(new PaddingTopStyleProperty(arguments[0]), new PaddingBottomStyleProperty(arguments[0])); }
}

PaddingBlockStyleProperty.shorthand = [PaddingTopStyleProperty, PaddingBottomStyleProperty];

export function padding(paddingInline: PaddingInlineStyleProperty, paddingBlock: PaddingBlockStyleProperty): PaddingStyleProperty
export function padding(paddingLeftLength: SpacingLength, paddingRightLength: SpacingLength): PaddingStyleProperty
export function padding(length: SpacingLength): PaddingStyleProperty
export function padding(): PaddingStyleProperty {
	if (arguments[0] instanceof PaddingInlineStyleProperty && arguments[1] instanceof PaddingBlockStyleProperty) { return new PaddingStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new PaddingStyleProperty(paddingInline(arguments[0], arguments[1]), paddingBlock(arguments[0], arguments[1])); }
	if (arguments.length == 1) { return new PaddingStyleProperty(paddingInline(arguments[0]), paddingBlock(arguments[0])); }
}

PaddingStyleProperty.shorthand = [PaddingInlineStyleProperty, PaddingBlockStyleProperty];

