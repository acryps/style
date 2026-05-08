import { PropertyTypeDeclaration } from "../builders/property";
import { colorValue } from "./color";
import { length } from "./primitives";

export const textShadow = new PropertyTypeDeclaration({
	color: colorValue.single(),
	offsetX: length.single(),
	offsetY: length.single(),
	blurRadius: length.single()
}, "${this.offsetX} ${this.offsetY} ${this.blurRadius ?? ''} ${this.color}")
	.allowNone()
	.allowMultiple();
