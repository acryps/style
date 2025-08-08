import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { number, percentage } from "./primitives";

export const alphaValue = new TypeDeclaration(number, 'none', percentage);

export const opacity = new PropertyTypeDeclaration({
	alpha: alphaValue.single()
}, '${this.alpha}');