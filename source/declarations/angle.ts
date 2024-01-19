import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Number } from './primitives';

// deg
export class Deg extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}deg`;
	}
}

export function deg(value: Number) { return new Deg(value); }

// rad
export class Rad extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}rad`;
	}
}

export function rad(value: Number) { return new Rad(value); }

// turn
export class Turn extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}turn`;
	}
}

export function turn(value: Number) { return new Turn(value); }

// angle
export type Angle = Deg | Rad | Turn | Variable<Angle> | Calculation<Partial<Angle>>;

Style.numberConverter['angle'] = Turn;