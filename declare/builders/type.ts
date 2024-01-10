import { Ident } from "../ident";
import { Declaration, PropertyInitializer } from ".";

export class TypeDeclaration implements Declaration {
	name: Ident;

	options: (string | TypeDeclaration)[];
	defaultNumberConverterDeclaration: TypeDeclaration;

	constructor(
		...options: (string | TypeDeclaration)[]
	) {
		this.options = options;
	}

	defaultNumberConverter(type: TypeDeclaration) {
		this.defaultNumberConverterDeclaration = type;

		return this;
	}

	spread() {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()}[]`,
			`...${propertyName}: ${this.name.toClassCamelCase()}[]`,
			this.defaultNumberConverterDeclaration ? `...${propertyName}.map(value => Style.resolveNumber('${this.name.toCamelCase()}', value))` : `...${propertyName}`
		);
	}

	spreadArray() {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()}[][]`,
			`...${propertyName}: ${this.name.toClassCamelCase()}[][]`,
			this.defaultNumberConverterDeclaration ? `...${propertyName}.map(row => row.map(cell => Style.resolveNumber('${this.name.toCamelCase()}', cell)))` : `...${propertyName}`
		);
	}

	single(defaultValue?: string) {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()}`,
			`${propertyName}: ${this.name.toClassCamelCase()}${defaultValue ? ` = ${defaultValue}` : ''}`,
			this.defaultNumberConverterDeclaration ? `Style.resolveNumber('${this.name.toCamelCase()}', ${propertyName})` : propertyName
		);
	}

	optional() {
		return (propertyName: string) => new PropertyInitializer(
			this,
			`${this.name.toClassCamelCase()} | undefined`,
			`${propertyName}?: ${this.name.toClassCamelCase()}`,
			this.defaultNumberConverterDeclaration ? `Style.resolveNumber('${this.name.toCamelCase()}', ${propertyName})` : propertyName
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

