import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



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

