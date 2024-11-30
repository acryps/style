import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const breakEndMode = new TypeDeclaration('auto', 'avoid', 'always', 'all', 'avoid-page', 'page', 'left', 'right', 'recto', 'verso', 'avoid-column', 'column', 'avoid-region', 'region');

export const breakAfter = new PropertyTypeDeclaration({
	mode: breakEndMode.single()
}, "${this.mode}");

export const breakBefore = new PropertyTypeDeclaration({
	mode: breakEndMode.single()
}, "${this.mode}");

export const breakInsideMode = new TypeDeclaration('auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region');

export const breakInside = new PropertyTypeDeclaration({
	mode: breakInsideMode.single()
}, "${this.mode}");
