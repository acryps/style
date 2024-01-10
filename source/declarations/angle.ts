import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { Number } from './primitives';

// deg
export class Deg extends StyleMethod {
	private angle: Number;

	constructor(
		angle: Number
	) {
		super();

	this.angle = angle;
	}

	toValueString() {
		return `${this.angle}deg`;
	}
}

export function deg(angle: Number) { return new Deg(angle); }

// rad
export class Rad extends StyleMethod {
	private angle: Number;

	constructor(
		angle: Number
	) {
		super();

	this.angle = angle;
	}

	toValueString() {
		return `${this.angle}rad`;
	}
}

export function rad(angle: Number) { return new Rad(angle); }

// turn
export class Turn extends StyleMethod {
	private angle: Number;

	constructor(
		angle: Number
	) {
		super();

	this.angle = angle;
	}

	toValueString() {
		return `${this.angle}turn`;
	}
}

export function turn(angle: Number) { return new Turn(angle); }

// angle
export type Angle = Deg | Rad | Turn | Variable<Angle>;
Style.numberConverter['angle'] = Turn;

