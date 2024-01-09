import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const userSelectMode = new TypeDeclaration('auto', 'text', 'contain', 'all', 'none');

export const userSelect = new PropertyTypeDeclaration(
	{
		mode: userSelectMode.single()
	},
	"${this.mode}"
);