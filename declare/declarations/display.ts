import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";

export const displayMode = new TypeDeclaration('block', 'inline', 'flex', 'grid', 'flow-root', 'none', 'contents');

export const display = new PropertyTypeDeclaration(
	{
		mode: displayMode.spread()
	},
	"${this.mode.join('-')}"
);