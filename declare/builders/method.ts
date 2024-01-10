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

	requirements() {
		return Object.values(this.parameters).map(parameter => parameter(parameter.name).source);
	}
}