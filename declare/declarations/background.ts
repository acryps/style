import { PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "../types";
import { colorValue } from "./color";
import { gradient, imageSource } from "./primitives";

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