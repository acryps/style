export interface Calculable<ValueType> {
	add<AddedValue>(value: AddedValue): Calculation<ValueType | AddedValue>;
	subtract<SubtractedValue>(value: SubtractedValue): Calculation<ValueType | SubtractedValue>;

	multiply<MultipliedValue>(value: MultipliedValue): Calculation<ValueType | MultipliedValue>;
	divide<DividedValue>(value: DividedValue): Calculation<ValueType | DividedValue>;
}

export class Calculation<ValueType> implements Calculable<ValueType> {
	constructor(
		private expression: string
	) {}

	private wrapExpression(value: any) {
		if (value instanceof Calculation) {
			return value.expression;
		}

		return `${value}`;
	}

	add<T>(value: T) {
		return new Calculation(`${this.expression} + ${this.wrapExpression(value)}`);
	}

	subtract<T>(value: T) {
		return new Calculation(`${this.expression} - ${this.wrapExpression(value)}`);
	}

	multiply<T>(value: T) {
		return new Calculation(`(${this.expression}) * (${this.wrapExpression(value)})`);
	}

	divide<T>(value: T) {
		return new Calculation(`(${this.expression}) / (${this.wrapExpression(value)})`);
	}

	toValueString() {
		return `calc(${this.expression})`;
	}

	toString() {
		return this.toValueString();
	}
}

export function calc(expression: string) {
	return new Calculation(expression);
}