export type ColorName = 'transparent' | 'aliceBlue' | 'antiqueWhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedAlmond' | 'blue' | 'blueViolet' | 'brown' | 'burlyWood' | 'cadetBlue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerBlue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkBlue' | 'darkCyan' | 'darkGoldenRod' | 'darkGray' | 'darkGrey' | 'darkGreen' | 'darkKhaki' | 'darkMagenta' | 'darkOliveGreen' | 'darkOrange' | 'darkOrchid' | 'darkRed' | 'darkSalmon' | 'darkSeaGreen' | 'darkSlateBlue' | 'darkSlateGray' | 'darkSlateGrey' | 'darkTurquoise' | 'darkViolet' | 'deepPink' | 'deepSkyBlue' | 'dimGray' | 'dimGrey' | 'dodgerBlue' | 'fireBrick' | 'floralWhite' | 'forestGreen' | 'fuchsia' | 'gainsboro' | 'ghostWhite' | 'gold' | 'goldenRod' | 'gray' | 'grey' | 'green' | 'greenYellow' | 'honeyDew' | 'hotPink' | 'indianRed ' | 'indigo  ' | 'ivory' | 'khaki' | 'lavender' | 'lavenderBlush' | 'lawnGreen' | 'lemonChiffon' | 'lightBlue' | 'lightCoral' | 'lightCyan' | 'lightGoldenRodYellow' | 'lightGray' | 'lightGrey' | 'lightGreen' | 'lightPink' | 'lightSalmon' | 'lightSeaGreen' | 'lightSkyBlue' | 'lightSlateGray' | 'lightSlateGrey' | 'lightSteelBlue' | 'lightYellow' | 'lime' | 'limeGreen' | 'linen' | 'magenta' | 'maroon' | 'mediumAquaMarine' | 'mediumBlue' | 'mediumOrchid' | 'mediumPurple' | 'mediumSeaGreen' | 'mediumSlateBlue' | 'mediumSpringGreen' | 'mediumTurquoise' | 'mediumVioletRed' | 'midnightBlue' | 'mintCream' | 'mistyRose' | 'moccasin' | 'navajoWhite' | 'navy' | 'oldLace' | 'olive' | 'oliveDrab' | 'orange' | 'orangeRed' | 'orchid' | 'paleGoldenRod' | 'paleGreen' | 'paleTurquoise' | 'paleVioletRed' | 'papayaWhip' | 'peachPuff' | 'peru' | 'pink' | 'plum' | 'powderBlue' | 'purple' | 'rebeccaPurple' | 'red' | 'rosyBrown' | 'royalBlue' | 'saddleBrown' | 'salmon' | 'sandyBrown' | 'seaGreen' | 'seaShell' | 'sienna' | 'silver' | 'skyBlue' | 'slateBlue' | 'slateGray' | 'slateGrey' | 'snow' | 'springGreen' | 'steelBlue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whiteSmoke' | 'yellow' | 'yellowGreen';

export class NamedColor {
	constructor(
		public name: ColorName
	) {}

	toString() {
		return this.name.toLowerCase();
	}
}

export const transparent = new NamedColor('transparent');

export function namedColor(name: ColorName) {
	return new NamedColor(name);
}