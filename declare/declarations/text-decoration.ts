import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { TypeDeclaration } from "../builders/type";

export const textDecorationLineMode = new TypeDeclaration('none', 'underline', 'overline', 'line-through', 'blink');

export const textDecorationLine = new PropertyTypeDeclaration({
	modes: textDecorationLineMode.spread()
}, "${this.modes.join(' ')}");

export const textDecoration = new ShorthandDeclaration([textDecorationLine]);