import { PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "../types";
import { color } from "./color";

export const backgroundImageSource = new TypeDeclaration('Image | Gradient');

export const backgroundImage = new PropertyTypeDeclaration({
	sources: backgroundImageSource.spread()
}, "${this.sources.join(', ')}");

export const backgroundColor = new PropertyTypeDeclaration({
	color: color.single()
}, "${this.color}");

export const background = new ShorthandDeclaration([
	backgroundColor,
	backgroundImage
]);