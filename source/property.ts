import { Duration, EasingFunction } from "./declarations/time";
import { Style } from "./style";
import { Transition } from "./transition";

export abstract class StyleProperty {
	static properties: string[];

	overwriteParents = false;
	transitionRule: Transition;

	static shorthand: (new (...parameters) => StyleProperty)[];

	constructor(
		public propertyName: string,
		public children?: StyleProperty[]
	) {}

	important() {
		this.overwriteParents = true;

		return this;
	}

	transition(duration: Duration | number, delay?: Duration | number, easingFunction?: EasingFunction) {
		this.transitionRule = new Transition(this, Style.resolveNumber('duration', duration), Style.resolveNumber('duration', delay), easingFunction);

		return this;
	}

	/**
	 * Called when the property is used by a group
	 *
	 * You may return an altered version of this property depending on the use
	 */
	use(selector: string): StyleProperty | StyleProperty[] | undefined | null {
		return this;
	}

	abstract toValueString(): string;

	toPropertyString(terminate = true) {
		return `${this.propertyName}:${this.toValueString()}${this.overwriteParents ? ' !important' : ''}${terminate ? ';' : ''}`;
	}
}
