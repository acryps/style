import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { Percentage } from './primitives';
import { Length } from './primitives';

// object fit mode
export type ObjectFitMode = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | Variable<ObjectFitMode>;

// object fit
export class ObjectFitStyleProperty extends StyleProperty {
	private mode: ObjectFitMode;

	constructor(
		mode: ObjectFitMode
	) {
		super('object-fit');

		this.mode = mode;
	}

	toValueString() {
		return `${this.mode}`;
	}
}

export const objectFit = (mode: ObjectFitMode) => new ObjectFitStyleProperty(mode);

// object position inline direction
export type ObjectPositionInlineDirection = 'left' | 'center' | 'right' | Percentage | Length | Variable<ObjectPositionInlineDirection>;

// object position block direction
export type ObjectPositionBlockDirection = 'top' | 'center' | 'bottom' | 'left' | 'right' | Percentage | Length | Variable<ObjectPositionBlockDirection>;

// object position
export class ObjectPositionStyleProperty extends StyleProperty {
	private block: ObjectPositionBlockDirection;
	private inline: ObjectPositionInlineDirection | undefined;

	constructor(
		block: ObjectPositionBlockDirection,
		inline?: ObjectPositionInlineDirection
	) {
		super('object-position');

		this.block = block;
		this.inline = inline;
	}

	toValueString() {
		return `${this.block}${this.inline ? ` ${this.inline}` : ''}`;
	}
}

export const objectPosition = (block: ObjectPositionBlockDirection, inline?: ObjectPositionInlineDirection) => new ObjectPositionStyleProperty(block, inline);

