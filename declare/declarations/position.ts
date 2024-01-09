import { PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "../types";
import { length } from "./primitives";

export const positionMode = new TypeDeclaration('static', 'relative', 'absolute', 'fixed', 'sticky');

export const position = new PropertyTypeDeclaration({
	mode: positionMode.single()
}, "${this.mode}");

const exportInsetSide = (side: string) => module.exports[side] = new PropertyTypeDeclaration({
	offset: length.single()
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