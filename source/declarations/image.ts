import { Style } from '../style';
import { StyleProperty } from '../property';
import { StyleMethod } from '../method';
import { Variable } from '../variable';
import { Calculation, Calculable } from '../calculate';



// render type
export type RenderType = 'auto' | 'crisp-edges' | 'pixelated' | Variable<RenderType> | Calculation<Partial<RenderType>>;

// image rendering
export class ImageRenderingStyleProperty extends StyleProperty {
	static properties = ['type'];

	public type: RenderType;

	constructor(
		type: RenderType
	) {
		super('image-rendering');

		this.type = type;
	}

	toValueString() {
		return `${this.type}`;
	}
}

export const imageRendering = (type: RenderType) => new ImageRenderingStyleProperty(type);

