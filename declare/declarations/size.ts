import { PropertyTypeDeclaration, TypeDeclaration } from "../types";
import { length, percentage } from "./primitives";

export const sizeDimension = new TypeDeclaration(length, percentage, 'auto', 'max-content', 'min-content', 'fit-content');

const exportSize = (name: string) => module.exports[name] = new PropertyTypeDeclaration({
	size: sizeDimension.single()
}, '${this.size}');

exportSize('height');
exportSize('width');