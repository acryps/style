import { PropertyTypeDeclaration } from "../builders/property";
import { length } from "./primitives";
import { TypeDeclaration } from "../builders/type";
import { Ident } from "../ident";

export const autoLength = new TypeDeclaration('auto', length);

const exportSpacingAround = (name: string, type: TypeDeclaration) => module.exports[name] = new PropertyTypeDeclaration({
	top: type.single(),
	right: type.single(),
	bottom: type.single(),
	left: type.single()
}, '${this.top} ${this.right} ${this.bottom} ${this.left}')
	.addShorthandInitializer({
		block: ['top', 'bottom'],
		inline: ['left', 'right']
	}, '${this.block} ${this.inline}')
	.addShorthandInitializer({
		length: ['block', 'inline']
	}, '${this.length}')
	.allowNone();

const exportSpacingBlock = (name: string, type: TypeDeclaration) => module.exports[`${name}Block`] = new PropertyTypeDeclaration({
	top: type.single(),
	bottom: type.single()
}, '${this.top} ${this.bottom}')
	.addShorthandInitializer({
		block: ['top', 'bottom']
	}, '${this.block}')
	.allowNone();

const exportSpacingInline = (name: string, type: TypeDeclaration) => module.exports[`${name}Inline`] = new PropertyTypeDeclaration({
	left: type.single(),
	right: type.single()
}, '${this.left} ${this.right}')
	.addShorthandInitializer({
		inline: ['left', 'right']
	}, '${this.inline}')
	.allowNone();

const exportSpacingSide = (name: string, type: TypeDeclaration, side: string) => module.exports[`${name}${Ident.fromCamelCase(side).toClassCamelCase()}`] = new PropertyTypeDeclaration({
	[side]: type.single()
}, `$\{this.${side}}`).allowNone();

const exportSpacing = (name: string, type: TypeDeclaration) => {
	exportSpacingAround(name, type);
	exportSpacingBlock(name, type);
	exportSpacingInline(name, type);
	exportSpacingSide(name, type, 'top');
	exportSpacingSide(name, type, 'right');
	exportSpacingSide(name, type, 'bottom');
	exportSpacingSide(name, type, 'left');
}

exportSpacing('margin', autoLength);
exportSpacing('padding', length);
