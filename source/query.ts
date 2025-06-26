import { AtRule } from "./at-rule";
import { StyleGroup } from "./group";
import { StyleProperty } from "./property";

export type StyleInsert = { toStyleGroup(): StyleGroup } | { toStyleProperty(): StyleProperty } | { toStyleProperties(): StyleProperty[] } | { toStyle(): StyleSelectorBody };
export type StyleSelectorBody = StyleProperty | StyleGroup | StyleInsert | AtRule | StyleSelectorBody[];

type Selector = string | (() => StyleGroup);
type NTHPattern = 'even' | 'odd' | number | {
	step?: number;
	offset?: number;
}

const stringifySelector = (selector: Selector) => typeof selector == 'string' ? selector : selector().selector;

const stringifyNTHPattern = (pattern: NTHPattern, filter: Selector) => {
	let stringified: string;

	if (typeof pattern == 'string') {
		stringified = pattern;
	} else if (typeof pattern == 'number') {
		stringified = `${pattern}`;
	} else {
		let combination = `${pattern.step}`;

		if (pattern.step == 1) {
			combination = '';
		} else if (pattern.step == -1) {
			combination = '-';
		}

		combination = `${pattern.step}n`;

		if (pattern.offset) {
			combination += `+${pattern.offset}`;
		}

		stringified = combination;
	}

	if (filter) {
		stringified += ` of ${stringifySelector(filter)}`;
	}

	return stringified;
}

export const style = (selector: string) => {
	return new StyleGroup(selector).append;
}

// base combinator selectors
export const universal = () => {
	return style('*');
}

export const descendant = (selector: Selector) => {
	return style(` ${stringifySelector(selector)}`);
}

export const child = (selector: Selector) => {
	return style(`>${stringifySelector(selector)}`);
}

export const adjacentSibling = (selector: Selector) => {
	return style(`+${stringifySelector(selector)}`);
}

export const sibling = (selector: Selector) => {
	return style(`~${stringifySelector(selector)}`);
}

export const id = (selector: string) => {
	return style(`#${selector}`);
}

export const className = (selector: string) => {
	return style(`.${selector}`);
}

// attribute selectors
export const attribute = (name: string, value?: string) => {
	return style(`[${name}${value ? `=${JSON.stringify(value)}` : ''}]`);
}

export const attributeContains = (name: string, substring: string) => {
	return style(`[${name}*=${JSON.stringify(substring)}]`);
}

export const attributeStartsWith = (name: string, substring: string) => {
	return style(`[${name}^=${JSON.stringify(substring)}]`);
}

export const attributeEndsWith = (name: string, substring: string) => {
	return style(`[${name}$=${JSON.stringify(substring)}]`);
}

export const attributeDashPrefixes = (name: string, substring: string) => {
	return style(`[${name}|=${JSON.stringify(substring)}]`);
}

export const attributeIn = (name: string, options: string[]) => {
	return style(`[${name}~=${options.map(option => JSON.stringify(option)).join(' ')}]`);
}

// pseudo classes
export const active = () => {
	return style(':active');
}

export const anyLink = () => {
	return style(':any-link');
}

export const autofill = () => {
	return style(':autofill');
}

export const blank = () => {
	return style(':blank');
}

export const buffering = () => {
	return style(':buffering');
}

export const checked = () => {
	return style(':checked');
}

export const current = (...selectors: Selector[]) => {
	if (!selectors.length) {
		return style(':current');
	}

	return style(`:current(${selectors.map(selector => stringifySelector(selector)).join(', ')})`);
}

export const defaultSelector = () => {
	return style(':default');
}

export const defined = () => {
	return style(':defined');
}

export const dir = (direction: 'ltr' | 'rtl') => {
	return style(`:dir(${direction})`);
}

export const disabled = () => {
	return style(':disabled');
}

export const empty = () => {
	return style(':empty');
}

export const enabled = () => {
	return style(':enabled');
}

export const firstChild = () => {
	return style(':first-child');
}

export const firstOfType = () => {
	return style(':first-of-type');
}

export const focus = () => {
	return style(':focus');
}

export const focusVisible = () => {
	return style(':focus-visible');
}

export const focusWithin = () => {
	return style(':focus-within');
}

export const fullscreen = () => {
	return style(':fullscreen');
}

export const future = (...selectors: Selector[]) => {
	if (!selectors.length) {
		return style(':future');
	}

	return style(`:future(${selectors.map(selector => stringifySelector(selector)).join(', ')})`);
}

export const hasSlotted = () => {
	return style(':hasSlotted');
}

export const has = (selector: Selector) => {
	return style(`:has(${stringifySelector(selector)})`);
}

export const host = (selector?: Selector) => {
	if (selector) {
		return style(`:host(${stringifySelector(selector)})`);
	} else {
		return style(':host');
	}
}

export const hostContext = (selector: Selector) => {
	return style(`:host-context(${stringifySelector(selector)})`);
}

export const hover = () => {
	return style(':hover');
}

export const inRange = () => {
	return style(':in-range');
}

export const indeterminate = () => {
	return style(':indeterminate');
}

export const invalid = () => {
	return style(':invalid');
}

export const is = (...selectors: Selector[]) => {
	return style(`:is(${selectors.map(selector => stringifySelector(selector)).join(', ')})`);
}

export const lang = (...languages: string[]) => {
	return style(`:lang(${languages.map(language => `"${language}"`).join(', ')})`);
}

export const lastChild = () => {
	return style(':last-child');
}

export const lastOfType = () => {
	return style(':last-of-type');
}

export const link = () => {
	return style(':link');
}

export const localLink = () => {
	return style(':local-link');
}

export const modal = () => {
	return style(':modal');
}

export const muted = () => {
	return style(':muted');
}

export const not = (...selectors: Selector[]) => {
	return style(`:not(${selectors.map(selector => stringifySelector(selector)).join(', ')})`);
}

export const nthChild = (pattern: NTHPattern, filter?: Selector) => {
	return style(`:nth-child(${stringifyNTHPattern(pattern, filter)})`);
}

export const nthLastChild = (pattern: NTHPattern, filter?: Selector) => {
	return style(`:nth-last-child(${stringifyNTHPattern(pattern, filter)})`);
}

export const nthLastOfType = (pattern: NTHPattern) => {
	return style(`:nth-last-of-type(${stringifyNTHPattern(pattern, null)})`);
}

export const nthOfType = (pattern: NTHPattern) => {
	return style(`:nth-of-type(${stringifyNTHPattern(pattern, null)})`);
}

export const onlyChild = () => {
	return style(':only-child');
}

export const onlyOfType = () => {
	return style(':only-of-type');
}

export const open = () => {
	return style(':open');
}

export const optional = () => {
	return style(':optional');
}

export const outOfRange = () => {
	return style(':out-of-range');
}

export const past = (...selectors: Selector[]) => {
	if (!selectors.length) {
		return style(':past');
	}

	return style(`:past(${selectors.map(selector => stringifySelector(selector)).join(', ')})`);
}

export const paused = () => {
	return style(':paused');
}

export const pictureInPicture = () => {
	return style(':picture-in-picture');
}

export const placeholderShown = () => {
	return style(':placeholder-shown');
}

export const playing = () => {
	return style(':playing');
}

export const popoverOpen = () => {
	return style(':popover-open');
}

export const readonly = () => {
	return style(':readonly');
}

export const readWrite = () => {
	return style(':read-write');
}

export const required = () => {
	return style(':required');
}

export const root = () => {
	return style(':root');
}

export const scope = () => {
	return style(':scope');
}

export const seeking = () => {
	return style(':seeking');
}

export const stalled = () => {
	return style(':stalled');
}

export const state = (customIdentifier: string) => {
	return style(`:state(${customIdentifier})`);
}

export const target = () => {
	return style(':target');
}

export const targetCurrent = () => {
	return style(':target-current');
}

export const targetWithin = () => {
	return style(':target-within');
}

export const userInvalid = () => {
	return style(':user-invalid');
}

export const userValid = () => {
	return style(':user-valid');
}

export const valid = () => {
	return style(':valid');
}

export const visited = () => {
	return style(':visited');
}

export const volumeLocked = () => {
	return style(':volume-locked');
}

export const where = (...selectors: Selector[]) => {
	return style(`:where(${selectors.map(selector => stringifySelector(selector)).join(', ')})`);
}

// pseudo elements
export const before = () => {
	return style('::before');
}

export const after = () => {
	return style('::after');
}
