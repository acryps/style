import { PropertyTypeDeclaration } from "../types";
import { integer } from "./numbers";

export const zIndex = new PropertyTypeDeclaration({
	layer: integer.single()
}, "${this.layer}");