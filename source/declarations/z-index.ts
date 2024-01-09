import { Integer } from './numbers';

// z index
export class ZIndexStyleProperty {
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

