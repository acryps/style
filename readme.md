# @acryps/style Style Framework
Define your styles in TypeScript!

This might seem odd - why would you define styles in TypeScript and not in a specialized language like CSS or SCSS?
Because this allows us to leverage the full power of TypeScript.
Have you ever tried making and managing one of those janky SCSS arrays / did you ever use arrays in TypeScript?
You can assemble, combine, generate, theme, inherit, extend, ... your styles on both the server or client with the power of TypeScript.

This framework aims to translate all the CSS features into typescript, while adding type safety.
You may combine this with other libraries which add preassembled mixins, err i meant functions, and classes to help with flex, ...

> We do not have the resources to add every single CSS property into @acryps/styles, so we only added the properties we use for our applications. 
> If something is missing, please open an issue or create a pull request and we'll try to add it asap.

This does not define any styles or mixins on its own.

## Examples
Basic styles with fixed variables.
`style` returns a `StyleDeclaration`, which can be applied in DOM contexts by calling `.apply()` or converted to a CSS source string using `.toString()`

```ts
const primaryColor = rgb(132, 33, 187);
const spacing = rem(3);

style('ui-book',
	display('block'),

	child('ui-title',
		display('block'),
		marginBottom(spacing)
	)

	child('a')
		.after('→',
			color(primaryColor)
		)
).apply();
```

[NOT IMPLEMENTED]
Adding a dynamic CSS variable.
Note that `.update` will apply a new value to the DOM only on DOM contexts, while on contexts without a DOM, like node, this will just update the value definition, thus the `console.debug` will output the new color at the variable definition.

```ts
let primaryColor;
const spacing = rem(3);

const layout = style('ui-book',
	primaryColor = new Variable('primary-color', rgb(132, 33, 187)),

	display('block'),

	child('ui-title',
		display('block'),
		marginBottom(spacing)
	)

	child('a')
		.after('→',
			color(primaryColor)
		)
).apply();

button.onclick = () => {
	primaryColor.update(hsl(deg(51), 100, 40));

	console.debug(layout.toString());
}
```

Making a helper, or *mixin*
```ts
const primaryColor = rgb(132, 33, 187);
const spacing = rem(3);

const header = () => [
	display('block'),
	marginBottom(spacing)
];

style('ui-page',
	child('ui-book',
		display('block'),

		child('ui-title', header())
	).apply();

	child('ui-author',
		display('block'),

		child('ui-title', header())
	).apply();
).apply();
```
