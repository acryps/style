import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { colorValue } from "./color";
import { containerIdent } from "./container";
import { customIdentifier, string } from "./primitives";

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

export const scrollbarWidthMode = new TypeDeclaration('none', 'auto', 'thin');

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

export const scrollTimelineIdentifier = new TypeDeclaration(customIdentifier);
export const scrollTimelineAxisMode = new TypeDeclaration('x', 'y', 'block', 'inline');

export const scrollTimelineName = new PropertyTypeDeclaration({
	name: scrollTimelineIdentifier.single()
}, "${this.name}")
	.allowNone();

export const scrollTimelineAxis = new PropertyTypeDeclaration({
	mode: scrollTimelineAxisMode.single()
}, "${this.mode}");

export const scrollTimeline = new PropertyTypeDeclaration({
	name: scrollTimelineIdentifier.single(),
	mode: scrollTimelineAxisMode.optional()
}, "${this.name}${this.mode ? ` ${this.mode}` : ''}");
