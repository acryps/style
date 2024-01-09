import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const alphaValue = new TypeDeclaration("number | 'none'");

export const opacity = new PropertyTypeDeclaration({
	alpha: alphaValue.single()
}, '${this.alpha}');