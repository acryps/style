import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";

export const scrollSnapAxis = new TypeDeclaration('none', 'x', 'y', 'block', 'inline', 'both');
export const scrollSnapForceMode = new TypeDeclaration('mandatory', 'proximity');

export const scrollSnapType = new PropertyTypeDeclaration({
	mandatory: scrollSnapAxis.single(),
	proximity: scrollSnapForceMode.optional()
}, "${this.mandatory}${this.proximity ? ` ${this.proximity}` : ''}");

export const scrollSnapAlignMode = new TypeDeclaration('none', 'start', 'end', 'center');

export const scrollSnapAlign = new PropertyTypeDeclaration({
	snaps: scrollSnapAlignMode.spread()
}, "${this.snaps.join(' ')}");