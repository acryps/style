import { createWriteStream } from "fs";
import { NameConverter } from "./name-converter";
import { join } from "path";

export const importTypes = (css, base: string) => {
	const groups = new Map<string, string[]>();
	const writer = createWriteStream(join(base, 'types.ts'));
	
	for (let unit in css.types) {
		console.log(unit);
	
		const className = NameConverter.toClassName(unit, 'type');
	
		for (let group of css.types[unit].groups) {
			if (groups.has(group)) {
				groups.get(group).push(className);
			} else {
				groups.set(group, [className]);
			}
		}
	
		// create base class
		writer.write(`export class ${className} {}\n\n`);
	}
	
	for (let [name, classes] of groups) {
		writer.write(`export type ${NameConverter.toClassName(name)} = ${classes.join(' | ')};\n`);
	}
	
	writer.end();
};