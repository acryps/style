import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { length, number } from "./primitives";

export const letterSpacingLength = new TypeDeclaration(number, length);

export const letterSpacing = new PropertyTypeDeclaration({
	length: letterSpacingLength.single()
}, '${this.length}');