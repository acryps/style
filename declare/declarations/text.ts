import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const textAlignmentDirection = new TypeDeclaration('start', 'end', 'left', 'right', 'center', 'justify', 'justify-all', 'match-parent');

export const textAlign = new PropertyTypeDeclaration({
	direction: textAlignmentDirection.single()
}, '${this.direction}');