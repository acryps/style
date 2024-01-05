export enum BoxEdgeUnit {
	/**
	 * Refers to the rectangular box generated for an element as seen by a user on a web page. It includes the element's content, padding, and border. Also referred to as <box>, this value excludes the margin area. This value type is used for the background-clip and overflow-clip-margin properties.
	 */
	visualBox = 'visual-box',

	/**
	 * Refers to the space occupied by an element, including its content, padding, border, and margin. This value type is used for layout and positioning purposes. Also referred to as <shape-box>, this value type is used for the shape-outside property.
	 */
	layoutBox = 'layout-box',

	/**
	 * Refers to the area within the layout box that is used to visually render the content. This includes the area where the element's background and borders are painted. As an element's paintable area does not include its margins, this value excludes margin-box.
	 */
	paintBox = 'paint-box',

	/**
	 * Refers to the coordinate box used for positioning and sizing an element within its parent container. It is used to control how content flows around the edges of the box. It excludes the margin area. This value type is used for the offset-path property.
	 */
	coordBox = 'coord-box',

	/**
	 * Defines the reference box for a basic shape, or if specified by itself, causes the edges of the specified box, including any corner shaping (such as a border-radius), to be the clipping path. This value type is used for the clip-path, mask-clip, and mask-origin properties and the SVG clip-path attribute.
	 */
	geometryBox = 'geometry-box'
};