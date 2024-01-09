import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const lineHeightSize = new TypeDeclaration("number");

export const lineHeight = new PropertyTypeDeclaration({
	size: lineHeightSize.single()
}, '${this.size}');