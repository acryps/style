import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";
import { length, lineWidth } from "./primitives";

export const outlineWidthType = new TypeDeclaration(lineWidth, 'thin', 'medium', 'thick');
export const outlineStyleType = new TypeDeclaration('hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset');

export const outlineColor =  new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');

export const outlineStyle =  new PropertyTypeDeclaration({
	style: outlineStyleType.single()
}, '${this.style}')
	.allowNone();

export const outlineWidth = new PropertyTypeDeclaration({
	width: outlineWidthType.single()
}, '${this.width}');

export const outline = new PropertyTypeDeclaration({
	width: outlineWidthType.single(),
	style: outlineStyleType.single(),
	color: colorValue.single()
}, '${this.width} ${this.style} ${this.color}');

export const outlineOffset = new PropertyTypeDeclaration({
	style: length.single()
}, '${this.style}');
