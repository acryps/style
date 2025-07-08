import { Resolution } from "../declarations/primitives";
import { Ratio } from "../declarations/size";
import { style } from "../query";
import { MediaFeature } from "./feature";
import { MediaQueryable } from "./queryable";
import { MediaType, MediaTypeName } from "./type";

export function media(query: MediaQueryable, ...queries: MediaQueryable[]) {
	const stringifiedQueries = [query, ...queries].map(query => query.toMediaQueryString());

	return style(`@media ${stringifiedQueries.join(', ')}`);
}

export const mediaType = (name: MediaTypeName) => {
	return new MediaType(name);
}

export const anyHover = (value: 'hover' | 'none') => {
	return new MediaFeature('any-hover', value);
}

export const anyPointer = (value: 'coarse' | 'fine' | 'none') => {
	return new MediaFeature('any-pointer', value);
}

export const minAspectRatio = (value: Ratio) => {
	return new MediaFeature('min-aspect-ratio', value);
}

export const maxAspectRatio = (value: Ratio) => {
	return new MediaFeature('max-aspect-ratio', value);
}

export const mediaColor = (value?: number) => {
	return new MediaFeature('color', value);
}

export const minColor = (value: number) => {
	return new MediaFeature('min-color', value);
}

export const maxColor = (value: number) => {
	return new MediaFeature('max-color', value);
}

export const colorGamut = (value: 'srgb' | 'p3' | 'rec2020') => {
	return new MediaFeature('color-gamut', value);
}

export const colorIndex = (value?: number) => {
	return new MediaFeature('color', value);
}

export const minColorIndex = (value: number) => {
	return new MediaFeature('min-color', value);
}

export const maxColorIndex = (value: number) => {
	return new MediaFeature('max-color', value);
}

export const devicePosture = (value: 'continuous' | 'folded') => {
	return new MediaFeature('device-posture', value);
}

export const displayMode = (value: 'browser' | 'fullscreen' | 'minimal-ui' | 'picture-in-picture' | 'standalone' | 'window-controls-overlay') => {
	return new MediaFeature('display-mode', value);
}

export const dynamicRange = (value: 'standard' | 'high') => {
	return new MediaFeature('dynamic-range', value);
}

export const forcedColors = (value: 'active' | 'none') => {
	return new MediaFeature('forced-colors', value);
}

export const grid = (value: 0 | 1) => {
	return new MediaFeature('grid', value);
}

export const invertedColors = (value: 'inverted' | 'none') => {
	return new MediaFeature('inverted-colors', value);
}

export const monochrome = (value?: number) => {
	return new MediaFeature('monochrome', value);
}

export const orientation = (value: 'portrait' | 'landscape') => {
	return new MediaFeature('orientation', value);
}

export const overflowBlock = (value: 'scroll' | 'optional-paged' | 'paged' | 'none') => {
	return new MediaFeature('overflow-block', value);
}

export const overflowInline = (value: 'scroll' | 'none') => {
	return new MediaFeature('overflow-inline', value);
}

export const pointer = (value: 'fine' | 'coarse' | 'none') => {
	return new MediaFeature('pointer', value);
}

export const prefersColorScheme = (value: 'light' | 'dark') => {
	return new MediaFeature('prefers-color-scheme', value);
}

export const prefersContrast = (value: 'no-preference' | 'more' | 'less' | 'custom') => {
	return new MediaFeature('prefers-contrast', value);
}

export const prefersReducedData = (value: 'no-preference' | 'reduce') => {
	return new MediaFeature('prefers-reduced-data', value);
}

export const prefersReducedMotion = (value: 'no-preference' | 'reduce') => {
	return new MediaFeature('prefers-reduced-motion', value);
}

export const prefersReducedTransparency = (value: 'no-preference' | 'reduce') => {
	return new MediaFeature('prefers-reduced-transparency', value);
}

export const resolution = (value: Resolution) => {
	return new MediaFeature('resolution', value);
}

export const minResolution = (value: Resolution) => {
	return new MediaFeature('min-resolution', value);
}

export const maxResolution = (value: Resolution) => {
	return new MediaFeature('max-resolution', value);
}

export const scan = (value: 'interlace' | 'progressive') => {
	return new MediaFeature('scan', value);
}

export const scripting = (value: 'initial-only' | 'enabled' | 'none') => {
	return new MediaFeature('scripting', value);
}

export const shape = (value: 'rect' | 'round') => {
	return new MediaFeature('shape', value);
}

export const update = (value: 'slow' | 'fast' | 'none') => {
	return new MediaFeature('update', value);
}

export const videoDynamicRange = (value: 'standard' | 'high') => {
	return new MediaFeature('video-dynamic-range', value);
}
