import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Length } from './primitives';
import { Number } from './primitives';
import { Integer } from './primitives';
import { String } from './primitives';
import { Percentage } from './primitives';

// alignment mode
export type AlignmentMode = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | Variable<AlignmentMode> | Calculation<Partial<AlignmentMode>>;

// items alignment mode
export type ItemsAlignmentMode = AlignmentMode | 'self-start' | 'self-end' | Variable<ItemsAlignmentMode> | Calculation<Partial<ItemsAlignmentMode>>;

// self alignment mode
export type SelfAlignmentMode = ItemsAlignmentMode | 'auto' | Variable<SelfAlignmentMode> | Calculation<Partial<SelfAlignmentMode>>;

// distributed alignment mode
export type DistributedAlignmentMode = AlignmentMode | 'space-between' | 'space-around' | 'space-evenly' | Variable<DistributedAlignmentMode> | Calculation<Partial<DistributedAlignmentMode>>;

// justification mode
export type JustificationMode = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | Variable<JustificationMode> | Calculation<Partial<JustificationMode>>;

// items justification mode
export type ItemsJustificationMode = JustificationMode | 'self-start' | 'self-end' | Variable<ItemsJustificationMode> | Calculation<Partial<ItemsJustificationMode>>;

// self justification mode
export type SelfJustificationMode = ItemsJustificationMode | 'auto' | Variable<SelfJustificationMode> | Calculation<Partial<SelfJustificationMode>>;

// distributed justification mode
export type DistributedJustificationMode = JustificationMode | 'space-between' | 'space-around' | 'space-evenly' | Variable<DistributedJustificationMode> | Calculation<Partial<DistributedJustificationMode>>;

// align items
export class AlignItemsStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: ItemsAlignmentMode;

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
	static properties = ['mode'];

	public mode: ItemsAlignmentMode;

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
	static properties = ['mode'];

	public mode: SelfAlignmentMode;

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
	static properties = ['mode'];

	public mode: ItemsJustificationMode;

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
	static properties = ['mode'];

	public mode: DistributedJustificationMode;

	constructor(
		mode: DistributedJustificationMode
	) {
		super('justify-content');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const justifyContent = (mode: DistributedJustificationMode) => new JustifyContentStyleProperty(mode);

// justify self
export class JustifySelfStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: SelfJustificationMode;

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
		public columnGap: ColumnGapStyleProperty,
		public rowGap: RowGapStyleProperty
	) {
		super('gap', [columnGap, rowGap]);
	}
}

// flex basis mode
export type FlexBasisMode = Length | 'auto' | 'max-content' | 'min-content' | 'fit-content' | 'content' | Variable<FlexBasisMode> | Calculation<Partial<FlexBasisMode>>;

// flex basis
export class FlexBasisStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: FlexBasisMode;

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
export type FlexDirectionMode = 'row' | 'row-reverse' | 'column' | 'column-reverse' | Variable<FlexDirectionMode> | Calculation<Partial<FlexDirectionMode>>;

// flex direction
export class FlexDirectionStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: FlexDirectionMode;

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
export type FlexWrapMode = 'nowrap' | 'wrap' | 'wrap-reverse' | Variable<FlexWrapMode> | Calculation<Partial<FlexWrapMode>>;

// flex wrap
export class FlexWrapStyleProperty extends StyleProperty {
	static properties = ['mode'];

	public mode: FlexWrapMode;

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

// fr
export class Fr extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}fr`;
	}
}

export function fr(value: Number) { return new Fr(value); }

// span query
export type SpanQuery = Integer | String | Variable<SpanQuery> | Calculation<Partial<SpanQuery>>;

// span
export class Span extends StyleMethod {
	private query: SpanQuery;

	constructor(
		query: SpanQuery
	) {
		super();

	this.query = query;
	}

	toValueString() {
		return `span ${this.query}`;
	}
}

export function span(query: SpanQuery) { return new Span(query); }

// min max breadth
export type MinMaxBreadth = Length | Percentage | Fr | 'max-content' | 'min-content' | 'auto' | Variable<MinMaxBreadth> | Calculation<Partial<MinMaxBreadth>>;

// min max
export class MinMax extends StyleMethod {
	private left: MinMaxBreadth;
	private right: MinMaxBreadth;

	constructor(
		left: MinMaxBreadth,
		right: MinMaxBreadth
	) {
		super();

	this.left = left;
		this.right = right;
	}

	toValueString() {
		return `minmax(${this.left},${this.right})`;
	}
}

export function minMax(left: MinMaxBreadth, right: MinMaxBreadth) { return new MinMax(left, right); }

// fit content
export class FitContent extends StyleMethod {
	private size: Length;

	constructor(
		size: Length
	) {
		super();

	this.size = size;
	}

	toValueString() {
		return `fit-content(${this.size})`;
	}
}

export function fitContent(size: Length) { return new FitContent(size); }

// repeat track
export type RepeatTrack = 'auto-fill' | 'auto-fit' | Integer | Variable<RepeatTrack> | Calculation<Partial<RepeatTrack>>;

// repeat slot
export type RepeatSlot = Length | Fr | 'min-content' | 'max-content' | MinMax | FitContent | 'auto' | Percentage | Variable<RepeatSlot> | Calculation<Partial<RepeatSlot>>;

// repeat
export class Repeat extends StyleMethod {
	private track: RepeatTrack;
	private values: RepeatSlot[];

	constructor(
		track: RepeatTrack,
		...values: RepeatSlot[]
	) {
		super();

	this.track = track;
		this.values = values;
	}

	toValueString() {
		return `repeat(${this.track},${this.values.join(' ')})`;
	}
}

export function repeat(track: RepeatTrack, ...values: RepeatSlot[]) { return new Repeat(track, ...values); }

// area span
export class AreaSpan extends StyleMethod {
	private length: Integer;
	private area: String;

	constructor(
		length: Integer,
		area: String
	) {
		super();

	this.length = length;
		this.area = area;
	
		if (length == 0) {
			throw new Error('Invalid area span length 0');
		}
	
		if (typeof length == 'number' && Math.floor(length) != length) {
			throw new Error('Area span must be an integer');
		}
	}

	toValueString() {
		return `${this.area} ${this.length}`;
	}
}

export function areaSpan(length: Integer, area: String) { return new AreaSpan(length, area); }

// grid area selector
export type GridAreaSelector = String | 'auto' | Span | AreaSpan | Variable<GridAreaSelector> | Calculation<Partial<GridAreaSelector>>;

// gird area
export class GirdAreaStyleProperty extends StyleProperty {
	constructor(
		public gridRowStart: GridRowStartStyleProperty,
		public gridColumnStart: GridColumnStartStyleProperty,
		public gridRowEnd: GridRowEndStyleProperty,
		public gridColumnEnd: GridColumnEndStyleProperty
	) {
		super('gird-area', [gridRowStart, gridColumnStart, gridRowEnd, gridColumnEnd]);
	}
}

// grid template area name
export type GridTemplateAreaName = '.' | String | Repeat | Variable<GridTemplateAreaName> | Calculation<Partial<GridTemplateAreaName>>;

// grid template areas
export class GridTemplateAreasStyleProperty extends StyleProperty {
	static properties = ['rows'];

	public rows: GridTemplateAreaName[][];

	constructor(
		...rows: GridTemplateAreaName[][]
	) {
		super('grid-template-areas');

		this.rows = rows;
	}

	toValueString() {
		return `${this.rows.map(row => typeof row[0] == 'string' ? `"${row.join(' ')}"` : row.join(' ')).join(' ')}`;
	}
}

export const gridTemplateAreas = (...rows: GridTemplateAreaName[][]) => new GridTemplateAreasStyleProperty(...rows);

// grid template columns
export class GridTemplateColumnsStyleProperty extends StyleProperty {
	static properties = ['cells'];

	public cells: GridTemplateAreaName[];

	constructor(
		...cells: GridTemplateAreaName[]
	) {
		super('grid-template-columns');

		this.cells = cells;
	}

	toValueString() {
		return `${this.cells.map(cell => typeof cell == 'string' ? `"${cell}"` : cell).join(' ')}`;
	}
}

export const gridTemplateColumns = (...cells: GridTemplateAreaName[]) => new GridTemplateColumnsStyleProperty(...cells);

// grid template rows
export class GridTemplateRowsStyleProperty extends StyleProperty {
	static properties = ['cells'];

	public cells: GridTemplateAreaName[];

	constructor(
		...cells: GridTemplateAreaName[]
	) {
		super('grid-template-rows');

		this.cells = cells;
	}

	toValueString() {
		return `${this.cells.map(cell => typeof cell == 'string' ? `"${cell}"` : cell).join(' ')}`;
	}
}

export const gridTemplateRows = (...cells: GridTemplateAreaName[]) => new GridTemplateRowsStyleProperty(...cells);

// column gap
export class ColumnGapStyleProperty extends StyleProperty {
	static properties = ['distance'];

	public distance: Length;

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
	static properties = ['distance'];

	public distance: Length;

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
	static properties = ['order'];

	public order: Integer;

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
	static properties = ['order'];

	public order: Integer;

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
	static properties = ['selector'];

	public selector: GridAreaSelector;

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
	static properties = ['selector'];

	public selector: GridAreaSelector;

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
	static properties = ['selector'];

	public selector: GridAreaSelector;

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
	static properties = ['selector'];

	public selector: GridAreaSelector;

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

export function gap(columnGap: ColumnGapStyleProperty, rowGap: RowGapStyleProperty): GapStyleProperty
export function gap(columnGapDistance: Length, rowGapDistance: Length): GapStyleProperty
export function gap(distance: Length): GapStyleProperty
export function gap(): GapStyleProperty {
	if (arguments[0] instanceof ColumnGapStyleProperty && arguments[1] instanceof RowGapStyleProperty) { return new GapStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new GapStyleProperty(new ColumnGapStyleProperty(arguments[0]), new RowGapStyleProperty(arguments[1])); }
	if (arguments.length == 1) { return new GapStyleProperty(new ColumnGapStyleProperty(arguments[0]), new RowGapStyleProperty(arguments[0])); }
}

GapStyleProperty.shorthand = [ColumnGapStyleProperty, RowGapStyleProperty];

export function girdArea(gridRowStart: GridRowStartStyleProperty, gridColumnStart: GridColumnStartStyleProperty, gridRowEnd: GridRowEndStyleProperty, gridColumnEnd: GridColumnEndStyleProperty): GirdAreaStyleProperty
export function girdArea(gridRowStartSelector: GridAreaSelector, gridColumnStartSelector: GridAreaSelector, gridRowEndSelector: GridAreaSelector, gridColumnEndSelector: GridAreaSelector): GirdAreaStyleProperty
export function girdArea(selector: GridAreaSelector): GirdAreaStyleProperty
export function girdArea(): GirdAreaStyleProperty {
	if (arguments[0] instanceof GridRowStartStyleProperty && arguments[1] instanceof GridColumnStartStyleProperty && arguments[2] instanceof GridRowEndStyleProperty && arguments[3] instanceof GridColumnEndStyleProperty) { return new GirdAreaStyleProperty(arguments[0], arguments[1], arguments[2], arguments[3]); }
	if (arguments.length == 4) { return new GirdAreaStyleProperty(new GridRowStartStyleProperty(arguments[0]), new GridColumnStartStyleProperty(arguments[1]), new GridRowEndStyleProperty(arguments[2]), new GridColumnEndStyleProperty(arguments[3])); }
	if (arguments.length == 1) { return new GirdAreaStyleProperty(new GridRowStartStyleProperty(arguments[0]), new GridColumnStartStyleProperty(arguments[0]), new GridRowEndStyleProperty(arguments[0]), new GridColumnEndStyleProperty(arguments[0])); }
}

GirdAreaStyleProperty.shorthand = [GridRowStartStyleProperty, GridColumnStartStyleProperty, GridRowEndStyleProperty, GridColumnEndStyleProperty];

