import { RootFontSize } from "./units/root-font-size";

export class Style {
	static defaultNumericUnit = RootFontSize;

	static resolveUnit(value: any) {
		if (typeof value == 'number') {
			return new this.defaultNumericUnit(value);
		}

		return value;
	}
}

