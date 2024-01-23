import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { string } from "./primitives";

export const contentAppendable = new TypeDeclaration(string);

export const content = new PropertyTypeDeclaration({
	content: contentAppendable.spread()
}, "${this.content.map(fragment => typeof fragment == 'string' ? JSON.stringify(fragment) : fragment).join(' ')}");