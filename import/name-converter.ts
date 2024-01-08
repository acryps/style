export class NameConverter {
	static reservedFunctionNames = {
		'in': 'inch'
	};

	static toClassName(...parts: string[]) {
		parts = parts
			.flatMap(part => part.split(' '))
			.flatMap(part => part.split('-'));

		return parts.map(part => part[0].toUpperCase() + part.substring(1).toLowerCase()).join('');
	}

	static toFunctionName(...parts: string[]) {
		parts = parts
			.flatMap(part => part.split(' '))
			.flatMap(part => part.split('-'));

		const name = `${parts.map((part, index) => index ? part[0].toUpperCase() + part.substring(1).toLowerCase() : part.toLowerCase()).join('')}`;

		if (name in this.reservedFunctionNames) {
			return this.reservedFunctionNames[name];
		}

		return name;
	}

	static toFunctionReturnType(...parts: string[]) {
		return this.toClassName(...parts, 'return', 'type');
	}
}