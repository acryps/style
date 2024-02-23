import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';

import { Integer } from './primitives';

// z index
export class ZIndexStyleProperty extends StyleProperty {
	static properties = ['layer'];

	public layer: Integer;

	constructor(
		layer: Integer
	) {
		super('z-index');

		this.layer = layer;
	}

	toValueString() {
		return `${this.layer}`;
	}
}

export const zIndex = (layer: Integer) => new ZIndexStyleProperty(layer);

