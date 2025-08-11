import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { integer, length, percentage, string } from "./primitives";

export const fontFamilyIdentifier = new TypeDeclaration(string);
export const fontWeights = new TypeDeclaration(integer, 'normal', 'bold', 'lighter', 'bolder');

export const fontFamily = new PropertyTypeDeclaration({
	name: fontFamilyIdentifier.spread()
}, '${this.name}');

export const fontSizeType = new TypeDeclaration(length, percentage);

export const fontSize = new PropertyTypeDeclaration({
	size: fontSizeType.single()
}, '${this.size}');

export const fontWeight = new PropertyTypeDeclaration({
	weight: fontWeights.single()
}, '${this.weight}');

export const fontStyleMode = new TypeDeclaration('normal', 'italic', 'oblique');

export const fontStyle = new PropertyTypeDeclaration({
	style: fontStyleMode.single()
}, '${this.style}');

export const font = new PropertyTypeDeclaration({
	size: fontSizeType.single(),
	weight: fontWeights.single(),
	style: fontStyleMode.single()
}, '${this.size} ${this.weight} ${this.style}');
