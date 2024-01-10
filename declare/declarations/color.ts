import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { MethodDeclaration } from "../builders/method";
import { number, percentage, string } from "./primitives";
import { alphaValue } from "./opacity";
import { angle } from "./angle";

export const hex = new MethodDeclaration({
	color: string.single()
}, `
	this.color = color.replace('#', '').toLowerCase();

	if (!(this.color.length == 3 || this.color.length == 4 || this.color.length == 6 || this.color.length == 8)) {
		throw new Error(\`Invalid hex color format '\${color}'\`);
	}
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
`, "rgb(${this.red} ${this.green} ${this.blue}${this.alpha == null ? '' : ` / ${this.alpha}`})");

export const hsl = new MethodDeclaration({
	hue: angle.single(),
	saturation: percentage.single(),
	lightness: percentage.single(),
	alpha: alphaValue.optional()
}, `
	this.hue = hue;
	this.saturation = saturation;
	this.lightness = lightness;

	this.alpha = alpha;
`, "hsl(${this.hue} ${this.saturation} ${this.lightness}${this.alpha == null ? '' : ` / ${this.alpha}`})");

export const colorValue = new TypeDeclaration(hex, rgb, 'currentColor', 'transparent');

export const color = new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');