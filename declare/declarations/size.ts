import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { length, number, percentage } from "./primitives";
import { MethodDeclaration } from "../builders/method";

export const sizeDimension = new TypeDeclaration(length, percentage, 'auto', 'max-content', 'min-content', 'fit-content');
export const sizeBoundingDimension = new TypeDeclaration(length, percentage, 'max-content', 'min-content', 'fit-content');

const exportSizeBound = (dimension: string, bound: string) => module.exports[`${bound}-${dimension}`] = new PropertyTypeDeclaration({
	limit: sizeDimension.single()
}, '${this.limit}');

const exportSize = (dimension: string) => {
	module.exports[dimension] = new PropertyTypeDeclaration({
		size: sizeDimension.single()
	}, '${this.size}');

	exportSizeBound(dimension, 'min');
	exportSizeBound(dimension, 'max');
};

exportSize('height');
exportSize('width');

export const boxSizingMode = new TypeDeclaration('border-box', 'content-box');

export const boxSizing = new PropertyTypeDeclaration({
	mode: boxSizingMode.single()
}, '${this.mode}');

export const ratio = new MethodDeclaration({
	width: number.single(),
	height: number.single()
}, `
	this.width = width;
	this.height = height;
`, '${this.width} / ${this.height}');

export const aspectRatio = new PropertyTypeDeclaration({
	ratio: ratio.single()
}, '${this.ratio}');

export const resizeMode = new TypeDeclaration('none', 'both', 'horizontal', 'vertical', 'block', 'inline');

export const resize = new PropertyTypeDeclaration({
	mode: resizeMode.single()
}, '${this.mode}');
