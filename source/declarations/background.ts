import { ColorValue } from './color';

// background image source
export type BackgroundImageSource = Image | Gradient;

// background image
export class BackgroundImageStyleProperty {
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
export class BackgroundColorStyleProperty {
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
export class BackgroundStyleProperty {

}

export function background(backgroundColor: BackgroundColorStyleProperty, backgroundImage: BackgroundImageStyleProperty)
export function background(backgroundColorColor: ColorValue, ...backgroundImageSources: BackgroundImageSource[])
export function background() {
	if (arguments[0] instanceof BackgroundColorStyleProperty && arguments[1] instanceof BackgroundImageStyleProperty) { return [arguments] }
	if (arguments.length == 2) { return [new BackgroundColorStyleProperty(arguments[0]), new BackgroundImageStyleProperty(...arguments[1])] }
}

