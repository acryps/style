import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";

export const overflowMode = new TypeDeclaration('visible', 'hidden', 'clip', 'scroll', 'auto');

const exportOverflowAxis = (axis: string) => module.exports[`overflow${axis.toUpperCase()}`] = new PropertyTypeDeclaration({
	mode: overflowMode.single()
}, '${this.mode}');

exportOverflowAxis('x');
exportOverflowAxis('y');

export const overflow = new PropertyTypeDeclaration({
	x: overflowMode.single(),
	y: overflowMode.single()
}, '${this.x} ${this.y}')
	.addShorthandInitializer({
		mode: ['x', 'y']
	}, '${this.mode}');

export const textOverflowMode = new TypeDeclaration('clip', 'ellipsis');

export const textOverflow = new PropertyTypeDeclaration({
	mode: textOverflowMode.single()
}, "${this.mode}");
