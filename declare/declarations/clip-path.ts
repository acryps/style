import { angle } from "./angle";
import { MethodDeclaration } from "../builders/method";
import { TypeDeclaration } from "../builders/type";
import { PropertyTypeDeclaration } from "../builders/property";
import { length, percentage, string, url } from "./primitives";

export const clipPathLengthPercentage = new TypeDeclaration(length, percentage);
export const clipPathPositiveLength = new TypeDeclaration(length);
export const clipPathPositiveLengthPercentage = new TypeDeclaration(length, percentage);

export const fillRule = new TypeDeclaration('nonzero', 'evenodd');

export const visualBox = new TypeDeclaration('content-box', 'padding-box', 'border-box');
export const shapeBox = new TypeDeclaration(visualBox, 'margin-box', 'half-border-box');
export const geometryBox = new TypeDeclaration(shapeBox, 'fill-box', 'stroke-box', 'view-box');

export const radialExtent = new TypeDeclaration('closest-corner', 'closest-side', 'farthest-corner', 'farthest-side');
export const radialSize = new TypeDeclaration(radialExtent, clipPathPositiveLength, clipPathPositiveLengthPercentage);
export const relativeControlPointOrigin = new TypeDeclaration('start', 'end', 'origin');
export const hlinePosition = new TypeDeclaration(clipPathLengthPercentage, 'left', 'center', 'right', 'x-start', 'x-end');
export const vlinePosition = new TypeDeclaration(clipPathLengthPercentage, 'top', 'center', 'bottom', 'y-start', 'y-end');

export const positionComponent = new TypeDeclaration(
	'left',
	'center',
	'right',
	'top',
	'bottom',
	'x-start',
	'x-end',
	'y-start',
	'y-end',
	'block-start',
	'block-end',
	'inline-start',
	'inline-end',
	'start',
	'end',
	clipPathLengthPercentage
);

export const shapePosition = new MethodDeclaration({
	components: positionComponent.spread()
}, `
	this.components = components;
`, '${this.components.join(\' \')}');

export const insetShape = new MethodDeclaration({
	top: clipPathLengthPercentage.single(),
	right: clipPathLengthPercentage.optional(),
	bottom: clipPathLengthPercentage.optional(),
	left: clipPathLengthPercentage.optional(),
	radius: string.optional()
}, `
	this.top = top;
	this.right = right;
	this.bottom = bottom;
	this.left = left;
	this.radius = radius;
`, "inset(${[this.top, this.right, this.bottom, this.left].filter(value => value != null).join(' ')}${this.radius == null ? '' : ` round ${this.radius}`})");

export const rect = new MethodDeclaration({
	top: clipPathLengthPercentage.single(),
	right: clipPathLengthPercentage.single(),
	bottom: clipPathLengthPercentage.single(),
	left: clipPathLengthPercentage.single()
}, `
	this.top = top;
	this.right = right;
	this.bottom = bottom;
	this.left = left;
`, 'rect(${this.top}, ${this.right}, ${this.bottom}, ${this.left})');

export const xywh = new MethodDeclaration({
	x: clipPathLengthPercentage.single(),
	y: clipPathLengthPercentage.single(),
	width: clipPathPositiveLengthPercentage.single(),
	height: clipPathPositiveLengthPercentage.single(),
	radius: string.optional()
}, `
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.radius = radius;
`, "xywh(${this.x} ${this.y} ${this.width} ${this.height}${this.radius == null ? '' : ` round ${this.radius}`})");

export const circle = new MethodDeclaration({
	radius: radialSize.optional(),
	position: shapePosition.optional()
}, `
	this.radius = radius;
	this.position = position;
`, "circle(${this.radius == null ? '' : this.radius}${this.position == null ? '' : `${this.radius == null ? '' : ' '}at ${this.position}`})");

export const ellipse = new MethodDeclaration({
	radius: radialSize.optional(),
	position: shapePosition.optional()
}, `
	this.radius = radius;
	this.position = position;
`, "ellipse(${this.radius == null ? '' : this.radius}${this.position == null ? '' : `${this.radius == null ? '' : ' '}at ${this.position}`})");

export const polygonPoint = new MethodDeclaration({
	x: clipPathLengthPercentage.single(),
	y: clipPathLengthPercentage.single()
}, `
	this.x = x;
	this.y = y;
`, '${this.x} ${this.y}');

export const polygon = new MethodDeclaration({
	points: polygonPoint.spread()
}, `
	this.points = points;
`, 'polygon(${this.points.join(\', \')})');

export const roundedPolygon = new MethodDeclaration({
	radius: length.single(),
	points: polygonPoint.spread()
}, `
	this.radius = radius;
	this.points = points;
`, 'polygon(round ${this.radius}, ${this.points.join(\', \')})');

export const filledPolygon = new MethodDeclaration({
	fill: fillRule.single(),
	points: polygonPoint.spread()
}, `
	this.fill = fill;
	this.points = points;
`, 'polygon(${this.fill}, ${this.points.join(\', \')})');

export const filledRoundedPolygon = new MethodDeclaration({
	fill: fillRule.single(),
	radius: length.single(),
	points: polygonPoint.spread()
}, `
	this.fill = fill;
	this.radius = radius;
	this.points = points;
`, 'polygon(${this.fill} round ${this.radius}, ${this.points.join(\', \')})');

export const path = new MethodDeclaration({
	commands: string.single()
}, `
	this.commands = commands;
`, "path('${this.commands}')");

export const filledPath = new MethodDeclaration({
	fill: fillRule.single(),
	commands: string.single()
}, `
	this.fill = fill;
	this.commands = commands;
`, "path(${this.fill}, '${this.commands}')");

export const coordinatePair = new MethodDeclaration({
	x: clipPathLengthPercentage.single(),
	y: clipPathLengthPercentage.single()
}, `
	this.x = x;
	this.y = y;
`, '${this.x} ${this.y}');

export const commandEndPoint = new TypeDeclaration(shapePosition, coordinatePair);

export const relativeControlPoint = new MethodDeclaration({
	point: coordinatePair.single(),
	from: relativeControlPointOrigin.optional()
}, `
	this.point = point;
	this.from = from;
`, "${this.point}${this.from == null ? '' : ` from ${this.from}`}");

export const controlPoint = new TypeDeclaration(shapePosition, relativeControlPoint);

export const move = new MethodDeclaration({
	end: commandEndPoint.single()
}, `
	this.end = end;
`, 'move to ${this.end}');

export const moveBy = new MethodDeclaration({
	offset: coordinatePair.single()
}, `
	this.offset = offset;
`, 'move by ${this.offset}');

export const line = new MethodDeclaration({
	end: commandEndPoint.single()
}, `
	this.end = end;
`, 'line to ${this.end}');

export const lineBy = new MethodDeclaration({
	offset: coordinatePair.single()
}, `
	this.offset = offset;
`, 'line by ${this.offset}');

export const hline = new MethodDeclaration({
	x: hlinePosition.single()
}, `
	this.x = x;
`, 'hline to ${this.x}');

export const hlineBy = new MethodDeclaration({
	offset: clipPathLengthPercentage.single()
}, `
	this.offset = offset;
`, 'hline by ${this.offset}');

export const vline = new MethodDeclaration({
	y: vlinePosition.single()
}, `
	this.y = y;
`, 'vline to ${this.y}');

export const vlineBy = new MethodDeclaration({
	offset: clipPathLengthPercentage.single()
}, `
	this.offset = offset;
`, 'vline by ${this.offset}');

export const curve = new MethodDeclaration({
	end: shapePosition.single(),
	controlA: controlPoint.single(),
	controlB: controlPoint.optional()
}, `
	this.end = end;
	this.controlA = controlA;
	this.controlB = controlB;
`, "curve to ${this.end} with ${this.controlA}${this.controlB == null ? '' : ` / ${this.controlB}`}");

export const curveBy = new MethodDeclaration({
	offset: coordinatePair.single(),
	controlA: relativeControlPoint.single(),
	controlB: relativeControlPoint.optional()
}, `
	this.offset = offset;
	this.controlA = controlA;
	this.controlB = controlB;
`, "curve by ${this.offset} with ${this.controlA}${this.controlB == null ? '' : ` / ${this.controlB}`}");

export const smooth = new MethodDeclaration({
	end: shapePosition.single(),
	control: controlPoint.optional()
}, `
	this.end = end;
	this.control = control;
`, "smooth to ${this.end}${this.control == null ? '' : ` with ${this.control}`}");

export const smoothBy = new MethodDeclaration({
	offset: coordinatePair.single(),
	control: relativeControlPoint.optional()
}, `
	this.offset = offset;
	this.control = control;
`, "smooth by ${this.offset}${this.control == null ? '' : ` with ${this.control}`}");

export const arcSweep = new TypeDeclaration('cw', 'ccw');
export const arcSize = new TypeDeclaration('large', 'small');

export const arc = new MethodDeclaration({
	end: commandEndPoint.single(),
	radiusX: clipPathLengthPercentage.optional(),
	radiusY: clipPathLengthPercentage.optional(),
	sweep: arcSweep.optional(),
	size: arcSize.optional(),
	rotation: angle.optional()
}, `
	this.end = end;
	this.radiusX = radiusX;
	this.radiusY = radiusY;
	this.sweep = sweep;
	this.size = size;
	this.rotation = rotation;
`, "arc to ${this.end}${this.radiusX == null ? '' : ` of ${this.radiusX}${this.radiusY == null ? '' : ` ${this.radiusY}`}`}${this.sweep == null ? '' : ` ${this.sweep}`}${this.size == null ? '' : ` ${this.size}`}${this.rotation == null ? '' : ` rotate ${this.rotation}`}");

export const close = new MethodDeclaration({}, '', 'close');

export const shapeCommand = new TypeDeclaration(move, moveBy, line, lineBy, close, 'close', hline, hlineBy, vline, vlineBy, curve, curveBy, smooth, smoothBy, arc);

export const shapePath = new MethodDeclaration({
	start: shapePosition.single(),
	commands: shapeCommand.spread()
}, `
	this.start = start;
	this.commands = commands;
`, "shape(from ${this.start}, ${this.commands.join(', ')})");

export const filledShape = new MethodDeclaration({
	fill: fillRule.single(),
	start: shapePosition.single(),
	commands: shapeCommand.spread()
}, `
	this.fill = fill;
	this.start = start;
	this.commands = commands;
`, "shape(${this.fill} from ${this.start}, ${this.commands.join(', ')})");

export const basicShape = new TypeDeclaration(insetShape, rect, xywh, circle, ellipse, polygon, roundedPolygon, filledPolygon, filledRoundedPolygon, path, filledPath, shapePath, filledShape);
export const clipSource = new TypeDeclaration(url);
export const clipPathValue = new TypeDeclaration(clipSource, basicShape, geometryBox);

export const clipPath = new PropertyTypeDeclaration({
	value: clipPathValue.single(),
	box: geometryBox.optional()
}, "${this.value}${this.box == null ? '' : ` ${this.box}`}")
	.allowNone();
