export class NameConverter {
	static reservedFunctionNames = {
		'in': 'inch',
		'continue': 'continueOverflow'
	};

	private static splitName(...parts: string[]) {
		return parts
			.flatMap(part => part.replace(/[A-Z]/g, match => `-${match}`))
			.flatMap(part => part.split(' '))
			.flatMap(part => part.split('-'))
			.filter(part => part);
	}

	static toClassName(...parts: string[]) {
		parts = this.splitName(...parts);

		return parts.map(part => part[0].toUpperCase() + part.substring(1).toLowerCase()).join('');
	}

	static toFunctionName(...parts: string[]) {
		parts = this.splitName(...parts);

		const name = `${parts.map((part, index) => index ? part[0].toUpperCase() + part.substring(1).toLowerCase() : part.toLowerCase()).join('')}`;

		if (name in this.reservedFunctionNames) {
			return this.reservedFunctionNames[name];
		}

		return name;
	}

	static toPropertyType(...parts: string[]) {
		return this.toClassName(...parts, 'property');
	}
}