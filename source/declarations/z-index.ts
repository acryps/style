import { Style } from '../index';
import { StyleProperty } from '../property';

import { Integer } from './primitives';

// z index
export class ZIndexStyleProperty extends StyleProperty {
	private layer: Integer;

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

