import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const displayMode = new TypeDeclaration(`['block'] | ['inline'] | ['inline', 'block'] | ['flex'] | ['inline', 'flex'] | ['grid'] | ['inline', 'grid'] | ['flow-root'] | ['none'] | ['contents']`);

export const display = new PropertyTypeDeclaration(
	{
		mode: displayMode.spread()
	},
	"${this.mode.join('-')}"
);