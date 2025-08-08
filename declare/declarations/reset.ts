import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const resetMode = new TypeDeclaration('initial', 'inherit', 'unset', 'revert');

export const all = new PropertyTypeDeclaration({
	mode: resetMode.single()
}, '${this.mode}');

export const appearanceMode = new TypeDeclaration(
	'none', 'auto', 'base',
	'searchfield', 'textarea', 'checkbox', 'radio', 'menulist', 'listbox', 'meter', 'progress-bar', 'button',
	'textfield', 'menulist-button'
);

export const appearance = new PropertyTypeDeclaration({
	mode: appearanceMode.single()
}, '${this.mode}');
