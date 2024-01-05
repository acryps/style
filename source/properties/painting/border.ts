import { StyleProperty } from "..";

class SideBorderProperty extends StyleProperty {
	
}

export class TopBorderProperty extends SideBorderProperty {
	constructor() {
		super('top');
	}
}