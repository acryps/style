import { Style } from '../style';
import { StyleProperty } from '../property';

import { Length } from './primitives';
import { Percentage } from './primitives';
import { ColorValue } from './color';
import { Angle } from './angle';

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

	toString() {
		return `${this.color} ${this.location}`;
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

	toString() {
		return `${this.angle}, ${this.stops.join(',')}`;
	}
}

export function linearGradient(angle: Angle, ...stops: ColorStop[]) { return new LinearGradient(Style.resolveNumber('angle', angle), ...stops); }

// gradient
export type Gradient = LinearGradient;

