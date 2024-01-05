export class Calculate {
	constructor(
		private expression: string
	) {}

	toString() {
		return `calc(${this.expression})`;
	}
}

export function calc(expression: string) {
	return new Calculate(expression);
}