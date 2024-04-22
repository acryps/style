import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";
import { length, lineWidth } from "./primitives";

export const outlineWidthType = new TypeDeclaration(lineWidth, 'thin', 'medium', 'thick');
export const outlineStyleType = new TypeDeclaration('none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset');

const outlineColor = () => module.exports['outlineColor'] =  new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');

const outlineStyle = () => module.exports['outlineStyle'] =  new PropertyTypeDeclaration({
	style: outlineStyleType.single()
}, '${this.style}');

const outlineWidth = () => module.exports['outlineWidth'] = new PropertyTypeDeclaration({
	width: outlineWidthType.single()
}, '${this.width}');

export const outline = new ShorthandDeclaration([
	outlineWidth(),
	outlineStyle(),
	outlineColor()
]);

export const outlineOffset = new PropertyTypeDeclaration({
	style: length.single()
}, '${this.style}');