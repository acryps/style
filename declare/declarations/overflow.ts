import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";

export const overflowMode = new TypeDeclaration('visible', 'hidden', 'clip', 'scroll', 'auto');

const exportOverflowAxis = (axis: string) => module.exports[`overflow${axis.toUpperCase()}`] = new PropertyTypeDeclaration({ 
	mode: overflowMode.single()
}, '${this.mode}');

export const overflow = new ShorthandDeclaration([
	exportOverflowAxis('x'),
	exportOverflowAxis('y')
]);

export const textOverflowMode = new TypeDeclaration('clip', 'ellipsis');

export const textOverflow = new PropertyTypeDeclaration({
	mode: textOverflowMode.single()
}, "${this.mode}");