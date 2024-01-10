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

	optional() {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()} | undefined`,
			`${propertyName}?: ${this.name.toClassCamelCase()}`,
			propertyName
		);
	}

	requirements() {
		return this.options.filter(value => value instanceof TypeDeclaration) as TypeDeclaration[];
	}

	toString() {
		return this.options.map(option => {
			if (option instanceof TypeDeclaration) {
				return option.name.toClassCamelCase();
			}
			
			if (typeof option == 'string') {
				return `'${option}'`;
			}
		}).join(' | ');
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

