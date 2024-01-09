import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const sizeDimension = new TypeDeclaration(`Length | Percentage | 'auto' | 'maxContent' | 'minContent' | 'fitContent'`);

const exportSize = (name: string) => module.exports[name] = new PropertyTypeDeclaration({
	size: sizeDimension.single()
}, '${this.size}');

exportSize('height');
exportSize('width');