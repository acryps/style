import { AtRule } from "./at-rule";
import { StyleGroup } from "./group";
import { StyleProperty } from "./property";

export class Container extends AtRule {
	afterRules = true;

	name: string;
	query: StyleProperty[];
	styles: StyleGroup[];

	constructor(
		nameOrQuery: string | StyleProperty[],
		queryOrStyles: StyleProperty[] | StyleGroup,
		...rest: StyleGroup[]
	) {
		super();

		if (typeof nameOrQuery == 'string') {
			this.name = nameOrQuery;
			this.query = queryOrStyles as StyleProperty[];
			this.styles = rest;
		} else {
			this.query = nameOrQuery;
			this.styles = [queryOrStyles as StyleGroup, ...rest];
		}
	}

	append(...styles: StyleGroup[]) {
		this.styles.push(...styles);
	}

	// return nothing as this at rule cannot be "used" directly
	toStyle() {
		return [];
	}

	toRuleString(parentSelector: string) {
		return `@container ${this.name ?? ''} (${
			this.query.map(property => property.toPropertyString(false)).join(',')
		}) {${
			this.styles.map(style => style.toString(parentSelector)).join('')
		}}`;
	}
}
