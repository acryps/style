import { PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "../types";

export const overflowMode = new TypeDeclaration('visible', 'hidden', 'clip', 'scroll', 'auto');

const exportOverflowAxis = (axis: string) => module.exports[`overflow${axis.toUpperCase()}`] = new PropertyTypeDeclaration({ 
	mode: overflowMode.single()
}, '${this.mode}');

export const overflow = new ShorthandDeclaration([
	exportOverflowAxis('x'),
	exportOverflowAxis('y')
]);6