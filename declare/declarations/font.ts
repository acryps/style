import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { integer, length, string } from "./primitives";

export const fontFamilyIdentifier = new TypeDeclaration(string);
export const fontWeights = new TypeDeclaration(integer, 'normal', 'bold', 'lighter', 'bolder');

export const fontFamily = new PropertyTypeDeclaration({
	name: fontFamilyIdentifier.spread()
}, '${this.name}');

export const fontSize = new PropertyTypeDeclaration({
	size: length.single()
}, '${this.size}');

export const fontWeight = new PropertyTypeDeclaration({
	weight: fontWeights.single()
}, '${this.weight}');

export const font = new ShorthandDeclaration([
	fontSize,
	fontWeight,
	fontFamily
])