import { Duration, EasingFunction } from "./declarations";
import { StyleProperty } from "./property";
import { StyleSelectorBody } from "./query";

export class Transition {
	constructor(
		public property: StyleProperty,
		public duration: Duration,
		public delay?: Duration,
		public easingFunction?: EasingFunction
	) {}

	toValueString() {
		return [this.property.propertyName, this.duration, this.easingFunction, this.delay].filter(item => item).join(' ');
	}
}