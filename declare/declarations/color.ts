import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { MethodDeclaration } from "../builders/method";
import { number, string } from "./primitives";
import { alphaValue } from "./opacity";

export const hex = new MethodDeclaration({
	color: string.single()
}, `
	this.color = color;
`, "#${this.color}");

export const rgb = new MethodDeclaration({
	red: number.single(),
	green: number.single(),
	blue: number.single(),
	alpha: alphaValue.optional()
}, `
	this.red = red;
	this.green = green;
	this.blue = blue;
	this.alpha = alpha;
`, "rgb(${this.red} ${this.green} ${this.blue}${this.alpha == null ? '' : ` / ${this.alpha}`}");


export const colorValue = new TypeDeclaration(hex, rgb);

export const color = new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');