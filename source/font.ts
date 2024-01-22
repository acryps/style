import { AtRule } from "./at-rule";
import { fontFamily, url } from "./declarations";
import { StyleProperty } from "./property";
import { StyleInsert, StyleSelectorBody } from "./query";

type RecursingStyleProperty = StyleProperty | RecursingStyleProperty[];

export type FontSourceFormat = 'opentype' | 'woff' | 'woff2' | 'collection' | 'embedded-opentype' | 'svg' | 'truetype';

export class FontSource {
	constructor(
		public source: string,
		public format?: FontSourceFormat
	) {}

	toValueString() {
		if (this.format) {
			return `${url(this.source)} format(${JSON.stringify(this.format)})`;
		}

		return `${url(this.source)}`;
	}
}

export class Font extends AtRule {
	sources: FontSource[] = [];
	rules: RecursingStyleProperty[];

	constructor(
		public name: string,
		...rules: RecursingStyleProperty[]
	) {
		super();

		this.rules = rules;
	}

	addSource(source: string, format?: FontSourceFormat) {
		this.sources.push(new FontSource(source, format));

		return this;
	}

	toRuleString() {
		const rules = [];

		const addRule = (rule: RecursingStyleProperty) => {
			if (Array.isArray(rule)) {
				for (let item of rule) {
					addRule(item);
				}
			} else {
				rules.push(rule.toPropertyString());
			}
		}

		addRule(this.rules);

		return `@font-face{font-family:${JSON.stringify(this.name)};src:${this.sources.map(source => source.toValueString()).join(',')};${rules.join('')}}`;
	}

	// use the font just by 
	toStyleProperty() {
		return fontFamily(this.name);
	}
}