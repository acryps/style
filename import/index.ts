import { createWriteStream, mkdirSync } from 'fs';
import { join } from 'path';
import { listAll } from '@webref/css';
import { NameConverter } from './name-converter';
import { importUnits } from './unit';
import { importTypes } from './types';
import { importSyntax } from './syntaxes';
import { FormatParser } from './parser';

const base = join('source', 'definitions');
mkdirSync(base, { recursive: true });

const css = require('@webref/css');
const { definitionSyntax } = require('css-tree');

const writer = createWriteStream(join(base, 'index.ts'));

css.listAll().then(parsedFiles => {
	const values = [];
	const properties = []; 

	for (const name in parsedFiles) {
		const data = parsedFiles[name];

		for (let value of data.values) {
			const existingIndex = values.findIndex(existing => existing.name == value.name);

			if (existingIndex == -1) {
				values.push(value);
			} else {
				// take the longer definition if multiple are available
				// the longer will always be the newer, as the definitions contain all the legacy declarations
				const definingValueProperty = value.value ?? value.values;

				const existing = values[existingIndex];
				const definingExistingProperty = existing.value ?? existing.values;

				if (definingValueProperty && definingExistingProperty && definingValueProperty.length > definingExistingProperty.length) {
					values[existingIndex] = value;
				}
			}
		}

		for (let property of data.properties) {
			const existingIndex = properties.findIndex(existing => existing.name == property.name);

			if (property.value) {
				if (existingIndex == -1) {
					properties.push(property);
				} else {
					const existing = properties[existingIndex];
					
					if (property.value.length > existing.value.length) {
						properties[existingIndex] = property;
					}
				}
			}
		}
	}

	
	for (let value of values) {
		try {
			if (value.type == 'type') {
				writer.write(`// type ${value.name}\n`);
				writer.write(`// ${value.value}\n`);

				const name = value.name.slice(1, -1);

				if (value.value) {
					writer.write(`export type ${NameConverter.toClassName(name)} = (${FormatParser.toTypeDeclarations(value.value).join(') | (')});\n`);
				} else if (value.values) {
					writer.write(`export type ${NameConverter.toClassName(name)} = ${value.values.flatMap(value => FormatParser.toTypeDeclarations(value.value)).join(' | ')};\n`);
				}

				writer.write('\n');
			}

			if (value.type == 'function') {
				writer.write(`// function ${value.name}\n`);
				writer.write(`// ${value.value}\n`);

				const name = value.name.replace('()', '');
				const propertyName = NameConverter.toPropertyType(name);

				writer.write(`class ${propertyName} {}\n\n`);

				for (let declaration of FormatParser.toFunctionDeclarationList(name, value.value)) {
					writer.write(`export function ${declaration};\n`);
				}

				writer.write(`export function ${NameConverter.toFunctionName(name)}() { return new ${propertyName}(); }\n\n`);
			}
		} catch (error) {
			console.warn(`failed to read value '${value.name}'`, error);
		}
	}

	for (let property of properties) {
		try {
			if (property.value) {
				writer.write(`// property ${property.name}\n`);
				writer.write(`// ${property.value}\n`);

				const name = NameConverter.toFunctionName(property.name);

				writer.write(`class ${NameConverter.toPropertyType(property.name)} {}\n\n`);

				for (let declaration of FormatParser.toTypeDeclarations(property.value)) {
					writer.write(`export function ${name}(source: ${declaration}): ${NameConverter.toPropertyType(property.name)}\n`);
				}

				writer.write(`export function ${name}() { return new ${NameConverter.toPropertyType(property.name)}() }\n`);

				writer.write('\n');
			}
		} catch (error) {
			console.warn(`failed to read property '${property.name}'`, error);
		}
	}
	

	writer.write('\n\n');
	writer.write(`// helpers\n`);

	for (let helper of FormatParser.helpers) {
		writer.write(`${helper};\n`);
	}

	writer.close();
});
