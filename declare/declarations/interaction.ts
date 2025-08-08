import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";

export const pointerEventsMode = new TypeDeclaration('auto', 'bounding-box', 'visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none');

export const pointerEvents = new PropertyTypeDeclaration({
	mode: pointerEventsMode.single()
}, '${this.mode}');


export const userSelectMode = new TypeDeclaration('auto', 'text', 'contain', 'all', 'none');

export const userSelect = new PropertyTypeDeclaration({
	mode: userSelectMode.single()
}, '${this.mode}');


export const touchActionMode = new TypeDeclaration('auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation');

export const touchAction = new PropertyTypeDeclaration({
	mode: touchActionMode.single()
}, '${this.mode}');
