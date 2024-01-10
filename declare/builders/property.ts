import { Ident } from "../ident";
import { Declaration, PropertyInitializer } from ".";

export class PropertyTypeDeclaration implements Declaration {
	name: Ident;

	constructor(
		public initializer: Record<string, (propertyName: string) => PropertyInitializer>,
		public valueConverter: string
	) { }

	requirements() {
		return Object.values(this.initializer).map(value => value('').source);
	}
}
