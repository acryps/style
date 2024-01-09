import { createWriteStream } from "fs";
import { join } from "path";
import { NameConverter } from "./name-converter";
import { FormatParser } from "./parser";

export const importSyntax = (css, base: string) => {
	const ignoredSyntaxes = ['feature-type', 'feature-value-block', 'feature-value-block-list', 'feature-value-declaration'];

	const writer = createWriteStream(join(base, 'syntax.ts'));
	
	for (let syntax in css.syntaxes) {
		if (!ignoredSyntaxes.includes(syntax)) {
			const definition = css.syntaxes[syntax].syntax.split('\n').join(' ');

			writer.write(`// ${syntax}\n`);
			writer.write(`// ${definition}\n`);

			console.group(syntax);

			if (syntax.includes('()')) {
				/*for (let declaration of FormatParser.toFunctionDeclarationList(definition)) {
					writer.write(`export function ${declaration};\n`);
				}*/

				writer.write('\n');
			} else {
				for (let declaration of FormatParser.toTypeDeclarations(definition)) {
					writer.write(`export type ${NameConverter.toClassName(syntax)} = ${declaration};\n\n`);
				}
			}

			console.groupEnd();
		}
	}

	writer.write(`\n`);
	writer.write(`// helpers`);

	for (let helper of FormatParser.helpers) {
		writer.write(`${helper};\n`);
	}

	writer.end();
}