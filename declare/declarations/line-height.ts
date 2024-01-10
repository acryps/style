import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { number } from "./primitives";

export const lineHeightSize = new TypeDeclaration(number);

export const lineHeight = new PropertyTypeDeclaration({
	size: lineHeightSize.single()
}, '${this.size}');