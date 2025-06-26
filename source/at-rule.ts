export abstract class AtRule {
	sortingOrder = Infinity;
	afterRules = false;

	abstract toRuleString(parentSelector: string): string;
}
