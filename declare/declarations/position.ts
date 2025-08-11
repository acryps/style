import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { length, percentage } from "./primitives";

export const positionMode = new TypeDeclaration('static', 'relative', 'absolute', 'fixed', 'sticky');

export const position = new PropertyTypeDeclaration({
	mode: positionMode.single()
}, "${this.mode}");

export const insetType = new TypeDeclaration(length, percentage);

export const inset = new PropertyTypeDeclaration({
	top: insetType.single(),
	right: insetType.single(),
	bottom: insetType.single(),
	left: insetType.single()
}, '${this.top} ${this.right} ${this.bottom} ${this.left}')
	.addShorthandInitializer({
		block: ['top', 'bottom'],
		inline: ['left', 'right']
	}, '${this.block} ${this.inline}')
	.addShorthandInitializer({
		mode: ['block', 'inline']
	}, '${this.mode}');

export const insetBlock = new PropertyTypeDeclaration({
	top: insetType.single(),
	bottom: insetType.single()
}, '${this.top} ${this.bottom}')
	.addShorthandInitializer({
		block: ['top', 'bottom']
	}, '${this.block}');

export const insetInline = new PropertyTypeDeclaration({
	left: insetType.single(),
	right: insetType.single()
}, '${this.left} ${this.right}')
	.addShorthandInitializer({
		inline: ['left', 'right']
	}, '${this.inline}');

const exportInsetSide = (side: string) => module.exports[side] = new PropertyTypeDeclaration({
	offset: insetType.single()
}, '${this.offset}');

exportInsetSide('top');
exportInsetSide('right');
exportInsetSide('bottom');
exportInsetSide('left');
