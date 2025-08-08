import { Ident } from "../ident";
import { Declaration, PropertyInitializer } from "./index";
import { TypeDeclaration } from "./type";

export class PropertyTypeDeclaration implements Declaration {
	name: Ident;

	noneAllowed = false;
	mediaQueryAllowed = false;

	shorthandInitializers: {
		initializer: Record<string, string[]>,
		valueConverter: string
	}[] = [];

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

	allowNone() {
		this.noneAllowed = true;

		return this;
	}

	allowMediaQuery() {
		this.mediaQueryAllowed = true;

		return this;
	}

	addShorthandInitializer(initializer: Record<string, string[]>, valueConverter: string) {
		this.shorthandInitializers.push({initializer, valueConverter});

		return this;
	}
}
