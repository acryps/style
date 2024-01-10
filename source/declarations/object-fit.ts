import { Style } from '../style';
import { StyleProperty } from '../property';



// object fit mode
export type ObjectFitMode = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

// object fit
export class ObjectFitStyleProperty extends StyleProperty {
	private mode: ObjectFitMode;

	constructor(
		mode: ObjectFitMode
	) {
		super('object-fit');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const objectFit = (mode: ObjectFitMode) => new ObjectFitStyleProperty(mode);

