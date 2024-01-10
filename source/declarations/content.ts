import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';

import { String } from './primitives';

// content appendable
export type ContentAppendable = String | Variable<ContentAppendable>;

// content
export class ContentStyleProperty extends StyleProperty {
	private content: ContentAppendable[];

	constructor(
		...content: ContentAppendable[]
	) {
		super('content');

		this.content = content;
	}

	toValueString() {
		return `${this.content.join(' ')}`;
	}
}

export const content = (...content: ContentAppendable[]) => new ContentStyleProperty(...content);

