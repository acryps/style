import { StyleProperty } from '../property';

import { Length } from './primitives';
import { Percentage } from './primitives';
import { ColorValue } from './color';
import { Angle, rad, turn } from './angle';

// color stop location
export type ColorStopLocation = Length | Percentage;

// color stop
export class ColorStop {
	private location: ColorStopLocation;
	private color: ColorValue;

	constructor(
		location: ColorStopLocation,
		color: ColorValue
	) {
		this.location = location;
		this.color = color;
	}
}

export function colorStop(location: ColorStopLocation, color: ColorValue) { return new ColorStop(location, color); }

// linear gradient
export class LinearGradient {
	private angle: Angle;
	private stops: ColorStop[];

	constructor(
		angle: Angle,
		...stops: ColorStop[]
	) {
		this.angle = angle;
		this.stops = stops;
	}
}

export function linearGradient(angle: Angle, ...stops: ColorStop[]) { return new LinearGradient(angle, ...stops); }

// gradient
export type Gradient = LinearGradient;

backgroundImage(linearGradient(turn(0.4), colorStop(0, rgb(1, 5, 6, 0.4))));