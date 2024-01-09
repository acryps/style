import { Ident } from "../ident";
import { PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "../types";
import { color } from "./color";
import { lineWidth } from "./numbers";

export const borderStyle = new TypeDeclaration("'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'");

const exportBorderWidth = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}Width`] = new PropertyTypeDeclaration({
	width: lineWidth.single()
}, '${this.width}');

const exportBorderStyle = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}Style`] = new PropertyTypeDeclaration({
	style: borderStyle.single()
}, '${this.style}');

const exportBorderColor = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}Color`] = new PropertyTypeDeclaration({
	color: color.single()
}, '${this.color}');

const exportBorderSide = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}`] = new ShorthandDeclaration([
	exportBorderWidth(side),
	exportBorderStyle(side),
	exportBorderColor(side)
]);

export const borderInline = new ShorthandDeclaration([
	exportBorderSide('left'),
	exportBorderSide('right')
]);

export const borderBlock = new ShorthandDeclaration([
	exportBorderSide('top'),
	exportBorderSide('bottom')
]);

export const border = new ShorthandDeclaration([
	borderInline,
	borderBlock
]);