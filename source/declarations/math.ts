import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Length } from './primitives';

// min
export class Min extends StyleMethod {
	private values: Length[];

	constructor(
		...values: Length[]
	) {
		super();

	this.values = values;
	}

	toValueString() {
		return `min(${this.values.join(',')})`;
	}
}

export function min(...values: Length[]) { return new Min(...values.map(value => Style.resolveNumber('length', value))); }

// max
export class Max extends StyleMethod {
	private values: Length[];

	constructor(
		...values: Length[]
	) {
		super();

	this.values = values;
	}

	toValueString() {
		return `min(${this.values.join(',')})`;
	}
}

export function max(...values: Length[]) { return new Max(...values.map(value => Style.resolveNumber('length', value))); }

