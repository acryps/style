import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { length, percentage } from "./primitives";

export const positionMode = new TypeDeclaration('static', 'relative', 'absolute', 'fixed', 'sticky');

export const position = new PropertyTypeDeclaration({
	mode: positionMode.single()
}, "${this.mode}");

export const insetType = new TypeDeclaration(length, percentage);

const exportInsetSide = (side: string) => module.exports[side] = new PropertyTypeDeclaration({
	offset: insetType.single()
}, '${this.offset}');

export const insetInline = new ShorthandDeclaration([
	exportInsetSide('left'),
	exportInsetSide('right')
]);

export const insetBlock = new ShorthandDeclaration([
	exportInsetSide('top'),
	exportInsetSide('bottom')
]);

export const inset = new ShorthandDeclaration([insetInline, insetBlock]);