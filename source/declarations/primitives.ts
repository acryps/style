import { Style } from '../style';
import { StyleProperty } from '../property';



// string
export type String = string;

// url
export class Url {
	private source: String;

	constructor(
		source: String
	) {
		this.source = source;
	}

	toString() {
		return `${this.source}`;
	}
}

export function url(source: String) { return new Url(source); }

// image source
export type ImageSource = Url;

// percentage
export type Percentage = number;

// number
export type Number = number;

// line width
export type LineWidth = Number;

// integer
export type Integer = Number;

// length
export type Length = Number;

