import { PropertyTypeDeclaration, TypeDeclaration } from "../types";
import { colorValue } from "./color";
import { length } from "./primitives";

export const boxShadowType = new TypeDeclaration('inset', 'outset');

export const boxShadow = new PropertyTypeDeclaration({
	color: colorValue.single(),
	offsetX: length.single(),
	offsetY: length.single(),
	blurRadius: length.single(),
	spreadRadius: length.single('0'),
	type: boxShadowType.single("'outset'")
}, "${this.offsetX} ${this.offsetY} ${this.blurRadius ?? ''} ${this.spreadRadius ?? ''} ${this.type == 'inset' ? ' inset' : ''}");