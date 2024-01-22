import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { ImageSource } from './primitives';
import { Gradient } from './gradient';
import { ColorValue } from './color';

// background image source
export type BackgroundImageSource = ImageSource | Gradient | Variable<BackgroundImageSource> | Calculation<Partial<BackgroundImageSource>>;

// background image
export class BackgroundImageStyleProperty extends StyleProperty {
	public sources: BackgroundImageSource[];

	constructor(
		...sources: BackgroundImageSource[]
	) {
		super('background-image');

		this.sources = sources;
	}

	toValueString() {
		return `${this.sources.join(', ')}`;
	}
}

export const backgroundImage = (...sources: BackgroundImageSource[]) => new BackgroundImageStyleProperty(...sources);

// background color
export class BackgroundColorStyleProperty extends StyleProperty {
	public color: ColorValue;

	constructor(
		color: ColorValue
	) {
		super('background-color');

		this.color = color;
	}

	toValueString() {
		return `${this.color}`;
	}
}

export const backgroundColor = (color: ColorValue) => new BackgroundColorStyleProperty(color);

// background
export class BackgroundStyleProperty extends StyleProperty {
	constructor(
		public backgroundColor: BackgroundColorStyleProperty,
		public backgroundImage: BackgroundImageStyleProperty
	) {
		super('background', [backgroundColor, backgroundImage]);
	}
}

export function background(backgroundColor: BackgroundColorStyleProperty, backgroundImage: BackgroundImageStyleProperty): BackgroundStyleProperty
export function background(backgroundColorColor: ColorValue, ...backgroundImageSources: BackgroundImageSource[]): BackgroundStyleProperty
export function background(): BackgroundStyleProperty {
	if (arguments[0] instanceof BackgroundColorStyleProperty && arguments[1] instanceof BackgroundImageStyleProperty) { return new BackgroundStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new BackgroundStyleProperty(new BackgroundColorStyleProperty(arguments[0]), new BackgroundImageStyleProperty(...arguments[1])); }
}

BackgroundStyleProperty.shorthand = [BackgroundColorStyleProperty, BackgroundImageStyleProperty];

