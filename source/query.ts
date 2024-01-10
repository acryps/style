import { StyleGroup } from "./group";
import { StyleProperty } from "./property";

type StyleSelectorBody = StyleProperty | StyleGroup | StyleSelectorBody[];

export function style(selector: string, ...items: StyleSelectorBody[]) {
	const declaration = new StyleGroup(selector);

	const add = items => {
		for (let item of items) {
			if (item instanceof StyleGroup) {
				declaration.appendChild(item);
			} else if (item instanceof StyleProperty) {
				declaration.appendProperty(item);
			} else if (Array.isArray(item)) {
				add(item);
			} else {
				throw new Error('Invalid style declaration');
			}
		}
	};

	add(items);

	return declaration;
}

export function child(selector: string, ...items: StyleSelectorBody[]) {
	return style(`>${selector}`, ...items);
}

export function select(selector: string, ...items: StyleSelectorBody[]) {
	return style(` ${selector}`, ...items);
}
