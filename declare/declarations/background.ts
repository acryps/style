import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { colorValue } from "./color";
import { imageSource, length, percentage } from "./primitives";
import { gradient } from "./gradient";

export const backgroundImageSource = new TypeDeclaration(imageSource, gradient);

export const backgroundImage = new PropertyTypeDeclaration({
	sources: backgroundImageSource.spread()
}, "${this.sources.join(', ')}");

export const backgroundColor = new PropertyTypeDeclaration({
	color: colorValue.single()
}, "${this.color}");

export const background = new ShorthandDeclaration([
	backgroundColor,
	backgroundImage
]);

export const backgroundSizeType = new TypeDeclaration('cover', 'contain', 'auto', length, percentage);

export const backgroundSize = new PropertyTypeDeclaration({
	value: backgroundSizeType.spread()
},"${this.value.join(' ')}");

export const backgroundRepeatType = new TypeDeclaration('repeat-x', 'repeat-y', 'repeat', 'space', 'round', 'no-repeat');

export const backgroundRepeat = new PropertyTypeDeclaration({
	type: backgroundRepeatType.spread()
}, "${this.type.join(' ')}");