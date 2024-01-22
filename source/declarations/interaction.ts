import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// pointer events mode
export type PointerEventsMode = 'auto' | 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none' | Variable<PointerEventsMode> | Calculation<Partial<PointerEventsMode>>;

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

// user select mode
export type UserSelectMode = 'auto' | 'text' | 'contain' | 'all' | 'none' | Variable<UserSelectMode> | Calculation<Partial<UserSelectMode>>;

// user select
export class UserSelectStyleProperty extends StyleProperty {
	private mode: UserSelectMode;

	constructor(
		mode: UserSelectMode
	) {
		super('user-select');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const userSelect = (mode: UserSelectMode) => new UserSelectStyleProperty(mode);

// touch action mode
export type TouchActionMode = 'auto' | 'none' | 'pan-x' | 'pan-left' | 'pan-right' | 'pan-y' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation' | Variable<TouchActionMode> | Calculation<Partial<TouchActionMode>>;

// touch action
export class TouchActionStyleProperty extends StyleProperty {
	private mode: TouchActionMode;

	constructor(
		mode: TouchActionMode
	) {
		super('touch-action');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const touchAction = (mode: TouchActionMode) => new TouchActionStyleProperty(mode);

