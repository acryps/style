import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { angle } from "./angle";
import { colorValue } from "./color";
import { length, percentage } from "./primitives";

export const colorStopLocation = new TypeDeclaration(length, percentage, angle);

export const colorStop = new MethodDeclaration({
	location: colorStopLocation.single(),
	color: colorValue.single(),
	end: colorStopLocation.optional()
}, `
	this.location = location;
	this.color = color;
	this.end = end;
`, "${this.color} ${this.location}${this.end ? ` ${this.end}` : ''}");

export const linearGradient = new MethodDeclaration({
	angle: angle.single(),
	stops: colorStop.spread()
}, `
	this.angle = angle;
	this.stops = stops;
`, "linear-gradient(${this.angle}, ${this.stops.join(',')})");

export const repeatingLinearGradient = new MethodDeclaration({
	angle: angle.single(),
	stops: colorStop.spread()
}, `
	this.angle = angle;
	this.stops = stops;
`, "repeating-linear-gradient(${this.angle}, ${this.stops.join(',')})");

export const conicGradient = new MethodDeclaration({
	stops: colorStop.spread()
}, `
	this.stops = stops;
`, "conic-gradient(${this.stops.join(',')})");

export const gradient = new TypeDeclaration(linearGradient, repeatingLinearGradient, conicGradient);
