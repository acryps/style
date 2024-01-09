// user select mode
export type UserSelectMode = 'auto' | 'text' | 'contain' | 'all' | 'none';

// user select
export class UserSelectStyleProperty {
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

