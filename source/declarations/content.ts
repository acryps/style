import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { String } from './primitives';

// content appendable
export type ContentAppendable = String | Variable<ContentAppendable> | Calculation<Partial<ContentAppendable>>;

// content
export class ContentStyleProperty extends StyleProperty {
	static properties = ['content'];

	public content: ContentAppendable[];

	constructor(
		...content: ContentAppendable[]
	) {
		super('content');

		this.content = content;
	}

	toValueString() {
		return `${this.content.map(fragment => typeof fragment == 'string' ? JSON.stringify(fragment) : fragment).join(' ')}`;
	}
}

export const content = (...content: ContentAppendable[]) => new ContentStyleProperty(...content);

