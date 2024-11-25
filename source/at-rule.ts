export class AtRule {
	sortingOrder = Infinity;
	afterRules = false;

	toRuleString(parentSelector: string) {
		throw new Error('No rule converter implemented');
	};
}
