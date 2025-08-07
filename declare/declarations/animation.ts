import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { integer, string } from "./primitives";
import { duration, easingFunction } from "./time";

export const animationDelay = new PropertyTypeDeclaration({
	delay: duration.spread()
}, '${this.delay.join()}');

export const animationDirectionMode = new TypeDeclaration('normal', 'reverse', 'alternate', 'alternate-reverse');

export const animationDirection = new PropertyTypeDeclaration({
	mode: animationDirectionMode.spread()
}, '${this.mode.join()}');

export const animationTimingFunction = new PropertyTypeDeclaration({
	functions: easingFunction.spread()
}, '${this.functions.join()}')

export const animationDuration = new PropertyTypeDeclaration({
	duration: duration.spread()
}, '${this.duration.join()}');

export const animationFillModeType = new TypeDeclaration('forwards', 'backwards', 'both');

export const animationFillMode = new PropertyTypeDeclaration({
	mode: animationFillModeType.spread()
}, '${this.mode.join()}').allowNone();

export const iterationCount = new TypeDeclaration(integer, 'infinite');
export const animationIterationCount = new PropertyTypeDeclaration({
	iterations: iterationCount.spread()
}, '${this.iterations.join()}');

export const animationName = new PropertyTypeDeclaration({
	name: string.spread()
}, '${this.name.join()}');

export const animationPlayStateMode = new TypeDeclaration('running', 'paused');

export const animationPlayState = new PropertyTypeDeclaration({
	mode: animationPlayStateMode.spread()
}, '${this.mode.join()}');
