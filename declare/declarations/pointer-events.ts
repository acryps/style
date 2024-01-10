import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";

export const pointerEventsMode = new TypeDeclaration('auto', 'bounding-box', 'visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all',  'none');

export const pointerEvents = new PropertyTypeDeclaration(
	{
		mode: pointerEventsMode.single()
	},
	"${this.mode}"
);