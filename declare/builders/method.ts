import { PropertyInitializer } from ".";
import { TypeDeclaration } from "./type";

export class MethodDeclaration extends TypeDeclaration {
	constructor(
		public parameters: Record<string, (propertyName: string) => PropertyInitializer>,
		public creator: string,
		public valueConverter: string
	) {
		super();
	}

	static fromUnit(name: string, type) {
		return new MethodDeclaration({
			value: type.single()
		}, `this.value = value;`, `\${this.value}${name}`);
	}

	requirements() {
		return Object.values(this.parameters).map(parameter => parameter(parameter.name).source);
	}
}