
import { AtRule } from "./at-rule";
import { url } from "./declarations";

export class ExternalStyleSheet extends AtRule {
	sortingOrder = 2; // after @charset
	
	constructor(
		private location: string
	) {
		super();
	}
	
	toRuleString() {
		return `@import ${url(this.location)};`;
	}
}
