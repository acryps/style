import { AtRule } from "./at-rule";
import { StyleGroup } from "./group";
import { MediaFeature } from "./media/feature";
import { NotMediaQuery } from "./media/not";
import { MediaQueryable } from "./media/queryable";
import { StyleProperty } from "./property";

export type StyleInsert = { toStyleGroup(): StyleGroup } | { toStyleProperty(): StyleProperty } | { toStyleProperties(): StyleProperty[] } | { toStyle(): StyleSelectorBody };
export type StyleSelectorBody = StyleProperty | StyleGroup | StyleInsert | AtRule | StyleSelectorBody[];

type Selector = string | (() => StyleGroup);
type ViewTransition = '*' | 'root' | (() => StyleGroup);
type NTHPattern = 'even' | 'odd' | number | {
	step?: number;
	offset?: number;
}


const stringifySelector = (selector: Selector) => typeof selector == 'string' ? selector : selector().selector;
const stringifySelectors = (selectors: Selector[]) => selectors.map(selector => stringifySelector(selector)).join('');
const stringifyViewTransition = (viewTransition: ViewTransition) => typeof viewTransition == 'string' ? viewTransition : viewTransition().selector;

const stringifyNTHPattern = (pattern: NTHPattern, ...selectors: Selector[]) => {
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

	if (selectors.length) {
		stringified += ` of ${stringifySelectors(selectors)}`;
	}

	return stringified;
}

export function style(selector: string): (...items: StyleSelectorBody[]) => StyleGroup {
	const styleGroup = new StyleGroup(selector);
	return styleGroup.append.bind(styleGroup);
}

// base combinator selectors
export const universal = () => {
	return style('*');
}

export const descendant = (selector: string) => {
	return style(` ${selector}`);
}

export const child = (selector: string) => {
	return style(`>${selector}`);
}

export const adjacentSibling = (selector: string) => {
	return style(`+${selector}`);
}

export const sibling = (selector: string) => {
	return style(`~${selector}`);
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

export const current = (...selectors: string[]) => {
	if (!selectors.length) {
		return style(':current');
	}

	return style(`:current(${selectors.join(', ')})`);
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

export const future = (...selectors: string[]) => {
	if (!selectors.length) {
		return style(':future');
	}

	return style(`:future(${selectors.join(', ')})`);
}

export const hasSlotted = () => {
	return style(':hasSlotted');
}

export const has = (...selectors: Selector[]) => {
	return style(`:has(${stringifySelectors(selectors)})`);
}

export const host = (...selectors: Selector[]) => {
	if (stringifySelectors.length) {
		return style(`:host(${stringifySelectors(selectors)})`);
	} else {
		return style(':host');
	}
}

export const hostContext = (...selectors: Selector[]) => {
	return style(`:host-context(${stringifySelectors(selectors)})`);
}

export function hover(): (...items: StyleSelectorBody[]) => StyleGroup;
export function hover(value: 'hover' | 'none'): MediaFeature;
export function hover(value?: 'hover' | 'none') {
	if (value) {
		return new MediaFeature('hover', value);
	}

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

export const is = (...selectorsList: Selector[][]) => {
	return style(`:is(${selectorsList.map(selectors => stringifySelectors(selectors)).join(', ')})`);
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

export function not(query: MediaQueryable): NotMediaQuery;
export function not(selector: Selector[], ...selectorsList: Selector[][]): (...items: StyleSelectorBody[]) => StyleGroup;
export function not(item: Selector[] | MediaQueryable, ...selectorsList: Selector[][]) {
	if (Array.isArray(item)) {
		return style(`:not(${[item, ...selectorsList].map(selectors => stringifySelectors(selectors)).join(', ')})`);
	}

	return new NotMediaQuery(item);
}

export const nthChild = (pattern: NTHPattern, ...selectors: Selector[]) => {
	return style(`:nth-child(${stringifyNTHPattern(pattern, ...selectors)})`);
}

export const nthLastChild = (pattern: NTHPattern, ...selectors: Selector[]) => {
	return style(`:nth-last-child(${stringifyNTHPattern(pattern, ...selectors)})`);
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

export const past = (...selectors: string[]) => {
	if (!selectors.length) {
		return style(':past');
	}

	return style(`:past(${selectors.join(', ')})`);
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

export const where = (...selectorsList: Selector[][]) => {
	return style(`:where(${selectorsList.map(selectors => stringifySelectors(selectors)).join(', ')})`);
}

// pseudo elements
export const after = () => {
	return style('::after');
}

export const backdrop = () => {
	return style('::backdrop');
}

export const before = () => {
	return style('::before');
}

export const checkmark = () => {
	return style('::checkmark');
}

export const column = () => {
	return style('::column');
}

export const cue = () => {
	return style('::cue');
}

export const detailsContent = () => {
	return style('::details-content');
}

export const fileSelectorButton = () => {
	return style('::file-selector-button');
}

export const firstLetter = () => {
	return style('::first-letter');
}

export const firstLine = () => {
	return style('::first-line');
}

export const grammarError = () => {
	return style('::grammar-error');
}

export const highlight = (name: string) => {
	return style(`::highlight(${name})`);
}

export const marker = () => {
	return style('::marker');
}

export const part = (...indents: string[]) => {
	return style(`::part(${indents.join(' ')})`);
}

export const pickerIcon = () => {
	return style('::picker-icon');
}

export const picker = (indent: string) => {
	return style(`::picker(${indent})`);
}

export const placeholder = () => {
	return style('::placeholder');
}

export const scrollButton = (direction: '*' | 'down' | 'left' | 'right' | 'up' | 'block-end' | 'block-start' | 'inline-end' | 'inline-start') => {
	return style(`::scroll-button(${direction})`);
}

export const scrollMarker = () => {
	return style('::scroll-marker');
}

export const scrollMarkerGroup = () => {
	return style('::scroll-marker-group');
}

export const selection = () => {
	return style('::selection');
}

export const slotted = (...selectors: Selector[]) => {
	return style(`::slotted(${stringifySelectors(selectors)})`);
}

export const spellingError = () => {
	return style('::spelling-error');
}

export const targetText = () => {
	return style('::target-text');
}

export const viewTransition = () => {
	return style('::view-transition');
}

export const viewTransitionGroup = (selector: ViewTransition) => {
	return style(`::view-transition-group(${stringifyViewTransition(selector)})`);
}

export const viewTransitionImagePair = (selector: ViewTransition) => {
	return style(`::view-transition-image-pair(${stringifyViewTransition(selector)})`);
}

export const viewTransitionNew = (selector: ViewTransition) => {
	return style(`::view-transition-new(${stringifyViewTransition(selector)})`);
}

export const viewTransitionOld = (selector: ViewTransition) => {
	return style(`::view-transition-old(${stringifyViewTransition(selector)})`);
}
