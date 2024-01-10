export class Style {
	static numberConverter: Record<string, new (value: any) => any> = {};

	static resolveNumber(converter: string, value: any) {
		if (typeof value == 'number') {
			return new this.numberConverter[converter](value);
		}

		return value;
	}
}