import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { length, percentage } from "./primitives";

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