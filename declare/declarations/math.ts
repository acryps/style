import { MethodDeclaration } from "../builders/method";
import { length } from "./primitives";

export const min = new MethodDeclaration({
	values: length.spread()
}, `
	this.values = values;
`, 'min(${this.values.join(\',\')})');

export const max = new MethodDeclaration({
	values: length.spread()
}, `
	this.values = values;
`, 'min(${this.values.join(\',\')})');