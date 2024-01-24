import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { length, number } from "./primitives";

export const lineHeightSize = new TypeDeclaration(number, length);

export const lineHeight = new PropertyTypeDeclaration({
	size: lineHeightSize.single()
}, '${this.size}');