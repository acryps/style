import { Style } from '../index';
import { StyleProperty } from '../property';

import { Number } from './primitives';

// alpha value
export type AlphaValue = Number | 'none';

// opacity
export class OpacityStyleProperty extends StyleProperty {
	private alpha: AlphaValue;

	constructor(
		alpha: AlphaValue
	) {
		super('opacity');

		this.alpha = alpha;
	}

	toValueString() {
		return `${this.alpha}`;
	}
}

export const opacity = (alpha: AlphaValue) => new OpacityStyleProperty(alpha);

