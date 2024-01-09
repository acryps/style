import { Length } from './numbers';

// margin left
export class MarginLeftStyleProperty {
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

export const marginLeft = (length: Length) => new MarginLeftStyleProperty(length);

// margin right
export class MarginRightStyleProperty {
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

export const marginRight = (length: Length) => new MarginRightStyleProperty(length);

// margin inline
export class MarginInlineStyleProperty {

}

// margin top
export class MarginTopStyleProperty {
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

export const marginTop = (length: Length) => new MarginTopStyleProperty(length);

// margin bottom
export class MarginBottomStyleProperty {
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

export const marginBottom = (length: Length) => new MarginBottomStyleProperty(length);

// margin block
export class MarginBlockStyleProperty {

}

// margin
export class MarginStyleProperty {

}

// padding left
export class PaddingLeftStyleProperty {
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

export const paddingLeft = (length: Length) => new PaddingLeftStyleProperty(length);

// padding right
export class PaddingRightStyleProperty {
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

export const paddingRight = (length: Length) => new PaddingRightStyleProperty(length);

// padding inline
export class PaddingInlineStyleProperty {

}

// padding top
export class PaddingTopStyleProperty {
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

export const paddingTop = (length: Length) => new PaddingTopStyleProperty(length);

// padding bottom
export class PaddingBottomStyleProperty {
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

export const paddingBottom = (length: Length) => new PaddingBottomStyleProperty(length);

// padding block
export class PaddingBlockStyleProperty {

}

// padding
export class PaddingStyleProperty {

}

export function marginInline(marginLeft: MarginLeftStyleProperty, marginRight: MarginRightStyleProperty)
export function marginInline(marginLeftLength: Length, marginRightLength: Length)
export function marginInline(length: Length)
export function marginInline() {
	if (arguments[0] instanceof MarginLeftStyleProperty && arguments[1] instanceof MarginRightStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [new MarginLeftStyleProperty(arguments[0]), new MarginRightStyleProperty(arguments[1])] }
	if (arguments.length == 1) { return [new MarginLeftStyleProperty(arguments[0]), new MarginRightStyleProperty(arguments[0])] }
}

export function marginBlock(marginTop: MarginTopStyleProperty, marginBottom: MarginBottomStyleProperty)
export function marginBlock(marginTopLength: Length, marginBottomLength: Length)
export function marginBlock(length: Length)
export function marginBlock() {
	if (arguments[0] instanceof MarginTopStyleProperty && arguments[1] instanceof MarginBottomStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [new MarginTopStyleProperty(arguments[0]), new MarginBottomStyleProperty(arguments[1])] }
	if (arguments.length == 1) { return [new MarginTopStyleProperty(arguments[0]), new MarginBottomStyleProperty(arguments[0])] }
}

export function margin(marginInline: MarginInlineStyleProperty, marginBlock: MarginBlockStyleProperty)
export function margin(marginLeftLength: Length, marginRightLength: Length)
export function margin(length: Length)
export function margin() {
	if (arguments[0] instanceof MarginInlineStyleProperty && arguments[1] instanceof MarginBlockStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [marginInline(arguments[0], arguments[1]), marginBlock(arguments[0], arguments[1])] }
	if (arguments.length == 1) { return [marginInline(arguments[0]), marginBlock(arguments[0])] }
}

export function paddingInline(paddingLeft: PaddingLeftStyleProperty, paddingRight: PaddingRightStyleProperty)
export function paddingInline(paddingLeftLength: Length, paddingRightLength: Length)
export function paddingInline(length: Length)
export function paddingInline() {
	if (arguments[0] instanceof PaddingLeftStyleProperty && arguments[1] instanceof PaddingRightStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [new PaddingLeftStyleProperty(arguments[0]), new PaddingRightStyleProperty(arguments[1])] }
	if (arguments.length == 1) { return [new PaddingLeftStyleProperty(arguments[0]), new PaddingRightStyleProperty(arguments[0])] }
}

export function paddingBlock(paddingTop: PaddingTopStyleProperty, paddingBottom: PaddingBottomStyleProperty)
export function paddingBlock(paddingTopLength: Length, paddingBottomLength: Length)
export function paddingBlock(length: Length)
export function paddingBlock() {
	if (arguments[0] instanceof PaddingTopStyleProperty && arguments[1] instanceof PaddingBottomStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [new PaddingTopStyleProperty(arguments[0]), new PaddingBottomStyleProperty(arguments[1])] }
	if (arguments.length == 1) { return [new PaddingTopStyleProperty(arguments[0]), new PaddingBottomStyleProperty(arguments[0])] }
}

export function padding(paddingInline: PaddingInlineStyleProperty, paddingBlock: PaddingBlockStyleProperty)
export function padding(paddingLeftLength: Length, paddingRightLength: Length)
export function padding(length: Length)
export function padding() {
	if (arguments[0] instanceof PaddingInlineStyleProperty && arguments[1] instanceof PaddingBlockStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [paddingInline(arguments[0], arguments[1]), paddingBlock(arguments[0], arguments[1])] }
	if (arguments.length == 1) { return [paddingInline(arguments[0]), paddingBlock(arguments[0])] }
}

