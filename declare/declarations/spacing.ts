import { Ident } from "../ident";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { length } from "./primitives";
import { TypeDeclaration } from "../builders/type";

export const spacingLength = new TypeDeclaration('auto', length);

const exportSpacingSide = (type: string, side: string) => module.exports[`${type}${Ident.fromCamelCase(side).toClassCamelCase()}`] = new PropertyTypeDeclaration({
	length: spacingLength.single()
}, '${this.length}');

const exportSpacingInline = (type: string) => module.exports[`${type}Inline`] = new ShorthandDeclaration([
	exportSpacingSide(type, 'left'),
	exportSpacingSide(type, 'right')
]);

const exportSpacingBlock = (type: string) => module.exports[`${type}Block`] = new ShorthandDeclaration([
	exportSpacingSide(type, 'top'),
	exportSpacingSide(type, 'bottom')
]);

const exportSpacing = (type: string) => module.exports[type] = new ShorthandDeclaration([
	exportSpacingInline(type),
	exportSpacingBlock(type)
]);

exportSpacing('margin');
exportSpacing('padding');
