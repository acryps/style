import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { Length } from './primitives';

// margin left
export class MarginLeftStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('margin-left');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginLeft = (length: Length) => new MarginLeftStyleProperty(Style.resolveNumber('length', length));

// margin right
export class MarginRightStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('margin-right');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginRight = (length: Length) => new MarginRightStyleProperty(Style.resolveNumber('length', length));

// margin inline
export class MarginInlineStyleProperty extends StyleProperty {
	constructor(
		private marginLeft: MarginLeftStyleProperty,
		private marginRight: MarginRightStyleProperty
	) {
		super('margin-inline', [marginLeft, marginRight]);
	}
}

// margin top
export class MarginTopStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('margin-top');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginTop = (length: Length) => new MarginTopStyleProperty(Style.resolveNumber('length', length));

// margin bottom
export class MarginBottomStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('margin-bottom');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const marginBottom = (length: Length) => new MarginBottomStyleProperty(Style.resolveNumber('length', length));

// margin block
export class MarginBlockStyleProperty extends StyleProperty {
	constructor(
		private marginTop: MarginTopStyleProperty,
		private marginBottom: MarginBottomStyleProperty
	) {
		super('margin-block', [marginTop, marginBottom]);
	}
}

// margin
export class MarginStyleProperty extends StyleProperty {
	constructor(
		private marginInline: MarginInlineStyleProperty,
		private marginBlock: MarginBlockStyleProperty
	) {
		super('margin', [marginInline, marginBlock]);
	}
}

// padding left
export class PaddingLeftStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('padding-left');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingLeft = (length: Length) => new PaddingLeftStyleProperty(Style.resolveNumber('length', length));

// padding right
export class PaddingRightStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('padding-right');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingRight = (length: Length) => new PaddingRightStyleProperty(Style.resolveNumber('length', length));

// padding inline
export class PaddingInlineStyleProperty extends StyleProperty {
	constructor(
		private paddingLeft: PaddingLeftStyleProperty,
		private paddingRight: PaddingRightStyleProperty
	) {
		super('padding-inline', [paddingLeft, paddingRight]);
	}
}

// padding top
export class PaddingTopStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('padding-top');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingTop = (length: Length) => new PaddingTopStyleProperty(Style.resolveNumber('length', length));

// padding bottom
export class PaddingBottomStyleProperty extends StyleProperty {
	private length: Length;

	constructor(
		length: Length
	) {
		super('padding-bottom');

		this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export const paddingBottom = (length: Length) => new PaddingBottomStyleProperty(Style.resolveNumber('length', length));

// padding block
export class PaddingBlockStyleProperty extends StyleProperty {
	constructor(
		private paddingTop: PaddingTopStyleProperty,
		private paddingBottom: PaddingBottomStyleProperty
	) {
		super('padding-block', [paddingTop, paddingBottom]);
	}
}

// padding
export class PaddingStyleProperty extends StyleProperty {
	constructor(
		private paddingInline: PaddingInlineStyleProperty,
		private paddingBlock: PaddingBlockStyleProperty
	) {
		super('padding', [paddingInline, paddingBlock]);
	}
}

export function marginInline(marginLeft: MarginLeftStyleProperty, marginRight: MarginRightStyleProperty)
export function marginInline(marginLeftLength: Length, marginRightLength: Length)
export function marginInline(length: Length)
export function marginInline() {
	if (arguments[0] instanceof MarginLeftStyleProperty && arguments[1] instanceof MarginRightStyleProperty) { return new MarginInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new MarginInlineStyleProperty(new MarginLeftStyleProperty(Style.resolveNumber('length', arguments[0])), new MarginRightStyleProperty(Style.resolveNumber('length', arguments[1]))); }
	if (arguments.length == 1) { return new MarginInlineStyleProperty(new MarginLeftStyleProperty(Style.resolveNumber('length', arguments[0])), new MarginRightStyleProperty(Style.resolveNumber('length', arguments[0]))); }
}

MarginInlineStyleProperty.shorthand = [MarginLeftStyleProperty, MarginRightStyleProperty];

export function marginBlock(marginTop: MarginTopStyleProperty, marginBottom: MarginBottomStyleProperty)
export function marginBlock(marginTopLength: Length, marginBottomLength: Length)
export function marginBlock(length: Length)
export function marginBlock() {
	if (arguments[0] instanceof MarginTopStyleProperty && arguments[1] instanceof MarginBottomStyleProperty) { return new MarginBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new MarginBlockStyleProperty(new MarginTopStyleProperty(Style.resolveNumber('length', arguments[0])), new MarginBottomStyleProperty(Style.resolveNumber('length', arguments[1]))); }
	if (arguments.length == 1) { return new MarginBlockStyleProperty(new MarginTopStyleProperty(Style.resolveNumber('length', arguments[0])), new MarginBottomStyleProperty(Style.resolveNumber('length', arguments[0]))); }
}

MarginBlockStyleProperty.shorthand = [MarginTopStyleProperty, MarginBottomStyleProperty];

export function margin(marginInline: MarginInlineStyleProperty, marginBlock: MarginBlockStyleProperty)
export function margin(marginLeftLength: Length, marginRightLength: Length)
export function margin(length: Length)
export function margin() {
	if (arguments[0] instanceof MarginInlineStyleProperty && arguments[1] instanceof MarginBlockStyleProperty) { return new MarginStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new MarginStyleProperty(marginInline(arguments[0], arguments[1]), marginBlock(arguments[0], arguments[1])); }
	if (arguments.length == 1) { return new MarginStyleProperty(marginInline(arguments[0]), marginBlock(arguments[0])); }
}

MarginStyleProperty.shorthand = [MarginInlineStyleProperty, MarginBlockStyleProperty];

export function paddingInline(paddingLeft: PaddingLeftStyleProperty, paddingRight: PaddingRightStyleProperty)
export function paddingInline(paddingLeftLength: Length, paddingRightLength: Length)
export function paddingInline(length: Length)
export function paddingInline() {
	if (arguments[0] instanceof PaddingLeftStyleProperty && arguments[1] instanceof PaddingRightStyleProperty) { return new PaddingInlineStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new PaddingInlineStyleProperty(new PaddingLeftStyleProperty(Style.resolveNumber('length', arguments[0])), new PaddingRightStyleProperty(Style.resolveNumber('length', arguments[1]))); }
	if (arguments.length == 1) { return new PaddingInlineStyleProperty(new PaddingLeftStyleProperty(Style.resolveNumber('length', arguments[0])), new PaddingRightStyleProperty(Style.resolveNumber('length', arguments[0]))); }
}

PaddingInlineStyleProperty.shorthand = [PaddingLeftStyleProperty, PaddingRightStyleProperty];

export function paddingBlock(paddingTop: PaddingTopStyleProperty, paddingBottom: PaddingBottomStyleProperty)
export function paddingBlock(paddingTopLength: Length, paddingBottomLength: Length)
export function paddingBlock(length: Length)
export function paddingBlock() {
	if (arguments[0] instanceof PaddingTopStyleProperty && arguments[1] instanceof PaddingBottomStyleProperty) { return new PaddingBlockStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new PaddingBlockStyleProperty(new PaddingTopStyleProperty(Style.resolveNumber('length', arguments[0])), new PaddingBottomStyleProperty(Style.resolveNumber('length', arguments[1]))); }
	if (arguments.length == 1) { return new PaddingBlockStyleProperty(new PaddingTopStyleProperty(Style.resolveNumber('length', arguments[0])), new PaddingBottomStyleProperty(Style.resolveNumber('length', arguments[0]))); }
}

PaddingBlockStyleProperty.shorthand = [PaddingTopStyleProperty, PaddingBottomStyleProperty];

export function padding(paddingInline: PaddingInlineStyleProperty, paddingBlock: PaddingBlockStyleProperty)
export function padding(paddingLeftLength: Length, paddingRightLength: Length)
export function padding(length: Length)
export function padding() {
	if (arguments[0] instanceof PaddingInlineStyleProperty && arguments[1] instanceof PaddingBlockStyleProperty) { return new PaddingStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new PaddingStyleProperty(paddingInline(arguments[0], arguments[1]), paddingBlock(arguments[0], arguments[1])); }
	if (arguments.length == 1) { return new PaddingStyleProperty(paddingInline(arguments[0]), paddingBlock(arguments[0])); }
}

PaddingStyleProperty.shorthand = [PaddingInlineStyleProperty, PaddingBlockStyleProperty];

