

// alpha value
export type AlphaValue = number | 'none';

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

