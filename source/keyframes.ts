import { AtRule } from "./at-rule";
import { AnimationDirectionMode, animationDelay, animationDirection, animationDuration, animationName, animationTimingFunction } from "./declarations/animation";
import { Percentage } from "./declarations/primitives";
import { Duration, EasingFunction } from "./declarations/time";
import { StyleGroup } from "./group";
import { StyleProperty } from "./property";
import { StyleSelectorBody, style } from "./query";

export type KeyframeLocation = Percentage[] | Percentage | 'from' | 'to';

export class Keyframe {
	constructor(
		public location: KeyframeLocation,
		public rules: StyleSelectorBody[]
	) {}

	toRuleString() {
		// does not wrap the name
		return `${this.location}${style('', ...this.rules).toString()}`;
	}
}

export class Keyframes extends AtRule {
	keyframes: Keyframe[] = [];

	constructor(
		public name: string
	) {
		super();
	}

	addKeyframe(location: KeyframeLocation, ...rules: StyleSelectorBody[]) {
		this.keyframes.push(new Keyframe(location, rules));

		return this;
	}

	animate(duration: Duration, timingFunction: EasingFunction, direction: AnimationDirectionMode = 'normal', delay?: Duration) {
		const rules: StyleSelectorBody[] = [
			this,

			animationName(this.name),
			animationDuration(duration),
			animationTimingFunction(timingFunction),
			animationDirection(direction)
		];

		if (delay) {
			rules.push(animationDelay(delay));
		}

		return rules;
	}

	// return nothing as this at rule cannot be "used" directly
	toStyle() {
		return [];
	}

	toRuleString() {
		return `@keyframes ${this.name}{${this.keyframes.map(keyframe => keyframe.toRuleString()).join('')}}`;
	}
}
