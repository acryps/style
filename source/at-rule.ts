export class AtRule {
	sortingOrder = Infinity;
	
	toRuleString() {
		throw new Error('No rule converter implemented');
	};
}
