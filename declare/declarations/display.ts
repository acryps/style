import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const displayMode = new TypeDeclaration('block', 'inline', 'flex', 'grid', 'flow-root', 'none', 'contents');

export const display = new PropertyTypeDeclaration(
	{
		mode: displayMode.spread()
	},
	"${this.mode.join('-')}"
);