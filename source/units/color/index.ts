import { Angle } from "../angle";
import { Percentage } from "../percentage";
import { HueSaturationLightnessColor } from "./hue-saturation-lightness";
import { NamedColor } from "./named";
import { RedGreenBlueColor } from "./red-green-blue";

export type Color = HueSaturationLightnessColor | RedGreenBlueColor | NamedColor;

export type Hue = number | Angle;
export type AlphaValue = number | Percentage;