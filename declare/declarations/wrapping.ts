import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const whiteSpaceMode = new TypeDeclaration('normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces');

export const whiteSpace = new PropertyTypeDeclaration({
	mode: whiteSpaceMode.single()
}, '${this.mode}');

export const overflowWrapMode = new TypeDeclaration('normal', 'break-word', 'anywhere');

export const overflowWrap = new PropertyTypeDeclaration({
	mode: overflowWrapMode.single()
}, '${this.mode}');

export const wordBreakMode = new TypeDeclaration('normal', 'break-word', 'keep-all', 'auto-phrase');

export const wordBreak = new PropertyTypeDeclaration({
	mode: wordBreakMode.single()
}, '${this.mode}');

export const hyphensMode = new TypeDeclaration('none', 'manual', 'auto');

export const hyphens = new PropertyTypeDeclaration({
	mode: hyphensMode.single()
}, '${this.mode}');