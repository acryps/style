import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { ImageSource } from './primitives';
import { Gradient } from './gradient';
import { ColorValue } from './color';

// background image source
export type BackgroundImageSource = ImageSource | Gradient | Variable<BackgroundImageSource>;

// background image
export class BackgroundImageStyleProperty extends StyleProperty {
	private sources: BackgroundImageSource[];

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
	private color: ColorValue;

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
		private backgroundColor: BackgroundColorStyleProperty,
		private backgroundImage: BackgroundImageStyleProperty
	) {
		super('background', [backgroundColor, backgroundImage]);
	}
}

export function background(backgroundColor: BackgroundColorStyleProperty, backgroundImage: BackgroundImageStyleProperty)
export function background(backgroundColorColor: ColorValue, ...backgroundImageSources: BackgroundImageSource[])
export function background() {
	if (arguments[0] instanceof BackgroundColorStyleProperty && arguments[1] instanceof BackgroundImageStyleProperty) { return new BackgroundStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new BackgroundStyleProperty(new BackgroundColorStyleProperty(arguments[0]), new BackgroundImageStyleProperty(...arguments[1])); }
}

BackgroundStyleProperty.shorthand = [BackgroundColorStyleProperty, BackgroundImageStyleProperty];

