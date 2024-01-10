import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';



// display mode
export type DisplayMode = 'block' | 'inline' | 'flex' | 'grid' | 'flow-root' | 'none' | 'contents' | Variable<DisplayMode>;

// display
export class DisplayStyleProperty extends StyleProperty {
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

