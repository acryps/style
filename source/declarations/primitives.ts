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
		return `${this.source}`;
	}
}

export function url(source: String) { return new Url(source); }

// image source
export type ImageSource = Url | Variable<ImageSource>;

// percentage
export type Percentage = number | Variable<Percentage>;

// number
export type Number = number | Variable<Number>;

// line width
export type LineWidth = Number | Variable<LineWidth>;

// integer
export type Integer = Number | Variable<Integer>;

// length
export type Length = Number | Variable<Length>;

