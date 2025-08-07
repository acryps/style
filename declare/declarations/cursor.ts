import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";

export const cursorType = new TypeDeclaration(
	'auto', 'default',

	// links & status
	'context-menu', 'help', 'pointer', 'progress', 'wait',

	// selection
	'cell', 'crosshair', 'text', 'vertical-text',

	// drag and drop
	'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'grab', 'grabbing',

	// resize and scroll
	'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize',

	// zooming
	'zoom-in', 'zoom-out'
);

export const cursor = new PropertyTypeDeclaration({
	type: cursorType.single()
}, '${this.type}')
	.allowNone();

export const caretColor = new PropertyTypeDeclaration({
	color: colorValue.single()
}, '${this.color}');