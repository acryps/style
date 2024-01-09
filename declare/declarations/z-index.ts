import { PropertyTypeDeclaration } from "../types";
import { integer } from "./primitives";

export const zIndex = new PropertyTypeDeclaration({
	layer: integer.single()
}, "${this.layer}");