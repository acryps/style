import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { TypeDeclaration } from "../builders/type";
import { integer, length } from "./primitives";

export const textAlignmentDirection = new TypeDeclaration('start', 'end', 'left', 'right', 'center', 'justify', 'justify-all', 'match-parent');

export const textAlign = new PropertyTypeDeclaration({
	direction: textAlignmentDirection.single()
}, '${this.direction}');

export const textTransformationMode = new TypeDeclaration('none', 'capitalize', 'uppercase', 'lowercase', 'full-width', 'full-size-kana');

export const textTransform = new PropertyTypeDeclaration({
	mode: textTransformationMode.single()
}, '${this.mode}');

export const textWrapMode = new TypeDeclaration('wrap', 'nowrap', 'balance', 'pretty', 'stable');

export const textWrap = new PropertyTypeDeclaration({
	mode: textWrapMode.single()
}, '${this.mode}');

export const textDecorationLineMode = new TypeDeclaration('none', 'underline', 'overline', 'line-through', 'blink');

export const textDecorationLine = new PropertyTypeDeclaration({
	modes: textDecorationLineMode.spread()
}, "${this.modes.join(' ')}");

export const textDecoration = new ShorthandDeclaration([textDecorationLine]);

export const tabSizeLength = new TypeDeclaration(length, integer);

export const tabSize = new PropertyTypeDeclaration({
	size: tabSizeLength.single()
}, "${this.size}");

export const writingModeDirection = new TypeDeclaration('horizontal-tb', 'vertical-rl', 'vertical-lr', 'sideways-rl', 'sideways-lr');

export const writingMode = new PropertyTypeDeclaration({
	mode: writingModeDirection.single()
}, "${this.mode}");