import { Style } from '../style';
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

	toString() {
		return `${this.angle}deg`;
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

	toString() {
		return `${this.angle}rad`;
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

	toString() {
		return `${this.angle}turn`;
	}
}

export function turn(angle: Number) { return new Turn(angle); }

// angle
export type Angle = Deg | Rad | Turn;
Style.numberConverter['angle'] = Turn;

