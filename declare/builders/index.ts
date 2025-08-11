import { TypeDeclaration } from "./type";
import { Ident } from "../ident";

export const globalPropertyValues = ['inherit', 'initial', 'unset', 'revert', 'revert-layer'];
export const globalNonePropertyValues = [...globalPropertyValues, 'none'];

export interface Declaration {
	name: Ident;
	requirements(): Declaration[];
}

export class PropertyInitializer {
	constructor(
		public source: TypeDeclaration,
		public type: string,
		public argument: string,
		public pass: string
	) {}
}

export class SpreadPropertyInitializer extends PropertyInitializer {
	constructor(
		public source: TypeDeclaration,
		public type: string,
		public argument: string,
		public pass: string,

		public flatArgument: string,
		public flatPass: string
	) {
		super(
			source,
			type,
			argument,
			pass
		);
	}
}