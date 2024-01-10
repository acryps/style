import { Ident } from "../ident";
import { Declaration, PropertyInitializer } from ".";

export class TypeDeclaration implements Declaration {
	name: Ident;

	options: (string | TypeDeclaration)[];

	constructor(
		...options: (string | TypeDeclaration)[]
	) {
		this.options = options;
	}

	spread() {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()}[]`,
			`...${propertyName}: ${this.name.toClassCamelCase()}[]`,
			`...${propertyName}`
		);
	}

	single(defaultValue?: string) {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()}`,
			`${propertyName}: ${this.name.toClassCamelCase()}${defaultValue ? ` = ${defaultValue}` : ''}`,
			propertyName
		);
	}

	requirements() {
		return this.options.filter(value => value instanceof TypeDeclaration) as TypeDeclaration[];
	}

	toString() {
		return this.options.map(option => option instanceof TypeDeclaration ? option.name.toClassCamelCase() : `'${option}'`).join(' | ');
	}
}

export class PrimitiveType extends TypeDeclaration {
	constructor(
		private definition: string
	) {
		super();
	}

	requirements() {
		return [];
	}

	toString() {
		return this.definition;
	}
}

