import { PropertyInitializer } from "./index";
import { TypeDeclaration } from "./type";

type MethodParameters = Record<string, (propertyName: string) => PropertyInitializer>;

export class MethodDeclaration extends TypeDeclaration {
	isCalculable = false;

	constructor(
		private parameters: MethodParameters | (() => MethodParameters),
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

	resolveParameters(): MethodParameters {
		if (typeof this.parameters == 'function') {
			return this.parameters();
		}

		return this.parameters;
	}

	requirements() {
		return Object.values(this.resolveParameters()).map(parameter => parameter(parameter.name).source);
	}
}
