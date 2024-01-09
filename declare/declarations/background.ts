import { PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "../types";
import { colorValue } from "./color";

export const backgroundImageSource = new TypeDeclaration('Image | Gradient');

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