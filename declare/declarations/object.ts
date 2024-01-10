import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { length, percentage } from "./primitives";

export const objectFitMode = new TypeDeclaration('contain', 'cover', 'fill', 'none', 'scale-down');

export const objectFit = new PropertyTypeDeclaration({
	mode: objectFitMode.single()
}, '${this.mode}');

export const objectPositionInlineDirection = new TypeDeclaration('left', 'center', 'right', percentage, length);
export const objectPositionBlockDirection = new TypeDeclaration('top', 'center', 'bottom', 'left', 'right', percentage, length);

export const objectPosition = new PropertyTypeDeclaration({
	block: objectPositionBlockDirection.single(),
	inline: objectPositionInlineDirection.optional()
}, "${this.block}${this.inline ? ` ${this.inline}` : ''}");