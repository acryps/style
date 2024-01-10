import { MethodDeclaration } from "../builders/method";
import { PrimitiveType } from "../builders/type";
import { TypeDeclaration } from "../builders/type";

export const string = new PrimitiveType('string');

export const url = new MethodDeclaration({
	source: string.single()
}, `
	this.source = source;
`, '${this.source}');

export const imageSource = new TypeDeclaration(url);

export const percentage = new PrimitiveType('number');
export const number = new PrimitiveType('number');

export const lineWidth = new TypeDeclaration(number);
export const integer = new TypeDeclaration(number);
export const length = new TypeDeclaration(number);