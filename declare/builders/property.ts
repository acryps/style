import { Ident } from "../ident";
import { Declaration, PropertyInitializer } from "./index";
import { TypeDeclaration } from "./type";

export class PropertyTypeDeclaration implements Declaration {
	name: Ident;

	static fromMode(mode: TypeDeclaration) {
		return new PropertyTypeDeclaration({
			mode: mode.single()
		}, "${this.mode}");
	}

	constructor(
		public initializer: Record<string, (propertyName: string) => PropertyInitializer>,
		public valueConverter: string
	) { }

	requirements() {
		return Object.values(this.initializer).map(value => value('').source);
	}
}
