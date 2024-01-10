import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { number } from "./primitives";

export const deg = MethodDeclaration.fromUnit('deg', number);
export const rad = MethodDeclaration.fromUnit('rad', number);
export const turn = MethodDeclaration.fromUnit('turn', number);

export const angle = new TypeDeclaration(deg, rad, turn)
	.defaultNumberConverter(turn);