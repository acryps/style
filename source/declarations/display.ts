

// display mode
export type DisplayMode = ['block'] | ['inline'] | ['inline', 'block'] | ['flex'] | ['inline', 'flex'] | ['grid'] | ['inline', 'grid'] | ['flow-root'] | ['none'] | ['contents'];

// display
export class DisplayStyleProperty {
	private mode: DisplayMode[];

	constructor(
		...mode: DisplayMode[]
	) {
		super('display');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode.join('-')}`;
	}
}

export const display = (...mode: DisplayMode[]) => new DisplayStyleProperty(...mode);

