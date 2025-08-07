import { Ident } from "../ident";
import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { colorValue } from "./color";
import { length, lineWidth, percentage } from "./primitives";

export const borderStyleType = new TypeDeclaration('hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset');

const exportBorderWidth = (side: string) => module.exports[`border${side ? Ident.fromCamelCase(side).toClassCamelCase() : ''}Width`] = new PropertyTypeDeclaration({
	width: lineWidth.single()
}, '${this.width}');

const exportBorderStyle = (side: string) => module.exports[`border${side ? Ident.fromCamelCase(side).toClassCamelCase() : ''}Style`] = new PropertyTypeDeclaration({
	style: borderStyleType.single()
}, '${this.style}')
	.allowNone();

const exportBorderColor = (side: string) => module.exports[`border${side ? Ident.fromCamelCase(side).toClassCamelCase() : ''}Color`] = new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');

const exportBorder = (side: string) => module.exports[`border${side ? Ident.fromCamelCase(side).toClassCamelCase() : ''}`] = new PropertyTypeDeclaration({
	width: lineWidth.single(),
	style: borderStyleType.single(),
	color: colorValue.single()
}, '')
	.allowNone();

const exportBorderSide = (side: string) => {
	exportBorderWidth(side);
	exportBorderStyle(side);
	exportBorderColor(side);
	exportBorder(side);
}

exportBorderSide('top');
exportBorderSide('right');
exportBorderSide('bottom');
exportBorderSide('left');

exportBorderSide('block');
exportBorderSide('inline');

exportBorderSide('');

export const borderRadiusSize = new TypeDeclaration(length, percentage);

const exportBorderRadiusSide = (block: string, inline: string) => module.exports[`border${Ident.fromCamelCase(block).toClassCamelCase()}${Ident.fromCamelCase(inline).toClassCamelCase()}Radius`] = new PropertyTypeDeclaration({
	radius: borderRadiusSize.single()
}, '${this.radius}');

exportBorderRadiusSide('top', 'left');
exportBorderRadiusSide('top', 'right');
exportBorderRadiusSide('bottom', 'right');
exportBorderRadiusSide('bottom', 'left');

export const borderRadius = new PropertyTypeDeclaration({
	topLeft: borderRadiusSize.single(),
	topRight: borderRadiusSize.single(),
	bottomRight: borderRadiusSize.single(),
	bottomLeft: borderRadiusSize.single()
}, '${this.topLeft} ${this.topRight} ${this.bottomRight} ${this.bottomLeft}')
	.addShorthandInitializer({
		topLeftAndBottomRight: ['topLeft', 'bottomRight'],
		topRightAndBottomLeft: ['topRight', 'bottomLeft']
	}, '${this.topLeftAndBottomRight} ${this.topRightAndBottomLeft}')
	.addShorthandInitializer({
		length: ['topLeftAndBottomRight', 'topRightAndBottomLeft']
	}, '${this.length}');