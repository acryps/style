import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// string
export type String = string | Variable<String> | Calculation<Partial<String>>;

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
export type ImageSource = Url | Variable<ImageSource> | Calculation<Partial<ImageSource>>;

// number
export type Number = number | Variable<Number> | Calculation<Partial<Number>>;

// percentage
export class Percentage extends StyleMethod implements Calculable<Percentage> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}%`;
	}
}

export function percentage(value: Number) { return new Percentage(value); }

// integer
export type Integer = Number | Variable<Integer> | Calculation<Partial<Integer>>;

// font dimension
export type FontDimension = Rem | Em | Ex | Ch | Cap | Ic | Lh | Rlh | Variable<FontDimension> | Calculation<Partial<FontDimension>>;

// viewport dimension
export type ViewportDimension = Vh | Svh | Lvh | Dvh | Vw | Svw | Lvw | Dvw | Vmax | Svmax | Lvmax | Dvmax | Vmin | Svmin | Lvmin | Dvmin | Vb | Svb | Lvb | Dvb | Vi | Svi | Lvi | Dvi | Variable<ViewportDimension> | Calculation<Partial<ViewportDimension>>;

// container dimension
export type ContainerDimension = Cqw | Cqh | Cqb | Cqi | Cqmin | Cqmax | Variable<ContainerDimension> | Calculation<Partial<ContainerDimension>>;

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
export type AbsoluteLengthDimension = Px | Cm | Mm | Inch | Pc | Pt | Variable<AbsoluteLengthDimension> | Calculation<Partial<AbsoluteLengthDimension>>;

// static length
export type StaticLength = 0 | FontDimension | ViewportDimension | ContainerDimension | AbsoluteLengthDimension | Variable<StaticLength> | Calculation<Partial<StaticLength>>;

// min
export class Min extends StyleMethod {
	private values: StaticLength[];

	constructor(
		...values: StaticLength[]
	) {
		super();

	this.values = values;
	}

	toValueString() {
		return `min(${this.values.join(',')})`;
	}
}

export function min(...values: StaticLength[]) { return new Min(...values.map(value => Style.resolveNumber('staticLength', value))); }

// max
export class Max extends StyleMethod {
	private values: StaticLength[];

	constructor(
		...values: StaticLength[]
	) {
		super();

	this.values = values;
	}

	toValueString() {
		return `min(${this.values.join(',')})`;
	}
}

export function max(...values: StaticLength[]) { return new Max(...values.map(value => Style.resolveNumber('staticLength', value))); }

// length
export type Length = StaticLength | Min | Max | Variable<Length> | Calculation<Partial<Length>>;

// line width
export type LineWidth = Number | Length | Variable<LineWidth> | Calculation<Partial<LineWidth>>;

// rem
export class Rem extends StyleMethod implements Calculable<Rem> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}rem`;
	}
}

export function rem(value: Number) { return new Rem(value); }

// em
export class Em extends StyleMethod implements Calculable<Em> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}em`;
	}
}

export function em(value: Number) { return new Em(value); }

// ex
export class Ex extends StyleMethod implements Calculable<Ex> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}ex`;
	}
}

export function ex(value: Number) { return new Ex(value); }

// ch
export class Ch extends StyleMethod implements Calculable<Ch> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}ch`;
	}
}

export function ch(value: Number) { return new Ch(value); }

// cap
export class Cap extends StyleMethod implements Calculable<Cap> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cap`;
	}
}

export function cap(value: Number) { return new Cap(value); }

// ic
export class Ic extends StyleMethod implements Calculable<Ic> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}ic`;
	}
}

export function ic(value: Number) { return new Ic(value); }

// lh
export class Lh extends StyleMethod implements Calculable<Lh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lh`;
	}
}

export function lh(value: Number) { return new Lh(value); }

// rlh
export class Rlh extends StyleMethod implements Calculable<Rlh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}rlh`;
	}
}

export function rlh(value: Number) { return new Rlh(value); }

// vh
export class Vh extends StyleMethod implements Calculable<Vh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}vh`;
	}
}

export function vh(value: Number) { return new Vh(value); }

// svh
export class Svh extends StyleMethod implements Calculable<Svh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}svh`;
	}
}

export function svh(value: Number) { return new Svh(value); }

// lvh
export class Lvh extends StyleMethod implements Calculable<Lvh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lvh`;
	}
}

export function lvh(value: Number) { return new Lvh(value); }

// dvh
export class Dvh extends StyleMethod implements Calculable<Dvh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}dvh`;
	}
}

export function dvh(value: Number) { return new Dvh(value); }

// vw
export class Vw extends StyleMethod implements Calculable<Vw> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}vw`;
	}
}

export function vw(value: Number) { return new Vw(value); }

// svw
export class Svw extends StyleMethod implements Calculable<Svw> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}svw`;
	}
}

export function svw(value: Number) { return new Svw(value); }

// lvw
export class Lvw extends StyleMethod implements Calculable<Lvw> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lvw`;
	}
}

export function lvw(value: Number) { return new Lvw(value); }

// dvw
export class Dvw extends StyleMethod implements Calculable<Dvw> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}dvw`;
	}
}

export function dvw(value: Number) { return new Dvw(value); }

// vmax
export class Vmax extends StyleMethod implements Calculable<Vmax> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}vmax`;
	}
}

export function vmax(value: Number) { return new Vmax(value); }

// svmax
export class Svmax extends StyleMethod implements Calculable<Svmax> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}svmax`;
	}
}

export function svmax(value: Number) { return new Svmax(value); }

// lvmax
export class Lvmax extends StyleMethod implements Calculable<Lvmax> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lvmax`;
	}
}

export function lvmax(value: Number) { return new Lvmax(value); }

// dvmax
export class Dvmax extends StyleMethod implements Calculable<Dvmax> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}dvmax`;
	}
}

export function dvmax(value: Number) { return new Dvmax(value); }

// vmin
export class Vmin extends StyleMethod implements Calculable<Vmin> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}vmin`;
	}
}

export function vmin(value: Number) { return new Vmin(value); }

// svmin
export class Svmin extends StyleMethod implements Calculable<Svmin> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}svmin`;
	}
}

export function svmin(value: Number) { return new Svmin(value); }

// lvmin
export class Lvmin extends StyleMethod implements Calculable<Lvmin> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lvmin`;
	}
}

export function lvmin(value: Number) { return new Lvmin(value); }

// dvmin
export class Dvmin extends StyleMethod implements Calculable<Dvmin> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}dvmin`;
	}
}

export function dvmin(value: Number) { return new Dvmin(value); }

// vb
export class Vb extends StyleMethod implements Calculable<Vb> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}vb`;
	}
}

export function vb(value: Number) { return new Vb(value); }

// svb
export class Svb extends StyleMethod implements Calculable<Svb> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}svb`;
	}
}

export function svb(value: Number) { return new Svb(value); }

// lvb
export class Lvb extends StyleMethod implements Calculable<Lvb> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lvb`;
	}
}

export function lvb(value: Number) { return new Lvb(value); }

// dvb
export class Dvb extends StyleMethod implements Calculable<Dvb> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}dvb`;
	}
}

export function dvb(value: Number) { return new Dvb(value); }

// vi
export class Vi extends StyleMethod implements Calculable<Vi> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}vi`;
	}
}

export function vi(value: Number) { return new Vi(value); }

// svi
export class Svi extends StyleMethod implements Calculable<Svi> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}svi`;
	}
}

export function svi(value: Number) { return new Svi(value); }

// lvi
export class Lvi extends StyleMethod implements Calculable<Lvi> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}lvi`;
	}
}

export function lvi(value: Number) { return new Lvi(value); }

// dvi
export class Dvi extends StyleMethod implements Calculable<Dvi> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}dvi`;
	}
}

export function dvi(value: Number) { return new Dvi(value); }

// cqw
export class Cqw extends StyleMethod implements Calculable<Cqw> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cqw`;
	}
}

export function cqw(value: Number) { return new Cqw(value); }

// cqh
export class Cqh extends StyleMethod implements Calculable<Cqh> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cqh`;
	}
}

export function cqh(value: Number) { return new Cqh(value); }

// cqb
export class Cqb extends StyleMethod implements Calculable<Cqb> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cqb`;
	}
}

export function cqb(value: Number) { return new Cqb(value); }

// cqi
export class Cqi extends StyleMethod implements Calculable<Cqi> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cqi`;
	}
}

export function cqi(value: Number) { return new Cqi(value); }

// cqmin
export class Cqmin extends StyleMethod implements Calculable<Cqmin> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cqmin`;
	}
}

export function cqmin(value: Number) { return new Cqmin(value); }

// cqmax
export class Cqmax extends StyleMethod implements Calculable<Cqmax> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cqmax`;
	}
}

export function cqmax(value: Number) { return new Cqmax(value); }

// px
export class Px extends StyleMethod implements Calculable<Px> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}px`;
	}
}

export function px(value: Number) { return new Px(value); }

// cm
export class Cm extends StyleMethod implements Calculable<Cm> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}cm`;
	}
}

export function cm(value: Number) { return new Cm(value); }

// mm
export class Mm extends StyleMethod implements Calculable<Mm> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}mm`;
	}
}

export function mm(value: Number) { return new Mm(value); }

// pc
export class Pc extends StyleMethod implements Calculable<Pc> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}pc`;
	}
}

export function pc(value: Number) { return new Pc(value); }

// pt
export class Pt extends StyleMethod implements Calculable<Pt> {
	private value: Number;

	constructor(
		value: Number
	) {
		super();

	this.value = value;
	}

	add = value => new Calculation(this.toValueString()).add(value);
	subtract = value => new Calculation(this.toValueString()).subtract(value);
	multiply = value => new Calculation(this.toValueString()).multiply(value);
	divide = value => new Calculation(this.toValueString()).divide(value);

	toValueString() {
		return `${this.value}pt`;
	}
}

export function pt(value: Number) { return new Pt(value); }

Style.numberConverter['staticLength'] = Rem;