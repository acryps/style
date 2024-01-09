import { Number } from './primitives';

// alpha value
export type AlphaValue = Number | 'none';

// opacity
export class OpacityStyleProperty {
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

