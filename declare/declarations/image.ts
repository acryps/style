import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const renderType = new TypeDeclaration('auto', 'crisp-edges', 'pixelated');

export const imageRendering = new PropertyTypeDeclaration({
	type: renderType.single()
},'${this.type}');