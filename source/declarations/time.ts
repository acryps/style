import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Number } from './primitives';
import { Integer } from './primitives';

// seconds
export class Seconds extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}s`;
	}
}

export function seconds(value: Number) { return new Seconds(value); }

// milliseconds
export class Milliseconds extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}ms`;
	}
}

export function milliseconds(value: Number) { return new Milliseconds(value); }

// duration
export type Duration = Seconds | Milliseconds | Variable<Duration> | Calculation<Partial<Duration>>;

// step jump mode
export type StepJumpMode = 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | Variable<StepJumpMode> | Calculation<Partial<StepJumpMode>>;

// steps
export class Steps extends StyleMethod {
	private count: Integer;
	private jump: StepJumpMode;

	constructor(
		count: Integer,
		jump: StepJumpMode
	) {
		super();

	this.count = count;
		this.jump = jump;
	}

	toValueString() {
		return `steps(${this.count},${this.jump})`;
	}
}

export function steps(count: Integer, jump: StepJumpMode) { return new Steps(count, jump); }

// cubic bezier
export class CubicBezier extends StyleMethod {
	private point1: Number;
	private point2: Number;
	private point3: Number;
	private point4: Number;

	constructor(
		point1: Number,
		point2: Number,
		point3: Number,
		point4: Number
	) {
		super();

	this.point1 = point1;
		this.point2 = point2;
		this.point3 = point3;
		this.point4 = point4;
	}

	toValueString() {
		return `cubic-bezier(${this.point1}, ${this.point2}, ${this.point3}, ${this.point4})`;
	}
}

export function cubicBezier(point1: Number, point2: Number, point3: Number, point4: Number) { return new CubicBezier(point1, point2, point3, point4); }

// linear
export class Linear extends StyleMethod {
	private points: Number[];

	constructor(
		...points: Number[]
	) {
		super();

	this.points = points;
	}

	toValueString() {
		return `linear(${this.points.join(',')})`;
	}
}

export function linear(...points: Number[]) { return new Linear(...points); }

// easing function
export type EasingFunction = Linear | 'linear' | CubicBezier | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | Steps | 'step-start' | 'step-end' | Variable<EasingFunction> | Calculation<Partial<EasingFunction>>;

Style.numberConverter['duration'] = Seconds;