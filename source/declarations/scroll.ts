import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// scroll snap axis
export type ScrollSnapAxis = 'none' | 'x' | 'y' | 'block' | 'inline' | 'both' | Variable<ScrollSnapAxis> | Calculation<Partial<ScrollSnapAxis>>;

// scroll snap force mode
export type ScrollSnapForceMode = 'mandatory' | 'proximity' | Variable<ScrollSnapForceMode> | Calculation<Partial<ScrollSnapForceMode>>;

// scroll snap type
export class ScrollSnapTypeStyleProperty extends StyleProperty {
	public mandatory: ScrollSnapAxis;
	public proximity: ScrollSnapForceMode | undefined;

	constructor(
		mandatory: ScrollSnapAxis,
		proximity?: ScrollSnapForceMode
	) {
		super('scroll-snap-type');

		this.mandatory = mandatory;
		this.proximity = proximity;
	}

	toValueString() {
		return `${this.mandatory}${this.proximity ? ` ${this.proximity}` : ''}`;
	}
}

export const scrollSnapType = (mandatory: ScrollSnapAxis, proximity?: ScrollSnapForceMode) => new ScrollSnapTypeStyleProperty(mandatory, proximity);

// scroll snap align mode
export type ScrollSnapAlignMode = 'none' | 'start' | 'end' | 'center' | Variable<ScrollSnapAlignMode> | Calculation<Partial<ScrollSnapAlignMode>>;

// scroll snap align
export class ScrollSnapAlignStyleProperty extends StyleProperty {
	public snaps: ScrollSnapAlignMode[];

	constructor(
		...snaps: ScrollSnapAlignMode[]
	) {
		super('scroll-snap-align');

		this.snaps = snaps;
	}

	toValueString() {
		return `${this.snaps.join(' ')}`;
	}
}

export const scrollSnapAlign = (...snaps: ScrollSnapAlignMode[]) => new ScrollSnapAlignStyleProperty(...snaps);

// scroll behavior mode
export type ScrollBehaviorMode = 'auto' | 'smooth' | Variable<ScrollBehaviorMode> | Calculation<Partial<ScrollBehaviorMode>>;

// scroll behavior
export class ScrollBehaviorStyleProperty extends StyleProperty {
	public mode: ScrollBehaviorMode;

	constructor(
		mode: ScrollBehaviorMode
	) {
		super('scroll-behavior');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const scrollBehavior = (mode: ScrollBehaviorMode) => new ScrollBehaviorStyleProperty(mode);

