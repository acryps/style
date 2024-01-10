import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const objectFitMode = new TypeDeclaration('contain', 'cover', 'fill', 'none', 'scale-down');

export const objectFit = new PropertyTypeDeclaration({
	mode: objectFitMode.single()
}, '${this.mode}');