export class StyleProperty {
	static shorthand: (new (...parameters) => StyleProperty)[];

	constructor(
		public propertyName: string,
		public children?: StyleProperty[]
	) {}

	/**
	 * Called when the property is used by a group
	 * 
	 * You may return an altered version of this property depending on the use
	 */
	use(selector: string): StyleProperty | StyleProperty[] | undefined | null {
		return this;
	}

	toValueString() {
		throw new Error(`No property value for '${this.constructor.name}' implemented`);
	}

	toPropertyString() {
		return `${this.propertyName}:${this.toValueString()};`;
	}
}