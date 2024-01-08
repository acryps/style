import { StyleProperty } from "..";

export type OverflowMode = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

export class OverflowProperty extends StyleProperty {
	constructor(
		private block: OverflowMode,
		private inline: OverflowMode
	) {
		super('overflow');
	}

	toValueString() {
		if (this.inline == this.block) {
			return `overflow:${this.inline};`;
		}

		if (!this.inline) {
			return `overflow-y:${this.block}`;
		}

		if (!this.block) {
			return `overflow-x:${this.inline}`;
		}

		return `overflow:${this.inline}${this.block}`;
	}
}

export function overflow(all: OverflowMode);
export function overflow(block: OverflowMode, inline: OverflowMode);

export function overflow(...sides: OverflowMode[]) {
	switch (sides.length) {
		case 1: return new OverflowProperty(sides[0], sides[0]);
		case 2: return new OverflowProperty(sides[0], sides[1]);
	}

	throw new Error('Invalid overflow dimensions');
}