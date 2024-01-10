import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { angle } from "./angle";
import { colorValue } from "./color";
import { length, percentage } from "./primitives";

export const colorStopLocation = new TypeDeclaration(length, percentage);

export const colorStop = new MethodDeclaration({
	location: colorStopLocation.single(),
	color: colorValue.single()
}, `
	this.location = location;
	this.color = color;
`, "${this.color} ${this.location}");

export const linearGradient = new MethodDeclaration({
	angle: angle.single(),
	stops: colorStop.spread()
}, `
	this.angle = angle;
	this.stops = stops;
`, "${this.angle}, ${this.stops.join(',')}");

export const gradient = new TypeDeclaration(linearGradient);