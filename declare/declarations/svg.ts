import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";
import { alphaValue } from "./opacity";
import { length, lineWidth, number, percentage, staticLength } from "./primitives";

export const paintColor = new TypeDeclaration(colorValue, 'none');
export const dynamicLineSize = new TypeDeclaration(number, staticLength, percentage);

export const stroke = new PropertyTypeDeclaration({
	color: paintColor.single()
}, '${this.color}');

export const strokeWidth = new PropertyTypeDeclaration({
	width: dynamicLineSize.single()
}, '${this.width}');

export const strokeDasharray = new PropertyTypeDeclaration({
	length: dynamicLineSize.spread()
}, '${this.length.join()}')
	.allowNone();

export const strokeDashoffset = new PropertyTypeDeclaration({
	length: dynamicLineSize.single()
}, '${this.length}');

export const lineCapMode = new TypeDeclaration('butt', 'round', 'square');

export const strokeLinecap = new PropertyTypeDeclaration({
	mode: lineCapMode.single()
}, '${this.mode}');

export const lineJoinMode = new TypeDeclaration('bevel', 'miter', 'round');

export const strokeLinejoin = new PropertyTypeDeclaration({
	mode: lineJoinMode.single()
}, '${this.mode}');

export const strokeMiterlimit = new PropertyTypeDeclaration({
	limit: number.single()
}, '${this.limit}');

export const strokeOpacity = new PropertyTypeDeclaration({
	alpha: alphaValue.single()
}, '${this.alpha}');

export const fill = new PropertyTypeDeclaration({
	color: paintColor.single()
}, '${this.color}');

export const fillOpacity = new PropertyTypeDeclaration({
	alpha: alphaValue.single()
}, '${this.alpha}');

export const fillRuleMode = new TypeDeclaration('evenodd', 'nonzero');

export const fillRule = new PropertyTypeDeclaration({
	rule: fillRuleMode.single()
}, '${this.rule}');

export const vectorEffectMode = new TypeDeclaration('none', 'non-scaling-stroke', 'non-scaling-size', 'non-rotation', 'fixed-position');

export const vectorEffect = new PropertyTypeDeclaration({
	mode: vectorEffectMode.single()
}, '${this.mode}');
