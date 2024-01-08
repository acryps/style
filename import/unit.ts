import { createWriteStream } from "fs";
import { NameConverter } from "./name-converter";
import { join } from "path";

export const importUnits = (css, base: string) => {
	const groups = new Map<string, string[]>();
	const writer = createWriteStream(join(base, 'units.ts'));
	
	for (let unit in css.units) {
		console.log(unit);
	
		const className = NameConverter.toClassName(unit, 'unit');
	
		for (let group of css.units[unit].groups) {
			if (groups.has(group)) {
				groups.get(group).push(className);
			} else {
				groups.set(group, [className]);
			}
		}
	
		// create class
		writer.write(`export class ${className} {\n`);
		writer.write('\tconstructor(private value: number) {}\n\n');
		writer.write(`\ttoString = () => \`\${this.value}${unit}\`;\n`);
		writer.write('}\n\n');
	
		// create creator function
		writer.write(`export const ${NameConverter.toFunctionName(unit)} = (value: number) => new ${className}(value);\n\n`);
	}
	
	for (let [name, classes] of groups) {
		writer.write(`export type ${NameConverter.toClassName(name)} = ${classes.join(' | ')};\n`);
	}
	
	writer.end();
};