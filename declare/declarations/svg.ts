import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";
import { length } from "./primitives";

export const paintColor = new TypeDeclaration(colorValue, 'none');

export const stroke = new PropertyTypeDeclaration({
	color: paintColor.single()
}, '${this.color}');

export const strokeWidth = new PropertyTypeDeclaration({
	width: length.single()
}, '${this.width}');

export const fill = new PropertyTypeDeclaration({
	color: paintColor.single()
}, '${this.color}');

export const vectorEffectMode = new TypeDeclaration('none', 'non-scaling-stroke', 'non-scaling-size', 'non-rotation', 'fixed-position');

export const vectorEffect = new PropertyTypeDeclaration({
	mode: vectorEffectMode.single()
}, '${this.mode}');