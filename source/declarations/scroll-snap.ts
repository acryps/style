import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// scroll snap axis
export type ScrollSnapAxis = 'none' | 'x' | 'y' | 'block' | 'inline' | 'both' | Variable<ScrollSnapAxis> | Calculation<Partial<ScrollSnapAxis>>;

// scroll snap type
export class ScrollSnapTypeStyleProperty extends StyleProperty {
	public mandatory: ScrollSnapAxis;
	public proximity: ScrollSnapAxis | undefined;

	constructor(
		mandatory: ScrollSnapAxis,
		proximity?: ScrollSnapAxis
	) {
		super('scroll-snap-type');

		this.mandatory = mandatory;
		this.proximity = proximity;
	}

	toValueString() {
		return `${this.mandatory}${this.proximity ? ` ${this.proximity}` : ''}`;
	}
}

export const scrollSnapType = (mandatory: ScrollSnapAxis, proximity?: ScrollSnapAxis) => new ScrollSnapTypeStyleProperty(mandatory, proximity);

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

