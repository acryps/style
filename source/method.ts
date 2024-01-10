export class StyleMethod {
	toValueString() {
		throw new Error('property value not implemented');
	}
	
	toString() {
		return this.toValueString();
	}
}