export class StyleProperty {
	static shorthand: (new (...parameters) => StyleProperty)[];

	constructor(
		public propertyName: string,
		private children?: StyleProperty[]
	) {}

	toValueString() {
		throw new Error('property value not implemented');
	}

	toString() {
		return `${this.propertyName}:${this.toValueString()};`;
	}
}