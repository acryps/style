import { MethodDeclaration } from "../builders/method";
import { PropertyTypeDeclaration } from "../builders/property";
import { ShorthandDeclaration } from "../builders/shorthand";
import { TypeDeclaration } from "../builders/type";
import { Ident } from "../ident";
import { integer, length, number, percentage, string } from "./primitives";

export const alignmentMode = new TypeDeclaration('normal', 'stretch', 'center', 'start', 'end', 'flex-start', 'flex-end');
export const itemsAlignmentMode = new TypeDeclaration(alignmentMode, 'self-start', 'self-end');
export const selfAlignmentMode = new TypeDeclaration(itemsAlignmentMode, 'auto');
export const distributedAlignmentMode = new TypeDeclaration(alignmentMode, 'space-between', 'space-around', 'space-evenly');

export const justificationMode = new TypeDeclaration('normal', 'stretch', 'center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right');
export const itemsJustificationMode = new TypeDeclaration(justificationMode, 'self-start', 'self-end');
export const selfJustificationMode = new TypeDeclaration(itemsJustificationMode, 'auto');
export const distributedJustificationMode = new TypeDeclaration(justificationMode, 'space-between', 'space-around', 'space-evenly');

// align
export const alignItems = PropertyTypeDeclaration.fromMode(itemsAlignmentMode);
export const alignContent = PropertyTypeDeclaration.fromMode(itemsAlignmentMode);
export const alignSelf = PropertyTypeDeclaration.fromMode(selfAlignmentMode);

// justify
export const justifyItems = PropertyTypeDeclaration.fromMode(itemsJustificationMode);
export const justifyContent = PropertyTypeDeclaration.fromMode(distributedJustificationMode);
export const justifySelf = PropertyTypeDeclaration.fromMode(selfJustificationMode);

// gap
const exportGapAxis = axis => module.exports[`${axis}-gap`] = new PropertyTypeDeclaration({
	distance: length.single()
}, '${this.distance}');

export const gap = new ShorthandDeclaration([
	exportGapAxis('column'),
	exportGapAxis('row')
]);

// flex spacific
const exportFlexSizing = operation => module.exports[`flex${Ident.fromCamelCase(operation).toClassCamelCase()}`] = new PropertyTypeDeclaration({
	order: integer.single()
}, '${this.order}');

exportFlexSizing('grow');
exportFlexSizing('shrink');

export const flexBasisMode = new TypeDeclaration(length, 'auto', 'max-content', 'min-content', 'fit-content', 'content');
export const flexBasis = PropertyTypeDeclaration.fromMode(flexBasisMode); 

export const flexDirectionMode = new TypeDeclaration('row', 'row-reverse', 'column', 'column-reverse');
export const flexDirection = PropertyTypeDeclaration.fromMode(flexDirectionMode); 

export const flexWrapMode = new TypeDeclaration('nowrap', 'wrap', 'wrap-reverse');
export const flexWrap = PropertyTypeDeclaration.fromMode(flexWrapMode); 

// grid
export const fr = MethodDeclaration.fromUnit('fr', number)

export const spanQuery = new TypeDeclaration(integer, string);
export const span = new MethodDeclaration({
	query: spanQuery.single()
}, `
	this.query = query;
`, "span ${this.query}");

export const minMaxBreadth = new TypeDeclaration(length, percentage, fr, 'max-content', 'min-content', 'auto');
export const minMax = new MethodDeclaration({
	left: minMaxBreadth.single(),
	right: minMaxBreadth.single()
}, `
	this.left = left;
	this.right = right;
`, "minmax(${this.left},${this.right})");

export const fitContent = new MethodDeclaration({
	size: length.single()
}, `
	this.size = size;
`, "fit-content(${this.size})");

export const repeatTrack = new TypeDeclaration('auto-fill', 'auto-fit', integer);
export const repeatSlot = new TypeDeclaration(length, fr, 'min-content', 'max-content', minMax, fitContent, 'auto', percentage);
export const repeat = new MethodDeclaration({
	track: repeatTrack.single(),
	values: repeatSlot.spread()
}, `
	this.track = track;
	this.values = values;
`, "repeat(${this.track},${this.values.join(' ')})");

export const areaSpan = new MethodDeclaration({
	length: integer.single(),
	area: string.single()
}, `
	this.length = length;
	this.area = area;

	if (length == 0) {
		throw new Error('Invalid area span length 0');
	}

	if (typeof length == 'number' && Math.floor(length) != length) {
		throw new Error('Area span must be an integer');
	}
`, "${this.area} ${this.length}");

export const gridAreaSelector = new TypeDeclaration(string, 'auto', span, areaSpan);

const exportGridArea = (axis: string, side: string) => module.exports[`grid${Ident.fromCamelCase(axis).toClassCamelCase()}${Ident.fromCamelCase(side).toClassCamelCase()}`] = new PropertyTypeDeclaration({
	selector: gridAreaSelector.single()
}, "${this.selector}");

export const girdArea = new ShorthandDeclaration([
	exportGridArea('row', 'start'),
	exportGridArea('column', 'start'),
	exportGridArea('row', 'end'),
	exportGridArea('column', 'end')
]);

export const gridTemplateAreaName = new TypeDeclaration('.', string, repeat);

export const gridTemplateAreas = new PropertyTypeDeclaration({
	rows: gridTemplateAreaName.spreadArray()
}, '${this.rows.map(row => typeof row[0] == \'string\' ? `"${row.join(\' \')}"` : row.join(\' \')).join(\' \')}');

export const gridTemplateColumns = new PropertyTypeDeclaration({
	cells: gridTemplateAreaName.spread()
}, '${this.cells.map(cell => typeof cell == \'string\' ? `"${cell}"` : cell).join(\' \')}');

export const gridTemplateRows = new PropertyTypeDeclaration({
	cells: gridTemplateAreaName.spread()
}, '${this.cells.map(cell => typeof cell == \'string\' ? `"${cell}"` : cell).join(\' \')}');