import { Declaration, PropertyInitializer } from ".";
import { Ident } from "../ident";
import { TypeDeclaration } from "./type";

export class MethodDeclaration implements Declaration {
	name: Ident;

	constructor(
		public parameters: Record<string, (propertyName: string) => PropertyInitializer>,
		public creator: string,
		public valueConverter: string
	) {}

	requirements() {
		return Object.values(this.parameters).map(parameter => parameter(parameter.name).source);
	}
}