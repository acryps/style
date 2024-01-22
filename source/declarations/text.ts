import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// text alignment direction
export type TextAlignmentDirection = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'match-parent' | Variable<TextAlignmentDirection> | Calculation<Partial<TextAlignmentDirection>>;

// text align
export class TextAlignStyleProperty extends StyleProperty {
	private direction: TextAlignmentDirection;

	constructor(
		direction: TextAlignmentDirection
	) {
		super('text-align');

		this.direction = direction;
	}

	toValueString() {
		return `${this.direction}`;
	}
}

export const textAlign = (direction: TextAlignmentDirection) => new TextAlignStyleProperty(direction);

