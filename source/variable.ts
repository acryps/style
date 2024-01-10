import { StyleProperty } from "./property";
import { style } from "./query";

export class Variable<T> extends StyleProperty {
	value: T;

	users: string[] = [];

	constructor(
		public name: string,
		public initialValue: T
	) {
		super(`--${name}`);

		this.value = initialValue;
	}

	use(selector: string) {
		this.users.push(selector);

		return this;
	}

	/**
	 * Update the variables value
	 * 
	 * This will apply the new value to DOM contexts if available
	 */
	update(value: T) {
		this.value = value;

		try {
			for (let user of this.users) {
				style(user, this).apply();
			}
		} catch {}
	}

	toString() {
		return `${this.propertyName}:${this.value?.toString() ?? 'none'}`;
	}

	toValueString() {
		return `var(${this.propertyName})`;
	}
}