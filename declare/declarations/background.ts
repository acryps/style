import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { colorValue } from "./color";
import { imageSource, length, percentage } from "./primitives";
import { gradient } from "./gradient";
import { MethodDeclaration } from "../builders/method";

export const backgroundImageSource = new TypeDeclaration(imageSource, gradient);

export const backgroundImage = new PropertyTypeDeclaration({
	sources: backgroundImageSource.spread()
}, "${this.sources.join(', ')}");

export const backgroundColor = new PropertyTypeDeclaration({
	color: colorValue.single()
}, "${this.color}");

export const background = new PropertyTypeDeclaration({
	color: colorValue.single(),
	imageSources: backgroundImageSource.spread()
}, "${this.color} ${this.imageSources.join(', ')}")
	.allowNone();

export const backgroundSizeType = new TypeDeclaration('cover', 'contain', 'auto', length, percentage);

export const backgroundSize = new PropertyTypeDeclaration({
	layers: backgroundSizeType.spreadArray()
},"${this.layers.map(layer => layer.join(' ')).join(',')}");

export const backgroundRepeatType = new TypeDeclaration('repeat-x', 'repeat-y', 'repeat', 'space', 'round', 'no-repeat');

export const backgroundRepeat = new PropertyTypeDeclaration({
	type: backgroundRepeatType.spread()
}, "${this.type.join(' ')}");

export const backgroundPositionDirectionalOffsetLength = new TypeDeclaration(length, percentage);

const offsetSide = (side: string) => module.exports[`${side}Offset`] = new MethodDeclaration({
	offset: backgroundPositionDirectionalOffsetLength.optional()
}, 'this.offset = offset', side + '${this.offset ? ` ${this.offset}` : \'\'}');

export const backgroundPositionType = new TypeDeclaration('center', percentage, length);

export const backgroundPositionXType = new TypeDeclaration(backgroundPositionType, 'left', 'right', offsetSide('left'), offsetSide('right'));

export const backgroundPositionX = new PropertyTypeDeclaration({
	type: backgroundPositionXType.spread()
}, "${this.type.join(' ')}");

export const backgroundPositionYType = new TypeDeclaration(backgroundPositionType, 'top', 'bottom', offsetSide('top'), offsetSide('bottom'));

export const backgroundPositionY = new PropertyTypeDeclaration({
	type: backgroundPositionYType.spread()
}, "${this.type.join(' ')}");

export const backgroundPosition = new PropertyTypeDeclaration({
	y: backgroundPositionType.single(),
	x: backgroundPositionType.single()
}, "${this.y} ${this.x}")
	.addShorthandInitializer({
		length: ['y', 'x']
	}, '${this.length}');

export const backgroundAttachmentType = new TypeDeclaration('scroll', 'fixed', 'local');

export const backgroundAttachment = new PropertyTypeDeclaration({
	type: backgroundAttachmentType.spread()
}, "${this.type.join(', ')}");
