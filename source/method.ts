export abstract class StyleMethod {
	abstract toValueString(): string;

	toString() {
		return this.toValueString();
	}
}
