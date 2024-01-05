import { StyleProperty } from "..";
import { Style } from "../../style";
import { AbsoluteLength } from "../../units/length";

export class BoxShadowProperty extends StyleProperty {
	constructor(
		private inset: boolean,
		private offsetX: AbsoluteLength,
		private offsetY: AbsoluteLength,
		private blurRadius?: AbsoluteLength,
		private spreadRadius?: AbsoluteLength
	) {
		super();
	}

	toString() {
		return `${this.offsetX} ${this.offsetY} ${this.blurRadius ?? ''} ${this.spreadRadius ?? ''} ${this.inset ? ' inset' : ''}`;
	}
}

export function boxShadow(offsetX: AbsoluteLength | number, offsetY: AbsoluteLength | number, blurRadius?: AbsoluteLength | number, spreadRadius?: AbsoluteLength | number) {
	return new BoxShadowProperty(
		false,
		Style.toUnit(offsetX),
		Style.toUnit(offsetY),
		Style.toUnit(blurRadius),
		Style.toUnit(spreadRadius)
	)
}

export function insetBoxShadow(offsetX: AbsoluteLength | number, offsetY: AbsoluteLength | number, blurRadius?: AbsoluteLength | number, spreadRadius?: AbsoluteLength | number) {
	return new BoxShadowProperty(
		true,
		Style.toUnit(offsetX),
		Style.toUnit(offsetY),
		Style.toUnit(blurRadius),
		Style.toUnit(spreadRadius)
	)
}