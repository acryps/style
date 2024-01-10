import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';



// pointer events mode
export type PointerEventsMode = 'auto' | 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none' | Variable<PointerEventsMode>;

// pointer events
export class PointerEventsStyleProperty extends StyleProperty {
	private mode: PointerEventsMode;

	constructor(
		mode: PointerEventsMode
	) {
		super('pointer-events');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const pointerEvents = (mode: PointerEventsMode) => new PointerEventsStyleProperty(mode);

