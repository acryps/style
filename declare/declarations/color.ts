import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const colorValue = new TypeDeclaration('HexColor | RgbColor | HslColor');

export const color = new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');