import { PercentageUnit, Unit } from ".";

export class DegUnit extends Unit { constructor(angle: number) { super('deg', angle) } }
export const deg = (angle: number) => new DegUnit(angle);

export class GradUnit extends Unit { constructor(angle: number) { super('deg', angle) } }
export const grad = (angle: number) => new GradUnit(angle);

export class RadUnit extends Unit { constructor(angle: number) { super('deg', angle) } }
export const rad = (angle: number) => new RadUnit(angle);

export class TurnUnit extends Unit { constructor(angle: number) { super('deg', angle) } }
export const turn = (angle: number) => new TurnUnit(angle);

export type AngleUnit = DegUnit | GradUnit | RadUnit | TurnUnit;
export type AnglePercentage = AngleUnit | PercentageUnit;