import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Number } from './primitives';
import { Percentage } from './primitives';

// alpha value
export type AlphaValue = Number | 'none' | Percentage | Variable<AlphaValue> | Calculation<Partial<AlphaValue>>;

// opacity
export class OpacityStyleProperty extends StyleProperty {
	static properties = ['alpha'];

	public alpha: AlphaValue;

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

