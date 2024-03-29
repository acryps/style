import { Ident } from "../ident";
import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { colorValue } from "./color";
import { length, lineWidth, percentage } from "./primitives";

export const borderStyle = new TypeDeclaration('none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset');

const exportBorderWidth = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}Width`] = new PropertyTypeDeclaration({
	width: lineWidth.single()
}, '${this.width}');

const exportBorderStyle = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}Style`] = new PropertyTypeDeclaration({
	style: borderStyle.single()
}, '${this.style}');

const exportBorderColor = (side: string) => module.exports[`border${Ident.fromCamelCase(side).toClassCamelCase()}Color`] = new PropertyTypeDeclaration({
	color: colorValue.single()
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

export const borderRadiusSize = new TypeDeclaration(length, percentage);

const exportBorderRadiusSide = (block: string, inline: string) => module.exports[`border${Ident.fromCamelCase(block).toClassCamelCase()}${Ident.fromCamelCase(inline).toClassCamelCase()}Radius`] = new PropertyTypeDeclaration({
	radius: borderRadiusSize.single()
}, '${this.radius}');

export const borderRadius = new ShorthandDeclaration([
	exportBorderRadiusSide('top', 'left'),
	exportBorderRadiusSide('top', 'right'),
	exportBorderRadiusSide('bottom', 'right'),
	exportBorderRadiusSide('bottom', 'left')
]);