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
	add = value => new Calculation(this.toString(), [this]).add(value);
	subtract = value => new Calculation(this.toString(), [this]).subtract(value);
	divide = value => new Calculation(this.toString(), [this]).divide(value);
	multiply = value => new Calculation(this.toString(), [this]).multiply(value);
	invert = () => new Calculation(this.toString(), [this]).invert();

	use(selector: string) {
		this.users.push(selector);

		return this;
	}

	/**
	 * Creates a copy of the variable with a value set
	 *
	 * Use this to insert a value into an element
	 * ```<ui-test style={someColorVariable.provide(item.color)}> ... </ui-test>```
	 */
	provide(value: T) {
		return new ProvidedVariable<T>(this, value);
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
				style(user) (
					new Variable<T>(this.name, this.value)
				).apply();
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

export class ProvidedVariable<T> {
	constructor(
		public source: Variable<T>,
		public value: T
	) {}

	toString() {
		return `${this.source.propertyName}:${this.value}`;
	}

	toStyleProperty() {
		return new Variable(this.source.name, this.value);
	}
}
