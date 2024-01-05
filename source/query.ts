import { StyleDeclaration } from "./declaration";
import { StyleProperty } from "./properties/index";
import { RootFontSize } from "./units/root-font-size";

export function select(selector: string, ...items: (StyleProperty | StyleDeclaration)[]) {
	const declaration = new StyleDeclaration(selector);

	for (let item of items) {
		if (item instanceof StyleDeclaration) {
			declaration.appendChild(item);
		} else if (item instanceof StyleProperty) {
			declaration.appendProperty(item);
		}
	}

	return declaration;
}

export function child(selector: string, ...items: (StyleProperty | StyleDeclaration)[]) {
	return select(`> ${select}`, ...items);
}