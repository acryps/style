import { NameConverter } from "./name-converter";

export class FormatParser {
	static helpers = [
		'type Recurse<T> = T | Recurse<T>[]',
		'type RecurseAny<T> = Recurse<T> | null',
		'type RecurseTuple<T> = T | T[]'
	];

	static inlineFunctionDeclarations = [];

	static toFunctionDeclarationList(source: string) {
		const functionName = source.split('(')[0];
		const declarations = [];

		for (let option of FormatParser.splitOptions(source)) {
			const body = option.slice(functionName.length + 1, -1).trim();

			const parameterDeclarations = this.scopedSplit(body, ', ');
			
			for (let parameters of this.toTypeDeclarationCombinations(parameterDeclarations)) {
				declarations.push(`${NameConverter.toFunctionName(functionName)}(${parameters.map((parameter, index) => `${String.fromCharCode('a'.charCodeAt(0) + index)}: ${parameter}`).join(', ')}): ${NameConverter.toFunctionReturnType(functionName)}`);
			}
		}

		return declarations;
	}

	static toTypeDeclarations(source: string): string[] {
		console.log(`>${source}<`);

		if (!source) {
			return ['void'];
		}

		// list append
		if (source.startsWith(',')) {
			return this.toTypeDeclarations(source.slice(1).trim());
		}

		// alternatives
		const options = this.splitOptions(source);

		if (options.length > 1) {
			return [options.flatMap(option => this.toTypeDeclarations(option)).join(' | ')];
		}

		// shuffles
		// https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#double_ampersand
		const shuffles = this.splitShuffles(source);

		if (shuffles.length > 1) {
			const left = this.toTypeDeclarations(shuffles.shift());
			const right = this.toTypeDeclarations(shuffles.join(' && '));

			const combinations = [];

			for (let leftDeclaration of left) {
				for (let rightDeclaration of right) {
					combinations.push(`(${leftDeclaration} & ${rightDeclaration})`);
				}
			}

			return combinations;
		}

		// alternatives
		// https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#double_bar
		const alternatives = this.splitAlternatives(source);

		if (alternatives.length > 1) {
			const left = this.toTypeDeclarations(alternatives.shift());
			const right = this.toTypeDeclarations(alternatives.join(' || '));

			const combinations = [];

			for (let leftDeclaration of left) {
				for (let rightDeclaration of right) {
					combinations.push(`(${leftDeclaration} | ${rightDeclaration})`);
				}
			}

			return combinations;
		}

		// space separated arguments / tuples
		const spacedArguments = this.splitSpacedArguments(source);

		if (spacedArguments.length > 1) {
			return this.toTypeDeclarationCombinations(spacedArguments).map(parameters => `[${parameters.join(', ')}]`);
		}

		// primitives
		if (/^<(number|integer|length)(\s\[[0-9]+\,[0-9∞]+\])?>$/.test(source)) {
			return ['number'];
		}

		if (source == '<string>') {
			return ['string'];
		}

		// type references
		if (/^<[A-Za-z\-0-9]+>$/.test(source)) {
			return [NameConverter.toClassName(source.slice(1, -1))];
		}

		if (/^<'[A-Za-z\-0-9]+'>$/.test(source)) {
			return [NameConverter.toClassName(source.slice(2, -2))];
		}

		// function return references
		if (/^<[A-Za-z\-0-9]+\(\)>$/.test(source)) {
			return [NameConverter.toFunctionReturnType(source.slice(1, -3))];
		}

		// direct string values
		if (/^[A-Za-z\-0-9]+$/.test(source)) {
			return [`'${source}'`];
		}

		// groups
		if (source.startsWith('[') && source.endsWith(']')) {
			return this.toTypeDeclarations(source.slice(1, -1).trim()).map(source => `(${source})`);
		}

		// optionals
		if (source.endsWith('?')) {
			return [
				...this.toTypeDeclarations(source.substring(0, source.length - 1)),
				'void'
			];
		}

		// blocks
		if (source.startsWith('{') && source.endsWith('}')) {
			return this.toTypeDeclarations(source.substring(1, source.length - 1)).map(source => `[ ${source} ]`);
		}

		// n times
		if (source.endsWith('*')) {
			return this.toTypeDeclarations(source.substring(0, source.length - 1)).map(source => `RecurseAny<${source}>`);
		}

		// n times, min one
		if (source.endsWith('+')) {
			return this.toTypeDeclarations(source.substring(0, source.length - 1)).map(source => `Recurse<${source}>`);
		}

		// n times, min one as tuple
		if (source.endsWith('#')) {
			return this.toTypeDeclarations(source.substring(0, source.length - 1)).map(source => `RecurseTuple<${source}>`);
		}

		// require one
		if (source.endsWith('!')) {
			return this.toTypeDeclarations(source.substring(0, source.length - 1)).map(source => `(${source})`);
		}

		// multiple
		if (source.endsWith('}')) {
			const range = source.split('{').pop().replace('}', '');

			let helperName;
			let helperBody;

			console.log('>>>>>', range);

			if (range.includes(',')) {
				const min = +range.split(',')[0];
				const max = +range.split(',')[1];

				const variants = [];

				for (let index = min; index < max + 1; index++) {
					variants.push(`[${Array(index).fill('T').join(', ')}]`);
				}
				
				helperName = `Repeat${min}to${max}`;
				helperBody = `${variants.join(' | ')}`;
			} else {
				const count = +range;

				helperName = `Repeat${count}`;
				helperBody = `[${Array(count).fill('T').join(', ')}]`;
			}

			const helper = `${helperName}<T> = ${helperBody}`;

			if (!this.helpers.includes(helper)) {
				this.helpers.push(helper);
			}

			return this.toTypeDeclarations(source.substring(0, source.length - 2 - range.length)).map(source => `${helperName}<${source}>`);
		}

		// at values
		if (/^@[a-z\-]+$/.test(source)) {
			return [`'${source}'`];
		}

		// trailing item separator
		if (source.endsWith(',')) {
			return this.toTypeDeclarations(source.slice(0, -1));
		}

		// pure strings
		if (source.startsWith("'") && source.endsWith("'")) {
			return [source];
		}

		// groups
		if (source.startsWith('(') && source.endsWith(')')) {
			return this.toTypeDeclarations(source.slice(1, -1).trim()).map(value => `(${value})`);
		}

		// allowed special characters
		if (['/', '(', ')', ':', ';'].includes(source)) {
			return [`'${source}'`];
		}

		// literal name
		if (/^[a-z\-0-9]+\(/.test(source) && source.endsWith(')')) {
			const name = source.split('(')[0];

			return this.toTypeDeclarationCombinations(this.scopedSplit(source.slice(name.length + 1, -1).trim(), ', ')).map(combination => `{ ${name}: [${combination.join(', ')}] }`);
		}

		console.log(`<<${source}>>`)
		throw new Error('source');
	}

	private static toTypeDeclarationCombinations(sources: string[]) {
		let combinations: string[][] = [];

		for (let declaration of this.toTypeDeclarations(sources.shift())) {
			combinations.push([declaration]);
		}

		for (let source of sources) {
			const existing = [...combinations];
			combinations = [];

			for (let peer of existing) {
				for (let declaration of this.toTypeDeclarations(source)) {
					combinations.push([...peer, declaration]);
				}
			}
		}

		return combinations;
	}

	private static splitOptions(source: string) {
		return this.scopedSplit(source, ' | ');
	}

	private static splitSpacedArguments(source: string) {
		return this.scopedSplit(source, ' ');
	}

	private static splitShuffles(source: string) {
		return this.scopedSplit(source, ' && ');
	}

	private static splitAlternatives(source: string) {
		return this.scopedSplit(source, ' || ');
	}

	private static scopedSplit(source: string, splitter: string) {
		const pairs = [
			{ start: '[', stop: ']' },
			{ start: '(', stop: ')' },
			{ start: '<', stop: '>' },
			{ start: '{', stop: '}' }
		];

		const indents = [];
		let inner = '';
		const parts = [];

		for (let characterIndex = 0; characterIndex < source.length; characterIndex++) {
			const character = source[characterIndex];
			inner += character;

			const startingPair = pairs.find(pair => pair.start == character);

			if (startingPair) {
				indents.unshift(startingPair);
			}

			const currentIndent = indents[0];

			if (currentIndent) {
				if (character == currentIndent.stop) {
					indents.shift();
				}
			} else {
				if (inner.endsWith(splitter)) {
					parts.push(inner.substring(0, inner.length - splitter.length));

					inner = '';
				}
			}
		}

		parts.push(inner);

		return parts;
	}
}