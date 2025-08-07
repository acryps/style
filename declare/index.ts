import { createWriteStream, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { Ident } from "./ident";
import { Declaration, PropertyInitializer } from "./builders/index";
import { TypeDeclaration } from "./builders/type";
import { PropertyTypeDeclaration } from "./builders/property";
import { MethodDeclaration } from "./builders/method";

const sourceBase = join(__dirname, 'declarations');

const drainBase = join('..', 'source', 'declarations');
mkdirSync(drainBase, { recursive: true });

const sources: Record<string, any> = {};

for (let sourcePath of readdirSync(sourceBase)) {
	if (sourcePath.endsWith('.js')) {
		const declarations = require(join(sourceBase, sourcePath));

		for (let name in declarations) {
			const ident = Ident.fromCamelCase(name);

			const declaration = declarations[name];
			declaration.name = ident;
		}

		sources[sourcePath] = declarations;
	}
}

for (let sourcePath in sources) {
	if (sourcePath.endsWith('.js')) {
		const declarations = sources[sourcePath];
		const writer = createWriteStream(join(drainBase, sourcePath.replace('.js', '.ts')));

		// import base types
		writer.write(`import { Style } from '../style';\n`);
		writer.write(`import { StyleProperty } from '../property';\n`);
		writer.write(`import { MediaQueryableStyleProperty } from '../media/property';\n`);
		writer.write(`import { StyleMethod } from '../method';\n`);
		writer.write(`import { Variable } from '../variable';\n`);
		writer.write(`import { Calculation, Calculable } from '../calculate';\n`);

		if (!sourcePath.startsWith('primitives')) {
			writer.write(`import { GlobalPropertyValue } from './primitives';\n`);
		}

		writer.write('\n');

		// import all types
		const imports = [];

		for (let name in declarations) {
			const declaration = declarations[name] as Declaration;

			for (let requirement of declaration.requirements()) {
				const exportedMemberName = requirement.name.toCamelCase();

				// don't import local types
				if (!(exportedMemberName in declarations)) {
					let found = false;

					for (let sourcePath in sources) {
						if (exportedMemberName in sources[sourcePath]) {
							const importStatement = `import { ${requirement.name.toClassCamelCase()} } from './${sourcePath.replace('.js', '')}';`;

							if (!imports.includes(importStatement)) {
								imports.push(importStatement);
							}

							found = true;
						}
					}

					if (!found) {
						throw new Error(`Type '${exportedMemberName}' cloud not be imported`);
					}
				}
			}
		}

		writer.write(imports.join('\n'));
		writer.write('\n\n');

		const defaultNumberConverters = [];

		for (let name in declarations) {
			const ident = Ident.fromCamelCase(name);
			const declaration = declarations[name] as Declaration;

			writer.write(`// ${ident.toSpaced()}\n`);

			if (declaration instanceof MethodDeclaration) {
				writer.write(`export class ${declaration.name.toClassCamelCase()} extends StyleMethod`);

				if (declaration.isCalculable) {
					writer.write(` implements Calculable<${declaration.name.toClassCamelCase()}>`);
				}

				writer.write(' {\n');

				const constructorArguments = [];
				const passArguments = [];

				for (let property in declaration.parameters) {
					const initializer = declaration.parameters[property](property, false);

					writer.write(`\tpublic ${property}: ${initializer.type};\n`);

					constructorArguments.push(initializer.argument);
					passArguments.push(initializer.pass);
				}

				writer.write('\n');

				writer.write('\tconstructor(\n');

				writer.write(`\t\t${constructorArguments.join(',\n\t\t')}\n`);
				writer.write('\t) {\n\t');
				writer.write('\tsuper();\n\n');


				writer.write(declaration.creator.trim().split('\n').map(line => `\t${line}`).join('\n'));

				writer.write('\n\t}\n\n');

				if (declaration.isCalculable) {
					for (let operation of ['add', 'subtract', 'multiply', 'divide']) {
						writer.write(`\t${operation} = value => new Calculation(this.toValueString(), [this]).${operation}(value);\n`);
					}

					for (let operation of ['invert']) {
						writer.write(`\t${operation} = () => new Calculation(this.toValueString(), [this]).${operation}();\n`);
					}

					writer.write('\n');
				}

				writer.write('\ttoValueString() {\n');
				writer.write(`\t\treturn \`${declaration.valueConverter}\`;\n`);
				writer.write('\t}\n');

				writer.write(`}\n\n`);

				writer.write(`export function ${declaration.name.toCamelCase()}(${constructorArguments.join(', ')}) { return new ${declaration.name.toClassCamelCase()}(${passArguments.join(', ')}); }\n\n`);
			} else if (declaration instanceof TypeDeclaration) {
				writer.write(`export type ${ident.toClassCamelCase()} = ${declaration} | Variable<${ident.toClassCamelCase()}> | Calculation<Partial<${ident.toClassCamelCase()}>>;\n\n`);

				if (declaration.defaultNumberConverterDeclaration) {
					defaultNumberConverters.push(`Style.numberConverter['${declaration.name.toCamelCase()}'] = ${declaration.defaultNumberConverterDeclaration.name.toClassCamelCase()};`);
				}
			}

			if (declaration instanceof PropertyTypeDeclaration) {
				const stylePropertyClasses: {
					className: string;
					arguments: string[]
				}[] = [];

				// base style class
				const propertyClassName = ident.toPropertyClassName();
				const constructorArguments: string[] = [];

				for (const property in declaration.initializer) {
					const initializer = declaration.initializer[property](property, declaration.noneAllowed);

					constructorArguments.push(initializer.argument);
				}

				stylePropertyClasses.push({
					className: propertyClassName,
					arguments: constructorArguments
				});

				writer.write(`export class ${propertyClassName} extends ${declaration.mediaQueryAllowed ? 'MediaQueryableStyleProperty' : 'StyleProperty'} {\n`);
				writer.write(`\tstatic properties = [${Object.keys(declaration.initializer).map(key => `'${key}'`).join(', ')}];\n\n`);

				for (const property in declaration.initializer) {
					writer.write(`\tpublic ${property}: ${declaration.initializer[property](property, declaration.noneAllowed).type};\n`);
				}

				writer.write('\n');

				writer.write('\tconstructor(\n');
				writer.write(`\t\t${constructorArguments.join(',\n\t\t')}\n`);
				writer.write('\t) {\n');
				writer.write(`\t\tsuper('${ident.toDashed()}');\n\n`);

				for (const property in declaration.initializer) {
					writer.write(`\t\tthis.${property} = ${property};\n`);
				}

				writer.write('\t}\n\n');

				writer.write('\ttoValueString() {\n');
				writer.write(`\t\treturn \`${declaration.valueConverter}\`;\n`);
				writer.write('\t}\n');

				writer.write('}\n\n');

				// shorthand style classes
				for (const shorthandInitializer of declaration.shorthandInitializers) {
					const shorthandClassName = ident.toPropertyShorthandClassName(
						Object.keys(shorthandInitializer.initializer).map(property => Ident.fromCamelCase(property))
					);
					const constructorArguments = [];
					const superArguments = [];

					const mappedProperties = Object.values(shorthandInitializer.initializer).flat();
					const inheritanceClass = stylePropertyClasses.find(styleClass => mappedProperties.every(property => styleClass.arguments.find(argument => argument.split(':')[0].endsWith(property))));

					for (const property in shorthandInitializer.initializer) {
						const argument = inheritanceClass.arguments.find(argument => argument.split(':')[0].endsWith(shorthandInitializer.initializer[property][0]));
						constructorArguments.push(`${property}:${argument.split(':')[1]}`);
					}

					for (const argument of inheritanceClass.arguments) {
						const argumentName = argument.split(':')[0];

						for (const property in shorthandInitializer.initializer) {
							if (shorthandInitializer.initializer[property].includes(argumentName)) {
								superArguments.push(property);
								break;
							}
						}
					}

					stylePropertyClasses.push({
						className: shorthandClassName,
						arguments: constructorArguments
					});

					writer.write(`export class ${shorthandClassName} extends ${inheritanceClass.className} {\n`);
					writer.write(`\tstatic properties = [${Object.keys(shorthandInitializer.initializer).map(key => `'${key}'`).join(', ')}];\n\n`);

					writer.write(constructorArguments.map(argument => `\tpublic ${argument};\n`).join(''));
					writer.write('\n\n');

					writer.write('\tconstructor(\n');

					writer.write(`\t\t${constructorArguments.join(',\n\t\t')}\n`);

					writer.write('\t) {\n');
					writer.write(`\t\tsuper(${superArguments.join(', ')});\n\n`);
					writer.write(`\t\t${constructorArguments.map(argument => `this.${argument.split(':')[0]} = ${argument.split(':')[0]};`).join('\n\t\t')}\n`);
					writer.write('\t}\n\n');

					writer.write('\ttoValueString() {\n');
					writer.write(`\t\treturn \`${declaration.valueConverter}\`;\n`);
					writer.write('\t}\n');

					writer.write('}\n\n');
				}

				// helper functions
				if (stylePropertyClasses.length == 1) {
					writer.write(`export function ${ident.toCommandName()}(...parameters: ConstructorParameters<typeof ${propertyClassName}>): ${propertyClassName} {\n`);
					writer.write(`\treturn new ${propertyClassName}(${stylePropertyClasses[0].arguments.map((_, index) => `parameters[${index}]`).join(', ')});\n`);
					writer.write(`}\n\n`);
				} else {
					for (const stylePropertyClass of stylePropertyClasses) {
						writer.write(`export function ${ident.toCommandName()}(...parameters: ConstructorParameters<typeof ${stylePropertyClass.className}>): ${stylePropertyClass.className};\n`);
					}

					writer.write(`export function ${ident.toCommandName()}(...parameters: any[]): any {\n`);
					writer.write(`\tswitch (parameters.length) {\n`);

					for (const stylePropertyClass of stylePropertyClasses) {
						writer.write(`\t\tcase ${stylePropertyClass.arguments.length}: return new ${stylePropertyClass.className}(${stylePropertyClass.arguments.map((_, index) => `parameters[${index}]`).join(', ')}); break;\n`);
					}

					writer.write(`\t}\n\n`);

					writer.write(`\tthrow new Error('Invalid number of arguments to ${ident.toCommandName()}');\n`);
					writer.write(`}\n\n`);
				}
			}
		}

		// number converters require all types to be set
		// insert at the bottom
		writer.write(defaultNumberConverters.join('\n'));

		writer.close();
	}
}

const indexWriter = createWriteStream(join(drainBase, 'index.ts'));

for (let sourcePath in sources) {
	indexWriter.write(`export * from './${sourcePath.replace('.js', '')}';\n`);
}

indexWriter.end();
