import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";

export const hexColor = new TypeDeclaration();
export const rgbColor = new TypeDeclaration();

export const colorValue = new TypeDeclaration(hexColor, rgbColor);

export const color = new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');