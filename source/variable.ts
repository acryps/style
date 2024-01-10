import { StyleProperty } from "./property";
import { style } from "./query";

export class Variable<T> extends StyleProperty {
	value;

	users: string[];

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

	toValueString() {
		return this.value?.toString() ?? 'none';
	}
}