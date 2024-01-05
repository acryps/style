import { Calculate } from "./calculate";
import { LocalFontSize } from "./local-font-size";
import { RootFontSize } from "./root-font-size";

export type AbsoluteGlobalLength = Calculate | RootFontSize;
export type AbsoluteLocalLength = Calculate | LocalFontSize;

export type AbsoluteLength = AbsoluteGlobalLength | AbsoluteLocalLength;
