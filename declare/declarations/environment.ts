import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { length } from "./primitives";

export const envVariableName = new TypeDeclaration(
	'safe-area-inset-top',
	'safe-area-inset-right',
	'safe-area-inset-bottom',
	'safe-area-inset-left',

	'safe-area-max-inset-top',
	'safe-area-max-inset-right',
	'safe-area-max-inset-bottom',
	'safe-area-max-inset-left',

	'titlebar-area-x',
	'titlebar-area-y',
	'titlebar-area-width',
	'titlebar-area-height',

	'keyboard-inset-top',
	'keyboard-inset-right',
	'keyboard-inset-bottom',
	'keyboard-inset-left',
	'keyboard-inset-width',
	'keyboard-inset-height',

	'viewport-segment-width',
	'viewport-segment-height',
	'viewport-segment-top',
	'viewport-segment-right',
	'viewport-segment-bottom',
	'viewport-segment-left'
)

export const env = new MethodDeclaration({
	name: envVariableName.single(),
	fallback: length.spread()
}, `
	this.name = name;
	this.fallback = fallback;
`, "env(${this.name}, ${this.fallback.join(',')})");
