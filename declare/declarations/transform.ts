import { MethodDeclaration } from "../builders/method";
import { PropertyTypeDeclaration } from "../builders/property";
import { TypeDeclaration } from "../builders/type";
import { angle } from "./angle";
import { length, number, percentage } from "./primitives";

// Matrix transformation
export const matrix = new MethodDeclaration({
	a: number.single(),
	b: number.single(),
	c: number.single(),
	d: number.single(),
	tx: number.single(),
	ty: number.single()
}, `
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
`, 'matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.tx}, ${this.ty})');

export const matrix3d = new MethodDeclaration({
	a1: number.single(),
	b1: number.single(),
	c1: number.single(),
	d1: number.single(),

	a2: number.single(),
	b2: number.single(),
	c2: number.single(),
	d2: number.single(),

	a3: number.single(),
	b3: number.single(),
	c3: number.single(),
	d3: number.single(),

	a4: number.single(),
	b4: number.single(),
	c4: number.single(),
	d4: number.single()
}, `
	this.a1 = a1;
	this.b1 = b1;
	this.c1 = c1;
	this.d1 = d1;

	this.a2 = a2;
	this.b2 = b2;
	this.c2 = c2;
	this.d2 = d2;

	this.a3 = a3;
	this.b3 = b3;
	this.c3 = c3;
	this.d3 = d3;

	this.a4 = a4;
	this.b4 = b4;
	this.c4 = c4;
	this.d4 = d4;
`, 'matrix3d(${this.a1}, ${this.b1}, ${this.c1}, ${this.d1}, ${this.a2}, ${this.b2}, ${this.c2}, ${this.d2}, ${this.a3}, ${this.b3}, ${this.c3}, ${this.d3}, ${this.a4}, ${this.b4}, ${this.c4}, ${this.d4})');


export const perspectiveDimensionLength = new TypeDeclaration(length, 'none');

export const perspective = new MethodDeclaration({
	length: perspectiveDimensionLength.single()
}, `
	this.length = length;
`, 'perspective(${this.length})');

// Rotation
export const rotate = new MethodDeclaration({
	angle: angle.single()
},`
	this.angle = angle;
`, 'rotate(${this.angle})');

export const rotate3d = new MethodDeclaration({
	x: number.single(),
	y: number.single(),
	z: number.single(),
	angle: angle.single()
}, `
	this.x = x;
	this.y = y;
	this.z = z;
	this.angle = angle;
`, 'rotate3d(${this.x}, ${this.y}, ${this.z}, ${this.angle})');

export const rotateX = new MethodDeclaration({
	angle: angle.single()
},`
	this.angle = angle;
`, 'rotateX(${this.angle})');

export const rotateY = new MethodDeclaration({
	angle: angle.single()
},`
	this.angle = angle;
`, 'rotateY(${this.angle})');

export const rotateZ = new MethodDeclaration({
	angle: angle.single()
},`
	this.angle = angle;
`, 'rotateZ(${this.angle})');

// Scaling (resizing)
export const scalingType = new TypeDeclaration(number, percentage);

export const scale = new MethodDeclaration({
	scaleX: scalingType.single(),
	scaleY: scalingType.optional()
}, `
	this.scaleX = scaleX;
	this.scaleY = scaleY;
`, "scale(${this.scaleX}${this.scaleY == null ? '' : `, ${this.scaleY}`})");

export const scale3d = new MethodDeclaration({
	scaleX: scalingType.single(),
	scaleY: scalingType.single(),
	scaleZ: scalingType.single()
}, `
	this.scaleX = scaleX;
	this.scaleY = scaleY;
	this.scaleZ = scaleZ;
`, 'scale3d(${this.scaleX}, ${this.scaleY}, ${this.scaleZ})');

export const scaleX = new MethodDeclaration({
	scale: scalingType.single()
}, `
	this.scale = scale;
`, 'scaleX(${this.scale})');

export const scaleY = new MethodDeclaration({
	scale: scalingType.single()
}, `
	this.scale = scale;
`, 'scaleY(${this.scale})');

export const scaleZ = new MethodDeclaration({
	scale: scalingType.single()
}, `
	this.scale = scale;
`, 'scaleZ(${this.scale})');

// Skewing (distortion)
export const skew = new MethodDeclaration({
	angleX: angle.single(),
	angleY: angle.optional()
}, `
	this.angleX = angleX;
	this.angleY = angleY;
`, "skew(${this.angleX}${this.angleY == null ? '' : `, ${this.angleY}`})");

export const skewX = new MethodDeclaration({
	angle: angle.single()
}, `
	this.angle = angle;
`, 'skewX(${this.angle})');

export const skewY = new MethodDeclaration({
	angle: angle.single()
}, `
	this.angle = angle;
`, 'skewY(${this.angle})');

// Translation (moving)
export const translationType = new TypeDeclaration(length, percentage);

export const translate = new MethodDeclaration({
	translationX: translationType.single(),
	translationY: translationType.optional()
}, `
	this.translationX = translationX;
	this.translationY = translationY;
`, "translate(${this.translationX}${this.translationY == null ? '' : `, ${this.translationY}`})");

export const translate3d = new MethodDeclaration({
	translationX: translationType.single(),
	translationY: translationType.single(),
	translationZ: length.single()
}, `
	this.translationX = translationX;
	this.translationY = translationY;
	this.translationZ = translationZ;
`, 'translate3d(${this.translationX}${this.translationY}${this.translationZ})');

export const translateX = new MethodDeclaration({
	translationX: translationType.single()
}, `
	this.translationX = translationX;
`, 'translateX(${this.translationX})');

export const translateY = new MethodDeclaration({
	translationY: translationType.single()
}, `
	this.translationY = translationY;
`, 'translateY(${this.translationY})');

export const translateZ = new MethodDeclaration({
	translationZ: length.single()
}, `
	this.translationZ = translationZ;
`, 'translateZ(${this.translationZ})');

export const transformType = new TypeDeclaration(matrix, matrix3d, perspective, rotate, rotate3d, rotateX, rotateY, rotateZ, translate, translate3d, translateX, translateY, translateZ, scale, scale3d, scaleX, scaleY, scaleZ, skew, skewX, skewY);

export const transform = new PropertyTypeDeclaration(
	{
		type: transformType.spread()
	},
	"${this.type.join(' ')}"
);