import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { number } from "./primitives";

export const deg = MethodDeclaration.fromUnit('deg', number).calculable();
export const rad = MethodDeclaration.fromUnit('rad', number).calculable();
export const turn = MethodDeclaration.fromUnit('turn', number).calculable();

export const angle = new TypeDeclaration(0, deg, rad, turn)
