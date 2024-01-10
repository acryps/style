import { Style } from '../style';
import { StyleProperty } from '../property';

import { Length } from './primitives';
import { Integer } from './primitives';
import { String } from './primitives';

// alignment mode
export type AlignmentMode = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';

// items alignment mode
export type ItemsAlignmentMode = AlignmentMode | 'self-start' | 'self-end';

// self alignment mode
export type SelfAlignmentMode = ItemsAlignmentMode | 'auto';

// distributed alignment mode
export type DistributedAlignmentMode = AlignmentMode | 'space-between' | 'space-around' | 'space-evenly';

// justification mode
export type JustificationMode = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right';

// items justification mode
export type ItemsJustificationMode = JustificationMode | 'self-start' | 'self-end';

// self justification mode
export type SelfJustificationMode = ItemsJustificationMode | 'auto';

// distributed justification mode
export type DistributedJustificationMode = JustificationMode | 'space-between' | 'space-around' | 'space-evenly';

// align items
export class AlignItemsStyleProperty extends StyleProperty {
	private mode: ItemsAlignmentMode;

	constructor(
		mode: ItemsAlignmentMode
	) {
		super('align-items');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const alignItems = (mode: ItemsAlignmentMode) => new AlignItemsStyleProperty(mode);

// align content
export class AlignContentStyleProperty extends StyleProperty {
	private mode: ItemsAlignmentMode;

	constructor(
		mode: ItemsAlignmentMode
	) {
		super('align-content');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const alignContent = (mode: ItemsAlignmentMode) => new AlignContentStyleProperty(mode);

// align self
export class AlignSelfStyleProperty extends StyleProperty {
	private mode: SelfAlignmentMode;

	constructor(
		mode: SelfAlignmentMode
	) {
		super('align-self');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const alignSelf = (mode: SelfAlignmentMode) => new AlignSelfStyleProperty(mode);

// justify items
export class JustifyItemsStyleProperty extends StyleProperty {
	private mode: ItemsJustificationMode;

	constructor(
		mode: ItemsJustificationMode
	) {
		super('justify-items');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const justifyItems = (mode: ItemsJustificationMode) => new JustifyItemsStyleProperty(mode);

// justify content
export class JustifyContentStyleProperty extends StyleProperty {
	private mode: ItemsJustificationMode;

	constructor(
		mode: ItemsJustificationMode
	) {
		super('justify-content');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const justifyContent = (mode: ItemsJustificationMode) => new JustifyContentStyleProperty(mode);

// justify self
export class JustifySelfStyleProperty extends StyleProperty {
	private mode: SelfJustificationMode;

	constructor(
		mode: SelfJustificationMode
	) {
		super('justify-self');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const justifySelf = (mode: SelfJustificationMode) => new JustifySelfStyleProperty(mode);

// gap
export class GapStyleProperty extends StyleProperty {
	constructor(
		private columnGap: ColumnGapStyleProperty,
		private rowGap: RowGapStyleProperty
	) {
		super('gap', [columnGap, rowGap]);
	}
}

// flex basis mode
export type FlexBasisMode = Length | 'auto' | 'max-content' | 'min-content' | 'fit-content' | 'content';

// flex basis
export class FlexBasisStyleProperty extends StyleProperty {
	private mode: FlexBasisMode;

	constructor(
		mode: FlexBasisMode
	) {
		super('flex-basis');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const flexBasis = (mode: FlexBasisMode) => new FlexBasisStyleProperty(mode);

// flex direction mode
export type FlexDirectionMode = 'row' | 'row-reverse' | 'column' | 'column-reverse';

// flex direction
export class FlexDirectionStyleProperty extends StyleProperty {
	private mode: FlexDirectionMode;

	constructor(
		mode: FlexDirectionMode
	) {
		super('flex-direction');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const flexDirection = (mode: FlexDirectionMode) => new FlexDirectionStyleProperty(mode);

// flex wrap mode
export type FlexWrapMode = 'nowrap' | 'wrap' | 'wrap-reverse';

// flex wrap
export class FlexWrapStyleProperty extends StyleProperty {
	private mode: FlexWrapMode;

	constructor(
		mode: FlexWrapMode
	) {
		super('flex-wrap');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const flexWrap = (mode: FlexWrapMode) => new FlexWrapStyleProperty(mode);

// span query
export type SpanQuery = Integer | String;

// span
export class Span {
	private query: SpanQuery;

	constructor(
		query: SpanQuery
	) {
		this.query = query;
	}

	toString() {
		return `span ${this.query}`;
	}
}

export function span(query: SpanQuery) { return new Span(query); }

// area span
export class AreaSpan {
	private length: Integer;
	private area: String;

	constructor(
		length: Integer,
		area: String
	) {
		this.length = length;
		this.area = area;
	
		if (length == 0) {
			throw new Error('Invalid area span length 0');
		}
	
		if (Math.floor(length) != length) {
			throw new Error('Area span must be an integer');
		}
	}

	toString() {
		return `${this.area} ${this.length}`;
	}
}

export function areaSpan(length: Integer, area: String) { return new AreaSpan(length, area); }

// grid area selector
export type GridAreaSelector = String | 'auto' | Span | AreaSpan;

// gird area
export class GirdAreaStyleProperty extends StyleProperty {
	constructor(
		private gridRowStart: GridRowStartStyleProperty,
		private gridColumnStart: GridColumnStartStyleProperty,
		private gridRowEnd: GridRowEndStyleProperty,
		private gridColumnEnd: GridColumnEndStyleProperty
	) {
		super('gird-area', [gridRowStart, gridColumnStart, gridRowEnd, gridColumnEnd]);
	}
}

// grid template area name
export type GridTemplateAreaName = '.' | String;

// grid template areas
export class GridTemplateAreasStyleProperty extends StyleProperty {
	private rows: GridTemplateAreaName[][];

	constructor(
		...rows: GridTemplateAreaName[][]
	) {
		super('grid-template-areas');

		this.rows = rows;
	}

	toValueString() {
		return `${this.rows.map(row => `"${row.join(' ')}"`).join(' ')}`;
	}
}

export const gridTemplateAreas = (...rows: GridTemplateAreaName[][]) => new GridTemplateAreasStyleProperty(...rows);

// column gap
export class ColumnGapStyleProperty extends StyleProperty {
	private distance: Length;

	constructor(
		distance: Length
	) {
		super('column-gap');

		this.distance = distance;
	}

	toValueString() {
		return `${this.distance}`;
	}
}

export const columnGap = (distance: Length) => new ColumnGapStyleProperty(distance);

// row gap
export class RowGapStyleProperty extends StyleProperty {
	private distance: Length;

	constructor(
		distance: Length
	) {
		super('row-gap');

		this.distance = distance;
	}

	toValueString() {
		return `${this.distance}`;
	}
}

export const rowGap = (distance: Length) => new RowGapStyleProperty(distance);

// flex grow
export class FlexGrowStyleProperty extends StyleProperty {
	private order: Integer;

	constructor(
		order: Integer
	) {
		super('flex-grow');

		this.order = order;
	}

	toValueString() {
		return `${this.order}`;
	}
}

export const flexGrow = (order: Integer) => new FlexGrowStyleProperty(order);

// flex shrink
export class FlexShrinkStyleProperty extends StyleProperty {
	private order: Integer;

	constructor(
		order: Integer
	) {
		super('flex-shrink');

		this.order = order;
	}

	toValueString() {
		return `${this.order}`;
	}
}

export const flexShrink = (order: Integer) => new FlexShrinkStyleProperty(order);

// grid row start
export class GridRowStartStyleProperty extends StyleProperty {
	private selector: GridAreaSelector;

	constructor(
		selector: GridAreaSelector
	) {
		super('grid-row-start');

		this.selector = selector;
	}

	toValueString() {
		return `${this.selector}`;
	}
}

export const gridRowStart = (selector: GridAreaSelector) => new GridRowStartStyleProperty(selector);

// grid column start
export class GridColumnStartStyleProperty extends StyleProperty {
	private selector: GridAreaSelector;

	constructor(
		selector: GridAreaSelector
	) {
		super('grid-column-start');

		this.selector = selector;
	}

	toValueString() {
		return `${this.selector}`;
	}
}

export const gridColumnStart = (selector: GridAreaSelector) => new GridColumnStartStyleProperty(selector);

// grid row end
export class GridRowEndStyleProperty extends StyleProperty {
	private selector: GridAreaSelector;

	constructor(
		selector: GridAreaSelector
	) {
		super('grid-row-end');

		this.selector = selector;
	}

	toValueString() {
		return `${this.selector}`;
	}
}

export const gridRowEnd = (selector: GridAreaSelector) => new GridRowEndStyleProperty(selector);

// grid column end
export class GridColumnEndStyleProperty extends StyleProperty {
	private selector: GridAreaSelector;

	constructor(
		selector: GridAreaSelector
	) {
		super('grid-column-end');

		this.selector = selector;
	}

	toValueString() {
		return `${this.selector}`;
	}
}

export const gridColumnEnd = (selector: GridAreaSelector) => new GridColumnEndStyleProperty(selector);

export function gap(columnGap: ColumnGapStyleProperty, rowGap: RowGapStyleProperty)
export function gap(columnGapDistance: Length, rowGapDistance: Length)
export function gap(distance: Length)
export function gap() {
	if (arguments[0] instanceof ColumnGapStyleProperty && arguments[1] instanceof RowGapStyleProperty) { return new GapStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new GapStyleProperty(new ColumnGapStyleProperty(arguments[0]), new RowGapStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new GapStyleProperty(new ColumnGapStyleProperty(arguments[0]), new RowGapStyleProperty(arguments[0])); }
}

GapStyleProperty.shorthand = [ColumnGapStyleProperty, RowGapStyleProperty];

export function girdArea(gridRowStart: GridRowStartStyleProperty, gridColumnStart: GridColumnStartStyleProperty, gridRowEnd: GridRowEndStyleProperty, gridColumnEnd: GridColumnEndStyleProperty)
export function girdArea(gridRowStartSelector: GridAreaSelector, gridColumnStartSelector: GridAreaSelector, gridRowEndSelector: GridAreaSelector, gridColumnEndSelector: GridAreaSelector)
export function girdArea(selector: GridAreaSelector)
export function girdArea() {
	if (arguments[0] instanceof GridRowStartStyleProperty && arguments[1] instanceof GridColumnStartStyleProperty && arguments[2] instanceof GridRowEndStyleProperty && arguments[3] instanceof GridColumnEndStyleProperty) { return new GirdAreaStyleProperty(arguments[0], arguments[1], arguments[2], arguments[3]); }
	if (arguments.length == 4) { return new GirdAreaStyleProperty(new GridRowStartStyleProperty(arguments[0]), new GridColumnStartStyleProperty(arguments[1]), new GridRowEndStyleProperty(arguments[2]), new GridColumnEndStyleProperty(arguments[3])); }
	if (arguments.length == 1) { return new GirdAreaStyleProperty(new GridRowStartStyleProperty(arguments[0]), new GridColumnStartStyleProperty(arguments[0]), new GridRowEndStyleProperty(arguments[0]), new GridColumnEndStyleProperty(arguments[0])); }
}

GirdAreaStyleProperty.shorthand = [GridRowStartStyleProperty, GridColumnStartStyleProperty, GridRowEndStyleProperty, GridColumnEndStyleProperty];