import { globalNonePropertyValues, globalPropertyValues } from "../builders";
import { MethodDeclaration } from "../builders/method";
import { PrimitiveType } from "../builders/type";
import { TypeDeclaration } from "../builders/type";
import { env } from "./environment";

export const globalPropertyValue = new TypeDeclaration(...globalPropertyValues);
export const globalNonePropertyValue = new TypeDeclaration(...globalNonePropertyValues);

export const string = new PrimitiveType('string');

export const url = new MethodDeclaration({
	source: string.single()
}, `
	this.source = source;
`, "url('${this.source}')");

export const imageSource = new TypeDeclaration(url);

export const number = new PrimitiveType('number');
export const percentage = MethodDeclaration.fromUnit('%', number).calculable();

export const integer = new TypeDeclaration(number);

const exportDimension = (name: string) => module.exports[name] = MethodDeclaration.fromUnit(name, number).calculable();

// font dimensions
const rem = exportDimension('rem');

export const fontDimension = new TypeDeclaration(
	rem,
	exportDimension('em'),
	exportDimension('ex'),
	exportDimension('ch'),
	exportDimension('cap'),
	exportDimension('ic'),
	exportDimension('lh'),
	exportDimension('rlh')
);

// viewport dimensions
const exportViewportDimension = (name: string) => [
	exportDimension(name),

	exportDimension(`s${name}`),
	exportDimension(`l${name}`),
	exportDimension(`d${name}`)
];

export const viewportDimension = new TypeDeclaration(
	...exportViewportDimension('vh'),
	...exportViewportDimension('vw'),
	...exportViewportDimension('vmax'),
	...exportViewportDimension('vmin'),
	...exportViewportDimension('vb'),
	...exportViewportDimension('vi')
);

// container query dimensions
export const containerDimension = new TypeDeclaration(
	exportDimension('cqw'),
	exportDimension('cqh'),
	exportDimension('cqb'),
	exportDimension('cqi'),
	exportDimension('cqmin'),
	exportDimension('cqmax')
);

// resolution dimensions
export const resolutionDimension = new TypeDeclaration(
	exportDimension('dpi'),
	exportDimension('dpcm'),
	exportDimension('dppx')
);

export const resolution = new TypeDeclaration(resolutionDimension);

// absolute lengths
// we have omitted Q (who even ever heard about let alone used this?)
export const inch = MethodDeclaration.fromUnit('in', number).calculable();

export const absoluteLengthDimension = new TypeDeclaration(
	exportDimension('px'),
	exportDimension('cm'),
	exportDimension('mm'),
	inch,
	exportDimension('pc'),
	exportDimension('pt')
);

export const staticLength = new TypeDeclaration(0, fontDimension, viewportDimension, containerDimension, absoluteLengthDimension, percentage, env).defaultNumberConverter(rem);

export const min = new MethodDeclaration({
	values: staticLength.spread()
}, `
	this.values = values;
`, 'min(${this.values.join(\',\')})');

export const max = new MethodDeclaration({
	values: staticLength.spread()
}, `
	this.values = values;
`, 'max(${this.values.join(\',\')})');

export const length = new TypeDeclaration(staticLength, min, max);
export const lineWidth = new TypeDeclaration(number, length);
export const intensity = new TypeDeclaration(number, percentage);
