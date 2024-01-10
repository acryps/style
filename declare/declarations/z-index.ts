import { PropertyTypeDeclaration } from "../builders/property";
import { integer } from "./primitives";

export const zIndex = new PropertyTypeDeclaration({
	layer: integer.single()
}, "${this.layer}");