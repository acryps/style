export enum BlendModeUnit {
	/**
	 * The final color is the top color, regardless of what the bottom color is. The effect is like two opaque pieces of paper overlapping.
	 */
	normal = 'normal',

	/**
	 * The final color is the result of multiplying the top and bottom colors. A black layer leads to a black final layer, and a white layer leads to no change. The effect is like two images printed on transparent film overlapping.
	 */
	multiply = 'multiply',

	/**
	 * The final color is the result of inverting the colors, multiplying them, and inverting that value. A black layer leads to no change, and a white layer leads to a white final layer. The effect is like two images shone onto a projection screen.
	 */
	screen = 'screen',

	/**
	 * The final color is the result of multiply if the bottom color is darker, or screen if the bottom color is lighter. This blend mode is equivalent to hard-light but with the layers swapped.
	 */
	overlay = 'overlay',

	/**
	 * The final color is composed of the darkest values of each color channel.
	 */
	darken = 'darken',

	/**
	 * The final color is composed of the lightest values of each color channel.
	 */
	lighten = 'lighten',

	/**
	 * The final color is the result of dividing the bottom color by the inverse of the top color. A black foreground leads to no change. A foreground with the inverse color of the backdrop leads to a fully lit color. This blend mode is similar to screen, but the foreground need only be as light as the inverse of the backdrop to create a fully lit color.
	 */
	colorDodge = 'color-dodge',

	/**
	 * The final color is the result of inverting the bottom color, dividing the value by the top color, and inverting that value. A white foreground leads to no change. A foreground with the inverse color of the backdrop leads to a black final image. This blend mode is similar to multiply, but the foreground need only be as dark as the inverse of the backdrop to make the final image black.
	 */
	colorBurn = 'color-burn',

	/**
	 * The final color is the result of multiply if the top color is darker, or screen if the top color is lighter. This blend mode is equivalent to overlay but with the layers swapped. The effect is similar to shining a harsh spotlight on the backdrop.
	 */
	hardLight = 'hard-light',

	/**
	 * The final color is similar to hard-light, but softer. This blend mode behaves similar to hard-light. The effect is similar to shining a diffused spotlight on the backdrop.
	 */
	softLight = 'softLight',

	/**
	 * The final color is the result of subtracting the darker of the two colors from the lighter one. A black layer has no effect, while a white layer inverts the other layer's color.
	 */
	difference = 'difference',

	/**
	 * The final color is similar to difference, but with less contrast. As with difference, a black layer has no effect, while a white layer inverts the other layer's color.
	 */
	exclusion = 'exclusion',

	/**
	 * The final color has the hue of the top color, while using the saturation and luminosity of the bottom color.
	 */
	hue = 'hue',

	/**
	 * The final color has the saturation of the top color, while using the hue and luminosity of the bottom color. A pure gray backdrop, having no saturation, will have no effect.
	 */
	saturation = 'saturation',

	/**
	 * The final color has the hue and saturation of the top color, while using the luminosity of the bottom color. The effect preserves gray levels and can be used to colorize the foreground.
	 */
	color = 'color',

	/**
	 * The final color has the luminosity of the top color, while using the hue and saturation of the bottom color. This blend mode is equivalent to color, but with the layers swapped.
	 */
	luminosity = 'luminosity'
}