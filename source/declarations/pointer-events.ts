

// pointer events mode
export type PointerEventsMode = 'auto' | 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none';

// pointer events
export class PointerEventsStyleProperty {
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

