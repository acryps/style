import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';



// string
export type String = string | Variable<String>;

// url
export class Url extends StyleMethod {
	private source: String;

	constructor(
		source: String
	) {
		super();

	this.source = source;
	}

	toValueString() {
		return `url('${this.source}')`;
	}
}

export function url(source: String) { return new Url(source); }

// image source
export type ImageSource = Url | Variable<ImageSource>;

// number
export type Number = number | Variable<Number>;

// percentage
export class Percentage extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}%`;
	}
}

export function percentage(value: Number) { return new Percentage(value); }

// line width
export type LineWidth = Number | Variable<LineWidth>;

// integer
export type Integer = Number | Variable<Integer>;

// font dimension
export type FontDimension = Rem | Em | Ex | Ch | Cap | Ic | Lh | Rlh | Variable<FontDimension>;

// viewport dimension
export type ViewportDimension = Vh | Svh | Lvh | Dvh | Vw | Svw | Lvw | Dvw | Vmax | Svmax | Lvmax | Dvmax | Vmin | Svmin | Lvmin | Dvmin | Vb | Svb | Lvb | Dvb | Vi | Svi | Lvi | Dvi | Variable<ViewportDimension>;

// container dimension
export type ContainerDimension = Cqw | Cqh | Cqb | Cqi | Cqmin | Cqmax | Variable<ContainerDimension>;

// inch
export class Inch extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}in`;
	}
}

export function inch(value: Number) { return new Inch(value); }

// absolute length dimension
export type AbsoluteLengthDimension = Px | Cm | Mm | Inch | Pc | Pt | Variable<AbsoluteLengthDimension>;

// length
export type Length = 0 | FontDimension | ViewportDimension | ContainerDimension | AbsoluteLengthDimension | Variable<Length>;

// rem
export class Rem extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}rem`;
	}
}

export function rem(value: Number) { return new Rem(value); }

// em
export class Em extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}em`;
	}
}

export function em(value: Number) { return new Em(value); }

// ex
export class Ex extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}ex`;
	}
}

export function ex(value: Number) { return new Ex(value); }

// ch
export class Ch extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}ch`;
	}
}

export function ch(value: Number) { return new Ch(value); }

// cap
export class Cap extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cap`;
	}
}

export function cap(value: Number) { return new Cap(value); }

// ic
export class Ic extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}ic`;
	}
}

export function ic(value: Number) { return new Ic(value); }

// lh
export class Lh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lh`;
	}
}

export function lh(value: Number) { return new Lh(value); }

// rlh
export class Rlh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}rlh`;
	}
}

export function rlh(value: Number) { return new Rlh(value); }

// vh
export class Vh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}vh`;
	}
}

export function vh(value: Number) { return new Vh(value); }

// svh
export class Svh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}svh`;
	}
}

export function svh(value: Number) { return new Svh(value); }

// lvh
export class Lvh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lvh`;
	}
}

export function lvh(value: Number) { return new Lvh(value); }

// dvh
export class Dvh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}dvh`;
	}
}

export function dvh(value: Number) { return new Dvh(value); }

// vw
export class Vw extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}vw`;
	}
}

export function vw(value: Number) { return new Vw(value); }

// svw
export class Svw extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}svw`;
	}
}

export function svw(value: Number) { return new Svw(value); }

// lvw
export class Lvw extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lvw`;
	}
}

export function lvw(value: Number) { return new Lvw(value); }

// dvw
export class Dvw extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}dvw`;
	}
}

export function dvw(value: Number) { return new Dvw(value); }

// vmax
export class Vmax extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}vmax`;
	}
}

export function vmax(value: Number) { return new Vmax(value); }

// svmax
export class Svmax extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}svmax`;
	}
}

export function svmax(value: Number) { return new Svmax(value); }

// lvmax
export class Lvmax extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lvmax`;
	}
}

export function lvmax(value: Number) { return new Lvmax(value); }

// dvmax
export class Dvmax extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}dvmax`;
	}
}

export function dvmax(value: Number) { return new Dvmax(value); }

// vmin
export class Vmin extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}vmin`;
	}
}

export function vmin(value: Number) { return new Vmin(value); }

// svmin
export class Svmin extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}svmin`;
	}
}

export function svmin(value: Number) { return new Svmin(value); }

// lvmin
export class Lvmin extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lvmin`;
	}
}

export function lvmin(value: Number) { return new Lvmin(value); }

// dvmin
export class Dvmin extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}dvmin`;
	}
}

export function dvmin(value: Number) { return new Dvmin(value); }

// vb
export class Vb extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}vb`;
	}
}

export function vb(value: Number) { return new Vb(value); }

// svb
export class Svb extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}svb`;
	}
}

export function svb(value: Number) { return new Svb(value); }

// lvb
export class Lvb extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lvb`;
	}
}

export function lvb(value: Number) { return new Lvb(value); }

// dvb
export class Dvb extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}dvb`;
	}
}

export function dvb(value: Number) { return new Dvb(value); }

// vi
export class Vi extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}vi`;
	}
}

export function vi(value: Number) { return new Vi(value); }

// svi
export class Svi extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}svi`;
	}
}

export function svi(value: Number) { return new Svi(value); }

// lvi
export class Lvi extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}lvi`;
	}
}

export function lvi(value: Number) { return new Lvi(value); }

// dvi
export class Dvi extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}dvi`;
	}
}

export function dvi(value: Number) { return new Dvi(value); }

// cqw
export class Cqw extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cqw`;
	}
}

export function cqw(value: Number) { return new Cqw(value); }

// cqh
export class Cqh extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cqh`;
	}
}

export function cqh(value: Number) { return new Cqh(value); }

// cqb
export class Cqb extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cqb`;
	}
}

export function cqb(value: Number) { return new Cqb(value); }

// cqi
export class Cqi extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cqi`;
	}
}

export function cqi(value: Number) { return new Cqi(value); }

// cqmin
export class Cqmin extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cqmin`;
	}
}

export function cqmin(value: Number) { return new Cqmin(value); }

// cqmax
export class Cqmax extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cqmax`;
	}
}

export function cqmax(value: Number) { return new Cqmax(value); }

// px
export class Px extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}px`;
	}
}

export function px(value: Number) { return new Px(value); }

// cm
export class Cm extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}cm`;
	}
}

export function cm(value: Number) { return new Cm(value); }

// mm
export class Mm extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}mm`;
	}
}

export function mm(value: Number) { return new Mm(value); }

// pc
export class Pc extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}pc`;
	}
}

export function pc(value: Number) { return new Pc(value); }

// pt
export class Pt extends StyleMethod {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	toValueString() {
		return `${this.value}pt`;
	}
}

export function pt(value: Number) { return new Pt(value); }

Style.numberConverter['length'] = Rem;