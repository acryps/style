export class Unit {
	protected values: (number | Unit)[];

	constructor(
		protected unit: string, 
		...values: (number | Unit)[]
	) {
		this.values = values;
	}

	toStyleString() {
		return `${this.values.join('')}${this.unit}`;
	}

	static defaultNumericUnit: (value: number) => Unit;
}

export class FunctionUnit extends Unit {
	toStyleString() {
		return `${this.unit}(${this.values.join(',')})`;
	}
}

export class PercentageUnit extends Unit { constructor(percentage: number) { super('%', percentage); } }
export const f = (value: number) => new PercentageUnit(value);

export type NumberUnit = number;