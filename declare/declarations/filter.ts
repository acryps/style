import { MethodDeclaration } from "../builders/method";
import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { angle } from "./angle";
import { colorValue } from "./color";
import { intensity, length } from "./primitives";

export const blur = new MethodDeclaration({
	radius: length.single()
}, `
	this.radius = radius;
`, 'blur(${this.radius})');

export const brightness = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'brightness(${this.amount})');

export const contrast = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'contrast(${this.amount})');

export const dropShadow = new MethodDeclaration({
	offsetX: length.single(),
	offsetY: length.single(),
	radius: length.single(),
	color: colorValue.single()
}, `
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.radius = radius;
	this.color = color;
`, 'drop-shadow(${this.offsetX} ${this.offsetY} ${this.radius} ${this.color})');

export const grayscale = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'grayscale(${this.amount})');

export const hueRotate = new MethodDeclaration({
	amount: angle.single()
}, `
	this.amount = amount;
`, 'hue-rotate(${this.amount})');

export const invert = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'invert(${this.amount})');

export const opacityFilter = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'opacity(${this.amount})');

export const saturate = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'saturate(${this.amount})');

export const sepia = new MethodDeclaration({
	amount: intensity.single()
}, `
	this.amount = amount;
`, 'sepia(${this.amount})');

export const filterLayer = new TypeDeclaration(blur, brightness, contrast, dropShadow, grayscale, hueRotate, invert, saturate, sepia, 'none');

export const filter = new PropertyTypeDeclaration({
	layers: filterLayer.spread()
}, "${this.layers.join(' ')}");
