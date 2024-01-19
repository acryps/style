import { createWriteStream, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { Ident } from "./ident";
import { Declaration } from "./builders";
import { TypeDeclaration } from "./builders/type";
import { PropertyTypeDeclaration } from "./builders/property";
import { ShorthandDeclaration } from "./builders/shorthand";
import { MethodDeclaration } from "./builders/method";

const sourceBase = join(__dirname, 'declarations');

const drainBase = join('source', 'declarations');
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
		writer.write(`import { StyleMethod } from '../method';\n`);
		writer.write(`import { Variable } from '../variable';\n`);
		writer.write(`import { Calculation, Calculable } from '../calculate';\n`);
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

			if (declaration instanceof ShorthandDeclaration) {
				writer.write(`export class ${ident.toPropertyClassName()} extends StyleProperty {\n`);
				writer.write(`\tconstructor(\n`);
				
				for (let child of declaration.children) {
					writer.write(`\t\tpublic ${child.name.toCamelCase()}: ${child.name.toPropertyClassName()}${declaration.children.indexOf(child as any) == declaration.children.length - 1 ? '' : ','}\n`);
				}

				writer.write('\t) {\n');
				writer.write(`\t\tsuper('${ident.toDashed()}', [${declaration.children.map(child => child.name.toCamelCase()).join(', ')}]);\n`);
				writer.write('\t}\n');
				writer.write(`}\n\n`);
			}

			if (declaration instanceof MethodDeclaration) {
				writer.write(`export class ${declaration.name.toClassCamelCase()} extends StyleMethod`);
				
				if (declaration.isCalculable) {
					writer.write(` implements Calculable<${declaration.name.toClassCamelCase()}>`);
				}

				writer.write(' {\n');
				
				const constructorArguments = [];
				const passArguments = [];

				for (let property in declaration.parameters) {
					const initializer = declaration.parameters[property](property);

					writer.write(`\tprivate ${property}: ${initializer.type};\n`);

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
						writer.write(`\t${operation} = value => new Calculation(this.toValueString()).${operation}(value);\n`);
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
				writer.write(`export class ${ident.toPropertyClassName()} extends StyleProperty {\n`);

				const constructorArguments = [];
				const passArguments = [];

				for (let property in declaration.initializer) {
					const initializer = declaration.initializer[property](property);

					writer.write(`\tprivate ${property}: ${initializer.type};\n`);

					constructorArguments.push(initializer.argument);
					passArguments.push(initializer.pass);
				}

				writer.write('\n');

				writer.write('\tconstructor(\n');

				writer.write(`\t\t${constructorArguments.join(',\n\t\t')}\n`);

				writer.write('\t) {\n');
				writer.write(`\t\tsuper('${ident.toDashed()}');\n\n`);

				for (let property in declaration.initializer) {
					writer.write(`\t\tthis.${property} = ${property};\n`);
				}

				writer.write('\t}\n\n');

				writer.write('\ttoValueString() {\n');
				writer.write(`\t\treturn \`${declaration.valueConverter}\`;\n`);
				writer.write('\t}\n');

				writer.write('}\n\n');

				writer.write(`export const ${ident.toCommandName()} = (${constructorArguments.join(', ')}) => new ${ident.toPropertyClassName()}(${passArguments.join(', ')});\n\n`);
			}
		}

		for (let name in declarations) {
			const ident = Ident.fromCamelCase(name);
			const declaration = declarations[name];

			if (declaration instanceof ShorthandDeclaration) {
				const initializers = [];

				// create direct initializer
				// → overflow(overflowX('scroll'), overflowY('scroll'))
				writer.write(`export function ${ident.toCommandName()}(${declaration.children.map(child => `${child.name.toCamelCase()}: ${child.name.toPropertyClassName()}`).join(', ')}): ${declaration.name.toPropertyClassName()}\n`);
				initializers.push(`if (${
					declaration.children.map((child, index) => `arguments[${index}] instanceof ${child.name.toPropertyClassName()}`).join(' && ')
				}) { return new ${declaration.name.toPropertyClassName()}(${declaration.children.map((child, index) => `arguments[${index}]`).join(', ')}); }`);

				// create child initializer
				// → overflow('scroll', 'auto') = overflowX('scroll') + overflowY('auto')
				const childInitializer = declaration.constructChildInitializer();

				if (childInitializer) {
					writer.write(`export function ${ident.toCommandName()}(${childInitializer.namedArguments.join(', ')}): ${declaration.name.toPropertyClassName()}\n`);
					initializers.push(childInitializer.initializer);
				}

				// check for same parameter initializing
				// → overflow('scroll') = overflowX('scroll') + overflowY('scroll')
				const commonParameterInitializer = declaration.constructCommonParameterInitializer();

				if (commonParameterInitializer) {
					writer.write(`export function ${ident.toCommandName()}(${commonParameterInitializer.arguments.join(', ')}): ${declaration.name.toPropertyClassName()}\n`);
					initializers.push(commonParameterInitializer.initializer);
				}

				// write function implementation
				writer.write(`export function ${ident.toCommandName()}(): ${declaration.name.toPropertyClassName()} {\n`);

				for (let initializer of initializers) {
					writer.write(`\t${initializer}\n`);
				}

				writer.write('}\n\n');

				writer.write(`${ident.toPropertyClassName()}.shorthand = [${declaration.children.map(child => child.name.toPropertyClassName()).join(', ')}];\n\n`);
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