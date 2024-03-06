import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const resetMode = new TypeDeclaration('initial', 'inherit', 'unset', 'revert');

export const all = new PropertyTypeDeclaration({
	mode: resetMode.single()
}, '${this.mode}');
