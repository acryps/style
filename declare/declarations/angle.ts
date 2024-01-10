import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { number } from "./primitives";

export const deg = new MethodDeclaration({
	angle: number.single()
}, `
	this.angle = angle;
`, "${this.angle}deg");

export const rad = new MethodDeclaration({
	angle: number.single()
}, `
	this.angle = angle;
`, "${this.angle}rad");

export const turn = new MethodDeclaration({
	angle: number.single()
}, `
	this.angle = angle;
`, "${this.angle}turn");

export const angle = new TypeDeclaration(deg, rad, turn)
	.defaultNumberConverter(turn);