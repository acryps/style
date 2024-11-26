import { AtRule } from "./at-rule";
import { StyleGroup } from "./group";
import { StyleProperty } from "./property";

export type StyleInsert = { toStyleGroup(): StyleGroup } | { toStyleProperty(): StyleProperty } | { toStyleProperties(): StyleProperty[] } | { toStyle(): StyleSelectorBody };
export type StyleSelectorBody = StyleProperty | StyleGroup | StyleInsert | AtRule | StyleSelectorBody[];

export function style(selector: string, ...items: StyleSelectorBody[]) {
	return new StyleGroup(selector).append(items);
}

export function root(...items: StyleSelectorBody[]) {
	return style(':root', ...items);
}

export function child(selector: string, ...items: StyleSelectorBody[]) {
	return style(`>${selector}`, ...items);
}

export function select(selector: string, ...items: StyleSelectorBody[]) {
	return style(` ${selector}`, ...items);
}
