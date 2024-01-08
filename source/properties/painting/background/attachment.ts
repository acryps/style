import { StyleProperty } from "../..";

export type BackgroundAttachment = 'scroll' | 'fixed' | 'local';

export class BackgroundAttachmentProperty extends StyleProperty {
	constructor(
		public type: BackgroundAttachment
	) {
		super('background-attachment');
	}

	toValueString() {
		return `${this.type}`;
	}
}