import { Ident } from "../ident";
import { Declaration } from "./index";
import { PropertyTypeDeclaration } from "./property";

export class ShorthandDeclaration implements Declaration {
	name: Ident;

	constructor(
		public children: PropertyTypeDeclaration[] | ShorthandDeclaration[]
	) { }

	// create child initializer
	// → overflow('scroll', 'auto') = overflowX('scroll') + overflowY('auto')
	constructChildInitializer(): { genericArguments: string[]; namedArguments: string[]; initializer: string; } {
		const firstDeclaration = this.children[0];

		if (firstDeclaration instanceof ShorthandDeclaration) {
			const children = this.children as ShorthandDeclaration[];

			const firstShorthandInitializer = firstDeclaration.constructChildInitializer();

			if (firstShorthandInitializer) {
				if (children.every(child => child.constructChildInitializer()?.genericArguments.join() == firstShorthandInitializer.genericArguments.join())) {
					return {
						genericArguments: firstShorthandInitializer.genericArguments,
						namedArguments: firstShorthandInitializer.namedArguments,
						initializer: `if (arguments.length == ${firstShorthandInitializer.genericArguments.length}) { return new ${this.name.toPropertyClassName()}(${children.map(child => `${child.name.toCommandName()}(${firstShorthandInitializer.genericArguments.map((argument, index) => `arguments[${index}]`).join(', ')})`).join(', ')}); }`
					};
				}
			}
		}

		if (firstDeclaration instanceof PropertyTypeDeclaration) {
			const children = this.children as PropertyTypeDeclaration[];

			const childInitializerGenericFunctionArguments = [];
			const childInitializerNamedFunctionArguments = [];
			const childInitializerPassArguments = [];

			for (let child of children) {
				for (let property in child.initializer) {
					childInitializerGenericFunctionArguments.push(child.initializer[property](property).argument);
					childInitializerNamedFunctionArguments.push(child.initializer[property](child.name.merge(Ident.fromCamelCase(property)).toCamelCase()).argument);

					childInitializerPassArguments.push(child.initializer[property](`arguments[${childInitializerPassArguments.length}]`).pass);
				}
			}

			return {
				genericArguments: childInitializerGenericFunctionArguments,
				namedArguments: childInitializerNamedFunctionArguments,
				initializer: `if (arguments.length == ${children.length}) { return new ${this.name.toPropertyClassName()}(${children.map(child => `new ${child.name.toPropertyClassName()}(${Object.keys(child.initializer).map(() => childInitializerPassArguments.shift()).join(', ')})`).join(', ')}); }`
			};
		}
	}

	// check for same parameter initializing
	// → overflow('scroll') = overflowX('scroll') + overflowY('scroll')
	constructCommonParameterInitializer(): { arguments: string[]; initializer: string; } {
		const firstDeclaration = this.children[0];

		if (firstDeclaration instanceof ShorthandDeclaration) {
			const children = this.children as ShorthandDeclaration[];

			const firstChildInitializer = firstDeclaration.constructChildInitializer();

			if (children.every(child => child.constructChildInitializer().genericArguments.join() == firstChildInitializer.genericArguments.join())) {
				const uniqueArguments = firstChildInitializer.genericArguments.filter((argument, index) => firstChildInitializer.genericArguments.indexOf(argument) == index);

				return {
					arguments: uniqueArguments,
					initializer: `if (arguments.length == ${uniqueArguments.length}) { return new ${this.name.toPropertyClassName()}(${children.map(child => `${child.name.toCommandName()}(${uniqueArguments.map((argument, index) => `arguments[${index}]`).join(', ')})`).join(', ')}); }`
				};
			}
		}

		if (firstDeclaration instanceof PropertyTypeDeclaration) {
			const children = this.children as PropertyTypeDeclaration[];

			const firstInitializerGroup = Object.keys(firstDeclaration.initializer).join(',');

			if (children.every(child => Object.keys(child.initializer).join(',') == firstInitializerGroup)) {
				const functionArguments = [];
				const passArguments = [];

				for (let property in firstDeclaration.initializer) {
					functionArguments.push(firstDeclaration.initializer[property](property).argument);
					passArguments.push(firstDeclaration.initializer[property](`arguments[${passArguments.length}]`).pass);
				}

				return {
					arguments: functionArguments,
					initializer: `if (arguments.length == ${Object.keys(firstDeclaration.initializer).length}) { return new ${this.name.toPropertyClassName()}(${children.map(child => `new ${child.name.toPropertyClassName()}(${passArguments.join(', ')})`).join(', ')}); }`
				};
			}
		}
	}

	requirements() {
		return this.children.flatMap(child => child.requirements());
	}
}
