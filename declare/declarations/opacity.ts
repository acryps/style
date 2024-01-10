import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { number } from "./primitives";

export const alphaValue = new TypeDeclaration(number, 'none');

export const opacity = new PropertyTypeDeclaration({
	alpha: alphaValue.single()
}, '${this.alpha}');