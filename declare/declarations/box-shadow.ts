import { PropertyTypeDeclaration, TypeDeclaration } from "../types";
import { color } from "./color";
import { length } from "./numbers";

export const boxShadowType = new TypeDeclaration(`'inset' | 'outset'`);

export const boxShadow = new PropertyTypeDeclaration({
	color: color.single(),
	offsetX: length.single(),
	offsetY: length.single(),
	blurRadius: length.single(),
	spreadRadius: length.single('0'),
	type: boxShadowType.single("'outset'")
}, "${this.offsetX} ${this.offsetY} ${this.blurRadius ?? ''} ${this.spreadRadius ?? ''} ${this.type == 'inset' ? ' inset' : ''}");