import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Number } from './primitives';
import { Length } from './primitives';
import { Angle } from './angle';
import { Percentage } from './primitives';

// matrix
export class Matrix extends StyleMethod {
	private a: Number;
	private b: Number;
	private c: Number;
	private d: Number;
	private tx: Number;
	private ty: Number;

	constructor(
		a: Number,
		b: Number,
		c: Number,
		d: Number,
		tx: Number,
		ty: Number
	) {
		super();

	this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}

	toValueString() {
		return `${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.tx}, ${this.ty}`;
	}
}

export function matrix(a: Number, b: Number, c: Number, d: Number, tx: Number, ty: Number) { return new Matrix(a, b, c, d, tx, ty); }

// matrix3d
export class Matrix3d extends StyleMethod {
	private a1: Number;
	private b1: Number;
	private c1: Number;
	private d1: Number;
	private a2: Number;
	private b2: Number;
	private c2: Number;
	private d2: Number;
	private a3: Number;
	private b3: Number;
	private c3: Number;
	private d3: Number;
	private a4: Number;
	private b4: Number;
	private c4: Number;
	private d4: Number;

	constructor(
		a1: Number,
		b1: Number,
		c1: Number,
		d1: Number,
		a2: Number,
		b2: Number,
		c2: Number,
		d2: Number,
		a3: Number,
		b3: Number,
		c3: Number,
		d3: Number,
		a4: Number,
		b4: Number,
		c4: Number,
		d4: Number
	) {
		super();

	this.a1 = a1;
		this.b1 = b1;
		this.c1 = c1;
		this.d1 = d1;
	
		this.a2 = a2;
		this.b2 = b2;
		this.c2 = c2;
		this.d2 = d2;
	
		this.a3 = a3;
		this.b3 = b3;
		this.c3 = c3;
		this.d3 = d3;
	
		this.a4 = a4;
		this.b4 = b4;
		this.c4 = c4;
		this.d4 = d4;
	}

	toValueString() {
		return `${this.a1}, ${this.b1}, ${this.c1}, ${this.d1}, ${this.a2}, ${this.b2}, ${this.c2}, ${this.d2}, ${this.a3}, ${this.b3}, ${this.c3}, ${this.d3}, ${this.a4}, ${this.b4}, ${this.c4}, ${this.d4}`;
	}
}

export function matrix3d(a1: Number, b1: Number, c1: Number, d1: Number, a2: Number, b2: Number, c2: Number, d2: Number, a3: Number, b3: Number, c3: Number, d3: Number, a4: Number, b4: Number, c4: Number, d4: Number) { return new Matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4); }

// perspective dimension length
export type PerspectiveDimensionLength = Length | 'none' | Variable<PerspectiveDimensionLength> | Calculation<Partial<PerspectiveDimensionLength>>;

// perspective
export class Perspective extends StyleMethod {
	private length: PerspectiveDimensionLength;

	constructor(
		length: PerspectiveDimensionLength
	) {
		super();

	this.length = length;
	}

	toValueString() {
		return `${this.length}`;
	}
}

export function perspective(length: PerspectiveDimensionLength) { return new Perspective(length); }

// rotate
export class Rotate extends StyleMethod {
	private a: Angle;

	constructor(
		a: Angle
	) {
		super();

	this.a = a;
	}

	toValueString() {
		return `${this.a}`;
	}
}

export function rotate(a: Angle) { return new Rotate(Style.resolveNumber('angle', a)); }

// rotate3d
export class Rotate3d extends StyleMethod {
	private x: Number;
	private y: Number;
	private z: Number;
	private a: Angle;

	constructor(
		x: Number,
		y: Number,
		z: Number,
		a: Angle
	) {
		super();

	this.x = x;
		this.y = y;
		this.z = z;
		this.a = a;
	}

	toValueString() {
		return `${this.x}, ${this.y}, ${this.z}, ${this.a}`;
	}
}

export function rotate3d(x: Number, y: Number, z: Number, a: Angle) { return new Rotate3d(x, y, z, Style.resolveNumber('angle', a)); }

// rotate x
export class RotateX extends StyleMethod {
	private a: Angle;

	constructor(
		a: Angle
	) {
		super();

	this.a = a;
	}

	toValueString() {
		return `${this.a}`;
	}
}

export function rotateX(a: Angle) { return new RotateX(Style.resolveNumber('angle', a)); }

// rotate y
export class RotateY extends StyleMethod {
	private a: Angle;

	constructor(
		a: Angle
	) {
		super();

	this.a = a;
	}

	toValueString() {
		return `${this.a}`;
	}
}

export function rotateY(a: Angle) { return new RotateY(Style.resolveNumber('angle', a)); }

// rotate z
export class RotateZ extends StyleMethod {
	private a: Angle;

	constructor(
		a: Angle
	) {
		super();

	this.a = a;
	}

	toValueString() {
		return `${this.a}`;
	}
}

export function rotateZ(a: Angle) { return new RotateZ(Style.resolveNumber('angle', a)); }

// scaling type
export type ScalingType = Number | Percentage | Variable<ScalingType> | Calculation<Partial<ScalingType>>;

// scale
export class Scale extends StyleMethod {
	private scaleX: ScalingType;
	private scaleY: ScalingType | undefined;

	constructor(
		scaleX: ScalingType,
		scaleY?: ScalingType
	) {
		super();

	this.scaleX = scaleX;
		this.scaleY = scaleY;
	}

	toValueString() {
		return `${this.scaleX}${this.scaleY == null ? '' : `, ${this.scaleY}`}`;
	}
}

export function scale(scaleX: ScalingType, scaleY?: ScalingType) { return new Scale(scaleX, scaleY); }

// scale3d
export class Scale3d extends StyleMethod {
	private scaleX: ScalingType;
	private scaleY: ScalingType;
	private scaleZ: ScalingType;

	constructor(
		scaleX: ScalingType,
		scaleY: ScalingType,
		scaleZ: ScalingType
	) {
		super();

	this.scaleX = scaleX;
		this.scaleY = scaleY;
		this.scaleZ = scaleZ;
	}

	toValueString() {
		return `${this.scaleX}, ${this.scaleY}, ${this.scaleZ}`;
	}
}

export function scale3d(scaleX: ScalingType, scaleY: ScalingType, scaleZ: ScalingType) { return new Scale3d(scaleX, scaleY, scaleZ); }

// scale x
export class ScaleX extends StyleMethod {
	private scale: ScalingType;

	constructor(
		scale: ScalingType
	) {
		super();

	this.scale = scale;
	}

	toValueString() {
		return `${this.scale}`;
	}
}

export function scaleX(scale: ScalingType) { return new ScaleX(scale); }

// scale y
export class ScaleY extends StyleMethod {
	private scale: ScalingType;

	constructor(
		scale: ScalingType
	) {
		super();

	this.scale = scale;
	}

	toValueString() {
		return `${this.scale}`;
	}
}

export function scaleY(scale: ScalingType) { return new ScaleY(scale); }

// scale z
export class ScaleZ extends StyleMethod {
	private scale: ScalingType;

	constructor(
		scale: ScalingType
	) {
		super();

	this.scale = scale;
	}

	toValueString() {
		return `${this.scale}`;
	}
}

export function scaleZ(scale: ScalingType) { return new ScaleZ(scale); }

// skew
export class Skew extends StyleMethod {
	private angleX: Angle;
	private angleY: Angle | undefined;

	constructor(
		angleX: Angle,
		angleY?: Angle
	) {
		super();

	this.angleX = angleX;
		this.angleY = angleY;
	}

	toValueString() {
		return `${this.angleX}${this.angleY == null ? '' : `, ${this.angleY}`}`;
	}
}

export function skew(angleX: Angle, angleY?: Angle) { return new Skew(Style.resolveNumber('angle', angleX), Style.resolveNumber('angle', angleY)); }

// skew x
export class SkewX extends StyleMethod {
	private angle: Angle;

	constructor(
		angle: Angle
	) {
		super();

	this.angle = angle;
	}

	toValueString() {
		return `${this.angle}`;
	}
}

export function skewX(angle: Angle) { return new SkewX(Style.resolveNumber('angle', angle)); }

// skew y
export class SkewY extends StyleMethod {
	private angle: Angle;

	constructor(
		angle: Angle
	) {
		super();

	this.angle = angle;
	}

	toValueString() {
		return `${this.angle}`;
	}
}

export function skewY(angle: Angle) { return new SkewY(Style.resolveNumber('angle', angle)); }

// translation type
export type TranslationType = Length | Percentage | Variable<TranslationType> | Calculation<Partial<TranslationType>>;

// translate
export class Translate extends StyleMethod {
	private translationX: TranslationType;
	private translationY: TranslationType | undefined;

	constructor(
		translationX: TranslationType,
		translationY?: TranslationType
	) {
		super();

	this.translationX = translationX;
		this.translationY = translationY;
	}

	toValueString() {
		return `${this.translationX}${this.translationY == null ? '' : `, ${this.translationY}`}`;
	}
}

export function translate(translationX: TranslationType, translationY?: TranslationType) { return new Translate(translationX, translationY); }

// translate3d
export class Translate3d extends StyleMethod {
	private translationX: TranslationType;
	private translationY: TranslationType;
	private translationZ: Length;

	constructor(
		translationX: TranslationType,
		translationY: TranslationType,
		translationZ: Length
	) {
		super();

	this.translationX = translationX;
		this.translationY = translationY;
		this.translationZ = translationZ;
	}

	toValueString() {
		return `${this.translationX}${this.translationY}${this.translationZ}`;
	}
}

export function translate3d(translationX: TranslationType, translationY: TranslationType, translationZ: Length) { return new Translate3d(translationX, translationY, translationZ); }

// translate x
export class TranslateX extends StyleMethod {
	private translationX: TranslationType;

	constructor(
		translationX: TranslationType
	) {
		super();

	this.translationX = translationX;
	}

	toValueString() {
		return `${this.translationX}`;
	}
}

export function translateX(translationX: TranslationType) { return new TranslateX(translationX); }

// translate y
export class TranslateY extends StyleMethod {
	private translationY: TranslationType;

	constructor(
		translationY: TranslationType
	) {
		super();

	this.translationY = translationY;
	}

	toValueString() {
		return `${this.translationY}`;
	}
}

export function translateY(translationY: TranslationType) { return new TranslateY(translationY); }

// translate z
export class TranslateZ extends StyleMethod {
	private translationZ: Length;

	constructor(
		translationZ: Length
	) {
		super();

	this.translationZ = translationZ;
	}

	toValueString() {
		return `${this.translationZ}`;
	}
}

export function translateZ(translationZ: Length) { return new TranslateZ(translationZ); }

