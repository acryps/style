import { MethodDeclaration } from "../builders/method";
import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { number, string } from "./primitives";

export const containerIdent = new TypeDeclaration(string);

export const containerName = new PropertyTypeDeclaration({
	names: containerIdent.spread()
}, "${this.names.join(' ')}");

export const containerMode = new TypeDeclaration('normal', 'size', 'inline-size');

export const containerType = new PropertyTypeDeclaration({
	mode: containerMode.single()
}, "${this.mode}");
