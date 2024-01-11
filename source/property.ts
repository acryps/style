export class StyleProperty {
	static shorthand: (new (...parameters) => StyleProperty)[];

	constructor(
		public propertyName: string,
		private children?: StyleProperty[]
	) {}

	/**
	 * Called when the property is used by a group
	 * 
	 * You may return an altered version of this property depending on the use
	 */
	use(selector: string): StyleProperty | StyleProperty[] | undefined | null {
		if (this.children) {
			return this.children;
		}

		return this;
	}

	toValueString() {
		throw new Error('property value not implemented');
	}

	toString() {
		return `${this.propertyName}:${this.toValueString()};`;
	}
}