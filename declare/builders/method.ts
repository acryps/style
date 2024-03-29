import { PropertyInitializer } from "./index";
import { TypeDeclaration } from "./type";

export class MethodDeclaration extends TypeDeclaration {
	isCalculable = false;

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

	calculable() {
		this.isCalculable = true;

		return this;
	}

	requirements() {
		return Object.values(this.parameters).map(parameter => parameter(parameter.name).source);
	}
}
