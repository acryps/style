export function select(selector: string, ...children: StyleDefinition[]) {
	return new Style(selector, children);
}

type StyleValue = number | string;
type StyleDefinition = StyleDefinition[] | StyleValue | Style;

export function div(a: StyleValue, b: StyleValue) {
	return `calc(${a} / ${b})`;
}

export function rem(length: number) {
	return `${length}rem`;
}

export function padding(all: StyleValue)
export function padding(block: StyleValue, inline: StyleValue)
export function padding(blockStart: StyleValue, blockEnd: StyleValue, inlineStart: StyleValue, inlineEnd: StyleValue)
export function padding(...sides: StyleValue[]) {
	return `padding:${sides.join(' ')};`;
}

export function color(color: StyleValue) {
	return `color:${color};`;
}

export function backgroundColor(color: StyleValue) {
	return `background-color:${color};`;
}

export class Style {
	rules: StyleValue[] = [];
	children: Style[] = [];

	constructor(
		public selector: string,
		children: StyleDefinition[]
	) {
		this.addChild(children);
	}

	toStylesheet(parents: Style[] = []) {
		return `${
			this.getFullSelector(parents)
		}{${
			this.rules.join('')
		}}${
			this.children.map(child => child.toStylesheet([...parents, this])).join('')
		}`;
	}

	private addChild(style: StyleDefinition) {
		if (Array.isArray(style)) {
			for (let item of style) {
				this.addChild(item);
			}
		} else if (style instanceof Style) {
			this.children.push(style);
		} else {
			this.rules.push(style);
		}
	}

	private getFullSelector(parents: Style[]) {
		return [...parents, this].map(parent => parent.selector).join(' ');
	}
}

export function hex(value: string) {
	return `#${value}`;
}









const card = (spacing: StyleValue) => [
	padding(spacing, div(spacing, 2)),
	backgroundColor(primaryColor)
];

const primaryColor = hex('550131');

select('ui-swag',
	backgroundColor(primaryColor),
	padding(div(rem(2.15), 2)),

	select('ui-inner',
		backgroundColor(hex('42a451'))
	),

	select('ui-outer',
		color(primaryColor)
	),

	select('ui-language', 
		card(rem(4))
	)
)

class Collection {
	constructor(
		private spacing: StyleValue
	) {}

	container = () => [
		padding(this.spacing)
	];

	item = () => [
		padding(div(this.spacing, 2))
	];
}

const collection = new Collection(rem(7));

const primarycolo = new Variable

const styles = select('ui-employee', 
	collection.container(),
	backgroundColor(hex('007afa')),

	select('ui-name[adfadfasdffafasfasdf]', 
		collection.item(),
		color('blue'),

		select('[ui-active]', 
			color('blue')
		)
	)
)

console.log(styles.toStylesheet())