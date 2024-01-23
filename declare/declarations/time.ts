import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { integer, number } from "./primitives";

export const seconds = MethodDeclaration.fromUnit('s', number);
export const milliseconds = MethodDeclaration.fromUnit('ms', number);

export const duration = new TypeDeclaration(seconds, milliseconds).defaultNumberConverter(seconds);

export const stepJumpMode = new TypeDeclaration('jump-start', 'jump-end', 'jump-none', 'jump-both');

export const steps = new MethodDeclaration({
	count: integer.single(),
	jump: stepJumpMode.single()
}, `
	this.count = count;
	this.jump = jump;
`, "steps(${this.count},${this.jump})");

export const cubicBezier = new MethodDeclaration({
	point1: number.single(),
	point2: number.single(),
	point3: number.single(),
	point4: number.single()
}, `
	this.point1 = point1;
	this.point2 = point2;
	this.point3 = point3;
	this.point4 = point4;
`, "cubic-bezier(${this.point1}, ${this.point2}, ${this.point3}, ${this.point4})");

export const linear = new MethodDeclaration({
	points: number.spread()
}, `
	this.points = points;
`, "linear(${this.points.join(',')})");

export const easingFunction = new TypeDeclaration(
	linear, 'linear',
	cubicBezier, 'ease', 'ease-in', 'ease-out', 'ease-in-out',
	steps, 'step-start', 'step-end'
);