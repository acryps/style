export interface Calculable<ValueType> {
	add<AddedValue>(value: AddedValue): Calculation<ValueType | AddedValue>;
	subtract<SubtractedValue>(value: SubtractedValue): Calculation<ValueType | SubtractedValue>;

	multiply<MultipliedValue>(value: MultipliedValue): Calculation<ValueType | MultipliedValue>;
	divide<DividedValue>(value: DividedValue): Calculation<ValueType | DividedValue>;
	
	invert(): Calculation<ValueType>;
}

export class Calculation<ValueType> implements Calculable<ValueType> {
	constructor(
		public expression: string,
		public sources: any[]
	) {}

	private wrapExpression(value: any) {
		if (value instanceof Calculation) {
			return value.expression;
		}

		return `${value}`;
	}

	add<T>(value: T) {
		return new Calculation(`${this.expression} + ${this.wrapExpression(value)}`, [...this.sources, value]);
	}

	subtract<T>(value: T) {
		return new Calculation(`${this.expression} - ${this.wrapExpression(value)}`, [...this.sources, value]);
	}

	multiply<T>(value: T) {
		return new Calculation(`(${this.expression}) * (${this.wrapExpression(value)})`, [...this.sources, value]);
	}

	invert<T>() {
		return this.multiply(-1);
	}

	divide<T>(value: T) {
		return new Calculation(`(${this.expression}) / (${this.wrapExpression(value)})`, [...this.sources, value]);
	}

	toValueString() {
		return `calc(${this.expression})`;
	}

	toString() {
		return this.toValueString();
	}
}

export function calc(expression: string) {
	return new Calculation(expression, []);
}
