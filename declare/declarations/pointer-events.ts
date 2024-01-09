import { PropertyTypeDeclaration, TypeDeclaration } from "../types";

export const pointerEventsMode = new TypeDeclaration(`'auto' | 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none'`);

export const pointerEvents = new PropertyTypeDeclaration(
	{
		mode: pointerEventsMode.single()
	},
	"${this.mode}"
);