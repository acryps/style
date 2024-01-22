import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const textAlignmentDirection = new TypeDeclaration('start', 'end', 'left', 'right', 'center', 'justify', 'justify-all', 'match-parent');

export const textAlign = new PropertyTypeDeclaration({
	direction: textAlignmentDirection.single()
}, '${this.direction}');

export const textTransformationMode = new TypeDeclaration('none', 'capitalize', 'uppercase', 'lowercase', 'full-width', 'full-size-kana');

export const textTransform = new PropertyTypeDeclaration({
	mode: textTransformationMode.single()
}, '${this.mode}');