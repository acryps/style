import { StyleProperty } from '../property';

import { Number } from './primitives';

// deg
export class Deg {
	private angle: Number;

	constructor(
		angle: Number
	) {
		this.angle = angle;
	}
}

export function deg(angle: Number) { return new Deg(angle); }

// rad
export class Rad {
	private angle: Number;

	constructor(
		angle: Number
	) {
		this.angle = angle;
	}
}

export function rad(angle: Number) { return new Rad(angle); }

// turn
export class Turn {
	private angle: Number;

	constructor(
		angle: Number
	) {
		this.angle = angle;
	}
}

export function turn(angle: Number) { return new Turn(angle); }

// angle
export type Angle = Deg | Rad | Turn;

