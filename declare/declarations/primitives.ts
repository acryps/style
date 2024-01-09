import { PrimitiveType, TypeDeclaration } from "../types";

export const imageSource = new TypeDeclaration();
export const gradient = new TypeDeclaration();

export const string = new PrimitiveType('string');
export const percentage = new PrimitiveType('number');
export const number = new PrimitiveType('number');

export const lineWidth = new TypeDeclaration(number);
export const integer = new TypeDeclaration(number);
export const length = new TypeDeclaration(number);