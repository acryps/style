import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { ImageSource } from './primitives';
import { Gradient } from './gradient';
import { ColorValue } from './color';
import { Length } from './primitives';
import { Percentage } from './primitives';

// background image source
export type BackgroundImageSource = ImageSource | Gradient | Variable<BackgroundImageSource> | Calculation<Partial<BackgroundImageSource>>;

// background image
export class BackgroundImageStyleProperty extends StyleProperty {
	static properties = ['sources'];

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
	static properties = ['color'];

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

// background size type
export type BackgroundSizeType = 'cover' | 'contain' | 'auto' | Length | Percentage | Variable<BackgroundSizeType> | Calculation<Partial<BackgroundSizeType>>;

// background size
export class BackgroundSizeStyleProperty extends StyleProperty {
	static properties = ['value'];

	public value: BackgroundSizeType[];

	constructor(
		...value: BackgroundSizeType[]
	) {
		super('background-size');

		this.value = value;
	}

	toValueString() {
		return `${this.value.join(' ')}`;
	}
}

export const backgroundSize = (...value: BackgroundSizeType[]) => new BackgroundSizeStyleProperty(...value);

// background repeat type
export type BackgroundRepeatType = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | Variable<BackgroundRepeatType> | Calculation<Partial<BackgroundRepeatType>>;

// background repeat
export class BackgroundRepeatStyleProperty extends StyleProperty {
	static properties = ['type'];

	public type: BackgroundRepeatType[];

	constructor(
		...type: BackgroundRepeatType[]
	) {
		super('background-repeat');

		this.type = type;
	}

	toValueString() {
		return `${this.type.join(' ')}`;
	}
}

export const backgroundRepeat = (...type: BackgroundRepeatType[]) => new BackgroundRepeatStyleProperty(...type);

export function background(backgroundColor: BackgroundColorStyleProperty, backgroundImage: BackgroundImageStyleProperty): BackgroundStyleProperty
export function background(backgroundColorColor: ColorValue, ...backgroundImageSources: BackgroundImageSource[]): BackgroundStyleProperty
export function background(): BackgroundStyleProperty {
	if (arguments[0] instanceof BackgroundColorStyleProperty && arguments[1] instanceof BackgroundImageStyleProperty) { return new BackgroundStyleProperty(arguments[0], arguments[1]); }
	if (arguments.length == 2) { return new BackgroundStyleProperty(new BackgroundColorStyleProperty(arguments[0]), new BackgroundImageStyleProperty(...arguments[1])); }
}

BackgroundStyleProperty.shorthand = [BackgroundColorStyleProperty, BackgroundImageStyleProperty];

