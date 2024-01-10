import { createWriteStream, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { Ident } from "./ident";
import { Declaration, PropertyTypeDeclaration, ShorthandDeclaration, TypeDeclaration } from "./types";

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
		writer.write(`import { StyleProperty } from '../property';\n`);
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

		for (let name in declarations) {
			const ident = Ident.fromCamelCase(name);
			const declaration = declarations[name] as Declaration;

			writer.write(`// ${ident.toSpaced()}\n`);

			if (declaration instanceof ShorthandDeclaration) {
				writer.write(`export class ${ident.toPropertyClassName()} extends StyleProperty {\n`);
				writer.write(`\tconstructor(\n`);
				
				for (let child of declaration.children) {
					writer.write(`\t\tprivate ${child.name.toCamelCase()}: ${child.name.toPropertyClassName()}${declaration.children.indexOf(child as any) == declaration.children.length - 1 ? '' : ','}\n`);
				}

				writer.write('\t) {\n');
				writer.write(`\t\tsuper('${ident.toDashed()}', [${declaration.children.map(child => child.name.toCamelCase()).join(', ')}]);\n`);
				writer.write('\t}\n');
				writer.write(`}\n\n`);
			}

			if (declaration instanceof TypeDeclaration) {
				writer.write(`export type ${ident.toClassCamelCase()} = ${declaration};\n\n`);
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
				writer.write(`export function ${ident.toCommandName()}(${declaration.children.map(child => `${child.name.toCamelCase()}: ${child.name.toPropertyClassName()}`).join(', ')})\n`);
				initializers.push(`if (${
					declaration.children.map((child, index) => `arguments[${index}] instanceof ${child.name.toPropertyClassName()}`).join(' && ')
				}) { return new ${declaration.name.toPropertyClassName()}(${declaration.children.map((child, index) => `arguments[${index}]`).join(', ')}); }`);

				// create child initializer
				// → overflow('scroll', 'auto') = overflowX('scroll') + overflowY('auto')
				const childInitializer = declaration.constructChildInitializer();

				if (childInitializer) {
					writer.write(`export function ${ident.toCommandName()}(${childInitializer.namedArguments.join(', ')})\n`);
					initializers.push(childInitializer.initializer);
				}

				// check for same parameter initializing
				// → overflow('scroll') = overflowX('scroll') + overflowY('scroll')
				const commonParameterInitializer = declaration.constructCommonParameterInitializer();

				if (commonParameterInitializer) {
					writer.write(`export function ${ident.toCommandName()}(${commonParameterInitializer.arguments.join(', ')})\n`);
					initializers.push(commonParameterInitializer.initializer);
				}

				// write function implementation
				writer.write(`export function ${ident.toCommandName()}() {\n`);

				for (let initializer of initializers) {
					writer.write(`\t${initializer}\n`);
				}

				writer.write('}\n\n');

				writer.write(`${ident.toPropertyClassName()}.shorthand = [${declaration.children.map(child => child.name.toPropertyClassName()).join(', ')}];\n\n`);
			}
		}

		writer.close();
	}
}

const indexWriter = createWriteStream(join(drainBase, 'index.ts'));

for (let sourcePath in sources) {
	indexWriter.write(`export * from './${sourcePath.replace('.js', '')}';\n`);
}

indexWriter.end();