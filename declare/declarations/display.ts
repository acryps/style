import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";

// All possible combinations of the display property
export const displayOutsideModes = new TypeDeclaration('block', 'inline');
export const displayInsideModes = new TypeDeclaration('flow', 'flow-root', 'table', 'flex', 'grid', 'ruby', 'list-item');

export const displayInternalModes = new TypeDeclaration('table-row-group', 'table-header-group', 'table-footer-group', 'table-row', 'table-cell', 'table-column-group', 'table-column', 'table-caption', 'ruby-base', 'ruby-text', 'ruby-base-container', 'ruby-text-container');
export const displayBoxModes = new TypeDeclaration('contents');
export const displayPrecomposedModes = new TypeDeclaration('inline-block', 'inline-table', 'inline-flex', 'inline-grid');

export const displayModes = new TypeDeclaration(displayOutsideModes, displayInsideModes, displayInternalModes, displayBoxModes, displayPrecomposedModes);

export const display = new PropertyTypeDeclaration(
	{
		modes: displayModes.spread()
	},
	"${this.modes.join(' ')}"
).allowNone();