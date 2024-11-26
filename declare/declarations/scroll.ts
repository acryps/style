import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";

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

export const scrollBehaviorMode = new TypeDeclaration('auto', 'smooth');

export const scrollBehavior = new PropertyTypeDeclaration({
	mode: scrollBehaviorMode.single()
}, "${this.mode}");

export const overscrollBehaviorMode = new TypeDeclaration('auto', 'contain', 'none', 'initial', 'inherit', 'unset', 'revert');

export const overscrollBehavior = new PropertyTypeDeclaration({
	mode: overscrollBehaviorMode.single()
}, "${this.mode}");

export const scrollbarWidthMode = new TypeDeclaration('auto', 'thin', 'none');

export const scrollbarWidth = new PropertyTypeDeclaration({
	mode: scrollbarWidthMode.single()
}, "${this.mode}");

export const scrollbarGutterMode = new TypeDeclaration('auto', 'stable', 'both-edges');

export const scrollbarGutter = new PropertyTypeDeclaration({
	modes: scrollbarGutterMode.spread()
}, "${this.modes.join(' ')}");

export const scrollbarColor = new PropertyTypeDeclaration({
	thumb: colorValue.single(),
	track: colorValue.optional()
}, "${this.thumb}${this.track ? ` ${this.track}` : ''}");
