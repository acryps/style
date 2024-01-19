import { Calculable, Calculation } from "./calculate";
import { StyleProperty } from "./property";
import { style } from "./query";

export class Variable<T> extends StyleProperty implements Calculable<T> {
	value: T;

	users: string[] = [];

	constructor(
		public name: string,
		public initialValue?: T
	) {
		super(`--${name}`);

		this.value = initialValue;
	}

	// calculable methods
	add = value => new Calculation(this.toString()).add(value);
	subtract = value => new Calculation(this.toString()).subtract(value);
	divide = value => new Calculation(this.toString()).divide(value);
	multiply = value => new Calculation(this.toString()).multiply(value);

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
				style(user, new Variable<T>(this.name, this.value)).apply();
			}
		} catch {}
	}

	toValueString() {
		return this.value ?? 'none';
	}

	// to string is invoked when the variable is used by a property, unit or method as a value
	// lets return a reference `var(--abc)` then
	toString() {
		return `var(${this.propertyName})`;
	}
}