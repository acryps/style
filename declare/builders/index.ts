import { TypeDeclaration } from "./type";
import { Ident } from "../ident";
import { MethodDeclaration } from "./method";

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
