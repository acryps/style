export class Ident {
	constructor(
		private parts: string[]
	) {}

	static fromCamelCase(source: string) {
		return this.fromDashed(source.replace(/[A-Z]/g, match => `-${match}`))
	}

	static fromDashed(source: string) {
		return new Ident(source.split('-').map(item => item.toLowerCase()));
	}

	toCamelCase() {
		return this.parts.map((part, index) => index ? `${part[0].toUpperCase()}${part.substring(1).toLowerCase()}` : part).join('');
	}

	toClassCamelCase() {
		return this.parts.map(part => `${part[0].toUpperCase()}${part.substring(1).toLowerCase()}`).join('');
	}

	toDashed() {
		return this.parts.join('-');
	}

	toSpaced() {
		return this.parts.join(' ');
	}

	toPropertyClassName() {
		return `${this.toClassCamelCase()}StyleProperty`;
	}

	toPropertyGlobalClassName() {
		return `${this.toClassCamelCase()}GlobalStyleProperty`;
	}

	toPropertyShorthandClassName(properties: Ident[]) {
		return `${this.toClassCamelCase()}StyleShorthand${properties.map(property => property.toClassCamelCase()).join('')}`;
	}

	toCommandName() {
		return this.toCamelCase();
	}

	merge(ident: Ident) {
		return new Ident([...this.parts, ...ident.parts]);
	}
}