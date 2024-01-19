import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Length } from './primitives';
import { Percentage } from './primitives';
import { ColorValue } from './color';
import { Angle } from './angle';

// color stop location
export type ColorStopLocation = Length | Percentage | Variable<ColorStopLocation> | Calculation<Partial<ColorStopLocation>>;

// color stop
export class ColorStop extends StyleMethod {
	private location: ColorStopLocation;
	private color: ColorValue;

	constructor(
		location: ColorStopLocation,
		color: ColorValue
	) {
		super();

	this.location = location;
		this.color = color;
	}

	toValueString() {
		return `${typeof this.color == 'string' ? this.color : this.color.toValueString()} ${this.location}`;
	}
}

export function colorStop(location: ColorStopLocation, color: ColorValue) { return new ColorStop(location, color); }

// linear gradient
export class LinearGradient extends StyleMethod {
	private angle: Angle;
	private stops: ColorStop[];

	constructor(
		angle: Angle,
		...stops: ColorStop[]
	) {
		super();

	this.angle = angle;
		this.stops = stops;
	}

	toValueString() {
		return `linear-gradient(${this.angle}, ${this.stops.join(',')})`;
	}
}

export function linearGradient(angle: Angle, ...stops: ColorStop[]) { return new LinearGradient(Style.resolveNumber('angle', angle), ...stops); }

// gradient
export type Gradient = LinearGradient | Variable<Gradient> | Calculation<Partial<Gradient>>;

