// type <identifier>
// undefined

// type <uri>
// undefined

// type <margin-width>
// undefined

// type <padding-width>
// undefined
export type PaddingWidth = number | Percentage;

// type <border-width>
// undefined
export type BorderWidth = 'thin' | 'medium' | 'thick' | number;

// type <border-style>
// undefined
export type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

// type <shape>
// undefined

// type <top>
// undefined
export type Top = 'auto';

// type <right>
// undefined
export type Right = 'auto';

// type <bottom>
// undefined
export type Bottom = 'auto';

// type <left>
// undefined
export type Left = 'auto';

// type <absolute-size>
// undefined

// type <relative-size>
// undefined

// type <points>
// [ <number>+ ]#
export type Points = (RecurseTuple<(Recurse<number>)>);

// type <dasharray>
// [ [ <length-percentage> | <number> ]+ ]#
export type Dasharray = (RecurseTuple<(Recurse<(LengthPercentage | number)>)>);

// type <marker-ref>
// <url>
export type MarkerRef = (Url);

// type <blend-mode>
// normal | multiply | screen | overlay | darken | lighten | color-dodge |color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
// type <isolation-mode>
// auto | isolate
export type IsolationMode = ('auto' | 'isolate');

// type <composite-mode>
// clear | copy | source-over | destination-over | source-in | destination-in | source-out | destination-out | source-atop | destination-atop | xor | lighter | plus-darker | plus-lighter
export type CompositeMode = ('clear' | 'copy' | 'source-over' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop' | 'xor' | 'lighter' | 'plus-darker' | 'plus-lighter');

// type <self-position>
// center | start | end | self-start | self-end | flex-start | flex-end
export type SelfPosition = ('center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end');

// type <content-position>
// center | start | end | flex-start | flex-end
export type ContentPosition = ('center' | 'start' | 'end' | 'flex-start' | 'flex-end');

// type <baseline-position>
// [ first | last ]? && baseline
export type BaselinePosition = ((('first' | 'last') & 'baseline')) | ((void & 'baseline'));

// type <content-distribution>
// space-between | space-around | space-evenly | stretch
export type ContentDistribution = ('space-between' | 'space-around' | 'space-evenly' | 'stretch');

// type <overflow-position>
// unsafe | safe
export type OverflowPosition = ('unsafe' | 'safe');

// type <inset-area-span>
// [ start || end || center ] | [ self-start || self-end || center ] | [ top || bottom || center ] | [ left || right || center ] | [ x-start || x-end || center ] | [ y-start || y-end || center ] | [ x-self-start || x-self-end || center ] | [ y-self-start || y-self-end || center ] | all
export type InsetAreaSpan = ((('start' | ('end' | 'center'))) | (('self-start' | ('self-end' | 'center'))) | (('top' | ('bottom' | 'center'))) | (('left' | ('right' | 'center'))) | (('x-start' | ('x-end' | 'center'))) | (('y-start' | ('y-end' | 'center'))) | (('x-self-start' | ('x-self-end' | 'center'))) | (('y-self-start' | ('y-self-end' | 'center'))) | 'all');

// function anchor()
// anchor( <anchor-element>? <anchor-side>, <length-percentage>? )
class AnchorProperty {}

export function anchor(a: [AnchorElement, AnchorSide], b: LengthPercentage): AnchorProperty;
export function anchor(a: [AnchorElement, AnchorSide], b: void): AnchorProperty;
export function anchor(a: [void, AnchorSide], b: LengthPercentage): AnchorProperty;
export function anchor(a: [void, AnchorSide], b: void): AnchorProperty;
export function anchor() { return new AnchorProperty(); }

// type <anchor-element>
// <dashed-ident> | implicit
export type AnchorElement = (DashedIdent | 'implicit');

// type <anchor-side>
// inside | outside | top | left | right | bottom | start | end | self-start | self-end | <percentage> | center
export type AnchorSide = ('inside' | 'outside' | 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end' | 'self-start' | 'self-end' | Percentage | 'center');

// function anchor-size()
// anchor( <anchor-element>? <anchor-size>, <length-percentage>? )
class AnchorSizeProperty {}

export function anchorSize(a: [AnchorElement, AnchorSize], b: LengthPercentage): AnchorProperty;
export function anchorSize(a: [AnchorElement, AnchorSize], b: void): AnchorProperty;
export function anchorSize(a: [void, AnchorSize], b: LengthPercentage): AnchorProperty;
export function anchorSize(a: [void, AnchorSize], b: void): AnchorProperty;
export function anchorSize() { return new AnchorSizeProperty(); }

// type <anchor-size>
// width | height | block | inline | self-block | self-inline
export type AnchorSize = ('width' | 'height' | 'block' | 'inline' | 'self-block' | 'self-inline');

// type <single-animation-composition>
// replace | add | accumulate
export type SingleAnimationComposition = ('replace' | 'add' | 'accumulate');

// type <single-animation-timeline>
// auto | none | <dashed-ident> | <scroll()> | <view()>
export type SingleAnimationTimeline = ('auto' | 'none' | DashedIdent | ScrollProperty | ViewProperty);

// type <single-animation>
// <'animation-duration'> || <easing-function> || <'animation-delay'> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ] || <single-animation-timeline>
export type SingleAnimation = ((AnimationDurationProperty | (EasingFunction | (AnimationDelayProperty | (SingleAnimationIterationCount | (SingleAnimationDirection | (SingleAnimationFillMode | (SingleAnimationPlayState | (('none' | KeyframesName) | SingleAnimationTimeline)))))))));

// type <keyframes-name>
// <custom-ident> | <string>
export type KeyframesName = (CustomIdent | string);

// type <keyframe-block>
// <keyframe-selector># { <declaration-list> }
export type KeyframeBlock = ([RecurseTuple<KeyframeSelector>, [ [void, DeclarationList, void] ]]);

// type <keyframe-selector>
// from | to | <percentage [0,100]>
export type KeyframeSelector = ('from' | 'to' | Percentage);

// type <single-animation-iteration-count>
// infinite | <number [0,∞]>
export type SingleAnimationIterationCount = ('infinite' | number);

// type <single-animation-direction>
// normal | reverse | alternate | alternate-reverse
export type SingleAnimationDirection = ('normal' | 'reverse' | 'alternate' | 'alternate-reverse');

// type <single-animation-play-state>
// running | paused
export type SingleAnimationPlayState = ('running' | 'paused');

// type <single-animation-fill-mode>
// none | forwards | backwards | both
export type SingleAnimationFillMode = ('none' | 'forwards' | 'backwards' | 'both');

// type <bg-position>
// [ [ left | center | right | top | bottom | start | end | <length-percentage> ] | [ left | center | right | x-start | x-end | <length-percentage> ] [ top | center | bottom | y-start | y-end | <length-percentage> ] | [ center | [ left | right | x-start | x-end ] <length-percentage>? ] && [ center | [ top | bottom | y-start | y-end ] <length-percentage>? ] | [ center | [ start | end ] <length-percentage>? ] [ center | [ start | end ] <length-percentage>? ] ]
export type BgPosition = ((('left' | 'center' | 'right' | 'top' | 'bottom' | 'start' | 'end' | LengthPercentage) | [('left' | 'center' | 'right' | 'x-start' | 'x-end' | LengthPercentage), ('top' | 'center' | 'bottom' | 'y-start' | 'y-end' | LengthPercentage)] | (('center' | [('left' | 'right' | 'x-start' | 'x-end'), LengthPercentage] | [('left' | 'right' | 'x-start' | 'x-end'), void]) & ('center' | [('top' | 'bottom' | 'y-start' | 'y-end'), LengthPercentage] | [('top' | 'bottom' | 'y-start' | 'y-end'), void])) | [('center' | [('start' | 'end'), LengthPercentage] | [('start' | 'end'), void]), ('center' | [('start' | 'end'), LengthPercentage] | [('start' | 'end'), void])]));

// type <bg-clip>
// <visual-box> | border | text
export type BgClip = (VisualBox | 'border' | 'text');

// type <bg-image>
// <image> | none
export type BgImage = (Image | 'none');

// type <repeat-style>
// repeat-x | repeat-y | [repeat | space | round | no-repeat]{1,2}
export type RepeatStyle = ('repeat-x' | 'repeat-y' | Repeat1to2<('repeat' | 'space' | 'round' | 'no-repeat')>);

// type <attachment>
// scroll | fixed | local
export type Attachment = ('scroll' | 'fixed' | 'local');

// type <bg-size>
// [ <length-percentage [0,∞]> | auto ]{1,2} | cover | contain
export type BgSize = (Repeat1to2<(LengthPercentage | 'auto')> | 'cover' | 'contain');

// type <bg-layer>
// <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <visual-box> || <visual-box>
export type BgLayer = ((BgImage | ([BgPosition, (['/', BgSize])] | (RepeatStyle | (Attachment | (VisualBox | VisualBox)))))) | ((BgImage | ([BgPosition, void] | (RepeatStyle | (Attachment | (VisualBox | VisualBox))))));

// type <final-bg-layer>
// <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <visual-box> || <visual-box> || <'background-color'>
export type FinalBgLayer = ((BgImage | ([BgPosition, (['/', BgSize])] | (RepeatStyle | (Attachment | (VisualBox | (VisualBox | BackgroundColorProperty))))))) | ((BgImage | ([BgPosition, void] | (RepeatStyle | (Attachment | (VisualBox | (VisualBox | BackgroundColorProperty)))))));

// type <line-style>
// none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
export type LineStyle = ('none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset');

// type <line-width>
// <length [0,∞]> | thin | medium | thick
export type LineWidth = (number | 'thin' | 'medium' | 'thick');

// type <shadow>
// <color>? && [<length>{2} <length [0,∞]>? <length>?] && inset?
export type Shadow = ((Color & (([Repeat2<number>, number, number]) & 'inset'))) | ((Color & (([Repeat2<number>, number, number]) & void))) | ((Color & (([Repeat2<number>, number, void]) & 'inset'))) | ((Color & (([Repeat2<number>, number, void]) & void))) | ((Color & (([Repeat2<number>, void, number]) & 'inset'))) | ((Color & (([Repeat2<number>, void, number]) & void))) | ((Color & (([Repeat2<number>, void, void]) & 'inset'))) | ((Color & (([Repeat2<number>, void, void]) & void))) | ((void & (([Repeat2<number>, number, number]) & 'inset'))) | ((void & (([Repeat2<number>, number, number]) & void))) | ((void & (([Repeat2<number>, number, void]) & 'inset'))) | ((void & (([Repeat2<number>, number, void]) & void))) | ((void & (([Repeat2<number>, void, number]) & 'inset'))) | ((void & (([Repeat2<number>, void, number]) & void))) | ((void & (([Repeat2<number>, void, void]) & 'inset'))) | ((void & (([Repeat2<number>, void, void]) & void)));

// type <spread-shadow>
// <'box-shadow-color'>? && [ <'box-shadow-offset'> [ <'box-shadow-blur'> <'box-shadow-spread'>? ]? ] && <'box-shadow-position'>?
export type SpreadShadow = ((BoxShadowColorProperty & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, BoxShadowSpreadProperty])]) & BoxShadowPositionProperty))) | ((BoxShadowColorProperty & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, BoxShadowSpreadProperty])]) & void))) | ((BoxShadowColorProperty & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, void])]) & BoxShadowPositionProperty))) | ((BoxShadowColorProperty & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, void])]) & void))) | ((BoxShadowColorProperty & (([BoxShadowOffsetProperty, void]) & BoxShadowPositionProperty))) | ((BoxShadowColorProperty & (([BoxShadowOffsetProperty, void]) & void))) | ((void & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, BoxShadowSpreadProperty])]) & BoxShadowPositionProperty))) | ((void & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, BoxShadowSpreadProperty])]) & void))) | ((void & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, void])]) & BoxShadowPositionProperty))) | ((void & (([BoxShadowOffsetProperty, ([BoxShadowBlurProperty, void])]) & void))) | ((void & (([BoxShadowOffsetProperty, void]) & BoxShadowPositionProperty))) | ((void & (([BoxShadowOffsetProperty, void]) & void)));

// type <box>
// undefined
export type Box = 'content-box' | 'padding-box' | 'border-box' | 'margin-box' | 'fill-box' | 'stroke-box' | 'view-box';

// type <visual-box>
// content-box | padding-box | border-box
export type VisualBox = ('content-box' | 'padding-box' | 'border-box');

// type <layout-box>
// <visual-box> | margin-box
export type LayoutBox = (VisualBox | 'margin-box');

// type <paint-box>
// <visual-box> | fill-box | stroke-box
export type PaintBox = (VisualBox | 'fill-box' | 'stroke-box');

// type <coord-box>
// <paint-box> | view-box
export type CoordBox = (PaintBox | 'view-box');

// type <scope-start>
// undefined

// type <scope-end>
// undefined

// type <import-conditions>
// [ supports( [ <supports-condition> | <declaration> ] ) ]? <media-query-list>?
export type ImportConditions = ([({ 'supports': [(SupportsCondition | Declaration)] }), MediaQueryList]) | ([({ 'supports': [(SupportsCondition | Declaration)] }), void]) | ([void, MediaQueryList]) | ([void, void]);

// type <layer-name>
// <ident> [ '.' <ident> ]*
export type LayerName = ([Ident, RecurseAny<(['.', Ident])>]);

// type <color>
// <absolute-color-base> | currentcolor | <system-color> | <device-cmyk()> | <color-mix()> | <light-dark()>
export type Color = (AbsoluteColorBase | 'currentcolor' | SystemColor | DeviceCmykProperty | ColorMixProperty | LightDarkProperty);

// type <absolute-color-base>
// <hex-color> | <absolute-color-function> | <named-color> | transparent
export type AbsoluteColorBase = (HexColor | AbsoluteColorFunction | NamedColor | 'transparent');

// type <absolute-color-function>
// <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hwb()> | <lab()> | <lch()> | <oklab()> | <oklch()> | <color()>
export type AbsoluteColorFunction = (RgbProperty | RgbaProperty | HslProperty | HslaProperty | HwbProperty | LabProperty | LchProperty | OklabProperty | OklchProperty | ColorProperty);

// function color-mix()
// color-mix( <color-interpolation-method> , [ <color> && <percentage [0,100]>? ]#{2})
class ColorMixProperty {}

export function colorMix(a: [ColorInterpolationMethod, void], b: Repeat2<RecurseTuple<((Color & Percentage))>>): ColorMixProperty;
export function colorMix(a: [ColorInterpolationMethod, void], b: Repeat2<RecurseTuple<((Color & void))>>): ColorMixProperty;
export function colorMix() { return new ColorMixProperty(); }

// type <modern-rgb-syntax>
// rgb( [ from <color> ]? [ <number> | <percentage> | none]{3} [ / [<alpha-value> | none] ]? )
export type ModernRgbSyntax = ({ 'rgb': [[(['from', Color]), Repeat3<(number | Percentage | 'none')>, (['/', (AlphaValue | 'none')])]] }) | ({ 'rgb': [[(['from', Color]), Repeat3<(number | Percentage | 'none')>, void]] }) | ({ 'rgb': [[void, Repeat3<(number | Percentage | 'none')>, (['/', (AlphaValue | 'none')])]] }) | ({ 'rgb': [[void, Repeat3<(number | Percentage | 'none')>, void]] });

// type <modern-rgba-syntax>
// rgba( [ from <color> ]? [ <number> | <percentage> | none]{3} [ / [<alpha-value> | none] ]? )
export type ModernRgbaSyntax = ({ 'rgba': [[(['from', Color]), Repeat3<(number | Percentage | 'none')>, (['/', (AlphaValue | 'none')])]] }) | ({ 'rgba': [[(['from', Color]), Repeat3<(number | Percentage | 'none')>, void]] }) | ({ 'rgba': [[void, Repeat3<(number | Percentage | 'none')>, (['/', (AlphaValue | 'none')])]] }) | ({ 'rgba': [[void, Repeat3<(number | Percentage | 'none')>, void]] });

// type <modern-hsl-syntax>
// hsl([from <color>]? [<hue> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
export type ModernHslSyntax = ({ 'hsl': [[(['from', Color]), (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]] }) | ({ 'hsl': [[(['from', Color]), (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]] }) | ({ 'hsl': [[void, (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]] }) | ({ 'hsl': [[void, (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]] });

// type <modern-hsla-syntax>
// hsla([from <color>]? [<hue> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
export type ModernHslaSyntax = ({ 'hsla': [[(['from', Color]), (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]] }) | ({ 'hsla': [[(['from', Color]), (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]] }) | ({ 'hsla': [[void, (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]] }) | ({ 'hsla': [[void, (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]] });

// function hwb()
// hwb([from <color>]? [<hue> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
class HwbProperty {}

export function hwb(a: [(['from', Color]), (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]): HwbProperty;
export function hwb(a: [(['from', Color]), (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]): HwbProperty;
export function hwb(a: [void, (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]): HwbProperty;
export function hwb(a: [void, (Hue | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]): HwbProperty;
export function hwb() { return new HwbProperty(); }

// function lab()
// lab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
class LabProperty {}

export function lab(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]): LabProperty;
export function lab(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]): LabProperty;
export function lab(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]): LabProperty;
export function lab(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]): LabProperty;
export function lab() { return new LabProperty(); }

// function oklab()
// oklab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
class OklabProperty {}

export function oklab(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]): OklabProperty;
export function oklab(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]): OklabProperty;
export function oklab(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), (['/', (AlphaValue | 'none')])]): OklabProperty;
export function oklab(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Percentage | number | 'none'), void]): OklabProperty;
export function oklab() { return new OklabProperty(); }

// function lch()
// lch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
class LchProperty {}

export function lch(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), (['/', (AlphaValue | 'none')])]): LchProperty;
export function lch(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), void]): LchProperty;
export function lch(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), (['/', (AlphaValue | 'none')])]): LchProperty;
export function lch(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), void]): LchProperty;
export function lch() { return new LchProperty(); }

// function oklch()
// oklch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
class OklchProperty {}

export function oklch(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), (['/', (AlphaValue | 'none')])]): OklchProperty;
export function oklch(a: [(['from', Color]), (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), void]): OklchProperty;
export function oklch(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), (['/', (AlphaValue | 'none')])]): OklchProperty;
export function oklch(a: [void, (Percentage | number | 'none'), (Percentage | number | 'none'), (Hue | 'none'), void]): OklchProperty;
export function oklch() { return new OklchProperty(); }

// function color()
// color( [from <color>]? <colorspace-params> [ / [ <alpha-value> | none ] ]? )
class ColorProperty {}

export function color(a: [(['from', Color]), ColorspaceParams, (['/', (AlphaValue | 'none')])]): ColorProperty;
export function color(a: [(['from', Color]), ColorspaceParams, void]): ColorProperty;
export function color(a: [void, ColorspaceParams, (['/', (AlphaValue | 'none')])]): ColorProperty;
export function color(a: [void, ColorspaceParams, void]): ColorProperty;
export function color() { return new ColorProperty(); }

// type <colorspace-params>
// [<custom-params> | <predefined-rgb-params> | <xyz-params>]
export type ColorspaceParams = ((CustomParams | PredefinedRgbParams | XyzParams));

// type <custom-params>
// <dashed-ident> [ <number> | <percentage> | none ]+
export type CustomParams = ([DashedIdent, Recurse<(number | Percentage | 'none')>]);

// type <predefined-rgb-params>
// <predefined-rgb> [ <number> | <percentage> | none ]{3}
export type PredefinedRgbParams = ([PredefinedRgb, Repeat3<(number | Percentage | 'none')>]);

// type <predefined-rgb>
// srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020
export type PredefinedRgb = ('srgb' | 'srgb-linear' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec2020');

// type <xyz-params>
// <xyz-space> [ <number> | <percentage> | none ]{3}
export type XyzParams = ([XyzSpace, Repeat3<(number | Percentage | 'none')>]);

// type <xyz>
// xyz | xyz-d50 | xyz-d65
export type Xyz = ('xyz' | 'xyz-d50' | 'xyz-d65');

// function device-cmyk()
// <legacy-device-cmyk-syntax> | <modern-device-cmyk-syntax>
class DeviceCmykProperty {}

export function deviceCmyk(a: void): <legacyDeviceCmykSyntax>|<modernDeviceCmykSyntax>Property;
export function deviceCmyk(a: void): <legacyDeviceCmykSyntax>|<modernDeviceCmykSyntax>Property;
export function deviceCmyk() { return new DeviceCmykProperty(); }

// type <legacy-device-cmyk-syntax>
// device-cmyk( <number>#{4} )
export type LegacyDeviceCmykSyntax = ({ 'device-cmyk': [Repeat4<RecurseTuple<number>>] });

// type <modern-device-cmyk-syntax>
// device-cmyk( <cmyk-component>{4} [ / [ <alpha-value> | none ] ]? )
export type ModernDeviceCmykSyntax = ({ 'device-cmyk': [[Repeat4<CmykComponent>, (['/', (AlphaValue | 'none')])]] }) | ({ 'device-cmyk': [[Repeat4<CmykComponent>, void]] });

// type <cmyk-component>
// <number> | <percentage> | none
export type CmykComponent = (number | Percentage | 'none');

// function light-dark()
// light-dark( <color>, <color> )
class LightDarkProperty {}

export function lightDark(a: Color, b: Color): LightDarkProperty;
export function lightDark() { return new LightDarkProperty(); }

// type <color-space>
// <rectangular-color-space> | <polar-color-space> | <custom-color-space>
export type ColorSpace = (RectangularColorSpace | PolarColorSpace | CustomColorSpace);

// type <rectangular-color-space>
// srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020 | lab | oklab | xyz | xyz-d50 | xyz-d65
export type RectangularColorSpace = ('srgb' | 'srgb-linear' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec2020' | 'lab' | 'oklab' | 'xyz' | 'xyz-d50' | 'xyz-d65');

// type <polar-color-space>
// hsl | hwb | lch | oklch
export type PolarColorSpace = ('hsl' | 'hwb' | 'lch' | 'oklch');

// type <custom-color-space>
// <dashed-ident>
export type CustomColorSpace = (DashedIdent);

// type <hue-interpolation-method>
// [ shorter | longer | increasing | decreasing ] hue
export type HueInterpolationMethod = ([('shorter' | 'longer' | 'increasing' | 'decreasing'), 'hue']);

// type <color-interpolation-method>
// in [ <rectangular-color-space> | <polar-color-space> <hue-interpolation-method>? | <custom-color-space> ]
export type ColorInterpolationMethod = (['in', (RectangularColorSpace | [PolarColorSpace, HueInterpolationMethod] | [PolarColorSpace, void] | CustomColorSpace)]);

// function contrast-color()
// contrast-color( [ [ <color> && [ tbd-fg | tbd-bg ] && <target-contrast>? ] | [ <color> && [ tbd-fg | tbd-bg ] && <target-contrast>, <color># ] ] )
class ContrastColorProperty {}

export function contrastColor(a: (((Color & (('tbd-fg' | 'tbd-bg') & TargetContrast))) | ((Color & (('tbd-fg' | 'tbd-bg') & void))) | ((Color & (('tbd-fg' | 'tbd-bg') & [TargetContrast, RecurseTuple<Color>]))))): ContrastColorProperty;
export function contrastColor() { return new ContrastColorProperty(); }

// type <target-contrast>
// <wcag2>
export type TargetContrast = (Wcag2);

// type <wcag2>
// wcag2 | wcag2([<number> | [ aa | aaa ] && large? ])
export type Wcag2 = ('wcag2' | { 'wcag2': [(number | (('aa' | 'aaa') & 'large') | (('aa' | 'aaa') & void))] });

// type <hue>
// <number> | <angle>
export type Hue = (number | Angle);

// function rgb()
// [ <legacy-rgb-syntax> | <modern-rgb-syntax> ]
class RgbProperty {}

export function rgb(a: void): [<legacyRgbSyntax>|<modernRgbSyntax>]Property;
export function rgb() { return new RgbProperty(); }

// function rgba()
// [ <legacy-rgba-syntax> | <modern-rgba-syntax> ]
class RgbaProperty {}

export function rgba(a: void): [<legacyRgbaSyntax>|<modernRgbaSyntax>]Property;
export function rgba() { return new RgbaProperty(); }

// type <legacy-rgb-syntax>
// rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? )
export type LegacyRgbSyntax = ({ 'rgb': [[Repeat3<RecurseTuple<Percentage>>, void], AlphaValue] } | { 'rgb': [[Repeat3<RecurseTuple<Percentage>>, void], void] } | { 'rgb': [[Repeat3<RecurseTuple<number>>, void], AlphaValue] } | { 'rgb': [[Repeat3<RecurseTuple<number>>, void], void] });

// type <legacy-rgba-syntax>
// rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? )
export type LegacyRgbaSyntax = ({ 'rgba': [[Repeat3<RecurseTuple<Percentage>>, void], AlphaValue] } | { 'rgba': [[Repeat3<RecurseTuple<Percentage>>, void], void] } | { 'rgba': [[Repeat3<RecurseTuple<number>>, void], AlphaValue] } | { 'rgba': [[Repeat3<RecurseTuple<number>>, void], void] });

// type <hex-color>
// undefined

// type <named-color>
// undefined
export type NamedColor = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';

// type <system-color>
// undefined
export type SystemColor = 'AccentColor' | 'AccentColorText' | 'ActiveText' | 'ButtonBorder' | 'ButtonFace' | 'ButtonText' | 'Canvas' | 'CanvasText' | 'Field' | 'FieldText' | 'GrayText' | 'Highlight' | 'HighlightText' | 'LinkText' | 'Mark' | 'MarkText' | 'SelectedItem' | 'SelectedItemText' | 'VisitedText';

// function hsl()
// [ <legacy-hsl-syntax> | <modern-hsl-syntax> ]
class HslProperty {}

export function hsl(a: void): [<legacyHslSyntax>|<modernHslSyntax>]Property;
export function hsl() { return new HslProperty(); }

// function hsla()
// [ <legacy-hsla-syntax> | <modern-hsla-syntax> ]
class HslaProperty {}

export function hsla(a: void): [<legacyHslaSyntax>|<modernHslaSyntax>]Property;
export function hsla() { return new HslaProperty(); }

// type <legacy-hsl-syntax>
// hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )
export type LegacyHslSyntax = ({ 'hsl': [Hue, Percentage, Percentage, AlphaValue] }) | ({ 'hsl': [Hue, Percentage, Percentage, void] });

// type <legacy-hsla-syntax>
// hsla( <hue>, <percentage>, <percentage>, <alpha-value>? )
export type LegacyHslaSyntax = ({ 'hsla': [Hue, Percentage, Percentage, AlphaValue] }) | ({ 'hsla': [Hue, Percentage, Percentage, void] });

// type <xyz-space>
// xyz | xyz-d50 | xyz-d65
export type XyzSpace = ('xyz' | 'xyz-d50' | 'xyz-d65');

// type <deprecated-color>
// undefined
export type DeprecatedColor = 'ActiveBorder' | 'ActiveCaption' | 'AppWorkspace' | 'Background' | 'ButtonHighlight' | 'ButtonShadow' | 'CaptionText' | 'InactiveBorder' | 'InactiveCaption' | 'InactiveCaptionText' | 'InfoBackground' | 'InfoText' | 'Menu' | 'MenuText' | 'Scrollbar' | 'ThreeDDarkShadow' | 'ThreeDFace' | 'ThreeDHighlight' | 'ThreeDLightShadow' | 'ThreeDShadow' | 'Window' | 'WindowFrame' | 'WindowText';

// type <quirky-color>
// undefined

// type <supports-feature>
// <supports-selector-fn> | <supports-font-tech-fn> | <supports-font-format-fn> | <supports-decl>
export type SupportsFeature = (SupportsSelectorFn | SupportsFontTechFn | SupportsFontFormatFn | SupportsDecl);

// type <supports-selector-fn>
// selector( <complex-selector> )
export type SupportsSelectorFn = ({ 'selector': [ComplexSelector] });

// type <supports-font-tech-fn>
// font-tech( <font-tech> )
export type SupportsFontTechFn = ({ 'font-tech': [FontTech] });

// type <supports-font-format-fn>
// font-format( <font-format> )
export type SupportsFontFormatFn = ({ 'font-format': [FontFormat] });

// function media()
// media( [ <mf-plain> | <mf-boolean> | <mf-range> ] )
class MediaProperty {}

export function media(a: (MfPlain | MfBoolean | MfRange)): MediaProperty;
export function media() { return new MediaProperty(); }

// function supports()
// supports( <declaration> )
class SupportsProperty {}

export function supports(a: Declaration): SupportsProperty;
export function supports() { return new SupportsProperty(); }

// type <supports-condition>
// not <supports-in-parens> | <supports-in-parens> [ and <supports-in-parens> ]* | <supports-in-parens> [ or <supports-in-parens> ]*
export type SupportsCondition = (['not', SupportsInParens] | [SupportsInParens, RecurseAny<(['and', SupportsInParens])>] | [SupportsInParens, RecurseAny<(['or', SupportsInParens])>]);

// type <supports-in-parens>
// ( <supports-condition> ) | <supports-feature> | <general-enclosed>
export type SupportsInParens = ((SupportsCondition) | SupportsFeature | GeneralEnclosed);

// type <supports-decl>
// ( <declaration> )
export type SupportsDecl = ((Declaration));

// type <container-condition>
// [ <container-name> ]? <container-query>
export type ContainerCondition = ([(ContainerName), ContainerQuery]) | ([void, ContainerQuery]);

// type <container-name>
// <custom-ident>
export type ContainerName = (CustomIdent);

// type <container-query>
// not <query-in-parens> | <query-in-parens> [ [ and <query-in-parens> ]* | [ or <query-in-parens> ]* ]
export type ContainerQuery = (['not', QueryInParens] | [QueryInParens, (RecurseAny<(['and', QueryInParens])> | RecurseAny<(['or', QueryInParens])>)]);

// type <query-in-parens>
// ( <container-query> ) | ( <size-feature> ) | style( <style-query> ) | <general-enclosed>
export type QueryInParens = ((ContainerQuery) | (SizeFeature) | { 'style': [StyleQuery] } | GeneralEnclosed);

// type <style-query>
// not <style-in-parens> | <style-in-parens> [ [ and <style-in-parens> ]* | [ or <style-in-parens> ]* ] | <style-feature>
export type StyleQuery = (['not', StyleInParens] | [StyleInParens, (RecurseAny<(['and', StyleInParens])> | RecurseAny<(['or', StyleInParens])>)] | StyleFeature);

// type <style-in-parens>
// ( <style-query> ) | ( <style-feature> ) | <general-enclosed>
export type StyleInParens = ((StyleQuery) | (StyleFeature) | GeneralEnclosed);

// type <size-feature>
// undefined

// type <style-feature>
// undefined

// type <quote>
// open-quote | close-quote | no-open-quote | no-close-quote
export type Quote = ('open-quote' | 'close-quote' | 'no-open-quote' | 'no-close-quote');

// function leader()
// leader( <leader-type> )
class LeaderProperty {}

export function leader(a: LeaderType): LeaderProperty;
export function leader() { return new LeaderProperty(); }

// type <leader-type>
// dotted | solid | space | <string>
export type LeaderType = ('dotted' | 'solid' | 'space' | string);

// type <target>
// <target-counter()> | <target-counters()> | <target-text()>
export type Target = (TargetCounterProperty | TargetCountersProperty | TargetTextProperty);

// function target-counter()
// target-counter( [ <string> | <url> ] , <custom-ident> , <counter-style>? )
class TargetCounterProperty {}

export function targetCounter(a: [(string | Url), void], b: [CustomIdent, void], c: CounterStyle): TargetCounterProperty;
export function targetCounter(a: [(string | Url), void], b: [CustomIdent, void], c: void): TargetCounterProperty;
export function targetCounter() { return new TargetCounterProperty(); }

// function target-counters()
// target-counters( [ <string> | <url> ] , <custom-ident> , <string> , <counter-style>? )
class TargetCountersProperty {}

export function targetCounters(a: [(string | Url), void], b: [CustomIdent, void], c: [string, void], d: CounterStyle): TargetCountersProperty;
export function targetCounters(a: [(string | Url), void], b: [CustomIdent, void], c: [string, void], d: void): TargetCountersProperty;
export function targetCounters() { return new TargetCountersProperty(); }

// function target-text()
// target-text( [ <string> | <url> ] , [ content | before | after | first-letter ]? )
class TargetTextProperty {}

export function targetText(a: [(string | Url), void], b: ('content' | 'before' | 'after' | 'first-letter')): TargetTextProperty;
export function targetText(a: [(string | Url), void], b: void): TargetTextProperty;
export function targetText() { return new TargetTextProperty(); }

// function string()
// string( <custom-ident> , [ first | start | last | first-except ]? )
class StringProperty {}

export function string(a: [CustomIdent, void], b: ('first' | 'start' | 'last' | 'first-except')): StringProperty;
export function string(a: [CustomIdent, void], b: void): StringProperty;
export function string() { return new StringProperty(); }

// function content()
// content( [ text | before | after | first-letter | marker ]? )
class ContentProperty {}

export function content(a: ('text' | 'before' | 'after' | 'first-letter' | 'marker')): ContentProperty;
export function content(a: void): ContentProperty;
export function content() { return new ContentProperty(); }

// type <counter-style-name>
// undefined
export type CounterStyleName = 'decimal' | 'decimal-leading-zero' | 'arabic-indic' | 'armenian' | 'upper-armenian' | 'lower-armenian' | 'bengali' | 'cambodian' | 'khmer' | 'cjk-decimal' | 'devanagari' | 'georgian' | 'gujarati' | 'gurmukhi' | 'hebrew' | 'kannada' | 'lao' | 'malayalam' | 'mongolian' | 'myanmar' | 'oriya' | 'persian' | 'lower-roman' | 'upper-roman' | 'tamil' | 'telugu' | 'thai' | 'tibetan' | 'lower-alpha' | 'lower-latin' | 'upper-alpha' | 'upper-latin' | 'lower-greek' | 'hiragana' | 'hiragana-iroha' | 'katakana' | 'katakana-iroha' | 'disc' | 'circle' | 'square' | 'disclosure-open' | 'disclosure-closed' | 'cjk-earthly-branch' | 'cjk-heavenly-stem' | 'korean-hangul-formal' | 'korean-hanja-informal' | 'korean-hanja-formal' | 'ethiopic-numeric';

// type <symbol>
// <string> | <image> | <custom-ident>
export type Symbol = (string | Image | CustomIdent);

// function symbols()
// symbols( <symbols-type>? [ <string> | <image> ]+ )
class SymbolsProperty {}

export function symbols(a: [SymbolsType, Recurse<(string | Image)>]): SymbolsProperty;
export function symbols(a: [void, Recurse<(string | Image)>]): SymbolsProperty;
export function symbols() { return new SymbolsProperty(); }

// type <symbols-type>
// cyclic | numeric | alphabetic | symbolic | fixed
export type SymbolsType = ('cyclic' | 'numeric' | 'alphabetic' | 'symbolic' | 'fixed');

// type <counter-style>
// <counter-style-name> | <symbols()>
export type CounterStyle = (CounterStyleName | SymbolsProperty);

// type <display-outside>
// block | inline | run-in
export type DisplayOutside = ('block' | 'inline' | 'run-in');

// type <display-inside>
// flow | flow-root | table | flex | grid | ruby
export type DisplayInside = ('flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'ruby');

// type <display-listitem>
// <display-outside>? && [ flow | flow-root ]? && list-item
export type DisplayListitem = ((DisplayOutside & (('flow' | 'flow-root') & 'list-item'))) | ((DisplayOutside & (void & 'list-item'))) | ((void & (('flow' | 'flow-root') & 'list-item'))) | ((void & (void & 'list-item')));

// type <display-internal>
// table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container
export type DisplayInternal = ('table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-caption' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container');

// type <display-box>
// contents | none
export type DisplayBox = ('contents' | 'none');

// type <display-legacy>
// inline-block | inline-table | inline-flex | inline-grid
export type DisplayLegacy = ('inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid');

// type <easing-function>
// linear | <linear-easing-function> | <cubic-bezier-easing-function> | <step-easing-function>
export type EasingFunction = ('linear' | LinearEasingFunction | CubicBezierEasingFunction | StepEasingFunction);

// type <linear-easing-function>
// linear(<linear-stop-list>)
export type LinearEasingFunction = ({ 'linear': [LinearStopList] });

// function linear()
// linear(<linear-stop-list>)
class LinearProperty {}

export function linear(a: LinearStopList): LinearProperty;
export function linear() { return new LinearProperty(); }

// type <linear-stop-list>
// [ <linear-stop> ]#
export type LinearStopList = (RecurseTuple<(LinearStop)>);

// type <linear-stop>
// <number> && <linear-stop-length>?
export type LinearStop = ((number & LinearStopLength)) | ((number & void));

// type <linear-stop-length>
// <percentage>{1,2}
export type LinearStopLength = (Repeat1to2<Percentage>);

// type <cubic-bezier-easing-function>
// ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number [0,1]>, <number>, <number [0,1]>, <number>)
export type CubicBezierEasingFunction = ('ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | { 'cubic-bezier': [number, number, number, number] });

// type <step-easing-function>
// step-start | step-end | steps(<integer> , <step-position>?)
export type StepEasingFunction = ('step-start' | 'step-end' | { 'steps': [[number, void], StepPosition] } | { 'steps': [[number, void], void] });

// type <step-position>
// jump-start | jump-end | jump-none | jump-both | start | end
export type StepPosition = ('jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end');

// function env()
// env( <custom-ident> <integer [0,∞]>*, <declaration-value>? )
class EnvProperty {}

export function env(a: [CustomIdent, RecurseAny<number>], b: DeclarationValue): EnvProperty;
export function env(a: [CustomIdent, RecurseAny<number>], b: void): EnvProperty;
export function env() { return new EnvProperty(); }

// type <extension-name>
// undefined

// type <custom-selector>
// <custom-arg>? : <extension-name> [ ( <custom-arg>+#? ) ]? ;
export type CustomSelector = ([CustomArg, ':', ExtensionName, ((RecurseTuple<Recurse<CustomArg>>)), ';']) | ([CustomArg, ':', ExtensionName, ((void)), ';']) | ([CustomArg, ':', ExtensionName, void, ';']) | ([void, ':', ExtensionName, ((RecurseTuple<Recurse<CustomArg>>)), ';']) | ([void, ':', ExtensionName, ((void)), ';']) | ([void, ':', ExtensionName, void, ';']);

// type <custom-arg>
// $ <ident-token> ;
// type <font-format>
// [<string> | collection | embedded-opentype | opentype | svg | truetype | woff | woff2 ]
export type FontFormat = ((string | 'collection' | 'embedded-opentype' | 'opentype' | 'svg' | 'truetype' | 'woff' | 'woff2'));

// type <font-tech>
// [<font-features-tech> | <color-font-tech> | variations | palettes | incremental-patch | incremental-range | incremental-auto ]
export type FontTech = ((FontFeaturesTech | ColorFontTech | 'variations' | 'palettes' | 'incremental-patch' | 'incremental-range' | 'incremental-auto'));

// type <font-features-tech>
// [features-opentype | features-aat | features-graphite]
export type FontFeaturesTech = (('features-opentype' | 'features-aat' | 'features-graphite'));

// type <color-font-tech>
// [color-COLRv0 | color-COLRv1 | color-SVG | color-sbix | color-CBDT ]
export type ColorFontTech = (('color-COLRv0' | 'color-COLRv1' | 'color-SVG' | 'color-sbix' | 'color-CBDT'));

// type <family-name>
// <string> | <custom-ident>+
export type FamilyName = (string | Recurse<CustomIdent>);

// type <generic-family>
// generic( <custom-ident>+ ) | <string> | <custom-ident>+
export type GenericFamily = ({ 'generic': [Recurse<CustomIdent>] } | string | Recurse<CustomIdent>);

// type <system-family-name>
// caption | icon | menu | message-box | small-caption | status-bar
export type SystemFamilyName = ('caption' | 'icon' | 'menu' | 'message-box' | 'small-caption' | 'status-bar');

// type <font-weight-absolute>
// [normal | bold | <number [1,1000]>]
export type FontWeightAbsolute = (('normal' | 'bold' | number));

// type <font-variant-css2>
// [normal | small-caps]
export type FontVariantCss2 = (('normal' | 'small-caps'));

// type <font-stretch-css3>
// [normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded]
export type FontStretchCss3 = (('normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded'));

// type <font-src-list>
// undefined

// type <font-src>
// <url> [ format(<font-format>)]? [ tech( <font-tech>#)]? | local(<family-name>)
export type FontSrc = ([Url, ({ 'format': [FontFormat] }), ({ 'tech': [RecurseTuple<FontTech>] })] | [Url, ({ 'format': [FontFormat] }), void] | [Url, void, ({ 'tech': [RecurseTuple<FontTech>] })] | [Url, void, void] | { 'local': [FamilyName] });

// type <common-lig-values>
// [ common-ligatures | no-common-ligatures ]
export type CommonLigValues = (('common-ligatures' | 'no-common-ligatures'));

// type <discretionary-lig-values>
// [ discretionary-ligatures | no-discretionary-ligatures ]
export type DiscretionaryLigValues = (('discretionary-ligatures' | 'no-discretionary-ligatures'));

// type <historical-lig-values>
// [ historical-ligatures | no-historical-ligatures ]
export type HistoricalLigValues = (('historical-ligatures' | 'no-historical-ligatures'));

// type <contextual-alt-values>
// [ contextual | no-contextual ]
export type ContextualAltValues = (('contextual' | 'no-contextual'));

// type <numeric-figure-values>
// [ lining-nums | oldstyle-nums ]
export type NumericFigureValues = (('lining-nums' | 'oldstyle-nums'));

// type <numeric-spacing-values>
// [ proportional-nums | tabular-nums ]
export type NumericSpacingValues = (('proportional-nums' | 'tabular-nums'));

// type <numeric-fraction-values>
// [ diagonal-fractions | stacked-fractions ]
export type NumericFractionValues = (('diagonal-fractions' | 'stacked-fractions'));

// type <feature-value-name>
// <ident>
export type FeatureValueName = (Ident);

// type <east-asian-variant-values>
// [ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]
export type EastAsianVariantValues = (('jis78' | 'jis83' | 'jis90' | 'jis04' | 'simplified' | 'traditional'));

// type <east-asian-width-values>
// [ full-width | proportional-width ]
export type EastAsianWidthValues = (('full-width' | 'proportional-width'));

// type <opentype-tag>
// <string>
export type OpentypeTag = (string);

// type <content-level>
// element | content | text | <attr()> | <counter>
export type ContentLevel = ('element' | 'content' | 'text' | AttrProperty | Counter);

// type <content-list>
// [ <string> | <counter()> | <counters()> | <content()> | <attr()> ]+
export type ContentList = (Recurse<(string | CounterProperty | CountersProperty | ContentProperty | AttrProperty)>);

// function running()
// running( <custom-ident> )
class RunningProperty {}

export function running(a: CustomIdent): RunningProperty;
export function running() { return new RunningProperty(); }

// type <track-list>
// [ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?
export type TrackList = ([Recurse<([LineNames, (TrackSize | TrackRepeat)])>, LineNames]) | ([Recurse<([LineNames, (TrackSize | TrackRepeat)])>, void]) | ([Recurse<([void, (TrackSize | TrackRepeat)])>, LineNames]) | ([Recurse<([void, (TrackSize | TrackRepeat)])>, void]);

// type <auto-track-list>
// [ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat> [ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?
export type AutoTrackList = ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([LineNames, (FixedSize | FixedRepeat)])>, void]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, LineNames]) | ([RecurseAny<([void, (FixedSize | FixedRepeat)])>, void, AutoRepeat, RecurseAny<([void, (FixedSize | FixedRepeat)])>, void]);

// type <explicit-track-list>
// [ <line-names>? <track-size> ]+ <line-names>?
export type ExplicitTrackList = ([Recurse<([LineNames, TrackSize])>, LineNames]) | ([Recurse<([LineNames, TrackSize])>, void]) | ([Recurse<([void, TrackSize])>, LineNames]) | ([Recurse<([void, TrackSize])>, void]);

// type <line-name-list>
// [ <line-names> | <name-repeat> ]+
export type LineNameList = (Recurse<(LineNames | NameRepeat)>);

// type <track-size>
// <track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( <length-percentage [0,∞]> )
export type TrackSize = (TrackBreadth | { 'minmax': [[InflexibleBreadth, void], TrackBreadth] } | { 'fit-content': [LengthPercentage] });

// type <fixed-size>
// <fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )
export type FixedSize = (FixedBreadth | { 'minmax': [[FixedBreadth, void], TrackBreadth] } | { 'minmax': [[InflexibleBreadth, void], FixedBreadth] });

// type <track-breadth>
// <length-percentage [0,∞]> | <flex [0,∞]> | min-content | max-content | auto
export type TrackBreadth = (LengthPercentage | Flex | 'min-content' | 'max-content' | 'auto');

// type <inflexible-breadth>
// <length-percentage [0,∞]> | min-content | max-content | auto
export type InflexibleBreadth = (LengthPercentage | 'min-content' | 'max-content' | 'auto');

// type <fixed-breadth>
// <length-percentage [0,∞]>
export type FixedBreadth = (LengthPercentage);

// type <line-names>
// '[' <custom-ident>* ']'
export type LineNames = ('[' <custom-ident>* ']');

// function repeat()
// undefined
class RepeatProperty {}

// type <track-repeat>
// repeat( [ <integer [1,∞]> ] , [ <line-names>? <track-size> ]+ <line-names>? )
export type TrackRepeat = ({ 'repeat': [[(number), void], [Recurse<([LineNames, TrackSize])>, LineNames]] }) | ({ 'repeat': [[(number), void], [Recurse<([LineNames, TrackSize])>, void]] }) | ({ 'repeat': [[(number), void], [Recurse<([void, TrackSize])>, LineNames]] }) | ({ 'repeat': [[(number), void], [Recurse<([void, TrackSize])>, void]] });

// type <auto-repeat>
// repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )
export type AutoRepeat = ({ 'repeat': [[('auto-fill' | 'auto-fit'), void], [Recurse<([LineNames, FixedSize])>, LineNames]] }) | ({ 'repeat': [[('auto-fill' | 'auto-fit'), void], [Recurse<([LineNames, FixedSize])>, void]] }) | ({ 'repeat': [[('auto-fill' | 'auto-fit'), void], [Recurse<([void, FixedSize])>, LineNames]] }) | ({ 'repeat': [[('auto-fill' | 'auto-fit'), void], [Recurse<([void, FixedSize])>, void]] });

// type <fixed-repeat>
// repeat( [ <integer [1,∞]> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )
export type FixedRepeat = ({ 'repeat': [[(number), void], [Recurse<([LineNames, FixedSize])>, LineNames]] }) | ({ 'repeat': [[(number), void], [Recurse<([LineNames, FixedSize])>, void]] }) | ({ 'repeat': [[(number), void], [Recurse<([void, FixedSize])>, LineNames]] }) | ({ 'repeat': [[(number), void], [Recurse<([void, FixedSize])>, void]] });

// type <name-repeat>
// repeat( [ <integer [1,∞]> | auto-fill ], <line-names>+)
export type NameRepeat = ({ 'repeat': [(number | 'auto-fill'), Recurse<LineNames>] });

// type <flex>
// undefined
export type Flex = 'fr';

// type <custom-highlight-name>
// undefined

// type <image>
// <url> | <image()> | <image-set()> | <cross-fade()> | <element()> | <gradient>
export type Image = (Url | ImageProperty | ImageSetProperty | CrossFadeProperty | ElementProperty | Gradient);

// function image-set()
// image-set( <image-set-option># )
class ImageSetProperty {}

export function imageSet(a: RecurseTuple<ImageSetOption>): ImageSetProperty;
export function imageSet() { return new ImageSetProperty(); }

// type <image-set-option>
// [ <image> | <string> ] [ <resolution> || type(<string>) ]?
export type ImageSetOption = ([(Image | string), ((Resolution | { 'type': [string] }))]) | ([(Image | string), void]);

// function image()
// image( <image-tags>? [ <image-src>? , <color>? ]! )
class ImageProperty {}

export function image(a: [ImageTags, (([ImageSrc, void, Color]))]): ImageProperty;
export function image(a: [ImageTags, (([ImageSrc, void, void]))]): ImageProperty;
export function image(a: [ImageTags, (([void, void, Color]))]): ImageProperty;
export function image(a: [ImageTags, (([void, void, void]))]): ImageProperty;
export function image(a: [void, (([ImageSrc, void, Color]))]): ImageProperty;
export function image(a: [void, (([ImageSrc, void, void]))]): ImageProperty;
export function image(a: [void, (([void, void, Color]))]): ImageProperty;
export function image(a: [void, (([void, void, void]))]): ImageProperty;
export function image() { return new ImageProperty(); }

// type <image-tags>
// [ ltr | rtl ]
export type ImageTags = (('ltr' | 'rtl'));

// type <image-src>
// [ <url> | <string> ]
export type ImageSrc = ((Url | string));

// function cross-fade()
// cross-fade( <cf-image># )
class CrossFadeProperty {}

export function crossFade(a: RecurseTuple<CfImage>): CrossFadeProperty;
export function crossFade() { return new CrossFadeProperty(); }

// type <cf-image>
// <percentage [0,100]>? && [ <image> | <color> ]
export type CfImage = ((Percentage & (Image | Color))) | ((void & (Image | Color)));

// function element()
// element( <id-selector> )
class ElementProperty {}

export function element(a: IdSelector): ElementProperty;
export function element() { return new ElementProperty(); }

// type <gradient>
// [ <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()> | <conic-gradient()> | <repeating-conic-gradient()> ]
export type Gradient = ((LinearGradientProperty | RepeatingLinearGradientProperty | RadialGradientProperty | RepeatingRadialGradientProperty | ConicGradientProperty | RepeatingConicGradientProperty));

// type <linear-gradient-syntax>
// [ [ <angle> | to <side-or-corner> ] || <color-interpolation-method> ]? , <color-stop-list>
export type LinearGradientSyntax = ([(((Angle | ['to', SideOrCorner]) | ColorInterpolationMethod)), void, ColorStopList]) | ([void, void, ColorStopList]);

// type <side-or-corner>
// [left | right] || [top | bottom]
export type SideOrCorner = ((('left' | 'right') | ('top' | 'bottom')));

// type <radial-gradient-syntax>
// [ [ [ <radial-shape> || <radial-size> ]? [ at <position> ]? ] || <color-interpolation-method>]? , <color-stop-list>
export type RadialGradientSyntax = ([((([((RadialShape | RadialSize)), (['at', Position])]) | ColorInterpolationMethod)), void, ColorStopList]) | ([((([((RadialShape | RadialSize)), void]) | ColorInterpolationMethod)), void, ColorStopList]) | ([((([void, (['at', Position])]) | ColorInterpolationMethod)), void, ColorStopList]) | ([((([void, void]) | ColorInterpolationMethod)), void, ColorStopList]) | ([void, void, ColorStopList]);

// function conic-gradient()
// conic-gradient( [ <conic-gradient-syntax> ] )
class ConicGradientProperty {}

export function conicGradient(a: (ConicGradientSyntax)): ConicGradientProperty;
export function conicGradient() { return new ConicGradientProperty(); }

// type <conic-gradient-syntax>
// [ [ [ from <angle> ]? [ at <position> ]? ] || <color-interpolation-method> ]? , <angular-color-stop-list>
export type ConicGradientSyntax = ([((([(['from', Angle]), (['at', Position])]) | ColorInterpolationMethod)), void, AngularColorStopList]) | ([((([(['from', Angle]), void]) | ColorInterpolationMethod)), void, AngularColorStopList]) | ([((([void, (['at', Position])]) | ColorInterpolationMethod)), void, AngularColorStopList]) | ([((([void, void]) | ColorInterpolationMethod)), void, AngularColorStopList]) | ([void, void, AngularColorStopList]);

// function repeating-linear-gradient()
// repeating-linear-gradient( [ <linear-gradient-syntax> ] )
class RepeatingLinearGradientProperty {}

export function repeatingLinearGradient(a: (LinearGradientSyntax)): RepeatingLinearGradientProperty;
export function repeatingLinearGradient() { return new RepeatingLinearGradientProperty(); }

// function repeating-radial-gradient()
// repeating-radial-gradient( [ <radial-gradient-syntax> ] )
class RepeatingRadialGradientProperty {}

export function repeatingRadialGradient(a: (RadialGradientSyntax)): RepeatingRadialGradientProperty;
export function repeatingRadialGradient() { return new RepeatingRadialGradientProperty(); }

// function repeating-conic-gradient()
// repeating-conic-gradient( [ <conic-gradient-syntax> ] )
class RepeatingConicGradientProperty {}

export function repeatingConicGradient(a: (ConicGradientSyntax)): RepeatingConicGradientProperty;
export function repeatingConicGradient() { return new RepeatingConicGradientProperty(); }

// type <color-stop-list>
// <linear-color-stop> , [ <linear-color-hint>? , <linear-color-stop> ]#
export type ColorStopList = ([LinearColorStop, void, RecurseTuple<([LinearColorHint, void, LinearColorStop])>]) | ([LinearColorStop, void, RecurseTuple<([void, void, LinearColorStop])>]);

// type <linear-color-stop>
// <color> <color-stop-length>?
export type LinearColorStop = ([Color, ColorStopLength]) | ([Color, void]);

// type <linear-color-hint>
// <length-percentage>
export type LinearColorHint = (LengthPercentage);

// type <color-stop-length>
// <length-percentage>{1,2}
export type ColorStopLength = (Repeat1to2<LengthPercentage>);

// type <angular-color-stop-list>
// <angular-color-stop> , [ <angular-color-hint>? , <angular-color-stop> ]#
export type AngularColorStopList = ([AngularColorStop, void, RecurseTuple<([AngularColorHint, void, AngularColorStop])>]) | ([AngularColorStop, void, RecurseTuple<([void, void, AngularColorStop])>]);

// type <angular-color-stop>
// <color> <color-stop-angle>?
export type AngularColorStop = ([Color, ColorStopAngle]) | ([Color, void]);

// type <angular-color-hint>
// <angle-percentage>
export type AngularColorHint = (AnglePercentage);

// type <color-stop-angle>
// <angle-percentage>{1,2}
export type ColorStopAngle = (Repeat1to2<AnglePercentage>);

// type <color-stop>
// <color-stop-length> | <color-stop-angle>
export type ColorStop = (ColorStopLength | ColorStopAngle);

// type <image-1D>
// <stripes()>
export type Image1D = (StripesProperty);

// function stripes()
// stripes( <color-stripe># )
class StripesProperty {}

export function stripes(a: RecurseTuple<ColorStripe>): StripesProperty;
export function stripes() { return new StripesProperty(); }

// type <color-stripe>
// <color> && [ <length-percentage> | <flex> ]?
export type ColorStripe = ((Color & (LengthPercentage | Flex))) | ((Color & void));

// function -webkit-image-set()
// undefined
class WebkitImageSetProperty {}

// function linear-gradient()
// linear-gradient( [ <linear-gradient-syntax> ] )
class LinearGradientProperty {}

export function linearGradient(a: (LinearGradientSyntax)): LinearGradientProperty;
export function linearGradient() { return new LinearGradientProperty(); }

// function radial-gradient()
// radial-gradient( [ <radial-gradient-syntax> ] )
class RadialGradientProperty {}

export function radialGradient(a: (RadialGradientSyntax)): RadialGradientProperty;
export function radialGradient() { return new RadialGradientProperty(); }

// type <radial-size>
// <radial-extent> | <length [0,∞]> | <length-percentage [0,∞]>{2}
export type RadialSize = (RadialExtent | number | Repeat2<LengthPercentage>);

// type <radial-extent>
// closest-corner | closest-side | farthest-corner | farthest-side
export type RadialExtent = ('closest-corner' | 'closest-side' | 'farthest-corner' | 'farthest-side');

// type <radial-shape>
// circle | ellipse
export type RadialShape = ('circle' | 'ellipse');

// type <link-param>
// param( <custom-property-name> <declaration-value>? )
export type LinkParam = ({ 'param': [[CustomPropertyName, DeclarationValue]] }) | ({ 'param': [[CustomPropertyName, void]] });

// type <counter-name>
// undefined

// type <reversed-counter-name>
// reversed( <counter-name> )
export type ReversedCounterName = ({ 'reversed': [CounterName] });

// function counter()
// counter( <counter-name>, <counter-style>? )
class CounterProperty {}

export function counter(a: CounterName, b: CounterStyle): CounterProperty;
export function counter(a: CounterName, b: void): CounterProperty;
export function counter() { return new CounterProperty(); }

// function counters()
// counters( <counter-name>, <string>, <counter-style>? )
class CountersProperty {}

export function counters(a: CounterName, b: string, c: CounterStyle): CountersProperty;
export function counters(a: CounterName, b: string, c: void): CountersProperty;
export function counters() { return new CountersProperty(); }

// type <counter>
// <counter()> | <counters()>
export type Counter = (CounterProperty | CountersProperty);

// type <clip-source>
// <url>
export type ClipSource = (Url);

// type <geometry-box>
// <shape-box> | fill-box | stroke-box | view-box
export type GeometryBox = (ShapeBox | 'fill-box' | 'stroke-box' | 'view-box');

// type <mask-reference>
// none | <image> | <mask-source>
export type MaskReference = ('none' | Image | MaskSource);

// type <mask-source>
// <url>
export type MaskSource = (Url);

// type <masking-mode>
// alpha | luminance | match-source
export type MaskingMode = ('alpha' | 'luminance' | 'match-source');

// type <compositing-operator>
// add | subtract | intersect | exclude
export type CompositingOperator = ('add' | 'subtract' | 'intersect' | 'exclude');

// type <mask-layer>
// <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <geometry-box> || [ <geometry-box> | no-clip ] || <compositing-operator> || <masking-mode>
export type MaskLayer = ((MaskReference | ([Position, (['/', BgSize])] | (RepeatStyle | (GeometryBox | ((GeometryBox | 'no-clip') | (CompositingOperator | MaskingMode))))))) | ((MaskReference | ([Position, void] | (RepeatStyle | (GeometryBox | ((GeometryBox | 'no-clip') | (CompositingOperator | MaskingMode)))))));

// type <namespace-prefix>
// <ident>
export type NamespacePrefix = (Ident);

// type <page-selector-list>
// <page-selector>#
export type PageSelectorList = (RecurseTuple<PageSelector>);

// type <page-selector>
// [ <ident-token>? <pseudo-page>* ]!
export type PageSelector = ((([IdentToken, RecurseAny<PseudoPage>]))) | ((([void, RecurseAny<PseudoPage>])));

// type <pseudo-page>
// ':' [ left | right | first | blank ]
export type PseudoPage = ([':', ('left' | 'right' | 'first' | 'blank')]);

// function paint()
// paint( <ident>, <declaration-value>? )
class PaintProperty {}

export function paint(a: Ident, b: DeclarationValue): PaintProperty;
export function paint(a: Ident, b: void): PaintProperty;
export function paint() { return new PaintProperty(); }

// function shape()
// shape( <'fill-rule'>? from <coordinate-pair>, <shape-command>#)
class ShapeProperty {}

export function shape(a: [FillRuleProperty, 'from', CoordinatePair], b: RecurseTuple<ShapeCommand>): ShapeProperty;
export function shape(a: [void, 'from', CoordinatePair], b: RecurseTuple<ShapeCommand>): ShapeProperty;
export function shape() { return new ShapeProperty(); }

// type <shape-command>
// <move-command> | <line-command> | <hv-line-command> | <curve-command> | <smooth-command> | <arc-command> | close
export type ShapeCommand = (MoveCommand | LineCommand | HvLineCommand | CurveCommand | SmoothCommand | ArcCommand | 'close');

// type <basic-shape>
// undefined
export type BasicShape = { 'inset': [[Repeat1to4<LengthPercentage>, (['round', BorderRadiusProperty])]] } | { 'inset': [[Repeat1to4<LengthPercentage>, void]] } | { 'xywh': [[Repeat2<LengthPercentage>, Repeat2<LengthPercentage>, (['round', BorderRadiusProperty])]] } | { 'xywh': [[Repeat2<LengthPercentage>, Repeat2<LengthPercentage>, void]] } | { 'rect': [[Repeat4<(LengthPercentage | 'auto')>, (['round', BorderRadiusProperty])]] } | { 'rect': [[Repeat4<(LengthPercentage | 'auto')>, void]] } | { 'circle': [[RadialSize, (['at', Position])]] } | { 'circle': [[RadialSize, void]] } | { 'circle': [[void, (['at', Position])]] } | { 'circle': [[void, void]] } | { 'ellipse': [[RadialSize, (['at', Position])]] } | { 'ellipse': [[RadialSize, void]] } | { 'ellipse': [[void, (['at', Position])]] } | { 'ellipse': [[void, void]] } | { 'polygon': [[FillRuleProperty, void], RecurseTuple<([LengthPercentage, LengthPercentage])>] } | { 'polygon': [[void, void], RecurseTuple<([LengthPercentage, LengthPercentage])>] } | { 'path': [[FillRuleProperty, void], string] } | { 'path': [[void, void], string] };

// type <basic-shape-rect>
// <inset()> | <rect()> | <xywh()>
export type BasicShapeRect = (InsetProperty | RectProperty | XywhProperty);

// type <shape-box>
// <visual-box> | margin-box
export type ShapeBox = (VisualBox | 'margin-box');

// type <generic-voice>
// [<age>? <gender> <integer>?]
export type GenericVoice = (([Age, Gender, number])) | (([Age, Gender, void])) | (([void, Gender, number])) | (([void, Gender, void]));

// type <ident-token>
// undefined

// type <function-token>
// undefined

// type <at-keyword-token>
// undefined

// type <hash-token>
// undefined

// type <string-token>
// undefined

// type <bad-string-token>
// undefined

// type <url-token>
// undefined

// type <bad-url-token>
// undefined

// type <delim-token>
// undefined

// type <number-token>
// undefined

// type <percentage-token>
// undefined

// type <dimension-token>
// undefined

// type <unicode-range-token>
// undefined

// type <whitespace-token>
// undefined

// type <CDO-token>
// undefined

// type <CDC-token>
// undefined

// type <colon-token>
// undefined

// type <semicolon-token>
// undefined

// type <comma-token>
// undefined

// type <[-token>
// undefined

// type <]-token>
// undefined

// type <(-token>
// undefined

// type <)-token>
// undefined

// type <{-token>
// undefined

// type <}-token>
// undefined

// type <eof-token>
// undefined

// type <an+b>
// odd | even | <integer> | <n-dimension> | '+'? n | -n | <ndashdigit-dimension> | '+'? <ndashdigit-ident> | <dashndashdigit-ident> | <n-dimension> <signed-integer> | '+'? n <signed-integer> | -n <signed-integer> | <ndash-dimension> <signless-integer> | '+'? n- <signless-integer> | -n- <signless-integer> | <n-dimension> ['+' | '-'] <signless-integer> | '+'? n ['+' | '-'] <signless-integer> | -n ['+' | '-'] <signless-integer>
export type An+b = ('odd' | 'even' | number | NDimension | ['+', 'n'] | [void, 'n'] | '-n' | NdashdigitDimension | ['+', NdashdigitIdent] | [void, NdashdigitIdent] | DashndashdigitIdent | [NDimension, SignedInteger] | ['+', 'n', SignedInteger] | [void, 'n', SignedInteger] | ['-n', SignedInteger] | [NdashDimension, SignlessInteger] | ['+', 'n-', SignlessInteger] | [void, 'n-', SignlessInteger] | ['-n-', SignlessInteger] | [NDimension, ('+' | '-'), SignlessInteger] | ['+', 'n', ('+' | '-'), SignlessInteger] | [void, 'n', ('+' | '-'), SignlessInteger] | ['-n', ('+' | '-'), SignlessInteger]);

// type <n-dimension>
// undefined

// type <ndash-dimension>
// undefined

// type <ndashdigit-dimension>
// undefined

// type <ndashdigit-ident>
// undefined

// type <dashndashdigit-ident>
// undefined

// type <signed-integer>
// undefined

// type <signless-integer>
// undefined

// type <block-contents>
// undefined

// type <declaration-list>
// undefined

// type <qualified-rule-list>
// undefined

// type <at-rule-list>
// undefined

// type <declaration-rule-list>
// undefined

// type <rule-list>
// undefined

// type <declaration-value>
// undefined

// type <any-value>
// undefined

// type <autospace>
// no-autospace | [ ideograph-alpha || ideograph-numeric || punctuation ] || [ insert | replace ]
export type Autospace = ('no-autospace' | ((('ideograph-alpha' | ('ideograph-numeric' | 'punctuation'))) | ('insert' | 'replace')));

// type <spacing-trim>
// space-all | normal | trim-auto | trim-start | space-first | trim-all
export type SpacingTrim = ('space-all' | 'normal' | 'trim-auto' | 'trim-start' | 'space-first' | 'trim-all');

// type <transform-function>
// undefined

// function scale()
// scale( [ <number> | <percentage> ]#{1,2} )
class ScaleProperty {}

export function scale(a: Repeat1to2<RecurseTuple<(number | Percentage)>>): ScaleProperty;
export function scale() { return new ScaleProperty(); }

// function scaleX()
// scaleX( [ <number> | <percentage> ] )
class ScaleXProperty {}

export function scaleX(a: (number | Percentage)): ScaleXProperty;
export function scaleX() { return new ScaleXProperty(); }

// function scaleY()
// scaleY( [ <number> | <percentage> ] )
class ScaleYProperty {}

export function scaleY(a: (number | Percentage)): ScaleYProperty;
export function scaleY() { return new ScaleYProperty(); }

// function matrix3d()
// matrix3d( <number>#{16} )
class Matrix3dProperty {}

export function matrix3d(a: Repeat16<RecurseTuple<number>>): Matrix3dProperty;
export function matrix3d() { return new Matrix3dProperty(); }

// function translate3d()
// translate3d( <length-percentage> , <length-percentage> , <length> )
class Translate3dProperty {}

export function translate3d(a: [LengthPercentage, void], b: [LengthPercentage, void], c: number): Translate3dProperty;
export function translate3d() { return new Translate3dProperty(); }

// function translateZ()
// translateZ( <length> )
class TranslateZProperty {}

export function translateZ(a: number): TranslateZProperty;
export function translateZ() { return new TranslateZProperty(); }

// function scale3d()
// scale3d( [ <number> | <percentage> ]#{3} )
class Scale3dProperty {}

export function scale3d(a: Repeat3<RecurseTuple<(number | Percentage)>>): Scale3dProperty;
export function scale3d() { return new Scale3dProperty(); }

// function scaleZ()
// scaleZ( [ <number> | <percentage> ] )
class ScaleZProperty {}

export function scaleZ(a: (number | Percentage)): ScaleZProperty;
export function scaleZ() { return new ScaleZProperty(); }

// function rotate3d()
// rotate3d( <number> , <number> , <number> , [ <angle> | <zero> ] )
class Rotate3dProperty {}

export function rotate3d(a: [number, void], b: [number, void], c: [number, void], d: (Angle | Zero)): Rotate3dProperty;
export function rotate3d() { return new Rotate3dProperty(); }

// function rotateX()
// rotateX( [ <angle> | <zero> ] )
class RotateXProperty {}

export function rotateX(a: (Angle | Zero)): RotateXProperty;
export function rotateX() { return new RotateXProperty(); }

// function rotateY()
// rotateY( [ <angle> | <zero> ] )
class RotateYProperty {}

export function rotateY(a: (Angle | Zero)): RotateYProperty;
export function rotateY() { return new RotateYProperty(); }

// function rotateZ()
// rotateZ( [ <angle> | <zero> ] )
class RotateZProperty {}

export function rotateZ(a: (Angle | Zero)): RotateZProperty;
export function rotateZ() { return new RotateZProperty(); }

// function perspective()
// perspective( [ <length [0,∞]> | none ] )
class PerspectiveProperty {}

export function perspective(a: (number | 'none')): PerspectiveProperty;
export function perspective() { return new PerspectiveProperty(); }

// type <transform-list>
// <transform-function>+
export type TransformList = (Recurse<TransformFunction>);

// type <transition-behavior-value>
// normal | allow-discrete
export type TransitionBehaviorValue = ('normal' | 'allow-discrete');

// type <single-transition>
// [ none | <single-transition-property> ] || <time> || <easing-function> || <time> || <transition-behavior-value>
export type SingleTransition = ((('none' | SingleTransitionProperty) | (Time | (EasingFunction | (Time | TransitionBehaviorValue)))));

// type <single-transition-property>
// all | <custom-ident>
export type SingleTransitionProperty = ('all' | CustomIdent);

// type <outline-line-style>
// undefined

// type <id>
// undefined

// type <target-name>
// undefined

// type <request-url-modifier>
// <crossorigin-modifier> | <integrity-modifier> | <referrerpolicy-modifier>
export type RequestUrlModifier = (CrossoriginModifier | IntegrityModifier | ReferrerpolicyModifier);

// function progress()
// undefined
class ProgressProperty {}

// type <progress()>
// progress(<calc-sum> from <calc-sum> to <calc-sum>)
export type Progress() = ({ 'progress': [[CalcSum, 'from', CalcSum, 'to', CalcSum]] });

// function media-progress()
// undefined
class MediaProgressProperty {}

// type <media-progress()>
// media-progress(<media-feature> from <calc-sum> to <calc-sum>)
export type MediaProgress() = ({ 'media-progress': [[MediaFeature, 'from', CalcSum, 'to', CalcSum]] });

// function container-progress()
// undefined
class ContainerProgressProperty {}

// type <container-progress()>
// container-progress(<size-feature> [ of <container-name> ]? from <calc-sum> to <calc-sum>)
export type ContainerProgress() = ({ 'container-progress': [[SizeFeature, (['of', ContainerName]), 'from', CalcSum, 'to', CalcSum]] }) | ({ 'container-progress': [[SizeFeature, void, 'from', CalcSum, 'to', CalcSum]] });

// type <progress>
// [ <percentage> | <number> | <'animation-timeline'> ]? && by <easing-function>
export type Progress = (((Percentage | number | AnimationTimelineProperty) & ['by', EasingFunction])) | ((void & ['by', EasingFunction]));

// function calc-mix()
// undefined
class CalcMixProperty {}

// type <calc-mix()>
// calc-mix( <progress>, <calc-sum>, <calc-sum> )
export type CalcMix() = ({ 'calc-mix': [Progress, CalcSum, CalcSum] });

// function transform-mix()
// undefined
class TransformMixProperty {}

// type <transform-mix()>
// transform-mix( <progress>, <transform-list>, <transform-list> )
export type TransformMix() = ({ 'transform-mix': [Progress, TransformList, TransformList] });

// function mix()
// undefined
class MixProperty {}

// type <mix()>
// mix( <progress> ';' <whole-value> ';' <whole-value> ) | mix( <progress> && of <'animation-name'> )
export type Mix() = ({ 'mix': [[Progress, ';', WholeValue, ';', WholeValue]] } | { 'mix': [(Progress & ['of', AnimationNameProperty])] });

// function first-valid()
// undefined
class FirstValidProperty {}

// type <first-valid()>
// first-valid( <declaration-value> [ ';' <declaration-value> ]* )
export type FirstValid() = ({ 'first-valid': [[DeclarationValue, RecurseAny<([';', DeclarationValue])>]] });

// function toggle()
// undefined
class ToggleProperty {}

// type <toggle()>
// toggle( <whole-value> [ ';' <whole-value> ]+ )
export type Toggle() = ({ 'toggle': [[WholeValue, Recurse<([';', WholeValue])>]] });

// function attr()
// attr( <attr-name> <attr-type>? , <declaration-value>?)
class AttrProperty {}

export function attr(a: [AttrName, AttrType, void], b: DeclarationValue): AttrProperty;
export function attr(a: [AttrName, AttrType, void], b: void): AttrProperty;
export function attr(a: [AttrName, void, void], b: DeclarationValue): AttrProperty;
export function attr(a: [AttrName, void, void], b: void): AttrProperty;
export function attr() { return new AttrProperty(); }

// type <attr-name>
// [ <ident-token> '|' ]? <ident-token>
export type AttrName = ([([IdentToken, '|']), IdentToken]) | ([void, IdentToken]);

// type <attr-type>
// string | url | ident | color | number | percentage | length | angle | time | frequency | flex | <dimension-unit>
export type AttrType = ('string' | 'url' | 'ident' | 'color' | 'number' | 'percentage' | 'length' | 'angle' | 'time' | 'frequency' | 'flex' | DimensionUnit);

// type <dimension-unit>
// undefined

// function random()
// random( <random-caching-options>? , <calc-sum>, <calc-sum>, [by <calc-sum>]? )
class RandomProperty {}

export function random(a: [RandomCachingOptions, void], b: CalcSum, c: CalcSum, d: (['by', CalcSum])): RandomProperty;
export function random(a: [RandomCachingOptions, void], b: CalcSum, c: CalcSum, d: void): RandomProperty;
export function random(a: [void, void], b: CalcSum, c: CalcSum, d: (['by', CalcSum])): RandomProperty;
export function random(a: [void, void], b: CalcSum, c: CalcSum, d: void): RandomProperty;
export function random() { return new RandomProperty(); }

// type <random-caching-options>
// <dashed-ident> || per-element
export type RandomCachingOptions = ((DashedIdent | 'per-element'));

// function random-item()
// random-item( <random-caching-options> ';' <declaration-value>? [ ';' <declaration-value>? ]* )
class RandomItemProperty {}

export function randomItem(a: [RandomCachingOptions, ';', DeclarationValue, RecurseAny<([';', DeclarationValue])>]): RandomItemProperty;
export function randomItem(a: [RandomCachingOptions, ';', DeclarationValue, RecurseAny<([';', void])>]): RandomItemProperty;
export function randomItem(a: [RandomCachingOptions, ';', void, RecurseAny<([';', DeclarationValue])>]): RandomItemProperty;
export function randomItem(a: [RandomCachingOptions, ';', void, RecurseAny<([';', void])>]): RandomItemProperty;
export function randomItem() { return new RandomItemProperty(); }

// function sibling-count()
// undefined
class SiblingCountProperty {}

// function sibling-index()
// undefined
class SiblingIndexProperty {}

// type <ident>
// undefined

// type <custom-ident>
// undefined

// type <dashed-ident>
// undefined

// type <string>
// undefined

// function url()
// url( <string> <url-modifier>* ) | <url-token>
class UrlProperty {}

export function url(a: [string, RecurseAny<UrlModifier>]): UrlProperty;
export function url(a: '-token'): UrlProperty;
export function url() { return new UrlProperty(); }

// function src()
// src( <string> <url-modifier>* )
class SrcProperty {}

export function src(a: [string, RecurseAny<UrlModifier>]): SrcProperty;
export function src() { return new SrcProperty(); }

// type <url>
// <url()> | <src()>
export type Url = (UrlProperty | SrcProperty);

// type <url-modifier>
// undefined

// type <integer>
// undefined

// type <number>
// undefined

// type <zero>
// undefined

// type <dimension>
// undefined

// type <percentage>
// undefined

// type <length-percentage>
// [ <length> | <percentage> ]
export type LengthPercentage = ((number | Percentage));

// type <frequency-percentage>
// [ <frequency> | <percentage> ]
export type FrequencyPercentage = ((Frequency | Percentage));

// type <angle-percentage>
// [ <angle> | <percentage> ]
export type AnglePercentage = ((Angle | Percentage));

// type <time-percentage>
// [ <time> | <percentage> ]
export type TimePercentage = ((Time | Percentage));

// type <ratio>
// <number [0,∞]> [ / <number [0,∞]> ]?
export type Ratio = ([number, (['/', number])]) | ([number, void]);

// type <length>
// undefined
export type Length = 'em' | 'rem' | 'ex' | 'rex' | 'cap' | 'rcap' | 'ch' | 'rch' | 'ic' | 'ric' | 'lh' | 'rlh' | 'vw' | 'svw' | 'lvw' | 'dvw' | 'vh' | 'svh' | 'lvh' | 'dvh' | 'vi' | 'svi' | 'lvi' | 'dvi' | 'vb' | 'svb' | 'lvb' | 'dvb' | 'vmin' | 'svmin' | 'lvmin' | 'dvmin' | 'vmax' | 'svmax' | 'lvmax' | 'dvmax' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';

// type <angle>
// undefined
export type Angle = 'deg' | 'grad' | 'rad' | 'turn';

// type <time>
// undefined
export type Time = 's' | 'ms';

// type <frequency>
// undefined
export type Frequency = 'Hz' | 'kHz';

// type <resolution>
// undefined
export type Resolution = 'dpi' | 'dpcm' | 'dppx' | 'x';

// type <position>
// [ [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right ] && [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]
export type Position = ((('left' | 'center' | 'right' | 'top' | 'bottom' | LengthPercentage) | (('left' | 'center' | 'right') & ('top' | 'center' | 'bottom')) | [('left' | 'center' | 'right' | LengthPercentage), ('top' | 'center' | 'bottom' | LengthPercentage)] | (([('left' | 'right'), LengthPercentage]) & ([('top' | 'bottom'), LengthPercentage]))));

// function calc()
// calc( <calc-sum> )
class CalcProperty {}

export function calc(a: CalcSum): CalcProperty;
export function calc() { return new CalcProperty(); }

// function min()
// min( <calc-sum># )
class MinProperty {}

export function min(a: RecurseTuple<CalcSum>): MinProperty;
export function min() { return new MinProperty(); }

// function max()
// max( <calc-sum># )
class MaxProperty {}

export function max(a: RecurseTuple<CalcSum>): MaxProperty;
export function max() { return new MaxProperty(); }

// function clamp()
// clamp( <calc-sum>#{3} )
class ClampProperty {}

export function clamp(a: Repeat3<RecurseTuple<CalcSum>>): ClampProperty;
export function clamp() { return new ClampProperty(); }

// function round()
// round( <rounding-strategy>?, <calc-sum>, <calc-sum> )
class RoundProperty {}

export function round(a: RoundingStrategy, b: CalcSum, c: CalcSum): RoundProperty;
export function round(a: void, b: CalcSum, c: CalcSum): RoundProperty;
export function round() { return new RoundProperty(); }

// type <rounding-strategy>
// nearest | up | down | to-zero
export type RoundingStrategy = ('nearest' | 'up' | 'down' | 'to-zero');

// function mod()
// mod( <calc-sum>, <calc-sum> )
class ModProperty {}

export function mod(a: CalcSum, b: CalcSum): ModProperty;
export function mod() { return new ModProperty(); }

// function rem()
// rem( <calc-sum>, <calc-sum> )
class RemProperty {}

export function rem(a: CalcSum, b: CalcSum): RemProperty;
export function rem() { return new RemProperty(); }

// function sin()
// sin( <calc-sum> )
class SinProperty {}

export function sin(a: CalcSum): SinProperty;
export function sin() { return new SinProperty(); }

// function cos()
// cos( <calc-sum> )
class CosProperty {}

export function cos(a: CalcSum): CosProperty;
export function cos() { return new CosProperty(); }

// function tan()
// tan( <calc-sum> )
class TanProperty {}

export function tan(a: CalcSum): TanProperty;
export function tan() { return new TanProperty(); }

// function asin()
// asin( <calc-sum> )
class AsinProperty {}

export function asin(a: CalcSum): AsinProperty;
export function asin() { return new AsinProperty(); }

// function acos()
// acos( <calc-sum> )
class AcosProperty {}

export function acos(a: CalcSum): AcosProperty;
export function acos() { return new AcosProperty(); }

// function atan()
// atan( <calc-sum> )
class AtanProperty {}

export function atan(a: CalcSum): AtanProperty;
export function atan() { return new AtanProperty(); }

// function atan2()
// atan2( <calc-sum>, <calc-sum> )
class Atan2Property {}

export function atan2(a: CalcSum, b: CalcSum): Atan2Property;
export function atan2() { return new Atan2Property(); }

// function pow()
// pow( <calc-sum>, <calc-sum> )
class PowProperty {}

export function pow(a: CalcSum, b: CalcSum): PowProperty;
export function pow() { return new PowProperty(); }

// function sqrt()
// sqrt( <calc-sum> )
class SqrtProperty {}

export function sqrt(a: CalcSum): SqrtProperty;
export function sqrt() { return new SqrtProperty(); }

// function hypot()
// hypot( <calc-sum># )
class HypotProperty {}

export function hypot(a: RecurseTuple<CalcSum>): HypotProperty;
export function hypot() { return new HypotProperty(); }

// function log()
// log( <calc-sum>, <calc-sum>? )
class LogProperty {}

export function log(a: CalcSum, b: CalcSum): LogProperty;
export function log(a: CalcSum, b: void): LogProperty;
export function log() { return new LogProperty(); }

// function exp()
// exp( <calc-sum> )
class ExpProperty {}

export function exp(a: CalcSum): ExpProperty;
export function exp() { return new ExpProperty(); }

// function abs()
// abs( <calc-sum> )
class AbsProperty {}

export function abs(a: CalcSum): AbsProperty;
export function abs() { return new AbsProperty(); }

// function sign()
// sign( <calc-sum> )
class SignProperty {}

export function sign(a: CalcSum): SignProperty;
export function sign() { return new SignProperty(); }

// type <calc-sum>
// <calc-product> [ [ '+' | '-' ] <calc-product> ]*
export type CalcSum = ([CalcProduct, RecurseAny<([('+' | '-'), CalcProduct])>]);

// type <calc-product>
// <calc-value> [ [ '*' | '/' ] <calc-value> ]*
export type CalcProduct = ([CalcValue, RecurseAny<([('*' | '/'), CalcValue])>]);

// type <calc-value>
// <number> | <dimension> | <percentage> | <calc-keyword> | ( <calc-sum> )
export type CalcValue = (number | Dimension | Percentage | CalcKeyword | (CalcSum));

// type <calc-keyword>
// e | pi | infinity | -infinity | NaN
export type CalcKeyword = ('e' | 'pi' | 'infinity' | '-infinity' | 'NaN');

// type <quirky-length>
// undefined

// type <custom-property-name>
// undefined

// function var()
// var( <custom-property-name> , <declaration-value>? )
class VarProperty {}

export function var(a: [CustomPropertyName, void], b: DeclarationValue): VarProperty;
export function var(a: [CustomPropertyName, void], b: void): VarProperty;
export function var() { return new VarProperty(); }

// type <vt-type-selector>
// '*' | <custom-ident>#
export type VtTypeSelector = ('*' | RecurseTuple<CustomIdent>);

// type <pt-name-selector>
// '*' | <custom-ident>
export type PtNameSelector = ('*' | CustomIdent);

// type <animateable-feature>
// scroll-position | contents | <custom-ident>
export type AnimateableFeature = ('scroll-position' | 'contents' | CustomIdent);

// type <paint>
// none | <image> | <svg-paint>
export type Paint = ('none' | Image | SvgPaint);

// type <svg-paint>
// child | child( <integer> )
export type SvgPaint = ('child' | { 'child': [number] });

// type <filter-value-list>
// [ <filter-function> | <url> ]+
export type FilterValueList = (Recurse<(FilterFunction | Url)>);

// type <filter-function>
// <blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>
export type FilterFunction = (BlurProperty | BrightnessProperty | ContrastProperty | DropShadowProperty | GrayscaleProperty | HueRotateProperty | InvertProperty | OpacityProperty | SepiaProperty | SaturateProperty);

// type <number-optional-number>
// <number> <number>?
export type NumberOptionalNumber = ([number, number]) | ([number, void]);

// function filter()
// filter( [ <image> | <string> ], <filter-value-list> )
class FilterProperty {}

export function filter(a: (Image | string), b: FilterValueList): FilterProperty;
export function filter() { return new FilterProperty(); }

// type <source-size-list>
// <source-size>#? , <source-size-value>
export type SourceSizeList = ([RecurseTuple<SourceSize>, void, SourceSizeValue]) | ([void, void, SourceSizeValue]);

// type <source-size>
// <media-condition> <source-size-value> | auto
export type SourceSize = ([MediaCondition, SourceSizeValue] | 'auto');

// type <source-size-value>
// <length> | auto
export type SourceSizeValue = (number | 'auto');

// type <media-query-list>
// undefined

// type <media-query>
// <media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?
export type MediaQuery = (MediaCondition | [('not' | 'only'), MediaType, (['and', MediaConditionWithoutOr])] | [('not' | 'only'), MediaType, void] | [void, MediaType, (['and', MediaConditionWithoutOr])] | [void, MediaType, void]);

// type <media-type>
// <ident>
export type MediaType = (Ident);

// type <media-condition>
// <media-not> | <media-in-parens> [ <media-and>* | <media-or>* ]
export type MediaCondition = (MediaNot | [MediaInParens, (RecurseAny<MediaAnd> | RecurseAny<MediaOr>)]);

// type <media-condition-without-or>
// <media-not> | <media-in-parens> <media-and>*
export type MediaConditionWithoutOr = (MediaNot | [MediaInParens, RecurseAny<MediaAnd>]);

// type <media-not>
// not <media-in-parens>
export type MediaNot = (['not', MediaInParens]);

// type <media-and>
// and <media-in-parens>
export type MediaAnd = (['and', MediaInParens]);

// type <media-or>
// or <media-in-parens>
export type MediaOr = (['or', MediaInParens]);

// type <media-in-parens>
// ( <media-condition> ) | ( <media-feature> ) | <general-enclosed>
export type MediaInParens = ((MediaCondition) | (MediaFeature) | GeneralEnclosed);

// type <media-feature>
// ( [ <mf-plain> | <mf-boolean> | <mf-range> ] )
export type MediaFeature = (((MfPlain | MfBoolean | MfRange)));

// type <mf-plain>
// <mf-name> : <mf-value>
export type MfPlain = ([MfName, ':', MfValue]);

// type <mf-boolean>
// <mf-name>
export type MfBoolean = (MfName);

// type <mf-range>
// <mf-name> <mf-comparison> <mf-value> | <mf-value> <mf-comparison> <mf-name> | <mf-value> <mf-lt> <mf-name> <mf-lt> <mf-value> | <mf-value> <mf-gt> <mf-name> <mf-gt> <mf-value>
export type MfRange = ([MfName, MfComparison, MfValue] | [MfValue, MfComparison, MfName] | [MfValue, MfLt, MfName, MfLt, MfValue] | [MfValue, MfGt, MfName, MfGt, MfValue]);

// type <mf-name>
// <ident>
export type MfName = (Ident);

// type <mf-value>
// <number> | <dimension> | <ident> | <ratio>
export type MfValue = (number | Dimension | Ident | Ratio);

// type <mf-lt>
// '<' '='?
export type MfLt = ('<' '=') | (void);

// type <mf-gt>
// '>' '='?
export type MfGt = (['>', '=']) | (['>', void]);

// type <mf-eq>
// '='
export type MfEq = ('=');

// type <mf-comparison>
// <mf-lt> | <mf-gt> | <mf-eq>
export type MfComparison = (MfLt | MfGt | MfEq);

// type <general-enclosed>
// [ <function-token> <any-value>? ) ] | [ ( <any-value>? ) ]
export type GeneralEnclosed = (([FunctionToken, AnyValue, ')']) | ([FunctionToken, void, ')']) | ((AnyValue)) | ((void)));

// type <mq-boolean>
// undefined

// type <offset-path>
// <ray()> | <url> | <basic-shape>
export type OffsetPath = (RayProperty | Url | BasicShape);

// function ray()
// ray( <angle> && <ray-size>? && contain? && [at <position>]? )
class RayProperty {}

export function ray(a: (Angle & (RaySize & ('contain' & (['at', Position]))))): RayProperty;
export function ray(a: (Angle & (RaySize & ('contain' & void)))): RayProperty;
export function ray(a: (Angle & (RaySize & (void & (['at', Position]))))): RayProperty;
export function ray(a: (Angle & (RaySize & (void & void)))): RayProperty;
export function ray(a: (Angle & (void & ('contain' & (['at', Position]))))): RayProperty;
export function ray(a: (Angle & (void & ('contain' & void)))): RayProperty;
export function ray(a: (Angle & (void & (void & (['at', Position]))))): RayProperty;
export function ray(a: (Angle & (void & (void & void)))): RayProperty;
export function ray() { return new RayProperty(); }

// type <ray-size>
// closest-side | closest-corner | farthest-side | farthest-corner | sides
export type RaySize = ('closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | 'sides');

// function scroll()
// scroll( [ <scroller> || <axis> ]? )
class ScrollProperty {}

export function scroll(a: ((Scroller | Axis))): ScrollProperty;
export function scroll(a: void): ScrollProperty;
export function scroll() { return new ScrollProperty(); }

// type <axis>
// block | inline | x | y
export type Axis = ('block' | 'inline' | 'x' | 'y');

// type <scroller>
// root | nearest | self
export type Scroller = ('root' | 'nearest' | 'self');

// function view()
// view( [ <axis> || <'view-timeline-inset'> ]? )
class ViewProperty {}

export function view(a: ((Axis | ViewTimelineInsetProperty))): ViewProperty;
export function view(a: void): ViewProperty;
export function view() { return new ViewProperty(); }

// type <timeline-range-name>
// undefined

// type <selector-list>
// <complex-selector-list>
export type SelectorList = (ComplexSelectorList);

// type <complex-selector-list>
// <complex-selector>#
export type ComplexSelectorList = (RecurseTuple<ComplexSelector>);

// type <complex-real-selector-list>
// <complex-real-selector>#
export type ComplexRealSelectorList = (RecurseTuple<ComplexRealSelector>);

// type <compound-selector-list>
// <compound-selector>#
export type CompoundSelectorList = (RecurseTuple<CompoundSelector>);

// type <simple-selector-list>
// <simple-selector>#
export type SimpleSelectorList = (RecurseTuple<SimpleSelector>);

// type <relative-selector-list>
// <relative-selector>#
export type RelativeSelectorList = (RecurseTuple<RelativeSelector>);

// type <relative-real-selector-list>
// <relative-real-selector>#
export type RelativeRealSelectorList = (RecurseTuple<RelativeRealSelector>);

// type <complex-selector>
// <complex-selector-unit> [ <combinator>? <complex-selector-unit> ]*
export type ComplexSelector = ([ComplexSelectorUnit, RecurseAny<([Combinator, ComplexSelectorUnit])>]) | ([ComplexSelectorUnit, RecurseAny<([void, ComplexSelectorUnit])>]);

// type <complex-selector-unit>
// [ <compound-selector>? <pseudo-compound-selector>* ]!
export type ComplexSelectorUnit = ((([CompoundSelector, RecurseAny<PseudoCompoundSelector>]))) | ((([void, RecurseAny<PseudoCompoundSelector>])));

// type <complex-real-selector>
// <compound-selector> [ <combinator>? <compound-selector> ]*
export type ComplexRealSelector = ([CompoundSelector, RecurseAny<([Combinator, CompoundSelector])>]) | ([CompoundSelector, RecurseAny<([void, CompoundSelector])>]);

// type <relative-selector>
// <combinator>? <complex-selector>
export type RelativeSelector = ([Combinator, ComplexSelector]) | ([void, ComplexSelector]);

// type <relative-real-selector>
// <combinator>? <complex-real-selector>
export type RelativeRealSelector = ([Combinator, ComplexRealSelector]) | ([void, ComplexRealSelector]);

// type <compound-selector>
// [ <type-selector>? <subclass-selector>* ]!
export type CompoundSelector = ((([TypeSelector, RecurseAny<SubclassSelector>]))) | ((([void, RecurseAny<SubclassSelector>])));

// type <pseudo-compound-selector>
// <pseudo-element-selector> <pseudo-class-selector>*
export type PseudoCompoundSelector = ([PseudoElementSelector, RecurseAny<PseudoClassSelector>]);

// type <simple-selector>
// <type-selector> | <subclass-selector>
export type SimpleSelector = (TypeSelector | SubclassSelector);

// type <combinator>
// '>' | '+' | '~'
export type Combinator = ('>' | '+' | '~');

// type <wq-name>
// <ns-prefix>? <ident-token>
export type WqName = ([NsPrefix, IdentToken]) | ([void, IdentToken]);

// type <ns-prefix>
// [ <ident-token> | '*' ]? '|'
export type NsPrefix = ([(IdentToken | '*'), '|']) | ([void, '|']);

// type <type-selector>
// <wq-name> | <ns-prefix>? '*'
export type TypeSelector = (WqName | [NsPrefix, '*'] | [void, '*']);

// type <subclass-selector>
// <id-selector> | <class-selector> | <attribute-selector> | <pseudo-class-selector>
export type SubclassSelector = (IdSelector | ClassSelector | AttributeSelector | PseudoClassSelector);

// type <id-selector>
// <hash-token>
export type IdSelector = (HashToken);

// type <class-selector>
// '.' <ident-token>
export type ClassSelector = (['.', IdentToken]);

// type <attribute-selector>
// '[' <wq-name> ']' | '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
export type AttributeSelector = ('[' <wq-name> ']' | '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']');

// type <attr-matcher>
// [ '~' | '|' | '^' | '$' | '*' ]? '='
export type AttrMatcher = ([('~' | '|' | '^' | '$' | '*'), '=']) | ([void, '=']);

// type <attr-modifier>
// i | s
export type AttrModifier = ('i' | 's');

// type <pseudo-class-selector>
// ':' <ident-token> | ':' <function-token> <any-value> ')'
export type PseudoClassSelector = ([':', IdentToken] | [':', FunctionToken, AnyValue, ')']);

// type <pseudo-element-selector>
// ':' <pseudo-class-selector> | <legacy-pseudo-element-selector>
export type PseudoElementSelector = ([':', PseudoClassSelector] | LegacyPseudoElementSelector);

// type <legacy-pseudo-element-selector>
// ':' [before | after | first-line | first-letter]
export type LegacyPseudoElementSelector = ([':', ('before' | 'after' | 'first-line' | 'first-letter')]);

// type <forgiving-selector-list>
// undefined

// property z-index
// auto | <integer> | inherit
class ZIndexProperty {}

export function zIndex(source: 'auto' | number | 'inherit'): ZIndexProperty
export function zIndex() { return new ZIndexProperty() }

// property page-break-before
// auto | always | avoid | left | right | inherit
class PageBreakBeforeProperty {}

export function pageBreakBefore(source: 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'inherit'): PageBreakBeforeProperty
export function pageBreakBefore() { return new PageBreakBeforeProperty() }

// property page-break-after
// auto | always | avoid | left | right | inherit
class PageBreakAfterProperty {}

export function pageBreakAfter(source: 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'inherit'): PageBreakAfterProperty
export function pageBreakAfter() { return new PageBreakAfterProperty() }

// property page-break-inside
// avoid | auto | inherit
class PageBreakInsideProperty {}

export function pageBreakInside(source: 'avoid' | 'auto' | 'inherit'): PageBreakInsideProperty
export function pageBreakInside() { return new PageBreakInsideProperty() }

// property cx
// <length-percentage>
class CxProperty {}

export function cx(source: LengthPercentage): CxProperty
export function cx() { return new CxProperty() }

// property cy
// <length-percentage>
class CyProperty {}

export function cy(source: LengthPercentage): CyProperty
export function cy() { return new CyProperty() }

// property r
// <length-percentage>
class RProperty {}

export function r(source: LengthPercentage): RProperty
export function r() { return new RProperty() }

// property rx
// <length-percentage> | auto
class RxProperty {}

export function rx(source: LengthPercentage | 'auto'): RxProperty
export function rx() { return new RxProperty() }

// property ry
// <length-percentage> | auto
class RyProperty {}

export function ry(source: LengthPercentage | 'auto'): RyProperty
export function ry() { return new RyProperty() }

// property x
// <length-percentage>
class XProperty {}

export function x(source: LengthPercentage): XProperty
export function x() { return new XProperty() }

// property y
// <length-percentage>
class YProperty {}

export function y(source: LengthPercentage): YProperty
export function y() { return new YProperty() }

// property vector-effect
// none | non-scaling-stroke | non-scaling-size | non-rotation | fixed-position
class VectorEffectProperty {}

export function vectorEffect(source: 'none' | 'non-scaling-stroke' | 'non-scaling-size' | 'non-rotation' | 'fixed-position'): VectorEffectProperty
export function vectorEffect() { return new VectorEffectProperty() }

// property d
// none | <string>
class DProperty {}

export function d(source: 'none' | string): DProperty
export function d() { return new DProperty() }

// property shape-subtract
// none | [ <basic-shape>| <uri> ]+
class ShapeSubtractProperty {}

// property text-anchor
// start | middle | end
class TextAnchorProperty {}

export function textAnchor(source: 'start' | 'middle' | 'end'): TextAnchorProperty
export function textAnchor() { return new TextAnchorProperty() }

// property fill
// <paint>
class FillProperty {}

export function fill(source: Paint): FillProperty
export function fill() { return new FillProperty() }

// property stroke
// <paint>
class StrokeProperty {}

export function stroke(source: Paint): StrokeProperty
export function stroke() { return new StrokeProperty() }

// property marker-start
// none | <marker-ref>
class MarkerStartProperty {}

export function markerStart(source: 'none' | MarkerRef): MarkerStartProperty
export function markerStart() { return new MarkerStartProperty() }

// property marker-mid
// none | <marker-ref>
class MarkerMidProperty {}

export function markerMid(source: 'none' | MarkerRef): MarkerMidProperty
export function markerMid() { return new MarkerMidProperty() }

// property marker-end
// none | <marker-ref>
class MarkerEndProperty {}

export function markerEnd(source: 'none' | MarkerRef): MarkerEndProperty
export function markerEnd() { return new MarkerEndProperty() }

// property marker
// none | <marker-ref>
class MarkerProperty {}

export function marker(source: 'none' | MarkerRef): MarkerProperty
export function marker() { return new MarkerProperty() }

// property paint-order
// normal | [ fill || stroke || markers ]
class PaintOrderProperty {}

export function paintOrder(source: 'normal' | (('fill' | ('stroke' | 'markers')))): PaintOrderProperty
export function paintOrder() { return new PaintOrderProperty() }

// property color-interpolation
// auto | sRGB | linearRGB
class ColorInterpolationProperty {}

export function colorInterpolation(source: 'auto' | 'sRGB' | 'linearRGB'): ColorInterpolationProperty
export function colorInterpolation() { return new ColorInterpolationProperty() }

// property shape-rendering
// auto | optimizeSpeed | crispEdges | geometricPrecision
class ShapeRenderingProperty {}

export function shapeRendering(source: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision'): ShapeRenderingProperty
export function shapeRendering() { return new ShapeRenderingProperty() }

// property text-rendering
// auto | optimizeSpeed | optimizeLegibility | geometricPrecision
class TextRenderingProperty {}

export function textRendering(source: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision'): TextRenderingProperty
export function textRendering() { return new TextRenderingProperty() }

// property pointer-events
// auto | bounding-box | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | none
class PointerEventsProperty {}

export function pointerEvents(source: 'auto' | 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none'): PointerEventsProperty
export function pointerEvents() { return new PointerEventsProperty() }

// property -webkit-text-fill-color
// <color>
class WebkitTextFillColorProperty {}

export function webkitTextFillColor(source: Color): WebkitTextFillColorProperty
export function webkitTextFillColor() { return new WebkitTextFillColorProperty() }

// property -webkit-text-stroke-color
// <color>
class WebkitTextStrokeColorProperty {}

export function webkitTextStrokeColor(source: Color): WebkitTextStrokeColorProperty
export function webkitTextStrokeColor() { return new WebkitTextStrokeColorProperty() }

// property -webkit-text-stroke-width
// <line-width>
class WebkitTextStrokeWidthProperty {}

export function webkitTextStrokeWidth(source: LineWidth): WebkitTextStrokeWidthProperty
export function webkitTextStrokeWidth() { return new WebkitTextStrokeWidthProperty() }

// property -webkit-text-stroke
// <line-width> || <color>
class WebkitTextStrokeProperty {}

export function webkitTextStroke(source: (LineWidth | Color)): WebkitTextStrokeProperty
export function webkitTextStroke() { return new WebkitTextStrokeProperty() }

// property touch-action
// auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation
class TouchActionProperty {}

export function touchAction(source: 'auto' | 'none' | ((('pan-x' | 'pan-left' | 'pan-right') | (('pan-y' | 'pan-up' | 'pan-down') | 'pinch-zoom'))) | 'manipulation'): TouchActionProperty
export function touchAction() { return new TouchActionProperty() }

// property mix-blend-mode
// <blend-mode> | plus-darker | plus-lighter
class MixBlendModeProperty {}

export function mixBlendMode(source: BlendMode | 'plus-darker' | 'plus-lighter'): MixBlendModeProperty
export function mixBlendMode() { return new MixBlendModeProperty() }

// property isolation
// <isolation-mode>
class IsolationProperty {}

export function isolation(source: IsolationMode): IsolationProperty
export function isolation() { return new IsolationProperty() }

// property background-blend-mode
// <mix-blend-mode>#
class BackgroundBlendModeProperty {}

export function backgroundBlendMode(source: RecurseTuple<MixBlendMode>): BackgroundBlendModeProperty
export function backgroundBlendMode() { return new BackgroundBlendModeProperty() }

// property align-content
// normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>
class AlignContentProperty {}

export function alignContent(source: 'normal' | BaselinePosition | ContentDistribution | [OverflowPosition, ContentPosition] | [void, ContentPosition]): AlignContentProperty
export function alignContent() { return new AlignContentProperty() }

// property justify-content
// normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]
class JustifyContentProperty {}

export function justifyContent(source: 'normal' | ContentDistribution | [OverflowPosition, (ContentPosition | 'left' | 'right')] | [void, (ContentPosition | 'left' | 'right')]): JustifyContentProperty
export function justifyContent() { return new JustifyContentProperty() }

// property place-content
// <'align-content'> <'justify-content'>?
class PlaceContentProperty {}

export function placeContent(source: [AlignContentProperty, JustifyContentProperty]): PlaceContentProperty
export function placeContent(source: [AlignContentProperty, void]): PlaceContentProperty
export function placeContent() { return new PlaceContentProperty() }

// property justify-self
// auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]
class JustifySelfProperty {}

export function justifySelf(source: 'auto' | 'normal' | 'stretch' | BaselinePosition | [OverflowPosition, (SelfPosition | 'left' | 'right')] | [void, (SelfPosition | 'left' | 'right')]): JustifySelfProperty
export function justifySelf() { return new JustifySelfProperty() }

// property align-self
// auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>
class AlignSelfProperty {}

export function alignSelf(source: 'auto' | 'normal' | 'stretch' | BaselinePosition | [OverflowPosition, SelfPosition] | [void, SelfPosition]): AlignSelfProperty
export function alignSelf() { return new AlignSelfProperty() }

// property place-self
// <'align-self'> <'justify-self'>?
class PlaceSelfProperty {}

export function placeSelf(source: [AlignSelfProperty, JustifySelfProperty]): PlaceSelfProperty
export function placeSelf(source: [AlignSelfProperty, void]): PlaceSelfProperty
export function placeSelf() { return new PlaceSelfProperty() }

// property justify-items
// normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]
class JustifyItemsProperty {}

export function justifyItems(source: 'normal' | 'stretch' | BaselinePosition | [OverflowPosition, (SelfPosition | 'left' | 'right')] | [void, (SelfPosition | 'left' | 'right')] | 'legacy' | ('legacy' & ('left' | 'right' | 'center'))): JustifyItemsProperty
export function justifyItems() { return new JustifyItemsProperty() }

// property align-items
// normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]
class AlignItemsProperty {}

export function alignItems(source: 'normal' | 'stretch' | BaselinePosition | ([OverflowPosition, SelfPosition]) | ([void, SelfPosition])): AlignItemsProperty
export function alignItems() { return new AlignItemsProperty() }

// property place-items
// <'align-items'> <'justify-items'>?
class PlaceItemsProperty {}

export function placeItems(source: [AlignItemsProperty, JustifyItemsProperty]): PlaceItemsProperty
export function placeItems(source: [AlignItemsProperty, void]): PlaceItemsProperty
export function placeItems() { return new PlaceItemsProperty() }

// property row-gap
// normal | <length-percentage [0,∞]>
class RowGapProperty {}

export function rowGap(source: 'normal' | LengthPercentage): RowGapProperty
export function rowGap() { return new RowGapProperty() }

// property column-gap
// normal | <length-percentage [0,∞]>
class ColumnGapProperty {}

export function columnGap(source: 'normal' | LengthPercentage): ColumnGapProperty
export function columnGap() { return new ColumnGapProperty() }

// property gap
// <'row-gap'> <'column-gap'>?
class GapProperty {}

export function gap(source: [RowGapProperty, ColumnGapProperty]): GapProperty
export function gap(source: [RowGapProperty, void]): GapProperty
export function gap() { return new GapProperty() }

// property anchor-name
// none | <dashed-ident>#
class AnchorNameProperty {}

export function anchorName(source: 'none' | RecurseTuple<DashedIdent>): AnchorNameProperty
export function anchorName() { return new AnchorNameProperty() }

// property anchor-default
// <anchor-element>
class AnchorDefaultProperty {}

export function anchorDefault(source: AnchorElement): AnchorDefaultProperty
export function anchorDefault() { return new AnchorDefaultProperty() }

// property inset-area
// none | <inset-area-span> [ / <inset-area-span> ]?
class InsetAreaProperty {}

export function insetArea(source: 'none' | [InsetAreaSpan, (['/', InsetAreaSpan])] | [InsetAreaSpan, void]): InsetAreaProperty
export function insetArea() { return new InsetAreaProperty() }

// property position-fallback
// none | <dashed-ident>
class PositionFallbackProperty {}

export function positionFallback(source: 'none' | DashedIdent): PositionFallbackProperty
export function positionFallback() { return new PositionFallbackProperty() }

// property position-fallback-bounds
// normal | <dashed-ident>
class PositionFallbackBoundsProperty {}

export function positionFallbackBounds(source: 'normal' | DashedIdent): PositionFallbackBoundsProperty
export function positionFallbackBounds() { return new PositionFallbackBoundsProperty() }

// property animation-duration
// [ auto | <time [0s,∞]> ]#
class AnimationDurationProperty {}

export function animationDuration(source: RecurseTuple<('auto' | Time)>): AnimationDurationProperty
export function animationDuration() { return new AnimationDurationProperty() }

// property animation-composition
// <single-animation-composition>#
class AnimationCompositionProperty {}

export function animationComposition(source: RecurseTuple<SingleAnimationComposition>): AnimationCompositionProperty
export function animationComposition() { return new AnimationCompositionProperty() }

// property animation-timeline
// <single-animation-timeline>#
class AnimationTimelineProperty {}

export function animationTimeline(source: RecurseTuple<SingleAnimationTimeline>): AnimationTimelineProperty
export function animationTimeline() { return new AnimationTimelineProperty() }

// property animation-name
// [ none | <keyframes-name> ]#
class AnimationNameProperty {}

export function animationName(source: RecurseTuple<('none' | KeyframesName)>): AnimationNameProperty
export function animationName() { return new AnimationNameProperty() }

// property animation-timing-function
// <easing-function>#
class AnimationTimingFunctionProperty {}

export function animationTimingFunction(source: RecurseTuple<EasingFunction>): AnimationTimingFunctionProperty
export function animationTimingFunction() { return new AnimationTimingFunctionProperty() }

// property animation-iteration-count
// <single-animation-iteration-count>#
class AnimationIterationCountProperty {}

export function animationIterationCount(source: RecurseTuple<SingleAnimationIterationCount>): AnimationIterationCountProperty
export function animationIterationCount() { return new AnimationIterationCountProperty() }

// property animation-direction
// <single-animation-direction>#
class AnimationDirectionProperty {}

export function animationDirection(source: RecurseTuple<SingleAnimationDirection>): AnimationDirectionProperty
export function animationDirection() { return new AnimationDirectionProperty() }

// property animation-play-state
// <single-animation-play-state>#
class AnimationPlayStateProperty {}

export function animationPlayState(source: RecurseTuple<SingleAnimationPlayState>): AnimationPlayStateProperty
export function animationPlayState() { return new AnimationPlayStateProperty() }

// property animation-delay
// <time>#
class AnimationDelayProperty {}

export function animationDelay(source: RecurseTuple<Time>): AnimationDelayProperty
export function animationDelay() { return new AnimationDelayProperty() }

// property animation-fill-mode
// <single-animation-fill-mode>#
class AnimationFillModeProperty {}

export function animationFillMode(source: RecurseTuple<SingleAnimationFillMode>): AnimationFillModeProperty
export function animationFillMode() { return new AnimationFillModeProperty() }

// property animation
// <single-animation>#
class AnimationProperty {}

export function animation(source: RecurseTuple<SingleAnimation>): AnimationProperty
export function animation() { return new AnimationProperty() }

// property background-position
// <bg-position>#
class BackgroundPositionProperty {}

export function backgroundPosition(source: RecurseTuple<BgPosition>): BackgroundPositionProperty
export function backgroundPosition() { return new BackgroundPositionProperty() }

// property background-position-x
// [ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#
class BackgroundPositionXProperty {}

export function backgroundPositionX(source: RecurseTuple<('center' | (([('left' | 'right' | 'x-start' | 'x-end'), LengthPercentage])) | (([('left' | 'right' | 'x-start' | 'x-end'), void])) | (([void, LengthPercentage])) | (([void, void])))>): BackgroundPositionXProperty
export function backgroundPositionX() { return new BackgroundPositionXProperty() }

// property background-position-y
// [ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#
class BackgroundPositionYProperty {}

export function backgroundPositionY(source: RecurseTuple<('center' | (([('top' | 'bottom' | 'y-start' | 'y-end'), LengthPercentage])) | (([('top' | 'bottom' | 'y-start' | 'y-end'), void])) | (([void, LengthPercentage])) | (([void, void])))>): BackgroundPositionYProperty
export function backgroundPositionY() { return new BackgroundPositionYProperty() }

// property background-position-inline
// [ center | [ start | end ]? <length-percentage>? ]#
class BackgroundPositionInlineProperty {}

export function backgroundPositionInline(source: RecurseTuple<('center' | [('start' | 'end'), LengthPercentage] | [('start' | 'end'), void] | [void, LengthPercentage] | [void, void])>): BackgroundPositionInlineProperty
export function backgroundPositionInline() { return new BackgroundPositionInlineProperty() }

// property background-position-block
// [ center | [ start | end ]? <length-percentage>? ]#
class BackgroundPositionBlockProperty {}

export function backgroundPositionBlock(source: RecurseTuple<('center' | [('start' | 'end'), LengthPercentage] | [('start' | 'end'), void] | [void, LengthPercentage] | [void, void])>): BackgroundPositionBlockProperty
export function backgroundPositionBlock() { return new BackgroundPositionBlockProperty() }

// property background-clip
// <visual-box>#
class BackgroundClipProperty {}

export function backgroundClip(source: RecurseTuple<VisualBox>): BackgroundClipProperty
export function backgroundClip() { return new BackgroundClipProperty() }

// property background-tbd
// <bg-layer>#
class BackgroundTbdProperty {}

export function backgroundTbd(source: RecurseTuple<BgLayer>): BackgroundTbdProperty
export function backgroundTbd() { return new BackgroundTbdProperty() }

// property background-color
// <color>
class BackgroundColorProperty {}

export function backgroundColor(source: Color): BackgroundColorProperty
export function backgroundColor() { return new BackgroundColorProperty() }

// property background-image
// <bg-image>#
class BackgroundImageProperty {}

export function backgroundImage(source: RecurseTuple<BgImage>): BackgroundImageProperty
export function backgroundImage() { return new BackgroundImageProperty() }

// property background-repeat
// <repeat-style>#
class BackgroundRepeatProperty {}

export function backgroundRepeat(source: RecurseTuple<RepeatStyle>): BackgroundRepeatProperty
export function backgroundRepeat() { return new BackgroundRepeatProperty() }

// property background-attachment
// <attachment>#
class BackgroundAttachmentProperty {}

export function backgroundAttachment(source: RecurseTuple<Attachment>): BackgroundAttachmentProperty
export function backgroundAttachment() { return new BackgroundAttachmentProperty() }

// property background-origin
// <visual-box>#
class BackgroundOriginProperty {}

export function backgroundOrigin(source: RecurseTuple<VisualBox>): BackgroundOriginProperty
export function backgroundOrigin() { return new BackgroundOriginProperty() }

// property background-size
// <bg-size>#
class BackgroundSizeProperty {}

export function backgroundSize(source: RecurseTuple<BgSize>): BackgroundSizeProperty
export function backgroundSize() { return new BackgroundSizeProperty() }

// property background
// <bg-layer>#? , <final-bg-layer>
class BackgroundProperty {}

export function background(source: [RecurseTuple<BgLayer>, void, FinalBgLayer]): BackgroundProperty
export function background(source: [void, void, FinalBgLayer]): BackgroundProperty
export function background() { return new BackgroundProperty() }


background([
	linearGradient([153, []])
]);
backgroundBlendMode('multiply');

// property border-style
// <line-style>{1,4}
class BorderStyleProperty {}

export function borderStyle(source: Repeat1to4<LineStyle>): BorderStyleProperty
export function borderStyle() { return new BorderStyleProperty() }

// property border-width
// <line-width>{1,4}
class BorderWidthProperty {}

export function borderWidth(source: Repeat1to4<LineWidth>): BorderWidthProperty
export function borderWidth() { return new BorderWidthProperty() }

// property border
// <line-width> || <line-style> || <color>
class BorderProperty {}

export function border(source: (LineWidth | (LineStyle | Color))): BorderProperty
export function border() { return new BorderProperty() }

// property border-image-source
// none | <image>
class BorderImageSourceProperty {}

export function borderImageSource(source: 'none' | Image): BorderImageSourceProperty
export function borderImageSource() { return new BorderImageSourceProperty() }

// property border-image-slice
// [<number [0,∞]> | <percentage [0,∞]>]{1,4} && fill?
class BorderImageSliceProperty {}

export function borderImageSlice(source: (Repeat1to4<(number | Percentage)> & 'fill')): BorderImageSliceProperty
export function borderImageSlice(source: (Repeat1to4<(number | Percentage)> & void)): BorderImageSliceProperty
export function borderImageSlice() { return new BorderImageSliceProperty() }

// property border-image-width
// [ <length-percentage [0,∞]> | <number [0,∞]> | auto ]{1,4}
class BorderImageWidthProperty {}

export function borderImageWidth(source: Repeat1to4<(LengthPercentage | number | 'auto')>): BorderImageWidthProperty
export function borderImageWidth() { return new BorderImageWidthProperty() }

// property border-image-outset
// [ <length [0,∞]> | <number [0,∞]> ]{1,4}
class BorderImageOutsetProperty {}

export function borderImageOutset(source: Repeat1to4<(number | number)>): BorderImageOutsetProperty
export function borderImageOutset() { return new BorderImageOutsetProperty() }

// property border-image-repeat
// [ stretch | repeat | round | space ]{1,2}
class BorderImageRepeatProperty {}

export function borderImageRepeat(source: Repeat1to2<('stretch' | 'repeat' | 'round' | 'space')>): BorderImageRepeatProperty
export function borderImageRepeat() { return new BorderImageRepeatProperty() }

// property border-image
// <'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>
class BorderImageProperty {}

export function borderImage(source: (BorderImageSourceProperty | ([BorderImageSliceProperty, (['/', BorderImageWidthProperty] | ['/', BorderImageWidthProperty, '/', BorderImageOutsetProperty] | ['/', void, '/', BorderImageOutsetProperty])] | BorderImageRepeatProperty))): BorderImageProperty
export function borderImage(source: (BorderImageSourceProperty | ([BorderImageSliceProperty, void] | BorderImageRepeatProperty))): BorderImageProperty
export function borderImage() { return new BorderImageProperty() }

// property border-top-color
// <color> | <image-1D>
class BorderTopColorProperty {}

export function borderTopColor(source: Color | Image1D): BorderTopColorProperty
export function borderTopColor() { return new BorderTopColorProperty() }

// property border-right-color
// <color> | <image-1D>
class BorderRightColorProperty {}

export function borderRightColor(source: Color | Image1D): BorderRightColorProperty
export function borderRightColor() { return new BorderRightColorProperty() }

// property border-bottom-color
// <color> | <image-1D>
class BorderBottomColorProperty {}

export function borderBottomColor(source: Color | Image1D): BorderBottomColorProperty
export function borderBottomColor() { return new BorderBottomColorProperty() }

// property border-left-color
// <color> | <image-1D>
class BorderLeftColorProperty {}

export function borderLeftColor(source: Color | Image1D): BorderLeftColorProperty
export function borderLeftColor() { return new BorderLeftColorProperty() }

// property border-block-start-color
// <color> | <image-1D>
class BorderBlockStartColorProperty {}

export function borderBlockStartColor(source: Color | Image1D): BorderBlockStartColorProperty
export function borderBlockStartColor() { return new BorderBlockStartColorProperty() }

// property border-block-end-color
// <color> | <image-1D>
class BorderBlockEndColorProperty {}

export function borderBlockEndColor(source: Color | Image1D): BorderBlockEndColorProperty
export function borderBlockEndColor() { return new BorderBlockEndColorProperty() }

// property border-inline-start-color
// <color> | <image-1D>
class BorderInlineStartColorProperty {}

export function borderInlineStartColor(source: Color | Image1D): BorderInlineStartColorProperty
export function borderInlineStartColor() { return new BorderInlineStartColorProperty() }

// property border-inline-end-color
// <color> | <image-1D>
class BorderInlineEndColorProperty {}

export function borderInlineEndColor(source: Color | Image1D): BorderInlineEndColorProperty
export function borderInlineEndColor() { return new BorderInlineEndColorProperty() }

// property border-color
// [ <color> | <image-1D> ]{1,4}
class BorderColorProperty {}

export function borderColor(source: Repeat1to4<(Color | Image1D)>): BorderColorProperty
export function borderColor() { return new BorderColorProperty() }

// property border-block-color
// <'border-top-color'>{1,2}
class BorderBlockColorProperty {}

export function borderBlockColor(source: Repeat1to2<BorderTopColorProperty>): BorderBlockColorProperty
export function borderBlockColor() { return new BorderBlockColorProperty() }

// property border-inline-color
// <'border-top-color'>{1,2}
class BorderInlineColorProperty {}

export function borderInlineColor(source: Repeat1to2<BorderTopColorProperty>): BorderInlineColorProperty
export function borderInlineColor() { return new BorderInlineColorProperty() }

// property border-top-style
// <line-style>
class BorderTopStyleProperty {}

export function borderTopStyle(source: LineStyle): BorderTopStyleProperty
export function borderTopStyle() { return new BorderTopStyleProperty() }

// property border-right-style
// <line-style>
class BorderRightStyleProperty {}

export function borderRightStyle(source: LineStyle): BorderRightStyleProperty
export function borderRightStyle() { return new BorderRightStyleProperty() }

// property border-bottom-style
// <line-style>
class BorderBottomStyleProperty {}

export function borderBottomStyle(source: LineStyle): BorderBottomStyleProperty
export function borderBottomStyle() { return new BorderBottomStyleProperty() }

// property border-left-style
// <line-style>
class BorderLeftStyleProperty {}

export function borderLeftStyle(source: LineStyle): BorderLeftStyleProperty
export function borderLeftStyle() { return new BorderLeftStyleProperty() }

// property border-block-start-style
// <line-style>
class BorderBlockStartStyleProperty {}

export function borderBlockStartStyle(source: LineStyle): BorderBlockStartStyleProperty
export function borderBlockStartStyle() { return new BorderBlockStartStyleProperty() }

// property border-block-end-style
// <line-style>
class BorderBlockEndStyleProperty {}

export function borderBlockEndStyle(source: LineStyle): BorderBlockEndStyleProperty
export function borderBlockEndStyle() { return new BorderBlockEndStyleProperty() }

// property border-inline-start-style
// <line-style>
class BorderInlineStartStyleProperty {}

export function borderInlineStartStyle(source: LineStyle): BorderInlineStartStyleProperty
export function borderInlineStartStyle() { return new BorderInlineStartStyleProperty() }

// property border-inline-end-style
// <line-style>
class BorderInlineEndStyleProperty {}

export function borderInlineEndStyle(source: LineStyle): BorderInlineEndStyleProperty
export function borderInlineEndStyle() { return new BorderInlineEndStyleProperty() }

// property border-block-style
// <'border-top-style'>{1,2}
class BorderBlockStyleProperty {}

export function borderBlockStyle(source: Repeat1to2<BorderTopStyleProperty>): BorderBlockStyleProperty
export function borderBlockStyle() { return new BorderBlockStyleProperty() }

// property border-inline-style
// <'border-top-style'>{1,2}
class BorderInlineStyleProperty {}

export function borderInlineStyle(source: Repeat1to2<BorderTopStyleProperty>): BorderInlineStyleProperty
export function borderInlineStyle() { return new BorderInlineStyleProperty() }

// property border-top-width
// <line-width>
class BorderTopWidthProperty {}

export function borderTopWidth(source: LineWidth): BorderTopWidthProperty
export function borderTopWidth() { return new BorderTopWidthProperty() }

// property border-right-width
// <line-width>
class BorderRightWidthProperty {}

export function borderRightWidth(source: LineWidth): BorderRightWidthProperty
export function borderRightWidth() { return new BorderRightWidthProperty() }

// property border-bottom-width
// <line-width>
class BorderBottomWidthProperty {}

export function borderBottomWidth(source: LineWidth): BorderBottomWidthProperty
export function borderBottomWidth() { return new BorderBottomWidthProperty() }

// property border-left-width
// <line-width>
class BorderLeftWidthProperty {}

export function borderLeftWidth(source: LineWidth): BorderLeftWidthProperty
export function borderLeftWidth() { return new BorderLeftWidthProperty() }

// property border-block-start-width
// <line-width>
class BorderBlockStartWidthProperty {}

export function borderBlockStartWidth(source: LineWidth): BorderBlockStartWidthProperty
export function borderBlockStartWidth() { return new BorderBlockStartWidthProperty() }

// property border-block-end-width
// <line-width>
class BorderBlockEndWidthProperty {}

export function borderBlockEndWidth(source: LineWidth): BorderBlockEndWidthProperty
export function borderBlockEndWidth() { return new BorderBlockEndWidthProperty() }

// property border-inline-start-width
// <line-width>
class BorderInlineStartWidthProperty {}

export function borderInlineStartWidth(source: LineWidth): BorderInlineStartWidthProperty
export function borderInlineStartWidth() { return new BorderInlineStartWidthProperty() }

// property border-inline-end-width
// <line-width>
class BorderInlineEndWidthProperty {}

export function borderInlineEndWidth(source: LineWidth): BorderInlineEndWidthProperty
export function borderInlineEndWidth() { return new BorderInlineEndWidthProperty() }

// property border-block-width
// <'border-top-width'>{1,2}
class BorderBlockWidthProperty {}

export function borderBlockWidth(source: Repeat1to2<BorderTopWidthProperty>): BorderBlockWidthProperty
export function borderBlockWidth() { return new BorderBlockWidthProperty() }

// property border-inline-width
// <'border-top-width'>{1,2}
class BorderInlineWidthProperty {}

export function borderInlineWidth(source: Repeat1to2<BorderTopWidthProperty>): BorderInlineWidthProperty
export function borderInlineWidth() { return new BorderInlineWidthProperty() }

// property border-top
// <line-width> || <line-style> || <color>
class BorderTopProperty {}

export function borderTop(source: (LineWidth | (LineStyle | Color))): BorderTopProperty
export function borderTop() { return new BorderTopProperty() }

// property border-right
// <line-width> || <line-style> || <color>
class BorderRightProperty {}

export function borderRight(source: (LineWidth | (LineStyle | Color))): BorderRightProperty
export function borderRight() { return new BorderRightProperty() }

// property border-bottom
// <line-width> || <line-style> || <color>
class BorderBottomProperty {}

export function borderBottom(source: (LineWidth | (LineStyle | Color))): BorderBottomProperty
export function borderBottom() { return new BorderBottomProperty() }

// property border-left
// <line-width> || <line-style> || <color>
class BorderLeftProperty {}

export function borderLeft(source: (LineWidth | (LineStyle | Color))): BorderLeftProperty
export function borderLeft() { return new BorderLeftProperty() }

// property border-block-start
// <line-width> || <line-style> || <color>
class BorderBlockStartProperty {}

export function borderBlockStart(source: (LineWidth | (LineStyle | Color))): BorderBlockStartProperty
export function borderBlockStart() { return new BorderBlockStartProperty() }

// property border-block-end
// <line-width> || <line-style> || <color>
class BorderBlockEndProperty {}

export function borderBlockEnd(source: (LineWidth | (LineStyle | Color))): BorderBlockEndProperty
export function borderBlockEnd() { return new BorderBlockEndProperty() }

// property border-inline-start
// <line-width> || <line-style> || <color>
class BorderInlineStartProperty {}

export function borderInlineStart(source: (LineWidth | (LineStyle | Color))): BorderInlineStartProperty
export function borderInlineStart() { return new BorderInlineStartProperty() }

// property border-inline-end
// <line-width> || <line-style> || <color>
class BorderInlineEndProperty {}

export function borderInlineEnd(source: (LineWidth | (LineStyle | Color))): BorderInlineEndProperty
export function borderInlineEnd() { return new BorderInlineEndProperty() }

// property border-block
// <'border-block-start'>
class BorderBlockProperty {}

export function borderBlock(source: BorderBlockStartProperty): BorderBlockProperty
export function borderBlock() { return new BorderBlockProperty() }

// property border-inline
// <'border-block-start'>
class BorderInlineProperty {}

export function borderInline(source: BorderBlockStartProperty): BorderInlineProperty
export function borderInline() { return new BorderInlineProperty() }

// property border-top-left-radius
// <length-percentage [0,∞]>{1,2}
class BorderTopLeftRadiusProperty {}

export function borderTopLeftRadius(source: Repeat1to2<LengthPercentage>): BorderTopLeftRadiusProperty
export function borderTopLeftRadius() { return new BorderTopLeftRadiusProperty() }

// property border-top-right-radius
// <length-percentage [0,∞]>{1,2}
class BorderTopRightRadiusProperty {}

export function borderTopRightRadius(source: Repeat1to2<LengthPercentage>): BorderTopRightRadiusProperty
export function borderTopRightRadius() { return new BorderTopRightRadiusProperty() }

// property border-bottom-right-radius
// <length-percentage [0,∞]>{1,2}
class BorderBottomRightRadiusProperty {}

export function borderBottomRightRadius(source: Repeat1to2<LengthPercentage>): BorderBottomRightRadiusProperty
export function borderBottomRightRadius() { return new BorderBottomRightRadiusProperty() }

// property border-bottom-left-radius
// <length-percentage [0,∞]>{1,2}
class BorderBottomLeftRadiusProperty {}

export function borderBottomLeftRadius(source: Repeat1to2<LengthPercentage>): BorderBottomLeftRadiusProperty
export function borderBottomLeftRadius() { return new BorderBottomLeftRadiusProperty() }

// property border-start-start-radius
// <length-percentage [0,∞]>{1,2}
class BorderStartStartRadiusProperty {}

export function borderStartStartRadius(source: Repeat1to2<LengthPercentage>): BorderStartStartRadiusProperty
export function borderStartStartRadius() { return new BorderStartStartRadiusProperty() }

// property border-start-end-radius
// <length-percentage [0,∞]>{1,2}
class BorderStartEndRadiusProperty {}

export function borderStartEndRadius(source: Repeat1to2<LengthPercentage>): BorderStartEndRadiusProperty
export function borderStartEndRadius() { return new BorderStartEndRadiusProperty() }

// property border-end-start-radius
// <length-percentage [0,∞]>{1,2}
class BorderEndStartRadiusProperty {}

export function borderEndStartRadius(source: Repeat1to2<LengthPercentage>): BorderEndStartRadiusProperty
export function borderEndStartRadius() { return new BorderEndStartRadiusProperty() }

// property border-end-end-radius
// <length-percentage [0,∞]>{1,2}
class BorderEndEndRadiusProperty {}

export function borderEndEndRadius(source: Repeat1to2<LengthPercentage>): BorderEndEndRadiusProperty
export function borderEndEndRadius() { return new BorderEndEndRadiusProperty() }

// property border-top-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderTopRadiusProperty {}

export function borderTopRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderTopRadiusProperty
export function borderTopRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderTopRadiusProperty
export function borderTopRadius() { return new BorderTopRadiusProperty() }

// property border-right-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderRightRadiusProperty {}

export function borderRightRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderRightRadiusProperty
export function borderRightRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderRightRadiusProperty
export function borderRightRadius() { return new BorderRightRadiusProperty() }

// property border-bottom-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderBottomRadiusProperty {}

export function borderBottomRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderBottomRadiusProperty
export function borderBottomRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderBottomRadiusProperty
export function borderBottomRadius() { return new BorderBottomRadiusProperty() }

// property border-left-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderLeftRadiusProperty {}

export function borderLeftRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderLeftRadiusProperty
export function borderLeftRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderLeftRadiusProperty
export function borderLeftRadius() { return new BorderLeftRadiusProperty() }

// property border-block-start-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderBlockStartRadiusProperty {}

export function borderBlockStartRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderBlockStartRadiusProperty
export function borderBlockStartRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderBlockStartRadiusProperty
export function borderBlockStartRadius() { return new BorderBlockStartRadiusProperty() }

// property border-block-end-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderBlockEndRadiusProperty {}

export function borderBlockEndRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderBlockEndRadiusProperty
export function borderBlockEndRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderBlockEndRadiusProperty
export function borderBlockEndRadius() { return new BorderBlockEndRadiusProperty() }

// property border-inline-start-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderInlineStartRadiusProperty {}

export function borderInlineStartRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderInlineStartRadiusProperty
export function borderInlineStartRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderInlineStartRadiusProperty
export function borderInlineStartRadius() { return new BorderInlineStartRadiusProperty() }

// property border-inline-end-radius
// <length-percentage [0,∞]>{1,2} [ / <length-percentage [0,∞]>{1,2} ]?
class BorderInlineEndRadiusProperty {}

export function borderInlineEndRadius(source: [Repeat1to2<LengthPercentage>, (['/', Repeat1to2<LengthPercentage>])]): BorderInlineEndRadiusProperty
export function borderInlineEndRadius(source: [Repeat1to2<LengthPercentage>, void]): BorderInlineEndRadiusProperty
export function borderInlineEndRadius() { return new BorderInlineEndRadiusProperty() }

// property border-radius
// <length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?
class BorderRadiusProperty {}

export function borderRadius(source: [Repeat1to4<LengthPercentage>, (['/', Repeat1to4<LengthPercentage>])]): BorderRadiusProperty
export function borderRadius(source: [Repeat1to4<LengthPercentage>, void]): BorderRadiusProperty
export function borderRadius() { return new BorderRadiusProperty() }

// property corner-shape
// [ round | angle ]{1,4}
class CornerShapeProperty {}

export function cornerShape(source: Repeat1to4<('round' | 'angle')>): CornerShapeProperty
export function cornerShape() { return new CornerShapeProperty() }

// property corners
// <'corner-shape'> || <'border-radius'>
class CornersProperty {}

export function corners(source: (CornerShapeProperty | BorderRadiusProperty)): CornersProperty
export function corners() { return new CornersProperty() }

// property border-limit
// all | [ sides | corners ] <length-percentage [0,∞]>? | [ top | right | bottom | left ] <length-percentage [0,∞]>
class BorderLimitProperty {}

export function borderLimit(source: 'all' | [('sides' | 'corners'), LengthPercentage] | [('sides' | 'corners'), void] | [('top' | 'right' | 'bottom' | 'left'), LengthPercentage]): BorderLimitProperty
export function borderLimit() { return new BorderLimitProperty() }

// property border-clip
// normal | [ <length-percentage [0,∞]> | <flex> ]+
class BorderClipProperty {}

export function borderClip(source: 'normal' | Recurse<(LengthPercentage | Flex)>): BorderClipProperty
export function borderClip() { return new BorderClipProperty() }

// property border-clip-top
// normal | [ <length-percentage [0,∞]> | <flex> ]+
class BorderClipTopProperty {}

export function borderClipTop(source: 'normal' | Recurse<(LengthPercentage | Flex)>): BorderClipTopProperty
export function borderClipTop() { return new BorderClipTopProperty() }

// property border-clip-right
// normal | [ <length-percentage [0,∞]> | <flex> ]+
class BorderClipRightProperty {}

export function borderClipRight(source: 'normal' | Recurse<(LengthPercentage | Flex)>): BorderClipRightProperty
export function borderClipRight() { return new BorderClipRightProperty() }

// property border-clip-bottom
// normal | [ <length-percentage [0,∞]> | <flex> ]+
class BorderClipBottomProperty {}

export function borderClipBottom(source: 'normal' | Recurse<(LengthPercentage | Flex)>): BorderClipBottomProperty
export function borderClipBottom() { return new BorderClipBottomProperty() }

// property border-clip-left
// normal | [ <length-percentage [0,∞]> | <flex> ]+
class BorderClipLeftProperty {}

export function borderClipLeft(source: 'normal' | Recurse<(LengthPercentage | Flex)>): BorderClipLeftProperty
export function borderClipLeft() { return new BorderClipLeftProperty() }

// property box-shadow-color
// <color>#
class BoxShadowColorProperty {}

export function boxShadowColor(source: RecurseTuple<Color>): BoxShadowColorProperty
export function boxShadowColor() { return new BoxShadowColorProperty() }

// property box-shadow-offset
// [ none | <length>{2} ]#
class BoxShadowOffsetProperty {}

export function boxShadowOffset(source: RecurseTuple<('none' | Repeat2<number>)>): BoxShadowOffsetProperty
export function boxShadowOffset() { return new BoxShadowOffsetProperty() }

// property box-shadow-blur
// <length [0,∞]>#
class BoxShadowBlurProperty {}

export function boxShadowBlur(source: RecurseTuple<number>): BoxShadowBlurProperty
export function boxShadowBlur() { return new BoxShadowBlurProperty() }

// property box-shadow-spread
// <length>#
class BoxShadowSpreadProperty {}

export function boxShadowSpread(source: RecurseTuple<number>): BoxShadowSpreadProperty
export function boxShadowSpread() { return new BoxShadowSpreadProperty() }

// property box-shadow-position
// [ outset | inset ]#
class BoxShadowPositionProperty {}

export function boxShadowPosition(source: RecurseTuple<('outset' | 'inset')>): BoxShadowPositionProperty
export function boxShadowPosition() { return new BoxShadowPositionProperty() }

// property box-shadow
// <spread-shadow>#
class BoxShadowProperty {}

export function boxShadow(source: RecurseTuple<SpreadShadow>): BoxShadowProperty
export function boxShadow() { return new BoxShadowProperty() }

// property margin-top
// <length-percentage> | auto
class MarginTopProperty {}

export function marginTop(source: LengthPercentage | 'auto'): MarginTopProperty
export function marginTop() { return new MarginTopProperty() }

// property margin-right
// <length-percentage> | auto
class MarginRightProperty {}

export function marginRight(source: LengthPercentage | 'auto'): MarginRightProperty
export function marginRight() { return new MarginRightProperty() }

// property margin-bottom
// <length-percentage> | auto
class MarginBottomProperty {}

export function marginBottom(source: LengthPercentage | 'auto'): MarginBottomProperty
export function marginBottom() { return new MarginBottomProperty() }

// property margin-left
// <length-percentage> | auto
class MarginLeftProperty {}

export function marginLeft(source: LengthPercentage | 'auto'): MarginLeftProperty
export function marginLeft() { return new MarginLeftProperty() }

// property margin
// <'margin-top'>{1,4}
class MarginProperty {}

export function margin(source: Repeat1to4<MarginTopProperty>): MarginProperty
export function margin() { return new MarginProperty() }

// property margin-trim
// none | block | inline | [ block-start || inline-start || block-end || inline-end ]
class MarginTrimProperty {}

export function marginTrim(source: 'none' | 'block' | 'inline' | (('block-start' | ('inline-start' | ('block-end' | 'inline-end'))))): MarginTrimProperty
export function marginTrim() { return new MarginTrimProperty() }

// property padding-top
// <length-percentage [0,∞]>
class PaddingTopProperty {}

export function paddingTop(source: LengthPercentage): PaddingTopProperty
export function paddingTop() { return new PaddingTopProperty() }

// property padding-right
// <length-percentage [0,∞]>
class PaddingRightProperty {}

export function paddingRight(source: LengthPercentage): PaddingRightProperty
export function paddingRight() { return new PaddingRightProperty() }

// property padding-bottom
// <length-percentage [0,∞]>
class PaddingBottomProperty {}

export function paddingBottom(source: LengthPercentage): PaddingBottomProperty
export function paddingBottom() { return new PaddingBottomProperty() }

// property padding-left
// <length-percentage [0,∞]>
class PaddingLeftProperty {}

export function paddingLeft(source: LengthPercentage): PaddingLeftProperty
export function paddingLeft() { return new PaddingLeftProperty() }

// property padding
// <'padding-top'>{1,4}
class PaddingProperty {}

export function padding(source: Repeat1to4<PaddingTopProperty>): PaddingProperty
export function padding() { return new PaddingProperty() }

// property break-before
// auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region
class BreakBeforeProperty {}

export function breakBefore(source: 'auto' | 'avoid' | 'always' | 'all' | 'avoid-page' | 'page' | 'left' | 'right' | 'recto' | 'verso' | 'avoid-column' | 'column' | 'avoid-region' | 'region'): BreakBeforeProperty
export function breakBefore() { return new BreakBeforeProperty() }

// property break-after
// auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region
class BreakAfterProperty {}

export function breakAfter(source: 'auto' | 'avoid' | 'always' | 'all' | 'avoid-page' | 'page' | 'left' | 'right' | 'recto' | 'verso' | 'avoid-column' | 'column' | 'avoid-region' | 'region'): BreakAfterProperty
export function breakAfter() { return new BreakAfterProperty() }

// property break-inside
// auto | avoid | avoid-page | avoid-column | avoid-region
class BreakInsideProperty {}

export function breakInside(source: 'auto' | 'avoid' | 'avoid-page' | 'avoid-column' | 'avoid-region'): BreakInsideProperty
export function breakInside() { return new BreakInsideProperty() }

// property orphans
// <integer [1,∞]>
class OrphansProperty {}

export function orphans(source: number): OrphansProperty
export function orphans() { return new OrphansProperty() }

// property widows
// <integer [1,∞]>
class WidowsProperty {}

export function widows(source: number): WidowsProperty
export function widows() { return new WidowsProperty() }

// property margin-break
// auto | keep | discard
class MarginBreakProperty {}

export function marginBreak(source: 'auto' | 'keep' | 'discard'): MarginBreakProperty
export function marginBreak() { return new MarginBreakProperty() }

// property box-decoration-break
// slice | clone
class BoxDecorationBreakProperty {}

export function boxDecorationBreak(source: 'slice' | 'clone'): BoxDecorationBreakProperty
export function boxDecorationBreak() { return new BoxDecorationBreakProperty() }

// property all
// initial | inherit | unset | revert | revert-layer
class AllProperty {}

export function all(source: 'initial' | 'inherit' | 'unset' | 'revert' | 'revert-layer'): AllProperty
export function all() { return new AllProperty() }

// property color-scheme
// normal | [ light | dark | <custom-ident> ]+ && only?
class ColorSchemeProperty {}

export function colorScheme(source: 'normal' | (Recurse<('light' | 'dark' | CustomIdent)> & 'only') | (Recurse<('light' | 'dark' | CustomIdent)> & void)): ColorSchemeProperty
export function colorScheme() { return new ColorSchemeProperty() }

// property forced-color-adjust
// auto | none | preserve-parent-color
class ForcedColorAdjustProperty {}

export function forcedColorAdjust(source: 'auto' | 'none' | 'preserve-parent-color'): ForcedColorAdjustProperty
export function forcedColorAdjust() { return new ForcedColorAdjustProperty() }

// property print-color-adjust
// economy | exact
class PrintColorAdjustProperty {}

export function printColorAdjust(source: 'economy' | 'exact'): PrintColorAdjustProperty
export function printColorAdjust() { return new PrintColorAdjustProperty() }

// property color-adjust
// <'print-color-adjust'>
class ColorAdjustProperty {}

export function colorAdjust(source: PrintColorAdjustProperty): ColorAdjustProperty
export function colorAdjust() { return new ColorAdjustProperty() }

// property color
// <color>
class ColorProperty {}

export function color(source: Color): ColorProperty
export function color() { return new ColorProperty() }

// property opacity
// <alpha-value>
class OpacityProperty {}

export function opacity(source: AlphaValue): OpacityProperty
export function opacity() { return new OpacityProperty() }

// property contain
// none | strict | content | [ [size | inline-size] || layout || style || paint ]
class ContainProperty {}

export function contain(source: 'none' | 'strict' | 'content' | ((('size' | 'inline-size') | ('layout' | ('style' | 'paint'))))): ContainProperty
export function contain() { return new ContainProperty() }

// property container-type
// normal | size | inline-size
class ContainerTypeProperty {}

export function containerType(source: 'normal' | 'size' | 'inline-size'): ContainerTypeProperty
export function containerType() { return new ContainerTypeProperty() }

// property container-name
// none | <custom-ident>+
class ContainerNameProperty {}

export function containerName(source: 'none' | Recurse<CustomIdent>): ContainerNameProperty
export function containerName() { return new ContainerNameProperty() }

// property container
// <'container-name'> [ / <'container-type'> ]?
class ContainerProperty {}

export function container(source: [ContainerNameProperty, (['/', ContainerTypeProperty])]): ContainerProperty
export function container(source: [ContainerNameProperty, void]): ContainerProperty
export function container() { return new ContainerProperty() }

// property content-visibility
// visible | auto | hidden
class ContentVisibilityProperty {}

export function contentVisibility(source: 'visible' | 'auto' | 'hidden'): ContentVisibilityProperty
export function contentVisibility() { return new ContentVisibilityProperty() }

// property content
// normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?
class ContentProperty {}

export function content(source: 'normal' | 'none' | [(ContentReplacement | ContentList), (['/', Recurse<(string | Counter)>])] | [(ContentReplacement | ContentList), void]): ContentProperty
export function content() { return new ContentProperty() }

// property quotes
// auto | none | [ <string> <string> ]+
class QuotesProperty {}

export function quotes(source: 'auto' | 'none' | Recurse<([string, string])>): QuotesProperty
export function quotes() { return new QuotesProperty() }

// property string-set
// none | [ <custom-ident> <string>+ ]#
class StringSetProperty {}

export function stringSet(source: 'none' | RecurseTuple<([CustomIdent, Recurse<string>])>): StringSetProperty
export function stringSet() { return new StringSetProperty() }

// property bookmark-level
// none | <integer [1,∞]>
class BookmarkLevelProperty {}

export function bookmarkLevel(source: 'none' | number): BookmarkLevelProperty
export function bookmarkLevel() { return new BookmarkLevelProperty() }

// property bookmark-label
// <content-list>
class BookmarkLabelProperty {}

export function bookmarkLabel(source: ContentList): BookmarkLabelProperty
export function bookmarkLabel() { return new BookmarkLabelProperty() }

// property bookmark-state
// open | closed
class BookmarkStateProperty {}

export function bookmarkState(source: 'open' | 'closed'): BookmarkStateProperty
export function bookmarkState() { return new BookmarkStateProperty() }

// property display
// [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
class DisplayProperty {}

export function display(source: ((DisplayOutside | DisplayInside)) | DisplayListitem | DisplayInternal | DisplayBox | DisplayLegacy): DisplayProperty
export function display() { return new DisplayProperty() }

// property order
// [ <'layout-order'> <'reading-order'>? ] | [ [ reading || layout ] && <integer> ]
class OrderProperty {}

export function order(source: ([LayoutOrderProperty, ReadingOrderProperty]) | ([LayoutOrderProperty, void]) | (((('reading' | 'layout')) & number))): OrderProperty
export function order() { return new OrderProperty() }

// property reading-order
// <integer>
class ReadingOrderProperty {}

export function readingOrder(source: number): ReadingOrderProperty
export function readingOrder() { return new ReadingOrderProperty() }

// property layout-order
// <integer>
class LayoutOrderProperty {}

export function layoutOrder(source: number): LayoutOrderProperty
export function layoutOrder() { return new LayoutOrderProperty() }

// property visibility
// visible | hidden | collapse
class VisibilityProperty {}

export function visibility(source: 'visible' | 'hidden' | 'collapse'): VisibilityProperty
export function visibility() { return new VisibilityProperty() }

// property wrap-flow
// auto | both | start | end | minimum | maximum | clear
class WrapFlowProperty {}

export function wrapFlow(source: 'auto' | 'both' | 'start' | 'end' | 'minimum' | 'maximum' | 'clear'): WrapFlowProperty
export function wrapFlow() { return new WrapFlowProperty() }

// property wrap-through
// wrap | none
class WrapThroughProperty {}

export function wrapThrough(source: 'wrap' | 'none'): WrapThroughProperty
export function wrapThrough() { return new WrapThroughProperty() }

// property flex-direction
// row | row-reverse | column | column-reverse
class FlexDirectionProperty {}

export function flexDirection(source: 'row' | 'row-reverse' | 'column' | 'column-reverse'): FlexDirectionProperty
export function flexDirection() { return new FlexDirectionProperty() }

// property flex-wrap
// nowrap | wrap | wrap-reverse
class FlexWrapProperty {}

export function flexWrap(source: 'nowrap' | 'wrap' | 'wrap-reverse'): FlexWrapProperty
export function flexWrap() { return new FlexWrapProperty() }

// property flex-flow
// <'flex-direction'> || <'flex-wrap'>
class FlexFlowProperty {}

export function flexFlow(source: (FlexDirectionProperty | FlexWrapProperty)): FlexFlowProperty
export function flexFlow() { return new FlexFlowProperty() }

// property flex
// none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
class FlexProperty {}

export function flex(source: 'none' | (([FlexGrowProperty, FlexShrinkProperty] | FlexBasisProperty)) | (([FlexGrowProperty, void] | FlexBasisProperty))): FlexProperty
export function flex() { return new FlexProperty() }

// property flex-grow
// <number [0,∞]>
class FlexGrowProperty {}

export function flexGrow(source: number): FlexGrowProperty
export function flexGrow() { return new FlexGrowProperty() }

// property flex-shrink
// <number [0,∞]>
class FlexShrinkProperty {}

export function flexShrink(source: number): FlexShrinkProperty
export function flexShrink() { return new FlexShrinkProperty() }

// property flex-basis
// content | <'width'>
class FlexBasisProperty {}

export function flexBasis(source: 'content' | WidthProperty): FlexBasisProperty
export function flexBasis() { return new FlexBasisProperty() }

// property font-size-adjust
// none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number [0,∞]> ]
class FontSizeAdjustProperty {}

export function fontSizeAdjust(source: 'none' | [('ex-height' | 'cap-height' | 'ch-width' | 'ic-width' | 'ic-height'), ('from-font' | number)] | [void, ('from-font' | number)]): FontSizeAdjustProperty
export function fontSizeAdjust() { return new FontSizeAdjustProperty() }

// property font-family
// [ <family-name> | <generic-family> ]#
class FontFamilyProperty {}

export function fontFamily(source: RecurseTuple<(FamilyName | GenericFamily)>): FontFamilyProperty
export function fontFamily() { return new FontFamilyProperty() }

// property font-weight
// <font-weight-absolute> | bolder | lighter
class FontWeightProperty {}

export function fontWeight(source: FontWeightAbsolute | 'bolder' | 'lighter'): FontWeightProperty
export function fontWeight() { return new FontWeightProperty() }

// property font-stretch
// normal | <percentage [0,∞]> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded
class FontStretchProperty {}

export function fontStretch(source: 'normal' | Percentage | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded'): FontStretchProperty
export function fontStretch() { return new FontStretchProperty() }

// property font-style
// normal | italic | oblique <angle [-90deg,90deg]>?
class FontStyleProperty {}

export function fontStyle(source: 'normal' | 'italic' | ['oblique', Angle] | ['oblique', void]): FontStyleProperty
export function fontStyle() { return new FontStyleProperty() }

// property font-size
// <absolute-size> | <relative-size> | <length-percentage [0,∞]> | math
class FontSizeProperty {}

export function fontSize(source: AbsoluteSize | RelativeSize | LengthPercentage | 'math'): FontSizeProperty
export function fontSize() { return new FontSizeProperty() }

// property font
// [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-stretch-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | <system-family-name>
class FontProperty {}

export function font(source: ([((FontStyleProperty | (FontVariantCss2 | (FontWeightProperty | FontStretchCss3)))), FontSizeProperty, (['/', LineHeightProperty]), FontFamilyProperty]) | ([((FontStyleProperty | (FontVariantCss2 | (FontWeightProperty | FontStretchCss3)))), FontSizeProperty, void, FontFamilyProperty]) | ([void, FontSizeProperty, (['/', LineHeightProperty]), FontFamilyProperty]) | ([void, FontSizeProperty, void, FontFamilyProperty]) | SystemFamilyName): FontProperty
export function font() { return new FontProperty() }

// property font-synthesis-weight
// auto | none
class FontSynthesisWeightProperty {}

export function fontSynthesisWeight(source: 'auto' | 'none'): FontSynthesisWeightProperty
export function fontSynthesisWeight() { return new FontSynthesisWeightProperty() }

// property font-synthesis-style
// auto | none
class FontSynthesisStyleProperty {}

export function fontSynthesisStyle(source: 'auto' | 'none'): FontSynthesisStyleProperty
export function fontSynthesisStyle() { return new FontSynthesisStyleProperty() }

// property font-synthesis-small-caps
// auto | none
class FontSynthesisSmallCapsProperty {}

export function fontSynthesisSmallCaps(source: 'auto' | 'none'): FontSynthesisSmallCapsProperty
export function fontSynthesisSmallCaps() { return new FontSynthesisSmallCapsProperty() }

// property font-synthesis-position
// auto | none
class FontSynthesisPositionProperty {}

export function fontSynthesisPosition(source: 'auto' | 'none'): FontSynthesisPositionProperty
export function fontSynthesisPosition() { return new FontSynthesisPositionProperty() }

// property font-synthesis
// none | [ weight || style || small-caps || position]
class FontSynthesisProperty {}

export function fontSynthesis(source: 'none' | (('weight' | ('style' | ('small-caps' | 'position'))))): FontSynthesisProperty
export function fontSynthesis() { return new FontSynthesisProperty() }

// property font-kerning
// auto | normal | none
class FontKerningProperty {}

export function fontKerning(source: 'auto' | 'normal' | 'none'): FontKerningProperty
export function fontKerning() { return new FontKerningProperty() }

// property font-variant-ligatures
// normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]
class FontVariantLigaturesProperty {}

export function fontVariantLigatures(source: 'normal' | 'none' | ((CommonLigValues | (DiscretionaryLigValues | (HistoricalLigValues | ContextualAltValues))))): FontVariantLigaturesProperty
export function fontVariantLigatures() { return new FontVariantLigaturesProperty() }

// property font-variant-position
// normal | sub | super
class FontVariantPositionProperty {}

export function fontVariantPosition(source: 'normal' | 'sub' | 'super'): FontVariantPositionProperty
export function fontVariantPosition() { return new FontVariantPositionProperty() }

// property font-variant-caps
// normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps
class FontVariantCapsProperty {}

export function fontVariantCaps(source: 'normal' | 'small-caps' | 'all-small-caps' | 'petite-caps' | 'all-petite-caps' | 'unicase' | 'titling-caps'): FontVariantCapsProperty
export function fontVariantCaps() { return new FontVariantCapsProperty() }

// property font-variant-numeric
// normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]
class FontVariantNumericProperty {}

export function fontVariantNumeric(source: 'normal' | ((NumericFigureValues | (NumericSpacingValues | (NumericFractionValues | ('ordinal' | 'slashed-zero')))))): FontVariantNumericProperty
export function fontVariantNumeric() { return new FontVariantNumericProperty() }

// property font-variant-alternates
// normal | [ stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) ]
class FontVariantAlternatesProperty {}

export function fontVariantAlternates(source: 'normal' | (({ 'stylistic': [FeatureValueName] } | ('historical-forms' | ({ 'styleset': [RecurseTuple<FeatureValueName>] } | ({ 'character-variant': [RecurseTuple<FeatureValueName>] } | ({ 'swash': [FeatureValueName] } | ({ 'ornaments': [FeatureValueName] } | { 'annotation': [FeatureValueName] })))))))): FontVariantAlternatesProperty
export function fontVariantAlternates() { return new FontVariantAlternatesProperty() }

// property font-variant-east-asian
// normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]
class FontVariantEastAsianProperty {}

export function fontVariantEastAsian(source: 'normal' | ((EastAsianVariantValues | (EastAsianWidthValues | 'ruby')))): FontVariantEastAsianProperty
export function fontVariantEastAsian() { return new FontVariantEastAsianProperty() }

// property font-variant
// normal | none | [ [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ] || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || [ stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) ] || [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ] || [ <east-asian-variant-values> || <east-asian-width-values> || ruby ] || [ sub | super ] || [ text | emoji | unicode ] ]
class FontVariantProperty {}

export function fontVariant(source: 'normal' | 'none' | ((((CommonLigValues | (DiscretionaryLigValues | (HistoricalLigValues | ContextualAltValues)))) | (('small-caps' | 'all-small-caps' | 'petite-caps' | 'all-petite-caps' | 'unicase' | 'titling-caps') | ((({ 'stylistic': [FeatureValueName] } | ('historical-forms' | ({ 'styleset': [RecurseTuple<FeatureValueName>] } | ({ 'character-variant': [RecurseTuple<FeatureValueName>] } | ({ 'swash': [FeatureValueName] } | ({ 'ornaments': [FeatureValueName] } | { 'annotation': [FeatureValueName] }))))))) | (((NumericFigureValues | (NumericSpacingValues | (NumericFractionValues | ('ordinal' | 'slashed-zero'))))) | (((EastAsianVariantValues | (EastAsianWidthValues | 'ruby'))) | (('sub' | 'super') | ('text' | 'emoji' | 'unicode'))))))))): FontVariantProperty
export function fontVariant() { return new FontVariantProperty() }

// property font-feature-settings
// normal | <feature-tag-value>#
class FontFeatureSettingsProperty {}

export function fontFeatureSettings(source: 'normal' | RecurseTuple<FeatureTagValue>): FontFeatureSettingsProperty
export function fontFeatureSettings() { return new FontFeatureSettingsProperty() }

// property font-language-override
// normal | <string>
class FontLanguageOverrideProperty {}

export function fontLanguageOverride(source: 'normal' | string): FontLanguageOverrideProperty
export function fontLanguageOverride() { return new FontLanguageOverrideProperty() }

// property font-optical-sizing
// auto | none
class FontOpticalSizingProperty {}

export function fontOpticalSizing(source: 'auto' | 'none'): FontOpticalSizingProperty
export function fontOpticalSizing() { return new FontOpticalSizingProperty() }

// property font-variation-settings
// normal | [ <opentype-tag> <number>]#
class FontVariationSettingsProperty {}

export function fontVariationSettings(source: 'normal' | RecurseTuple<([OpentypeTag, number])>): FontVariationSettingsProperty
export function fontVariationSettings() { return new FontVariationSettingsProperty() }

// property font-palette
// normal | light | dark | <palette-identifier> | <palette-mix()>
class FontPaletteProperty {}

export function fontPalette(source: 'normal' | 'light' | 'dark' | PaletteIdentifier | PaletteMixProperty): FontPaletteProperty
export function fontPalette() { return new FontPaletteProperty() }

// property font-variant-emoji
// normal | text | emoji | unicode
class FontVariantEmojiProperty {}

export function fontVariantEmoji(source: 'normal' | 'text' | 'emoji' | 'unicode'): FontVariantEmojiProperty
export function fontVariantEmoji() { return new FontVariantEmojiProperty() }

// property copy-into
// none | [ [ <custom-ident> <content-level>] [, <custom-ident> <content-level>]* ]?
class CopyIntoProperty {}

export function copyInto(source: 'none' | ([([CustomIdent, ContentLevel]), RecurseAny<([CustomIdent, ContentLevel])>]) | void): CopyIntoProperty
export function copyInto() { return new CopyIntoProperty() }

// property footnote-display
// block | inline | compact
class FootnoteDisplayProperty {}

export function footnoteDisplay(source: 'block' | 'inline' | 'compact'): FootnoteDisplayProperty
export function footnoteDisplay() { return new FootnoteDisplayProperty() }

// property footnote-policy
// auto | line | block
class FootnotePolicyProperty {}

export function footnotePolicy(source: 'auto' | 'line' | 'block'): FootnotePolicyProperty
export function footnotePolicy() { return new FootnotePolicyProperty() }

// property masonry-auto-flow
// [ pack | next ] || [definite-first | ordered ]
class MasonryAutoFlowProperty {}

export function masonryAutoFlow(source: (('pack' | 'next') | ('definite-first' | 'ordered'))): MasonryAutoFlowProperty
export function masonryAutoFlow() { return new MasonryAutoFlowProperty() }

// property grid-template-columns
// none | <track-list> | <auto-track-list> | subgrid <line-name-list>?
class GridTemplateColumnsProperty {}

export function gridTemplateColumns(source: 'none' | TrackList | AutoTrackList | ['subgrid', LineNameList] | ['subgrid', void]): GridTemplateColumnsProperty
export function gridTemplateColumns() { return new GridTemplateColumnsProperty() }

// property grid-template-rows
// none | <track-list> | <auto-track-list> | subgrid <line-name-list>?
class GridTemplateRowsProperty {}

export function gridTemplateRows(source: 'none' | TrackList | AutoTrackList | ['subgrid', LineNameList] | ['subgrid', void]): GridTemplateRowsProperty
export function gridTemplateRows() { return new GridTemplateRowsProperty() }

// property grid-template-areas
// none | <string>+
class GridTemplateAreasProperty {}

export function gridTemplateAreas(source: 'none' | Recurse<string>): GridTemplateAreasProperty
export function gridTemplateAreas() { return new GridTemplateAreasProperty() }

// property grid-template
// none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?
class GridTemplateProperty {}

export function gridTemplate(source: 'none' | ([GridTemplateRowsProperty, '/', GridTemplateColumnsProperty]) | [Recurse<([LineNames, string, TrackSize, LineNames])>, (['/', ExplicitTrackList])] | [Recurse<([LineNames, string, TrackSize, LineNames])>, void] | [Recurse<([LineNames, string, TrackSize, void])>, (['/', ExplicitTrackList])] | [Recurse<([LineNames, string, TrackSize, void])>, void] | [Recurse<([LineNames, string, void, LineNames])>, (['/', ExplicitTrackList])] | [Recurse<([LineNames, string, void, LineNames])>, void] | [Recurse<([LineNames, string, void, void])>, (['/', ExplicitTrackList])] | [Recurse<([LineNames, string, void, void])>, void] | [Recurse<([void, string, TrackSize, LineNames])>, (['/', ExplicitTrackList])] | [Recurse<([void, string, TrackSize, LineNames])>, void] | [Recurse<([void, string, TrackSize, void])>, (['/', ExplicitTrackList])] | [Recurse<([void, string, TrackSize, void])>, void] | [Recurse<([void, string, void, LineNames])>, (['/', ExplicitTrackList])] | [Recurse<([void, string, void, LineNames])>, void] | [Recurse<([void, string, void, void])>, (['/', ExplicitTrackList])] | [Recurse<([void, string, void, void])>, void]): GridTemplateProperty
export function gridTemplate() { return new GridTemplateProperty() }

// property grid-auto-columns
// <track-size>+
class GridAutoColumnsProperty {}

export function gridAutoColumns(source: Recurse<TrackSize>): GridAutoColumnsProperty
export function gridAutoColumns() { return new GridAutoColumnsProperty() }

// property grid-auto-rows
// <track-size>+
class GridAutoRowsProperty {}

export function gridAutoRows(source: Recurse<TrackSize>): GridAutoRowsProperty
export function gridAutoRows() { return new GridAutoRowsProperty() }

// property grid-auto-flow
// [ row | column ] || dense
class GridAutoFlowProperty {}

export function gridAutoFlow(source: (('row' | 'column') | 'dense')): GridAutoFlowProperty
export function gridAutoFlow() { return new GridAutoFlowProperty() }

// property grid
// <'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>
class GridProperty {}

export function grid(source: GridTemplateProperty | [GridTemplateRowsProperty, '/', (('auto-flow' & 'dense')), GridAutoColumnsProperty] | [GridTemplateRowsProperty, '/', (('auto-flow' & 'dense')), void] | [GridTemplateRowsProperty, '/', (('auto-flow' & void)), GridAutoColumnsProperty] | [GridTemplateRowsProperty, '/', (('auto-flow' & void)), void] | [(('auto-flow' & 'dense')), GridAutoRowsProperty, '/', GridTemplateColumnsProperty] | [(('auto-flow' & 'dense')), void, '/', GridTemplateColumnsProperty] | [(('auto-flow' & void)), GridAutoRowsProperty, '/', GridTemplateColumnsProperty] | [(('auto-flow' & void)), void, '/', GridTemplateColumnsProperty]): GridProperty
export function grid() { return new GridProperty() }

// property grid-row-start
// <grid-line>
class GridRowStartProperty {}

export function gridRowStart(source: GridLine): GridRowStartProperty
export function gridRowStart() { return new GridRowStartProperty() }

// property grid-column-start
// <grid-line>
class GridColumnStartProperty {}

export function gridColumnStart(source: GridLine): GridColumnStartProperty
export function gridColumnStart() { return new GridColumnStartProperty() }

// property grid-row-end
// <grid-line>
class GridRowEndProperty {}

export function gridRowEnd(source: GridLine): GridRowEndProperty
export function gridRowEnd() { return new GridRowEndProperty() }

// property grid-column-end
// <grid-line>
class GridColumnEndProperty {}

export function gridColumnEnd(source: GridLine): GridColumnEndProperty
export function gridColumnEnd() { return new GridColumnEndProperty() }

// property grid-row
// <grid-line> [ / <grid-line> ]?
class GridRowProperty {}

export function gridRow(source: [GridLine, (['/', GridLine])]): GridRowProperty
export function gridRow(source: [GridLine, void]): GridRowProperty
export function gridRow() { return new GridRowProperty() }

// property grid-column
// <grid-line> [ / <grid-line> ]?
class GridColumnProperty {}

export function gridColumn(source: [GridLine, (['/', GridLine])]): GridColumnProperty
export function gridColumn(source: [GridLine, void]): GridColumnProperty
export function gridColumn() { return new GridColumnProperty() }

// property grid-area
// <grid-line> [ / <grid-line> ]{0,3}
class GridAreaProperty {}

export function gridArea(source: [GridLine, Repeat0to3<(['/', GridLine])>]): GridAreaProperty
export function gridArea() { return new GridAreaProperty() }

// property object-fit
// fill | none | [contain | cover] || scale-down
class ObjectFitProperty {}

export function objectFit(source: 'fill' | 'none' | (('contain' | 'cover') | 'scale-down')): ObjectFitProperty
export function objectFit() { return new ObjectFitProperty() }

// property image-resolution
// [ from-image || <resolution> ] && snap?
class ImageResolutionProperty {}

export function imageResolution(source: ((('from-image' | Resolution)) & 'snap')): ImageResolutionProperty
export function imageResolution(source: ((('from-image' | Resolution)) & void)): ImageResolutionProperty
export function imageResolution() { return new ImageResolutionProperty() }

// property object-view-box
// none | <basic-shape-rect>
class ObjectViewBoxProperty {}

export function objectViewBox(source: 'none' | BasicShapeRect): ObjectViewBoxProperty
export function objectViewBox() { return new ObjectViewBoxProperty() }

// property object-position
// <position>
class ObjectPositionProperty {}

export function objectPosition(source: Position): ObjectPositionProperty
export function objectPosition() { return new ObjectPositionProperty() }

// property image-orientation
// from-image | none | [ <angle> || flip ]
class ImageOrientationProperty {}

export function imageOrientation(source: 'from-image' | 'none' | ((Angle | 'flip'))): ImageOrientationProperty
export function imageOrientation() { return new ImageOrientationProperty() }

// property image-rendering
// auto | smooth | high-quality | pixelated | crisp-edges
class ImageRenderingProperty {}

export function imageRendering(source: 'auto' | 'smooth' | 'high-quality' | 'pixelated' | 'crisp-edges'): ImageRenderingProperty
export function imageRendering() { return new ImageRenderingProperty() }

// property dominant-baseline
// auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top
class DominantBaselineProperty {}

export function dominantBaseline(source: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top'): DominantBaselineProperty
export function dominantBaseline() { return new DominantBaselineProperty() }

// property vertical-align
// [ first | last] || <'alignment-baseline'> || <'baseline-shift'>
class VerticalAlignProperty {}

export function verticalAlign(source: (('first' | 'last') | (AlignmentBaselineProperty | BaselineShiftProperty))): VerticalAlignProperty
export function verticalAlign() { return new VerticalAlignProperty() }

// property baseline-source
// auto | first | last
class BaselineSourceProperty {}

export function baselineSource(source: 'auto' | 'first' | 'last'): BaselineSourceProperty
export function baselineSource() { return new BaselineSourceProperty() }

// property alignment-baseline
// baseline | text-bottom | alphabetic | ideographic | middle | central | mathematical | text-top
class AlignmentBaselineProperty {}

export function alignmentBaseline(source: 'baseline' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'text-top'): AlignmentBaselineProperty
export function alignmentBaseline() { return new AlignmentBaselineProperty() }

// property baseline-shift
// <length-percentage> | sub | super | top | center | bottom
class BaselineShiftProperty {}

export function baselineShift(source: LengthPercentage | 'sub' | 'super' | 'top' | 'center' | 'bottom'): BaselineShiftProperty
export function baselineShift() { return new BaselineShiftProperty() }

// property line-height
// normal | <number [0,∞]> | <length-percentage [0,∞]>
class LineHeightProperty {}

export function lineHeight(source: 'normal' | number | LengthPercentage): LineHeightProperty
export function lineHeight() { return new LineHeightProperty() }

// property text-box-edge
// leading | [ text | cap | ex | ideographic | ideographic-ink ] [ text | alphabetic | ideographic | ideographic-ink ]?
class TextBoxEdgeProperty {}

export function textBoxEdge(source: 'leading' | [('text' | 'cap' | 'ex' | 'ideographic' | 'ideographic-ink'), ('text' | 'alphabetic' | 'ideographic' | 'ideographic-ink')] | [('text' | 'cap' | 'ex' | 'ideographic' | 'ideographic-ink'), void]): TextBoxEdgeProperty
export function textBoxEdge() { return new TextBoxEdgeProperty() }

// property text-box-trim
// none | start | end | both
class TextBoxTrimProperty {}

export function textBoxTrim(source: 'none' | 'start' | 'end' | 'both'): TextBoxTrimProperty
export function textBoxTrim() { return new TextBoxTrimProperty() }

// property inline-sizing
// normal | stretch
class InlineSizingProperty {}

export function inlineSizing(source: 'normal' | 'stretch'): InlineSizingProperty
export function inlineSizing() { return new InlineSizingProperty() }

// property initial-letter
// normal | <number [1,∞]> <integer [1,∞]> | <number [1,∞]> && [ drop | raise ]?
class InitialLetterProperty {}

export function initialLetter(source: 'normal' | [number, number] | (number & ('drop' | 'raise')) | (number & void)): InitialLetterProperty
export function initialLetter() { return new InitialLetterProperty() }

// property initial-letter-align
// [ border-box? [ alphabetic | ideographic | hanging | leading ]? ]!
class InitialLetterAlignProperty {}

export function initialLetterAlign(source: ((['border-box', ('alphabetic' | 'ideographic' | 'hanging' | 'leading')]))): InitialLetterAlignProperty
export function initialLetterAlign(source: ((['border-box', void]))): InitialLetterAlignProperty
export function initialLetterAlign(source: (([void, ('alphabetic' | 'ideographic' | 'hanging' | 'leading')]))): InitialLetterAlignProperty
export function initialLetterAlign(source: (([void, void]))): InitialLetterAlignProperty
export function initialLetterAlign() { return new InitialLetterAlignProperty() }

// property initial-letter-wrap
// none | first | all | grid | <length-percentage>
class InitialLetterWrapProperty {}

export function initialLetterWrap(source: 'none' | 'first' | 'all' | 'grid' | LengthPercentage): InitialLetterWrapProperty
export function initialLetterWrap() { return new InitialLetterWrapProperty() }

// property line-grid
// match-parent | create
class LineGridProperty {}

export function lineGrid(source: 'match-parent' | 'create'): LineGridProperty
export function lineGrid() { return new LineGridProperty() }

// property line-snap
// none | baseline | contain
class LineSnapProperty {}

export function lineSnap(source: 'none' | 'baseline' | 'contain'): LineSnapProperty
export function lineSnap() { return new LineSnapProperty() }

// property box-snap
// none | block-start | block-end | center | baseline | last-baseline
class BoxSnapProperty {}

export function boxSnap(source: 'none' | 'block-start' | 'block-end' | 'center' | 'baseline' | 'last-baseline'): BoxSnapProperty
export function boxSnap() { return new BoxSnapProperty() }

// property link-parameters
// none | <link-param>+
class LinkParametersProperty {}

export function linkParameters(source: 'none' | Recurse<LinkParam>): LinkParametersProperty
export function linkParameters() { return new LinkParametersProperty() }

// property list-style-image
// <image> | none
class ListStyleImageProperty {}

export function listStyleImage(source: Image | 'none'): ListStyleImageProperty
export function listStyleImage() { return new ListStyleImageProperty() }

// property list-style-type
// <counter-style> | <string> | none
class ListStyleTypeProperty {}

export function listStyleType(source: CounterStyle | string | 'none'): ListStyleTypeProperty
export function listStyleType() { return new ListStyleTypeProperty() }

// property list-style-position
// inside | outside
class ListStylePositionProperty {}

export function listStylePosition(source: 'inside' | 'outside'): ListStylePositionProperty
export function listStylePosition() { return new ListStylePositionProperty() }

// property list-style
// <'list-style-position'> || <'list-style-image'> || <'list-style-type'>
class ListStyleProperty {}

export function listStyle(source: (ListStylePositionProperty | (ListStyleImageProperty | ListStyleTypeProperty))): ListStyleProperty
export function listStyle() { return new ListStyleProperty() }

// property marker-side
// match-self | match-parent
class MarkerSideProperty {}

export function markerSide(source: 'match-self' | 'match-parent'): MarkerSideProperty
export function markerSide() { return new MarkerSideProperty() }

// property counter-reset
// [ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none
class CounterResetProperty {}

export function counterReset(source: Recurse<([CounterName, number] | [CounterName, void] | [ReversedCounterName, number] | [ReversedCounterName, void])> | 'none'): CounterResetProperty
export function counterReset() { return new CounterResetProperty() }

// property counter-increment
// [ <counter-name> <integer>? ]+ | none
class CounterIncrementProperty {}

export function counterIncrement(source: Recurse<([CounterName, number])> | Recurse<([CounterName, void])> | 'none'): CounterIncrementProperty
export function counterIncrement() { return new CounterIncrementProperty() }

// property counter-set
// [ <counter-name> <integer>? ]+ | none
class CounterSetProperty {}

export function counterSet(source: Recurse<([CounterName, number])> | Recurse<([CounterName, void])> | 'none'): CounterSetProperty
export function counterSet() { return new CounterSetProperty() }

// property block-size
// <'width'>
class BlockSizeProperty {}

export function blockSize(source: WidthProperty): BlockSizeProperty
export function blockSize() { return new BlockSizeProperty() }

// property inline-size
// <'width'>
class InlineSizeProperty {}

export function inlineSize(source: WidthProperty): InlineSizeProperty
export function inlineSize() { return new InlineSizeProperty() }

// property min-block-size
// <'min-width'>
class MinBlockSizeProperty {}

export function minBlockSize(source: MinWidthProperty): MinBlockSizeProperty
export function minBlockSize() { return new MinBlockSizeProperty() }

// property min-inline-size
// <'min-width'>
class MinInlineSizeProperty {}

export function minInlineSize(source: MinWidthProperty): MinInlineSizeProperty
export function minInlineSize() { return new MinInlineSizeProperty() }

// property max-block-size
// <'max-width'>
class MaxBlockSizeProperty {}

export function maxBlockSize(source: MaxWidthProperty): MaxBlockSizeProperty
export function maxBlockSize() { return new MaxBlockSizeProperty() }

// property max-inline-size
// <'max-width'>
class MaxInlineSizeProperty {}

export function maxInlineSize(source: MaxWidthProperty): MaxInlineSizeProperty
export function maxInlineSize() { return new MaxInlineSizeProperty() }

// property margin-block-start
// <'margin-top'>
class MarginBlockStartProperty {}

export function marginBlockStart(source: MarginTopProperty): MarginBlockStartProperty
export function marginBlockStart() { return new MarginBlockStartProperty() }

// property margin-block-end
// <'margin-top'>
class MarginBlockEndProperty {}

export function marginBlockEnd(source: MarginTopProperty): MarginBlockEndProperty
export function marginBlockEnd() { return new MarginBlockEndProperty() }

// property margin-inline-start
// <'margin-top'>
class MarginInlineStartProperty {}

export function marginInlineStart(source: MarginTopProperty): MarginInlineStartProperty
export function marginInlineStart() { return new MarginInlineStartProperty() }

// property margin-inline-end
// <'margin-top'>
class MarginInlineEndProperty {}

export function marginInlineEnd(source: MarginTopProperty): MarginInlineEndProperty
export function marginInlineEnd() { return new MarginInlineEndProperty() }

// property margin-block
// <'margin-top'>{1,2}
class MarginBlockProperty {}

export function marginBlock(source: Repeat1to2<MarginTopProperty>): MarginBlockProperty
export function marginBlock() { return new MarginBlockProperty() }

// property margin-inline
// <'margin-top'>{1,2}
class MarginInlineProperty {}

export function marginInline(source: Repeat1to2<MarginTopProperty>): MarginInlineProperty
export function marginInline() { return new MarginInlineProperty() }

// property padding-block-start
// <'padding-top'>
class PaddingBlockStartProperty {}

export function paddingBlockStart(source: PaddingTopProperty): PaddingBlockStartProperty
export function paddingBlockStart() { return new PaddingBlockStartProperty() }

// property padding-block-end
// <'padding-top'>
class PaddingBlockEndProperty {}

export function paddingBlockEnd(source: PaddingTopProperty): PaddingBlockEndProperty
export function paddingBlockEnd() { return new PaddingBlockEndProperty() }

// property padding-inline-start
// <'padding-top'>
class PaddingInlineStartProperty {}

export function paddingInlineStart(source: PaddingTopProperty): PaddingInlineStartProperty
export function paddingInlineStart() { return new PaddingInlineStartProperty() }

// property padding-inline-end
// <'padding-top'>
class PaddingInlineEndProperty {}

export function paddingInlineEnd(source: PaddingTopProperty): PaddingInlineEndProperty
export function paddingInlineEnd() { return new PaddingInlineEndProperty() }

// property padding-block
// <'padding-top'>{1,2}
class PaddingBlockProperty {}

export function paddingBlock(source: Repeat1to2<PaddingTopProperty>): PaddingBlockProperty
export function paddingBlock() { return new PaddingBlockProperty() }

// property padding-inline
// <'padding-top'>{1,2}
class PaddingInlineProperty {}

export function paddingInline(source: Repeat1to2<PaddingTopProperty>): PaddingInlineProperty
export function paddingInline() { return new PaddingInlineProperty() }

// property clip-path
// <clip-source> | [ <basic-shape> || <geometry-box> ] | none
class ClipPathProperty {}

export function clipPath(source: ClipSource | ((BasicShape | GeometryBox)) | 'none'): ClipPathProperty
export function clipPath() { return new ClipPathProperty() }

// property clip-rule
// nonzero | evenodd
class ClipRuleProperty {}

export function clipRule(source: 'nonzero' | 'evenodd'): ClipRuleProperty
export function clipRule() { return new ClipRuleProperty() }

// property mask-image
// <mask-reference>#
class MaskImageProperty {}

export function maskImage(source: RecurseTuple<MaskReference>): MaskImageProperty
export function maskImage() { return new MaskImageProperty() }

// property mask-mode
// <masking-mode>#
class MaskModeProperty {}

export function maskMode(source: RecurseTuple<MaskingMode>): MaskModeProperty
export function maskMode() { return new MaskModeProperty() }

// property mask-repeat
// <repeat-style>#
class MaskRepeatProperty {}

export function maskRepeat(source: RecurseTuple<RepeatStyle>): MaskRepeatProperty
export function maskRepeat() { return new MaskRepeatProperty() }

// property mask-position
// <position>#
class MaskPositionProperty {}

export function maskPosition(source: RecurseTuple<Position>): MaskPositionProperty
export function maskPosition() { return new MaskPositionProperty() }

// property mask-clip
// [ <coord-box> | no-clip ]#
class MaskClipProperty {}

export function maskClip(source: RecurseTuple<(CoordBox | 'no-clip')>): MaskClipProperty
export function maskClip() { return new MaskClipProperty() }

// property mask-origin
// <coord-box>#
class MaskOriginProperty {}

export function maskOrigin(source: RecurseTuple<CoordBox>): MaskOriginProperty
export function maskOrigin() { return new MaskOriginProperty() }

// property mask-size
// <bg-size>#
class MaskSizeProperty {}

export function maskSize(source: RecurseTuple<BgSize>): MaskSizeProperty
export function maskSize() { return new MaskSizeProperty() }

// property mask-composite
// <compositing-operator>#
class MaskCompositeProperty {}

export function maskComposite(source: RecurseTuple<CompositingOperator>): MaskCompositeProperty
export function maskComposite() { return new MaskCompositeProperty() }

// property mask
// <mask-layer>#
class MaskProperty {}

export function mask(source: RecurseTuple<MaskLayer>): MaskProperty
export function mask() { return new MaskProperty() }

// property mask-border-source
// none | <image>
class MaskBorderSourceProperty {}

export function maskBorderSource(source: 'none' | Image): MaskBorderSourceProperty
export function maskBorderSource() { return new MaskBorderSourceProperty() }

// property mask-border-mode
// luminance | alpha
class MaskBorderModeProperty {}

export function maskBorderMode(source: 'luminance' | 'alpha'): MaskBorderModeProperty
export function maskBorderMode() { return new MaskBorderModeProperty() }

// property mask-border-slice
// [ <number> | <percentage> ]{1,4} fill?
class MaskBorderSliceProperty {}

export function maskBorderSlice(source: [Repeat1to4<(number | Percentage)>, 'fill']): MaskBorderSliceProperty
export function maskBorderSlice(source: [Repeat1to4<(number | Percentage)>, void]): MaskBorderSliceProperty
export function maskBorderSlice() { return new MaskBorderSliceProperty() }

// property mask-border-width
// [ <length-percentage> | <number> | auto ]{1,4}
class MaskBorderWidthProperty {}

export function maskBorderWidth(source: Repeat1to4<(LengthPercentage | number | 'auto')>): MaskBorderWidthProperty
export function maskBorderWidth() { return new MaskBorderWidthProperty() }

// property mask-border-outset
// [ <length> | <number> ]{1,4}
class MaskBorderOutsetProperty {}

export function maskBorderOutset(source: Repeat1to4<(number | number)>): MaskBorderOutsetProperty
export function maskBorderOutset() { return new MaskBorderOutsetProperty() }

// property mask-border-repeat
// [ stretch | repeat | round | space ]{1,2}
class MaskBorderRepeatProperty {}

export function maskBorderRepeat(source: Repeat1to2<('stretch' | 'repeat' | 'round' | 'space')>): MaskBorderRepeatProperty
export function maskBorderRepeat() { return new MaskBorderRepeatProperty() }

// property mask-border
// <'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>
class MaskBorderProperty {}

export function maskBorder(source: (MaskBorderSourceProperty | ([MaskBorderSliceProperty, (['/', MaskBorderWidthProperty, (['/', MaskBorderOutsetProperty])])] | (MaskBorderRepeatProperty | MaskBorderModeProperty)))): MaskBorderProperty
export function maskBorder(source: (MaskBorderSourceProperty | ([MaskBorderSliceProperty, (['/', MaskBorderWidthProperty, void])] | (MaskBorderRepeatProperty | MaskBorderModeProperty)))): MaskBorderProperty
export function maskBorder(source: (MaskBorderSourceProperty | ([MaskBorderSliceProperty, (['/', void, (['/', MaskBorderOutsetProperty])])] | (MaskBorderRepeatProperty | MaskBorderModeProperty)))): MaskBorderProperty
export function maskBorder(source: (MaskBorderSourceProperty | ([MaskBorderSliceProperty, (['/', void, void])] | (MaskBorderRepeatProperty | MaskBorderModeProperty)))): MaskBorderProperty
export function maskBorder(source: (MaskBorderSourceProperty | ([MaskBorderSliceProperty, void] | (MaskBorderRepeatProperty | MaskBorderModeProperty)))): MaskBorderProperty
export function maskBorder() { return new MaskBorderProperty() }

// property mask-type
// luminance | alpha
class MaskTypeProperty {}

export function maskType(source: 'luminance' | 'alpha'): MaskTypeProperty
export function maskType() { return new MaskTypeProperty() }

// property clip
// <rect()> | auto
class ClipProperty {}

export function clip(source: RectProperty | 'auto'): ClipProperty
export function clip() { return new ClipProperty() }

// property column-span
// none | <integer [1,∞]> | all | auto
class ColumnSpanProperty {}

export function columnSpan(source: 'none' | number | 'all' | 'auto'): ColumnSpanProperty
export function columnSpan() { return new ColumnSpanProperty() }

// property column-width
// auto | <length [0,∞]>
class ColumnWidthProperty {}

export function columnWidth(source: 'auto' | number): ColumnWidthProperty
export function columnWidth() { return new ColumnWidthProperty() }

// property column-count
// auto | <integer [1,∞]>
class ColumnCountProperty {}

export function columnCount(source: 'auto' | number): ColumnCountProperty
export function columnCount() { return new ColumnCountProperty() }

// property columns
// <'column-width'> || <'column-count'>
class ColumnsProperty {}

export function columns(source: (ColumnWidthProperty | ColumnCountProperty)): ColumnsProperty
export function columns() { return new ColumnsProperty() }

// property column-rule-color
// <color>
class ColumnRuleColorProperty {}

export function columnRuleColor(source: Color): ColumnRuleColorProperty
export function columnRuleColor() { return new ColumnRuleColorProperty() }

// property column-rule-style
// <line-style>
class ColumnRuleStyleProperty {}

export function columnRuleStyle(source: LineStyle): ColumnRuleStyleProperty
export function columnRuleStyle() { return new ColumnRuleStyleProperty() }

// property column-rule-width
// <line-width>
class ColumnRuleWidthProperty {}

export function columnRuleWidth(source: LineWidth): ColumnRuleWidthProperty
export function columnRuleWidth() { return new ColumnRuleWidthProperty() }

// property column-rule
// <'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>
class ColumnRuleProperty {}

export function columnRule(source: (ColumnRuleWidthProperty | (ColumnRuleStyleProperty | ColumnRuleColorProperty))): ColumnRuleProperty
export function columnRule() { return new ColumnRuleProperty() }

// property column-fill
// auto | balance | balance-all
class ColumnFillProperty {}

export function columnFill(source: 'auto' | 'balance' | 'balance-all'): ColumnFillProperty
export function columnFill() { return new ColumnFillProperty() }

// property spatial-navigation-contain
// auto | contain
class SpatialNavigationContainProperty {}

export function spatialNavigationContain(source: 'auto' | 'contain'): SpatialNavigationContainProperty
export function spatialNavigationContain() { return new SpatialNavigationContainProperty() }

// property spatial-navigation-action
// auto | focus | scroll
class SpatialNavigationActionProperty {}

export function spatialNavigationAction(source: 'auto' | 'focus' | 'scroll'): SpatialNavigationActionProperty
export function spatialNavigationAction() { return new SpatialNavigationActionProperty() }

// property spatial-navigation-function
// normal | grid
class SpatialNavigationFunctionProperty {}

export function spatialNavigationFunction(source: 'normal' | 'grid'): SpatialNavigationFunctionProperty
export function spatialNavigationFunction() { return new SpatialNavigationFunctionProperty() }

// property overflow-clip-margin-top
// <visual-box> || <length [0,∞]>
class OverflowClipMarginTopProperty {}

export function overflowClipMarginTop(source: (VisualBox | number)): OverflowClipMarginTopProperty
export function overflowClipMarginTop() { return new OverflowClipMarginTopProperty() }

// property overflow-clip-margin-right
// <visual-box> || <length [0,∞]>
class OverflowClipMarginRightProperty {}

export function overflowClipMarginRight(source: (VisualBox | number)): OverflowClipMarginRightProperty
export function overflowClipMarginRight() { return new OverflowClipMarginRightProperty() }

// property overflow-clip-margin-bottom
// <visual-box> || <length [0,∞]>
class OverflowClipMarginBottomProperty {}

export function overflowClipMarginBottom(source: (VisualBox | number)): OverflowClipMarginBottomProperty
export function overflowClipMarginBottom() { return new OverflowClipMarginBottomProperty() }

// property overflow-clip-margin-left
// <visual-box> || <length [0,∞]>
class OverflowClipMarginLeftProperty {}

export function overflowClipMarginLeft(source: (VisualBox | number)): OverflowClipMarginLeftProperty
export function overflowClipMarginLeft() { return new OverflowClipMarginLeftProperty() }

// property overflow-clip-margin-block-start
// <visual-box> || <length [0,∞]>
class OverflowClipMarginBlockStartProperty {}

export function overflowClipMarginBlockStart(source: (VisualBox | number)): OverflowClipMarginBlockStartProperty
export function overflowClipMarginBlockStart() { return new OverflowClipMarginBlockStartProperty() }

// property overflow-clip-margin-inline-start
// <visual-box> || <length [0,∞]>
class OverflowClipMarginInlineStartProperty {}

export function overflowClipMarginInlineStart(source: (VisualBox | number)): OverflowClipMarginInlineStartProperty
export function overflowClipMarginInlineStart() { return new OverflowClipMarginInlineStartProperty() }

// property overflow-clip-margin-block-end
// <visual-box> || <length [0,∞]>
class OverflowClipMarginBlockEndProperty {}

export function overflowClipMarginBlockEnd(source: (VisualBox | number)): OverflowClipMarginBlockEndProperty
export function overflowClipMarginBlockEnd() { return new OverflowClipMarginBlockEndProperty() }

// property overflow-clip-margin-inline-end
// <visual-box> || <length [0,∞]>
class OverflowClipMarginInlineEndProperty {}

export function overflowClipMarginInlineEnd(source: (VisualBox | number)): OverflowClipMarginInlineEndProperty
export function overflowClipMarginInlineEnd() { return new OverflowClipMarginInlineEndProperty() }

// property overflow-clip-margin
// <visual-box> || <length [0,∞]>
class OverflowClipMarginProperty {}

export function overflowClipMargin(source: (VisualBox | number)): OverflowClipMarginProperty
export function overflowClipMargin() { return new OverflowClipMarginProperty() }

// property overflow-clip-margin-inline
// <visual-box> || <length [0,∞]>
class OverflowClipMarginInlineProperty {}

export function overflowClipMarginInline(source: (VisualBox | number)): OverflowClipMarginInlineProperty
export function overflowClipMarginInline() { return new OverflowClipMarginInlineProperty() }

// property overflow-clip-margin-block
// <visual-box> || <length [0,∞]>
class OverflowClipMarginBlockProperty {}

export function overflowClipMarginBlock(source: (VisualBox | number)): OverflowClipMarginBlockProperty
export function overflowClipMarginBlock() { return new OverflowClipMarginBlockProperty() }

// property text-overflow
// [ clip | ellipsis | <string> | fade | <fade()> ]{1,2}
class TextOverflowProperty {}

export function textOverflow(source: Repeat1to2<('clip' | 'ellipsis' | string | 'fade' | FadeProperty)>): TextOverflowProperty
export function textOverflow() { return new TextOverflowProperty() }

// property block-ellipsis
// none | auto | <string>
class BlockEllipsisProperty {}

export function blockEllipsis(source: 'none' | 'auto' | string): BlockEllipsisProperty
export function blockEllipsis() { return new BlockEllipsisProperty() }

// property line-clamp
// none | <integer [1,∞]> <'block-ellipsis'>?
class LineClampProperty {}

export function lineClamp(source: 'none' | [number, BlockEllipsisProperty] | [number, void]): LineClampProperty
export function lineClamp() { return new LineClampProperty() }

// property -webkit-line-clamp
// none | <integer [1,∞]>
class WebkitLineClampProperty {}

export function webkitLineClamp(source: 'none' | number): WebkitLineClampProperty
export function webkitLineClamp() { return new WebkitLineClampProperty() }

// property continue
// auto | discard | -webkit-discard | overflow | paginate | fragments
class ContinueProperty {}

export function continueOverflow(source: 'auto' | 'discard' | '-webkit-discard' | 'overflow' | 'paginate' | 'fragments'): ContinueProperty
export function continueOverflow() { return new ContinueProperty() }

// property max-lines
// none | <integer [1,∞]>
class MaxLinesProperty {}

export function maxLines(source: 'none' | number): MaxLinesProperty
export function maxLines() { return new MaxLinesProperty() }

// property overflow-x
// visible | hidden | clip | scroll | auto
class OverflowXProperty {}

export function overflowX(source: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'): OverflowXProperty
export function overflowX() { return new OverflowXProperty() }

// property overflow-y
// visible | hidden | clip | scroll | auto
class OverflowYProperty {}

export function overflowY(source: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'): OverflowYProperty
export function overflowY() { return new OverflowYProperty() }

// property overflow-block
// visible | hidden | clip | scroll | auto
class OverflowBlockProperty {}

export function overflowBlock(source: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'): OverflowBlockProperty
export function overflowBlock() { return new OverflowBlockProperty() }

// property overflow-inline
// visible | hidden | clip | scroll | auto
class OverflowInlineProperty {}

export function overflowInline(source: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'): OverflowInlineProperty
export function overflowInline() { return new OverflowInlineProperty() }

// property overflow
// <'overflow-block'>{1,2}
class OverflowProperty {}

export function overflow(source: Repeat1to2<OverflowBlockProperty>): OverflowProperty
export function overflow() { return new OverflowProperty() }

// property scroll-behavior
// auto | smooth
class ScrollBehaviorProperty {}

export function scrollBehavior(source: 'auto' | 'smooth'): ScrollBehaviorProperty
export function scrollBehavior() { return new ScrollBehaviorProperty() }

// property scrollbar-gutter
// auto | stable && both-edges?
class ScrollbarGutterProperty {}

export function scrollbarGutter(source: 'auto' | ('stable' & 'both-edges') | ('stable' & void)): ScrollbarGutterProperty
export function scrollbarGutter() { return new ScrollbarGutterProperty() }

// property overscroll-behavior
// [ contain | none | auto ]{1,2}
class OverscrollBehaviorProperty {}

export function overscrollBehavior(source: Repeat1to2<('contain' | 'none' | 'auto')>): OverscrollBehaviorProperty
export function overscrollBehavior() { return new OverscrollBehaviorProperty() }

// property overscroll-behavior-x
// contain | none | auto
class OverscrollBehaviorXProperty {}

export function overscrollBehaviorX(source: 'contain' | 'none' | 'auto'): OverscrollBehaviorXProperty
export function overscrollBehaviorX() { return new OverscrollBehaviorXProperty() }

// property overscroll-behavior-y
// contain | none | auto
class OverscrollBehaviorYProperty {}

export function overscrollBehaviorY(source: 'contain' | 'none' | 'auto'): OverscrollBehaviorYProperty
export function overscrollBehaviorY() { return new OverscrollBehaviorYProperty() }

// property overscroll-behavior-inline
// contain | none | auto
class OverscrollBehaviorInlineProperty {}

export function overscrollBehaviorInline(source: 'contain' | 'none' | 'auto'): OverscrollBehaviorInlineProperty
export function overscrollBehaviorInline() { return new OverscrollBehaviorInlineProperty() }

// property overscroll-behavior-block
// contain | none | auto
class OverscrollBehaviorBlockProperty {}

export function overscrollBehaviorBlock(source: 'contain' | 'none' | 'auto'): OverscrollBehaviorBlockProperty
export function overscrollBehaviorBlock() { return new OverscrollBehaviorBlockProperty() }

// property float-reference
// inline | column | region | page
class FloatReferenceProperty {}

export function floatReference(source: 'inline' | 'column' | 'region' | 'page'): FloatReferenceProperty
export function floatReference() { return new FloatReferenceProperty() }

// property float
// block-start | block-end | inline-start | inline-end | snap-block | <snap-block()> | snap-inline | <snap-inline()> | left | right | top | bottom | none
class FloatProperty {}

export function float(source: 'block-start' | 'block-end' | 'inline-start' | 'inline-end' | 'snap-block' | SnapBlockProperty | 'snap-inline' | SnapInlineProperty | 'left' | 'right' | 'top' | 'bottom' | 'none'): FloatProperty
export function float() { return new FloatProperty() }

// property clear
// inline-start | inline-end | block-start | block-end | left | right | top | bottom | both-inline | both-block | both | none
class ClearProperty {}

export function clear(source: 'inline-start' | 'inline-end' | 'block-start' | 'block-end' | 'left' | 'right' | 'top' | 'bottom' | 'both-inline' | 'both-block' | 'both' | 'none'): ClearProperty
export function clear() { return new ClearProperty() }

// property float-defer
// <integer> | last | none
class FloatDeferProperty {}

export function floatDefer(source: number | 'last' | 'none'): FloatDeferProperty
export function floatDefer() { return new FloatDeferProperty() }

// property float-offset
// <length> | <percentage>
class FloatOffsetProperty {}

export function floatOffset(source: number | Percentage): FloatOffsetProperty
export function floatOffset() { return new FloatOffsetProperty() }

// property page
// auto | <custom-ident>
class PageProperty {}

export function page(source: 'auto' | CustomIdent): PageProperty
export function page() { return new PageProperty() }

// property overlay
// none | auto
class OverlayProperty {}

export function overlay(source: 'none' | 'auto'): OverlayProperty
export function overlay() { return new OverlayProperty() }

// property position
// static | relative | absolute | sticky | fixed
class PositionProperty {}

export function position(source: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'): PositionProperty
export function position() { return new PositionProperty() }

// property top
// auto | <length-percentage>
class TopProperty {}

export function top(source: 'auto' | LengthPercentage): TopProperty
export function top() { return new TopProperty() }

// property right
// auto | <length-percentage>
class RightProperty {}

export function right(source: 'auto' | LengthPercentage): RightProperty
export function right() { return new RightProperty() }

// property bottom
// auto | <length-percentage>
class BottomProperty {}

export function bottom(source: 'auto' | LengthPercentage): BottomProperty
export function bottom() { return new BottomProperty() }

// property left
// auto | <length-percentage>
class LeftProperty {}

export function left(source: 'auto' | LengthPercentage): LeftProperty
export function left() { return new LeftProperty() }

// property inset-block-start
// auto | <length-percentage>
class InsetBlockStartProperty {}

export function insetBlockStart(source: 'auto' | LengthPercentage): InsetBlockStartProperty
export function insetBlockStart() { return new InsetBlockStartProperty() }

// property inset-inline-start
// auto | <length-percentage>
class InsetInlineStartProperty {}

export function insetInlineStart(source: 'auto' | LengthPercentage): InsetInlineStartProperty
export function insetInlineStart() { return new InsetInlineStartProperty() }

// property inset-block-end
// auto | <length-percentage>
class InsetBlockEndProperty {}

export function insetBlockEnd(source: 'auto' | LengthPercentage): InsetBlockEndProperty
export function insetBlockEnd() { return new InsetBlockEndProperty() }

// property inset-inline-end
// auto | <length-percentage>
class InsetInlineEndProperty {}

export function insetInlineEnd(source: 'auto' | LengthPercentage): InsetInlineEndProperty
export function insetInlineEnd() { return new InsetInlineEndProperty() }

// property inset-block
// <'top'>{1,2}
class InsetBlockProperty {}

export function insetBlock(source: Repeat1to2<TopProperty>): InsetBlockProperty
export function insetBlock() { return new InsetBlockProperty() }

// property inset-inline
// <'top'>{1,2}
class InsetInlineProperty {}

export function insetInline(source: Repeat1to2<TopProperty>): InsetInlineProperty
export function insetInline() { return new InsetInlineProperty() }

// property inset
// <'top'>{1,4}
class InsetProperty {}

export function inset(source: Repeat1to4<TopProperty>): InsetProperty
export function inset() { return new InsetProperty() }

// property flow-into
// none | <ident> [element | content]?
class FlowIntoProperty {}

export function flowInto(source: 'none' | [Ident, ('element' | 'content')] | [Ident, void]): FlowIntoProperty
export function flowInto() { return new FlowIntoProperty() }

// property flow-from
// <ident> | none
class FlowFromProperty {}

export function flowFrom(source: Ident | 'none'): FlowFromProperty
export function flowFrom() { return new FlowFromProperty() }

// property region-fragment
// auto | break
class RegionFragmentProperty {}

export function regionFragment(source: 'auto' | 'break'): RegionFragmentProperty
export function regionFragment() { return new RegionFragmentProperty() }

// property block-step-size
// none | <length [0,∞]>
class BlockStepSizeProperty {}

export function blockStepSize(source: 'none' | number): BlockStepSizeProperty
export function blockStepSize() { return new BlockStepSizeProperty() }

// property block-step-insert
// margin | padding
class BlockStepInsertProperty {}

export function blockStepInsert(source: 'margin' | 'padding'): BlockStepInsertProperty
export function blockStepInsert() { return new BlockStepInsertProperty() }

// property block-step-align
// auto | center | start | end
class BlockStepAlignProperty {}

export function blockStepAlign(source: 'auto' | 'center' | 'start' | 'end'): BlockStepAlignProperty
export function blockStepAlign() { return new BlockStepAlignProperty() }

// property block-step-round
// up | down | nearest
class BlockStepRoundProperty {}

export function blockStepRound(source: 'up' | 'down' | 'nearest'): BlockStepRoundProperty
export function blockStepRound() { return new BlockStepRoundProperty() }

// property block-step
// <'block-step-size'> || <'block-step-insert'> || <'block-step-align'> || <'block-step-round'>
class BlockStepProperty {}

export function blockStep(source: (BlockStepSizeProperty | (BlockStepInsertProperty | (BlockStepAlignProperty | BlockStepRoundProperty)))): BlockStepProperty
export function blockStep() { return new BlockStepProperty() }

// property line-height-step
// <length [0,∞]>
class LineHeightStepProperty {}

export function lineHeightStep(source: number): LineHeightStepProperty
export function lineHeightStep() { return new LineHeightStepProperty() }

// property border-boundary
// none | parent | display
class BorderBoundaryProperty {}

export function borderBoundary(source: 'none' | 'parent' | 'display'): BorderBoundaryProperty
export function borderBoundary() { return new BorderBoundaryProperty() }

// property ruby-position
// [ alternate || [ over | under ] ] | inter-character
class RubyPositionProperty {}

export function rubyPosition(source: (('alternate' | ('over' | 'under'))) | 'inter-character'): RubyPositionProperty
export function rubyPosition() { return new RubyPositionProperty() }

// property ruby-merge
// separate | merge | auto
class RubyMergeProperty {}

export function rubyMerge(source: 'separate' | 'merge' | 'auto'): RubyMergeProperty
export function rubyMerge() { return new RubyMergeProperty() }

// property ruby-align
// start | center | space-between | space-around
class RubyAlignProperty {}

export function rubyAlign(source: 'start' | 'center' | 'space-between' | 'space-around'): RubyAlignProperty
export function rubyAlign() { return new RubyAlignProperty() }

// property ruby-overhang
// auto | none
class RubyOverhangProperty {}

export function rubyOverhang(source: 'auto' | 'none'): RubyOverhangProperty
export function rubyOverhang() { return new RubyOverhangProperty() }

// property overflow-anchor
// auto | none
class OverflowAnchorProperty {}

export function overflowAnchor(source: 'auto' | 'none'): OverflowAnchorProperty
export function overflowAnchor() { return new OverflowAnchorProperty() }

// property scroll-start
// [ auto | start | end | center | left | right | top | bottom | <length-percentage [0,∞]> ]{1,2}
class ScrollStartProperty {}

export function scrollStart(source: Repeat1to2<('auto' | 'start' | 'end' | 'center' | 'left' | 'right' | 'top' | 'bottom' | LengthPercentage)>): ScrollStartProperty
export function scrollStart() { return new ScrollStartProperty() }

// property scroll-start-target
// [ none | auto ]{1,2}
class ScrollStartTargetProperty {}

export function scrollStartTarget(source: Repeat1to2<('none' | 'auto')>): ScrollStartTargetProperty
export function scrollStartTarget() { return new ScrollStartTargetProperty() }

// property scroll-start-x
// auto | start | end | center | <length-percentage [0,∞]>
class ScrollStartXProperty {}

export function scrollStartX(source: 'auto' | 'start' | 'end' | 'center' | LengthPercentage): ScrollStartXProperty
export function scrollStartX() { return new ScrollStartXProperty() }

// property scroll-start-y
// auto | start | end | center | <length-percentage [0,∞]>
class ScrollStartYProperty {}

export function scrollStartY(source: 'auto' | 'start' | 'end' | 'center' | LengthPercentage): ScrollStartYProperty
export function scrollStartY() { return new ScrollStartYProperty() }

// property scroll-start-inline
// auto | start | end | center | <length-percentage [0,∞]>
class ScrollStartInlineProperty {}

export function scrollStartInline(source: 'auto' | 'start' | 'end' | 'center' | LengthPercentage): ScrollStartInlineProperty
export function scrollStartInline() { return new ScrollStartInlineProperty() }

// property scroll-start-block
// auto | start | end | center | <length-percentage [0,∞]>
class ScrollStartBlockProperty {}

export function scrollStartBlock(source: 'auto' | 'start' | 'end' | 'center' | LengthPercentage): ScrollStartBlockProperty
export function scrollStartBlock() { return new ScrollStartBlockProperty() }

// property scroll-start-target-block
// auto | none
class ScrollStartTargetBlockProperty {}

export function scrollStartTargetBlock(source: 'auto' | 'none'): ScrollStartTargetBlockProperty
export function scrollStartTargetBlock() { return new ScrollStartTargetBlockProperty() }

// property scroll-start-target-inline
// auto | none
class ScrollStartTargetInlineProperty {}

export function scrollStartTargetInline(source: 'auto' | 'none'): ScrollStartTargetInlineProperty
export function scrollStartTargetInline() { return new ScrollStartTargetInlineProperty() }

// property scroll-start-target-x
// none | auto
class ScrollStartTargetXProperty {}

export function scrollStartTargetX(source: 'none' | 'auto'): ScrollStartTargetXProperty
export function scrollStartTargetX() { return new ScrollStartTargetXProperty() }

// property scroll-start-target-y
// none | auto
class ScrollStartTargetYProperty {}

export function scrollStartTargetY(source: 'none' | 'auto'): ScrollStartTargetYProperty
export function scrollStartTargetY() { return new ScrollStartTargetYProperty() }

// property scroll-snap-type
// none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
class ScrollSnapTypeProperty {}

export function scrollSnapType(source: 'none' | [('x' | 'y' | 'block' | 'inline' | 'both'), ('mandatory' | 'proximity')] | [('x' | 'y' | 'block' | 'inline' | 'both'), void]): ScrollSnapTypeProperty
export function scrollSnapType() { return new ScrollSnapTypeProperty() }

// property scroll-padding
// [ auto | <length-percentage [0,∞]> ]{1,4}
class ScrollPaddingProperty {}

export function scrollPadding(source: Repeat1to4<('auto' | LengthPercentage)>): ScrollPaddingProperty
export function scrollPadding() { return new ScrollPaddingProperty() }

// property scroll-margin
// <length>{1,4}
class ScrollMarginProperty {}

export function scrollMargin(source: Repeat1to4<number>): ScrollMarginProperty
export function scrollMargin() { return new ScrollMarginProperty() }

// property scroll-snap-align
// [ none | start | end | center ]{1,2}
class ScrollSnapAlignProperty {}

export function scrollSnapAlign(source: Repeat1to2<('none' | 'start' | 'end' | 'center')>): ScrollSnapAlignProperty
export function scrollSnapAlign() { return new ScrollSnapAlignProperty() }

// property scroll-snap-stop
// normal | always
class ScrollSnapStopProperty {}

export function scrollSnapStop(source: 'normal' | 'always'): ScrollSnapStopProperty
export function scrollSnapStop() { return new ScrollSnapStopProperty() }

// property scroll-padding-top
// auto | <length-percentage [0,∞]>
class ScrollPaddingTopProperty {}

export function scrollPaddingTop(source: 'auto' | LengthPercentage): ScrollPaddingTopProperty
export function scrollPaddingTop() { return new ScrollPaddingTopProperty() }

// property scroll-padding-right
// auto | <length-percentage [0,∞]>
class ScrollPaddingRightProperty {}

export function scrollPaddingRight(source: 'auto' | LengthPercentage): ScrollPaddingRightProperty
export function scrollPaddingRight() { return new ScrollPaddingRightProperty() }

// property scroll-padding-bottom
// auto | <length-percentage [0,∞]>
class ScrollPaddingBottomProperty {}

export function scrollPaddingBottom(source: 'auto' | LengthPercentage): ScrollPaddingBottomProperty
export function scrollPaddingBottom() { return new ScrollPaddingBottomProperty() }

// property scroll-padding-left
// auto | <length-percentage [0,∞]>
class ScrollPaddingLeftProperty {}

export function scrollPaddingLeft(source: 'auto' | LengthPercentage): ScrollPaddingLeftProperty
export function scrollPaddingLeft() { return new ScrollPaddingLeftProperty() }

// property scroll-padding-inline-start
// auto | <length-percentage [0,∞]>
class ScrollPaddingInlineStartProperty {}

export function scrollPaddingInlineStart(source: 'auto' | LengthPercentage): ScrollPaddingInlineStartProperty
export function scrollPaddingInlineStart() { return new ScrollPaddingInlineStartProperty() }

// property scroll-padding-block-start
// auto | <length-percentage [0,∞]>
class ScrollPaddingBlockStartProperty {}

export function scrollPaddingBlockStart(source: 'auto' | LengthPercentage): ScrollPaddingBlockStartProperty
export function scrollPaddingBlockStart() { return new ScrollPaddingBlockStartProperty() }

// property scroll-padding-inline-end
// auto | <length-percentage [0,∞]>
class ScrollPaddingInlineEndProperty {}

export function scrollPaddingInlineEnd(source: 'auto' | LengthPercentage): ScrollPaddingInlineEndProperty
export function scrollPaddingInlineEnd() { return new ScrollPaddingInlineEndProperty() }

// property scroll-padding-block-end
// auto | <length-percentage [0,∞]>
class ScrollPaddingBlockEndProperty {}

export function scrollPaddingBlockEnd(source: 'auto' | LengthPercentage): ScrollPaddingBlockEndProperty
export function scrollPaddingBlockEnd() { return new ScrollPaddingBlockEndProperty() }

// property scroll-padding-block
// [ auto | <length-percentage [0,∞]> ]{1,2}
class ScrollPaddingBlockProperty {}

export function scrollPaddingBlock(source: Repeat1to2<('auto' | LengthPercentage)>): ScrollPaddingBlockProperty
export function scrollPaddingBlock() { return new ScrollPaddingBlockProperty() }

// property scroll-padding-inline
// [ auto | <length-percentage [0,∞]> ]{1,2}
class ScrollPaddingInlineProperty {}

export function scrollPaddingInline(source: Repeat1to2<('auto' | LengthPercentage)>): ScrollPaddingInlineProperty
export function scrollPaddingInline() { return new ScrollPaddingInlineProperty() }

// property scroll-margin-top
// <length>
class ScrollMarginTopProperty {}

export function scrollMarginTop(source: number): ScrollMarginTopProperty
export function scrollMarginTop() { return new ScrollMarginTopProperty() }

// property scroll-margin-right
// <length>
class ScrollMarginRightProperty {}

export function scrollMarginRight(source: number): ScrollMarginRightProperty
export function scrollMarginRight() { return new ScrollMarginRightProperty() }

// property scroll-margin-bottom
// <length>
class ScrollMarginBottomProperty {}

export function scrollMarginBottom(source: number): ScrollMarginBottomProperty
export function scrollMarginBottom() { return new ScrollMarginBottomProperty() }

// property scroll-margin-left
// <length>
class ScrollMarginLeftProperty {}

export function scrollMarginLeft(source: number): ScrollMarginLeftProperty
export function scrollMarginLeft() { return new ScrollMarginLeftProperty() }

// property scroll-margin-block-start
// <length>
class ScrollMarginBlockStartProperty {}

export function scrollMarginBlockStart(source: number): ScrollMarginBlockStartProperty
export function scrollMarginBlockStart() { return new ScrollMarginBlockStartProperty() }

// property scroll-margin-inline-start
// <length>
class ScrollMarginInlineStartProperty {}

export function scrollMarginInlineStart(source: number): ScrollMarginInlineStartProperty
export function scrollMarginInlineStart() { return new ScrollMarginInlineStartProperty() }

// property scroll-margin-block-end
// <length>
class ScrollMarginBlockEndProperty {}

export function scrollMarginBlockEnd(source: number): ScrollMarginBlockEndProperty
export function scrollMarginBlockEnd() { return new ScrollMarginBlockEndProperty() }

// property scroll-margin-inline-end
// <length>
class ScrollMarginInlineEndProperty {}

export function scrollMarginInlineEnd(source: number): ScrollMarginInlineEndProperty
export function scrollMarginInlineEnd() { return new ScrollMarginInlineEndProperty() }

// property scroll-margin-block
// <length>{1,2}
class ScrollMarginBlockProperty {}

export function scrollMarginBlock(source: Repeat1to2<number>): ScrollMarginBlockProperty
export function scrollMarginBlock() { return new ScrollMarginBlockProperty() }

// property scroll-margin-inline
// <length>{1,2}
class ScrollMarginInlineProperty {}

export function scrollMarginInline(source: Repeat1to2<number>): ScrollMarginInlineProperty
export function scrollMarginInline() { return new ScrollMarginInlineProperty() }

// property scrollbar-color
// auto | <color>{2}
class ScrollbarColorProperty {}

export function scrollbarColor(source: 'auto' | Repeat2<Color>): ScrollbarColorProperty
export function scrollbarColor() { return new ScrollbarColorProperty() }

// property scrollbar-width
// auto | thin | none
class ScrollbarWidthProperty {}

export function scrollbarWidth(source: 'auto' | 'thin' | 'none'): ScrollbarWidthProperty
export function scrollbarWidth() { return new ScrollbarWidthProperty() }

// property shape-inside
// auto | outside-shape | [ <basic-shape> || shape-box ] | <image> | display
class ShapeInsideProperty {}

export function shapeInside(source: 'auto' | 'outside-shape' | ((BasicShape | 'shape-box')) | Image | 'display'): ShapeInsideProperty
export function shapeInside() { return new ShapeInsideProperty() }

// property shape-padding
// <length-percentage [0,∞]>
class ShapePaddingProperty {}

export function shapePadding(source: LengthPercentage): ShapePaddingProperty
export function shapePadding() { return new ShapePaddingProperty() }

// property shape-outside
// none | [ <basic-shape> || <shape-box> ] | <image>
class ShapeOutsideProperty {}

export function shapeOutside(source: 'none' | ((BasicShape | ShapeBox)) | Image): ShapeOutsideProperty
export function shapeOutside() { return new ShapeOutsideProperty() }

// property shape-image-threshold
// <alpha-value>
class ShapeImageThresholdProperty {}

export function shapeImageThreshold(source: AlphaValue): ShapeImageThresholdProperty
export function shapeImageThreshold() { return new ShapeImageThresholdProperty() }

// property shape-margin
// <length-percentage [0,∞]>
class ShapeMarginProperty {}

export function shapeMargin(source: LengthPercentage): ShapeMarginProperty
export function shapeMargin() { return new ShapeMarginProperty() }

// property text-size-adjust
// auto | none | <percentage [0,∞]>
class TextSizeAdjustProperty {}

export function textSizeAdjust(source: 'auto' | 'none' | Percentage): TextSizeAdjustProperty
export function textSizeAdjust() { return new TextSizeAdjustProperty() }

// property aspect-ratio
// auto || <ratio>
class AspectRatioProperty {}

export function aspectRatio(source: ('auto' | Ratio)): AspectRatioProperty
export function aspectRatio() { return new AspectRatioProperty() }

// property contain-intrinsic-width
// auto? [ none | <length> ]
class ContainIntrinsicWidthProperty {}

export function containIntrinsicWidth(source: ['auto', ('none' | number)]): ContainIntrinsicWidthProperty
export function containIntrinsicWidth(source: [void, ('none' | number)]): ContainIntrinsicWidthProperty
export function containIntrinsicWidth() { return new ContainIntrinsicWidthProperty() }

// property contain-intrinsic-height
// auto? [ none | <length> ]
class ContainIntrinsicHeightProperty {}

export function containIntrinsicHeight(source: ['auto', ('none' | number)]): ContainIntrinsicHeightProperty
export function containIntrinsicHeight(source: [void, ('none' | number)]): ContainIntrinsicHeightProperty
export function containIntrinsicHeight() { return new ContainIntrinsicHeightProperty() }

// property contain-intrinsic-block-size
// auto? [ none | <length> ]
class ContainIntrinsicBlockSizeProperty {}

export function containIntrinsicBlockSize(source: ['auto', ('none' | number)]): ContainIntrinsicBlockSizeProperty
export function containIntrinsicBlockSize(source: [void, ('none' | number)]): ContainIntrinsicBlockSizeProperty
export function containIntrinsicBlockSize() { return new ContainIntrinsicBlockSizeProperty() }

// property contain-intrinsic-inline-size
// auto? [ none | <length> ]
class ContainIntrinsicInlineSizeProperty {}

export function containIntrinsicInlineSize(source: ['auto', ('none' | number)]): ContainIntrinsicInlineSizeProperty
export function containIntrinsicInlineSize(source: [void, ('none' | number)]): ContainIntrinsicInlineSizeProperty
export function containIntrinsicInlineSize() { return new ContainIntrinsicInlineSizeProperty() }

// property contain-intrinsic-size
// [ auto? [ none | <length> ] ]{1,2}
class ContainIntrinsicSizeProperty {}

export function containIntrinsicSize(source: Repeat1to2<(['auto', ('none' | number)])>): ContainIntrinsicSizeProperty
export function containIntrinsicSize(source: Repeat1to2<([void, ('none' | number)])>): ContainIntrinsicSizeProperty
export function containIntrinsicSize() { return new ContainIntrinsicSizeProperty() }

// property min-intrinsic-sizing
// legacy | zero-if-scroll || zero-if-extrinsic
class MinIntrinsicSizingProperty {}

export function minIntrinsicSizing(source: 'legacy' | ('zero-if-scroll' | 'zero-if-extrinsic')): MinIntrinsicSizingProperty
export function minIntrinsicSizing() { return new MinIntrinsicSizingProperty() }

// property width
// auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>)
class WidthProperty {}

export function width(source: 'auto' | LengthPercentage | 'min-content' | 'max-content' | { 'fit-content': [LengthPercentage] }): WidthProperty
export function width() { return new WidthProperty() }

// property height
// auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>)
class HeightProperty {}

export function height(source: 'auto' | LengthPercentage | 'min-content' | 'max-content' | { 'fit-content': [LengthPercentage] }): HeightProperty
export function height() { return new HeightProperty() }

// property min-width
// auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>)
class MinWidthProperty {}

export function minWidth(source: 'auto' | LengthPercentage | 'min-content' | 'max-content' | { 'fit-content': [LengthPercentage] }): MinWidthProperty
export function minWidth() { return new MinWidthProperty() }

// property min-height
// auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>)
class MinHeightProperty {}

export function minHeight(source: 'auto' | LengthPercentage | 'min-content' | 'max-content' | { 'fit-content': [LengthPercentage] }): MinHeightProperty
export function minHeight() { return new MinHeightProperty() }

// property max-width
// none | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>)
class MaxWidthProperty {}

export function maxWidth(source: 'none' | LengthPercentage | 'min-content' | 'max-content' | { 'fit-content': [LengthPercentage] }): MaxWidthProperty
export function maxWidth() { return new MaxWidthProperty() }

// property max-height
// none | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>)
class MaxHeightProperty {}

export function maxHeight(source: 'none' | LengthPercentage | 'min-content' | 'max-content' | { 'fit-content': [LengthPercentage] }): MaxHeightProperty
export function maxHeight() { return new MaxHeightProperty() }

// property box-sizing
// content-box | border-box
class BoxSizingProperty {}

export function boxSizing(source: 'content-box' | 'border-box'): BoxSizingProperty
export function boxSizing() { return new BoxSizingProperty() }

// property voice-volume
// silent | [[x-soft | soft | medium | loud | x-loud] || <decibel>]
class VoiceVolumeProperty {}

export function voiceVolume(source: 'silent' | ((('x-soft' | 'soft' | 'medium' | 'loud' | 'x-loud') | Decibel))): VoiceVolumeProperty
export function voiceVolume() { return new VoiceVolumeProperty() }

// property voice-balance
// <number> | left | center | right | leftwards | rightwards
class VoiceBalanceProperty {}

export function voiceBalance(source: number | 'left' | 'center' | 'right' | 'leftwards' | 'rightwards'): VoiceBalanceProperty
export function voiceBalance() { return new VoiceBalanceProperty() }

// property speak
// auto | never | always
class SpeakProperty {}

export function speak(source: 'auto' | 'never' | 'always'): SpeakProperty
export function speak() { return new SpeakProperty() }

// property speak-as
// normal | spell-out || digits || [ literal-punctuation | no-punctuation ]
class SpeakAsProperty {}

export function speakAs(source: 'normal' | ('spell-out' | ('digits' | ('literal-punctuation' | 'no-punctuation')))): SpeakAsProperty
export function speakAs() { return new SpeakAsProperty() }

// property pause-before
// <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
class PauseBeforeProperty {}

export function pauseBefore(source: Time | 'none' | 'x-weak' | 'weak' | 'medium' | 'strong' | 'x-strong'): PauseBeforeProperty
export function pauseBefore() { return new PauseBeforeProperty() }

// property pause-after
// <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
class PauseAfterProperty {}

export function pauseAfter(source: Time | 'none' | 'x-weak' | 'weak' | 'medium' | 'strong' | 'x-strong'): PauseAfterProperty
export function pauseAfter() { return new PauseAfterProperty() }

// property pause
// <'pause-before'> <'pause-after'>?
class PauseProperty {}

export function pause(source: [PauseBeforeProperty, PauseAfterProperty]): PauseProperty
export function pause(source: [PauseBeforeProperty, void]): PauseProperty
export function pause() { return new PauseProperty() }

// property rest-before
// <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
class RestBeforeProperty {}

export function restBefore(source: Time | 'none' | 'x-weak' | 'weak' | 'medium' | 'strong' | 'x-strong'): RestBeforeProperty
export function restBefore() { return new RestBeforeProperty() }

// property rest-after
// <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
class RestAfterProperty {}

export function restAfter(source: Time | 'none' | 'x-weak' | 'weak' | 'medium' | 'strong' | 'x-strong'): RestAfterProperty
export function restAfter() { return new RestAfterProperty() }

// property rest
// <'rest-before'> <'rest-after'>?
class RestProperty {}

export function rest(source: [RestBeforeProperty, RestAfterProperty]): RestProperty
export function rest(source: [RestBeforeProperty, void]): RestProperty
export function rest() { return new RestProperty() }

// property cue-before
// <uri> <decibel>? | none
class CueBeforeProperty {}

export function cueBefore(source: [Uri, Decibel] | [Uri, void] | 'none'): CueBeforeProperty
export function cueBefore() { return new CueBeforeProperty() }

// property cue-after
// <uri> <decibel>? | none
class CueAfterProperty {}

export function cueAfter(source: [Uri, Decibel] | [Uri, void] | 'none'): CueAfterProperty
export function cueAfter() { return new CueAfterProperty() }

// property cue
// <'cue-before'> <'cue-after'>?
class CueProperty {}

export function cue(source: [CueBeforeProperty, CueAfterProperty]): CueProperty
export function cue(source: [CueBeforeProperty, void]): CueProperty
export function cue() { return new CueProperty() }

// property voice-family
// [[<family-name> | <generic-voice>],]* [<family-name> | <generic-voice>] | preserve
class VoiceFamilyProperty {}

export function voiceFamily(source: [RecurseAny<((FamilyName | GenericVoice))>, (FamilyName | GenericVoice)] | 'preserve'): VoiceFamilyProperty
export function voiceFamily() { return new VoiceFamilyProperty() }

// property voice-rate
// [normal | x-slow | slow | medium | fast | x-fast] || <percentage [0,∞]>
class VoiceRateProperty {}

export function voiceRate(source: (('normal' | 'x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast') | Percentage)): VoiceRateProperty
export function voiceRate() { return new VoiceRateProperty() }

// property voice-pitch
// <frequency [0Hz,∞]> && absolute | [[x-low | low | medium | high | x-high] || [<frequency> | <semitones> | <percentage>]]
class VoicePitchProperty {}

export function voicePitch(source: (Frequency & 'absolute') | ((('x-low' | 'low' | 'medium' | 'high' | 'x-high') | (Frequency | Semitones | Percentage)))): VoicePitchProperty
export function voicePitch() { return new VoicePitchProperty() }

// property voice-range
// <frequency [0Hz,∞]> && absolute | [[x-low | low | medium | high | x-high] || [<frequency> | <semitones> | <percentage>]]
class VoiceRangeProperty {}

export function voiceRange(source: (Frequency & 'absolute') | ((('x-low' | 'low' | 'medium' | 'high' | 'x-high') | (Frequency | Semitones | Percentage)))): VoiceRangeProperty
export function voiceRange() { return new VoiceRangeProperty() }

// property voice-stress
// normal | strong | moderate | none | reduced
class VoiceStressProperty {}

export function voiceStress(source: 'normal' | 'strong' | 'moderate' | 'none' | 'reduced'): VoiceStressProperty
export function voiceStress() { return new VoiceStressProperty() }

// property voice-duration
// auto | <time [0s,∞]>
class VoiceDurationProperty {}

export function voiceDuration(source: 'auto' | Time): VoiceDurationProperty
export function voiceDuration() { return new VoiceDurationProperty() }

// property table-layout
// auto | fixed
class TableLayoutProperty {}

export function tableLayout(source: 'auto' | 'fixed'): TableLayoutProperty
export function tableLayout() { return new TableLayoutProperty() }

// property border-collapse
// separate | collapse
class BorderCollapseProperty {}

export function borderCollapse(source: 'separate' | 'collapse'): BorderCollapseProperty
export function borderCollapse() { return new BorderCollapseProperty() }

// property border-spacing
// <length>{1,2}
class BorderSpacingProperty {}

export function borderSpacing(source: Repeat1to2<number>): BorderSpacingProperty
export function borderSpacing() { return new BorderSpacingProperty() }

// property caption-side
// top | bottom
class CaptionSideProperty {}

export function captionSide(source: 'top' | 'bottom'): CaptionSideProperty
export function captionSide() { return new CaptionSideProperty() }

// property empty-cells
// show | hide
class EmptyCellsProperty {}

export function emptyCells(source: 'show' | 'hide'): EmptyCellsProperty
export function emptyCells() { return new EmptyCellsProperty() }

// property text-transform
// none | [capitalize | uppercase | lowercase ] || full-width || full-size-kana
class TextTransformProperty {}

export function textTransform(source: 'none' | (('capitalize' | 'uppercase' | 'lowercase') | ('full-width' | 'full-size-kana'))): TextTransformProperty
export function textTransform() { return new TextTransformProperty() }

// property word-space-transform
// none | [ space | ideographic-space ] && auto-phrase?
class WordSpaceTransformProperty {}

export function wordSpaceTransform(source: 'none' | (('space' | 'ideographic-space') & 'auto-phrase') | (('space' | 'ideographic-space') & void)): WordSpaceTransformProperty
export function wordSpaceTransform() { return new WordSpaceTransformProperty() }

// property white-space
// normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'> || <'white-space-trim'>
class WhiteSpaceProperty {}

export function whiteSpace(source: 'normal' | 'pre' | 'pre-wrap' | 'pre-line' | (WhiteSpaceCollapseProperty | (TextWrapModeProperty | WhiteSpaceTrimProperty))): WhiteSpaceProperty
export function whiteSpace() { return new WhiteSpaceProperty() }

// property white-space-collapse
// collapse | discard | preserve | preserve-breaks | preserve-spaces | break-spaces
class WhiteSpaceCollapseProperty {}

export function whiteSpaceCollapse(source: 'collapse' | 'discard' | 'preserve' | 'preserve-breaks' | 'preserve-spaces' | 'break-spaces'): WhiteSpaceCollapseProperty
export function whiteSpaceCollapse() { return new WhiteSpaceCollapseProperty() }

// property white-space-trim
// none | discard-before || discard-after || discard-inner
class WhiteSpaceTrimProperty {}

export function whiteSpaceTrim(source: 'none' | ('discard-before' | ('discard-after' | 'discard-inner'))): WhiteSpaceTrimProperty
export function whiteSpaceTrim() { return new WhiteSpaceTrimProperty() }

// property tab-size
// <number [0,∞]> | <length [0,∞]>
class TabSizeProperty {}

export function tabSize(source: number | number): TabSizeProperty
export function tabSize() { return new TabSizeProperty() }

// property text-wrap-mode
// wrap | nowrap
class TextWrapModeProperty {}

export function textWrapMode(source: 'wrap' | 'nowrap'): TextWrapModeProperty
export function textWrapMode() { return new TextWrapModeProperty() }

// property wrap-inside
// auto | avoid
class WrapInsideProperty {}

export function wrapInside(source: 'auto' | 'avoid'): WrapInsideProperty
export function wrapInside() { return new WrapInsideProperty() }

// property wrap-before
// auto | avoid | avoid-line | avoid-flex | line | flex
class WrapBeforeProperty {}

export function wrapBefore(source: 'auto' | 'avoid' | 'avoid-line' | 'avoid-flex' | 'line' | 'flex'): WrapBeforeProperty
export function wrapBefore() { return new WrapBeforeProperty() }

// property wrap-after
// auto | avoid | avoid-line | avoid-flex | line | flex
class WrapAfterProperty {}

export function wrapAfter(source: 'auto' | 'avoid' | 'avoid-line' | 'avoid-flex' | 'line' | 'flex'): WrapAfterProperty
export function wrapAfter() { return new WrapAfterProperty() }

// property text-wrap-style
// auto| balance | stable | pretty
class TextWrapStyleProperty {}

// property text-wrap
// <'text-wrap-mode'> || <'text-wrap-style'>
class TextWrapProperty {}

export function textWrap(source: (TextWrapModeProperty | TextWrapStyleProperty)): TextWrapProperty
export function textWrap() { return new TextWrapProperty() }

// property word-break
// normal | break-all | keep-all | manual | auto-phrase | break-word
class WordBreakProperty {}

export function wordBreak(source: 'normal' | 'break-all' | 'keep-all' | 'manual' | 'auto-phrase' | 'break-word'): WordBreakProperty
export function wordBreak() { return new WordBreakProperty() }

// property line-break
// auto | loose | normal | strict | anywhere
class LineBreakProperty {}

export function lineBreak(source: 'auto' | 'loose' | 'normal' | 'strict' | 'anywhere'): LineBreakProperty
export function lineBreak() { return new LineBreakProperty() }

// property hyphens
// none | manual | auto
class HyphensProperty {}

export function hyphens(source: 'none' | 'manual' | 'auto'): HyphensProperty
export function hyphens() { return new HyphensProperty() }

// property hyphenate-character
// auto | <string>
class HyphenateCharacterProperty {}

export function hyphenateCharacter(source: 'auto' | string): HyphenateCharacterProperty
export function hyphenateCharacter() { return new HyphenateCharacterProperty() }

// property hyphenate-limit-zone
// <length-percentage>
class HyphenateLimitZoneProperty {}

export function hyphenateLimitZone(source: LengthPercentage): HyphenateLimitZoneProperty
export function hyphenateLimitZone() { return new HyphenateLimitZoneProperty() }

// property hyphenate-limit-chars
// [ auto | <integer> ]{1,3}
class HyphenateLimitCharsProperty {}

export function hyphenateLimitChars(source: Repeat1to3<('auto' | number)>): HyphenateLimitCharsProperty
export function hyphenateLimitChars() { return new HyphenateLimitCharsProperty() }

// property hyphenate-limit-lines
// no-limit | <integer>
class HyphenateLimitLinesProperty {}

export function hyphenateLimitLines(source: 'no-limit' | number): HyphenateLimitLinesProperty
export function hyphenateLimitLines() { return new HyphenateLimitLinesProperty() }

// property hyphenate-limit-last
// none | always | column | page | spread
class HyphenateLimitLastProperty {}

export function hyphenateLimitLast(source: 'none' | 'always' | 'column' | 'page' | 'spread'): HyphenateLimitLastProperty
export function hyphenateLimitLast() { return new HyphenateLimitLastProperty() }

// property overflow-wrap
// normal | break-word | anywhere
class OverflowWrapProperty {}

export function overflowWrap(source: 'normal' | 'break-word' | 'anywhere'): OverflowWrapProperty
export function overflowWrap() { return new OverflowWrapProperty() }

// property word-wrap
// normal | break-word | anywhere
class WordWrapProperty {}

export function wordWrap(source: 'normal' | 'break-word' | 'anywhere'): WordWrapProperty
export function wordWrap() { return new WordWrapProperty() }

// property text-align
// start | end | left | right | center | <string> | justify | match-parent | justify-all
class TextAlignProperty {}

export function textAlign(source: 'start' | 'end' | 'left' | 'right' | 'center' | string | 'justify' | 'match-parent' | 'justify-all'): TextAlignProperty
export function textAlign() { return new TextAlignProperty() }

// property text-align-all
// start | end | left | right | center | <string> | justify | match-parent
class TextAlignAllProperty {}

export function textAlignAll(source: 'start' | 'end' | 'left' | 'right' | 'center' | string | 'justify' | 'match-parent'): TextAlignAllProperty
export function textAlignAll() { return new TextAlignAllProperty() }

// property text-align-last
// auto | start | end | left | right | center | justify | match-parent
class TextAlignLastProperty {}

export function textAlignLast(source: 'auto' | 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'): TextAlignLastProperty
export function textAlignLast() { return new TextAlignLastProperty() }

// property text-justify
// [ auto | none | inter-word | inter-character | ruby ] || no-compress
class TextJustifyProperty {}

export function textJustify(source: (('auto' | 'none' | 'inter-word' | 'inter-character' | 'ruby') | 'no-compress')): TextJustifyProperty
export function textJustify() { return new TextJustifyProperty() }

// property text-group-align
// none | start | end | left | right | center
class TextGroupAlignProperty {}

export function textGroupAlign(source: 'none' | 'start' | 'end' | 'left' | 'right' | 'center'): TextGroupAlignProperty
export function textGroupAlign() { return new TextGroupAlignProperty() }

// property word-spacing
// normal | <length-percentage>
class WordSpacingProperty {}

export function wordSpacing(source: 'normal' | LengthPercentage): WordSpacingProperty
export function wordSpacing() { return new WordSpacingProperty() }

// property letter-spacing
// normal | <length-percentage>
class LetterSpacingProperty {}

export function letterSpacing(source: 'normal' | LengthPercentage): LetterSpacingProperty
export function letterSpacing() { return new LetterSpacingProperty() }

// property line-padding
// <length>
class LinePaddingProperty {}

export function linePadding(source: number): LinePaddingProperty
export function linePadding() { return new LinePaddingProperty() }

// property text-autospace
// normal | <autospace> | auto
class TextAutospaceProperty {}

export function textAutospace(source: 'normal' | Autospace | 'auto'): TextAutospaceProperty
export function textAutospace() { return new TextAutospaceProperty() }

// property text-spacing-trim
// <spacing-trim> | auto
class TextSpacingTrimProperty {}

export function textSpacingTrim(source: SpacingTrim | 'auto'): TextSpacingTrimProperty
export function textSpacingTrim() { return new TextSpacingTrimProperty() }

// property text-spacing
// none | auto | <spacing-trim> || <autospace>
class TextSpacingProperty {}

export function textSpacing(source: 'none' | 'auto' | (SpacingTrim | Autospace)): TextSpacingProperty
export function textSpacing() { return new TextSpacingProperty() }

// property text-indent
// [ <length-percentage> ] && hanging? && each-line?
class TextIndentProperty {}

export function textIndent(source: ((LengthPercentage) & ('hanging' & 'each-line'))): TextIndentProperty
export function textIndent(source: ((LengthPercentage) & ('hanging' & void))): TextIndentProperty
export function textIndent(source: ((LengthPercentage) & (void & 'each-line'))): TextIndentProperty
export function textIndent(source: ((LengthPercentage) & (void & void))): TextIndentProperty
export function textIndent() { return new TextIndentProperty() }

// property hanging-punctuation
// none | [ first || [ force-end | allow-end ] || last ]
class HangingPunctuationProperty {}

export function hangingPunctuation(source: 'none' | (('first' | (('force-end' | 'allow-end') | 'last')))): HangingPunctuationProperty
export function hangingPunctuation() { return new HangingPunctuationProperty() }

// property text-decoration-line
// none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error
class TextDecorationLineProperty {}

export function textDecorationLine(source: 'none' | (('underline' | ('overline' | ('line-through' | 'blink')))) | 'spelling-error' | 'grammar-error'): TextDecorationLineProperty
export function textDecorationLine() { return new TextDecorationLineProperty() }

// property text-decoration-style
// solid | double | dotted | dashed | wavy
class TextDecorationStyleProperty {}

export function textDecorationStyle(source: 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy'): TextDecorationStyleProperty
export function textDecorationStyle() { return new TextDecorationStyleProperty() }

// property text-decoration-color
// <color>
class TextDecorationColorProperty {}

export function textDecorationColor(source: Color): TextDecorationColorProperty
export function textDecorationColor() { return new TextDecorationColorProperty() }

// property text-decoration-thickness
// auto | from-font | <length-percentage>
class TextDecorationThicknessProperty {}

export function textDecorationThickness(source: 'auto' | 'from-font' | LengthPercentage): TextDecorationThicknessProperty
export function textDecorationThickness() { return new TextDecorationThicknessProperty() }

// property text-decoration
// <'text-decoration-line'> || <'text-decoration-thickness'> || <'text-decoration-style'> || <'text-decoration-color'>
class TextDecorationProperty {}

export function textDecoration(source: (TextDecorationLineProperty | (TextDecorationThicknessProperty | (TextDecorationStyleProperty | TextDecorationColorProperty)))): TextDecorationProperty
export function textDecoration() { return new TextDecorationProperty() }

// property text-underline-position
// auto | [ from-font | under ] || [ left | right ]
class TextUnderlinePositionProperty {}

export function textUnderlinePosition(source: 'auto' | (('from-font' | 'under') | ('left' | 'right'))): TextUnderlinePositionProperty
export function textUnderlinePosition() { return new TextUnderlinePositionProperty() }

// property text-underline-offset
// auto | <length-percentage>
class TextUnderlineOffsetProperty {}

export function textUnderlineOffset(source: 'auto' | LengthPercentage): TextUnderlineOffsetProperty
export function textUnderlineOffset() { return new TextUnderlineOffsetProperty() }

// property text-decoration-trim
// <length>{1,2} | auto
class TextDecorationTrimProperty {}

export function textDecorationTrim(source: Repeat1to2<number> | 'auto'): TextDecorationTrimProperty
export function textDecorationTrim() { return new TextDecorationTrimProperty() }

// property text-decoration-skip
// none | auto
class TextDecorationSkipProperty {}

export function textDecorationSkip(source: 'none' | 'auto'): TextDecorationSkipProperty
export function textDecorationSkip() { return new TextDecorationSkipProperty() }

// property text-decoration-skip-self
// auto | skip-all | [ skip-underline || skip-overline || skip-line-through ] | no-skip
class TextDecorationSkipSelfProperty {}

export function textDecorationSkipSelf(source: 'auto' | 'skip-all' | (('skip-underline' | ('skip-overline' | 'skip-line-through'))) | 'no-skip'): TextDecorationSkipSelfProperty
export function textDecorationSkipSelf() { return new TextDecorationSkipSelfProperty() }

// property text-decoration-skip-box
// none | all
class TextDecorationSkipBoxProperty {}

export function textDecorationSkipBox(source: 'none' | 'all'): TextDecorationSkipBoxProperty
export function textDecorationSkipBox() { return new TextDecorationSkipBoxProperty() }

// property text-decoration-skip-spaces
// none | all | [ start || end ]
class TextDecorationSkipSpacesProperty {}

export function textDecorationSkipSpaces(source: 'none' | 'all' | (('start' | 'end'))): TextDecorationSkipSpacesProperty
export function textDecorationSkipSpaces() { return new TextDecorationSkipSpacesProperty() }

// property text-decoration-skip-ink
// auto | none | all
class TextDecorationSkipInkProperty {}

export function textDecorationSkipInk(source: 'auto' | 'none' | 'all'): TextDecorationSkipInkProperty
export function textDecorationSkipInk() { return new TextDecorationSkipInkProperty() }

// property text-emphasis-style
// none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>
class TextEmphasisStyleProperty {}

export function textEmphasisStyle(source: 'none' | ((('filled' | 'open') | ('dot' | 'circle' | 'double-circle' | 'triangle' | 'sesame'))) | string): TextEmphasisStyleProperty
export function textEmphasisStyle() { return new TextEmphasisStyleProperty() }

// property text-emphasis-color
// <color>
class TextEmphasisColorProperty {}

export function textEmphasisColor(source: Color): TextEmphasisColorProperty
export function textEmphasisColor() { return new TextEmphasisColorProperty() }

// property text-emphasis
// <'text-emphasis-style'> || <'text-emphasis-color'>
class TextEmphasisProperty {}

export function textEmphasis(source: (TextEmphasisStyleProperty | TextEmphasisColorProperty)): TextEmphasisProperty
export function textEmphasis() { return new TextEmphasisProperty() }

// property text-emphasis-position
// [ over | under ] && [ right | left ]?
class TextEmphasisPositionProperty {}

export function textEmphasisPosition(source: (('over' | 'under') & ('right' | 'left'))): TextEmphasisPositionProperty
export function textEmphasisPosition(source: (('over' | 'under') & void)): TextEmphasisPositionProperty
export function textEmphasisPosition() { return new TextEmphasisPositionProperty() }

// property text-emphasis-skip
// spaces || punctuation || symbols || narrow
class TextEmphasisSkipProperty {}

export function textEmphasisSkip(source: ('spaces' | ('punctuation' | ('symbols' | 'narrow')))): TextEmphasisSkipProperty
export function textEmphasisSkip() { return new TextEmphasisSkipProperty() }

// property text-shadow
// none | [ <color>? && <length>{2,3} ]#
class TextShadowProperty {}

export function textShadow(source: 'none' | RecurseTuple<((Color & Repeat2to3<number>))> | RecurseTuple<((void & Repeat2to3<number>))>): TextShadowProperty
export function textShadow() { return new TextShadowProperty() }

// property translate
// none | <length-percentage> [ <length-percentage> <length>? ]?
class TranslateProperty {}

export function translate(source: 'none' | [LengthPercentage, ([LengthPercentage, number])] | [LengthPercentage, ([LengthPercentage, void])] | [LengthPercentage, void]): TranslateProperty
export function translate() { return new TranslateProperty() }

// property rotate
// none | <angle> | [ x | y | z | <number>{3} ] && <angle>
class RotateProperty {}

export function rotate(source: 'none' | Angle | (('x' | 'y' | 'z' | Repeat3<number>) & Angle)): RotateProperty
export function rotate() { return new RotateProperty() }

// property scale
// none | [ <number> | <percentage> ]{1,3}
class ScaleProperty {}

export function scale(source: 'none' | Repeat1to3<(number | Percentage)>): ScaleProperty
export function scale() { return new ScaleProperty() }

// property transform-style
// flat | preserve-3d
class TransformStyleProperty {}

export function transformStyle(source: 'flat' | 'preserve-3d'): TransformStyleProperty
export function transformStyle() { return new TransformStyleProperty() }

// property perspective
// none | <length [0,∞]>
class PerspectiveProperty {}

export function perspective(source: 'none' | number): PerspectiveProperty
export function perspective() { return new PerspectiveProperty() }

// property perspective-origin
// <position>
class PerspectiveOriginProperty {}

export function perspectiveOrigin(source: Position): PerspectiveOriginProperty
export function perspectiveOrigin() { return new PerspectiveOriginProperty() }

// property backface-visibility
// visible | hidden
class BackfaceVisibilityProperty {}

export function backfaceVisibility(source: 'visible' | 'hidden'): BackfaceVisibilityProperty
export function backfaceVisibility() { return new BackfaceVisibilityProperty() }

// property transform
// none | <transform-list>
class TransformProperty {}

export function transform(source: 'none' | TransformList): TransformProperty
export function transform() { return new TransformProperty() }

// property transform-origin
// [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] <length>? | [[ center | left | right ] && [ center | top | bottom ]] <length>?
class TransformOriginProperty {}

export function transformOrigin(source: ('left' | 'center' | 'right' | 'top' | 'bottom' | LengthPercentage) | [('left' | 'center' | 'right' | LengthPercentage), ('top' | 'center' | 'bottom' | LengthPercentage), number] | [('left' | 'center' | 'right' | LengthPercentage), ('top' | 'center' | 'bottom' | LengthPercentage), void] | [((('center' | 'left' | 'right') & ('center' | 'top' | 'bottom'))), number] | [((('center' | 'left' | 'right') & ('center' | 'top' | 'bottom'))), void]): TransformOriginProperty
export function transformOrigin() { return new TransformOriginProperty() }

// property transform-box
// content-box | border-box | fill-box | stroke-box | view-box
class TransformBoxProperty {}

export function transformBox(source: 'content-box' | 'border-box' | 'fill-box' | 'stroke-box' | 'view-box'): TransformBoxProperty
export function transformBox() { return new TransformBoxProperty() }

// property transition-behavior
// <transition-behavior-value>#
class TransitionBehaviorProperty {}

export function transitionBehavior(source: RecurseTuple<TransitionBehaviorValue>): TransitionBehaviorProperty
export function transitionBehavior() { return new TransitionBehaviorProperty() }

// property transition-property
// none | <single-transition-property>#
class TransitionPropertyProperty {}

export function transitionProperty(source: 'none' | RecurseTuple<SingleTransitionProperty>): TransitionPropertyProperty
export function transitionProperty() { return new TransitionPropertyProperty() }

// property transition-duration
// <time [0s,∞]>#
class TransitionDurationProperty {}

export function transitionDuration(source: RecurseTuple<Time>): TransitionDurationProperty
export function transitionDuration() { return new TransitionDurationProperty() }

// property transition-timing-function
// <easing-function>#
class TransitionTimingFunctionProperty {}

export function transitionTimingFunction(source: RecurseTuple<EasingFunction>): TransitionTimingFunctionProperty
export function transitionTimingFunction() { return new TransitionTimingFunctionProperty() }

// property transition-delay
// <time>#
class TransitionDelayProperty {}

export function transitionDelay(source: RecurseTuple<Time>): TransitionDelayProperty
export function transitionDelay() { return new TransitionDelayProperty() }

// property transition
// <single-transition>#
class TransitionProperty {}

export function transition(source: RecurseTuple<SingleTransition>): TransitionProperty
export function transition() { return new TransitionProperty() }

// property outline
// [ <'outline-color'> || <'outline-style'> || <'outline-width'> ]
class OutlineProperty {}

export function outline(source: ((OutlineColorProperty | (OutlineStyleProperty | OutlineWidthProperty)))): OutlineProperty
export function outline() { return new OutlineProperty() }

// property outline-width
// <line-width>
class OutlineWidthProperty {}

export function outlineWidth(source: LineWidth): OutlineWidthProperty
export function outlineWidth() { return new OutlineWidthProperty() }

// property outline-style
// auto | <outline-line-style>
class OutlineStyleProperty {}

export function outlineStyle(source: 'auto' | OutlineLineStyle): OutlineStyleProperty
export function outlineStyle() { return new OutlineStyleProperty() }

// property outline-color
// auto | [ <color> | <image-1D> ]
class OutlineColorProperty {}

export function outlineColor(source: 'auto' | (Color | Image1D)): OutlineColorProperty
export function outlineColor() { return new OutlineColorProperty() }

// property outline-offset
// <length>
class OutlineOffsetProperty {}

export function outlineOffset(source: number): OutlineOffsetProperty
export function outlineOffset() { return new OutlineOffsetProperty() }

// property resize
// none | both | horizontal | vertical | block | inline
class ResizeProperty {}

export function resize(source: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'): ResizeProperty
export function resize() { return new ResizeProperty() }

// property cursor
// [ [ <url> | <url-set> ] [<x> <y>]? ]#? [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out ]
class CursorProperty {}

export function cursor(source: [RecurseTuple<([(Url | UrlSet), ([X, Y])])>, ('auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out')]): CursorProperty
export function cursor(source: [RecurseTuple<([(Url | UrlSet), void])>, ('auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out')]): CursorProperty
export function cursor(source: [void, ('auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out')]): CursorProperty
export function cursor() { return new CursorProperty() }

// property caret-color
// auto | <color>
class CaretColorProperty {}

export function caretColor(source: 'auto' | Color): CaretColorProperty
export function caretColor() { return new CaretColorProperty() }

// property caret-shape
// auto | bar | block | underscore
class CaretShapeProperty {}

export function caretShape(source: 'auto' | 'bar' | 'block' | 'underscore'): CaretShapeProperty
export function caretShape() { return new CaretShapeProperty() }

// property caret
// <'caret-color'> || <'caret-shape'>
class CaretProperty {}

export function caret(source: (CaretColorProperty | CaretShapeProperty)): CaretProperty
export function caret() { return new CaretProperty() }

// property nav-up
// auto | <id> [ current | root | <target-name> ]?
class NavUpProperty {}

export function navUp(source: 'auto' | [Id, ('current' | 'root' | TargetName)] | [Id, void]): NavUpProperty
export function navUp() { return new NavUpProperty() }

// property nav-right
// auto | <id> [ current | root | <target-name> ]?
class NavRightProperty {}

export function navRight(source: 'auto' | [Id, ('current' | 'root' | TargetName)] | [Id, void]): NavRightProperty
export function navRight() { return new NavRightProperty() }

// property nav-down
// auto | <id> [ current | root | <target-name> ]?
class NavDownProperty {}

export function navDown(source: 'auto' | [Id, ('current' | 'root' | TargetName)] | [Id, void]): NavDownProperty
export function navDown() { return new NavDownProperty() }

// property nav-left
// auto | <id> [ current | root | <target-name> ]?
class NavLeftProperty {}

export function navLeft(source: 'auto' | [Id, ('current' | 'root' | TargetName)] | [Id, void]): NavLeftProperty
export function navLeft() { return new NavLeftProperty() }

// property user-select
// auto | text | none | contain | all
class UserSelectProperty {}

export function userSelect(source: 'auto' | 'text' | 'none' | 'contain' | 'all'): UserSelectProperty
export function userSelect() { return new UserSelectProperty() }

// property accent-color
// auto | <color>
class AccentColorProperty {}

export function accentColor(source: 'auto' | Color): AccentColorProperty
export function accentColor() { return new AccentColorProperty() }

// property appearance
// none | auto | <compat-auto> | <compat-special>
class AppearanceProperty {}

export function appearance(source: 'none' | 'auto' | CompatAuto | CompatSpecial): AppearanceProperty
export function appearance() { return new AppearanceProperty() }

// property field-sizing
// fixed | content
class FieldSizingProperty {}

export function fieldSizing(source: 'fixed' | 'content'): FieldSizingProperty
export function fieldSizing() { return new FieldSizingProperty() }

// property input-security
// auto | none
class InputSecurityProperty {}

export function inputSecurity(source: 'auto' | 'none'): InputSecurityProperty
export function inputSecurity() { return new InputSecurityProperty() }

// property view-transition-name
// none | <custom-ident>
class ViewTransitionNameProperty {}

export function viewTransitionName(source: 'none' | CustomIdent): ViewTransitionNameProperty
export function viewTransitionName() { return new ViewTransitionNameProperty() }

// property will-change
// auto | <animateable-feature>#
class WillChangeProperty {}

export function willChange(source: 'auto' | RecurseTuple<AnimateableFeature>): WillChangeProperty
export function willChange() { return new WillChangeProperty() }

// property direction
// ltr | rtl
class DirectionProperty {}

export function direction(source: 'ltr' | 'rtl'): DirectionProperty
export function direction() { return new DirectionProperty() }

// property unicode-bidi
// normal | embed | isolate | bidi-override | isolate-override | plaintext
class UnicodeBidiProperty {}

export function unicodeBidi(source: 'normal' | 'embed' | 'isolate' | 'bidi-override' | 'isolate-override' | 'plaintext'): UnicodeBidiProperty
export function unicodeBidi() { return new UnicodeBidiProperty() }

// property writing-mode
// horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr
class WritingModeProperty {}

export function writingMode(source: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr' | 'sideways-rl' | 'sideways-lr'): WritingModeProperty
export function writingMode() { return new WritingModeProperty() }

// property text-orientation
// mixed | upright | sideways
class TextOrientationProperty {}

export function textOrientation(source: 'mixed' | 'upright' | 'sideways'): TextOrientationProperty
export function textOrientation() { return new TextOrientationProperty() }

// property glyph-orientation-vertical
// auto | 0deg | 90deg | 0 | 90
class GlyphOrientationVerticalProperty {}

export function glyphOrientationVertical(source: 'auto' | '0deg' | '90deg' | '0' | '90'): GlyphOrientationVerticalProperty
export function glyphOrientationVertical() { return new GlyphOrientationVerticalProperty() }

// property text-combine-upright
// none | all | [ digits <integer [2,4]>? ]
class TextCombineUprightProperty {}

export function textCombineUpright(source: 'none' | 'all' | (['digits', number]) | (['digits', void])): TextCombineUprightProperty
export function textCombineUpright() { return new TextCombineUprightProperty() }

// property fill-rule
// nonzero | evenodd
class FillRuleProperty {}

export function fillRule(source: 'nonzero' | 'evenodd'): FillRuleProperty
export function fillRule() { return new FillRuleProperty() }

// property fill-break
// bounding-box | slice | clone
class FillBreakProperty {}

export function fillBreak(source: 'bounding-box' | 'slice' | 'clone'): FillBreakProperty
export function fillBreak() { return new FillBreakProperty() }

// property fill-color
// <color>
class FillColorProperty {}

export function fillColor(source: Color): FillColorProperty
export function fillColor() { return new FillColorProperty() }

// property fill-image
// <paint>#
class FillImageProperty {}

export function fillImage(source: RecurseTuple<Paint>): FillImageProperty
export function fillImage() { return new FillImageProperty() }

// property fill-origin
// match-parent | fill-box | stroke-box | content-box | padding-box | border-box
class FillOriginProperty {}

export function fillOrigin(source: 'match-parent' | 'fill-box' | 'stroke-box' | 'content-box' | 'padding-box' | 'border-box'): FillOriginProperty
export function fillOrigin() { return new FillOriginProperty() }

// property fill-position
// <position>#
class FillPositionProperty {}

export function fillPosition(source: RecurseTuple<Position>): FillPositionProperty
export function fillPosition() { return new FillPositionProperty() }

// property fill-size
// <bg-size>#
class FillSizeProperty {}

export function fillSize(source: RecurseTuple<BgSize>): FillSizeProperty
export function fillSize() { return new FillSizeProperty() }

// property fill-repeat
// <repeat-style>#
class FillRepeatProperty {}

export function fillRepeat(source: RecurseTuple<RepeatStyle>): FillRepeatProperty
export function fillRepeat() { return new FillRepeatProperty() }

// property fill-opacity
// <'opacity'>
class FillOpacityProperty {}

export function fillOpacity(source: OpacityProperty): FillOpacityProperty
export function fillOpacity() { return new FillOpacityProperty() }

// property stroke-width
// [<length-percentage> | <number>]#
class StrokeWidthProperty {}

export function strokeWidth(source: RecurseTuple<(LengthPercentage | number)>): StrokeWidthProperty
export function strokeWidth() { return new StrokeWidthProperty() }

// property stroke-align
// center | inset | outset
class StrokeAlignProperty {}

export function strokeAlign(source: 'center' | 'inset' | 'outset'): StrokeAlignProperty
export function strokeAlign() { return new StrokeAlignProperty() }

// property stroke-linecap
// butt | round | square
class StrokeLinecapProperty {}

export function strokeLinecap(source: 'butt' | 'round' | 'square'): StrokeLinecapProperty
export function strokeLinecap() { return new StrokeLinecapProperty() }

// property stroke-linejoin
// [ crop | arcs | miter ] || [ bevel | round | fallback ]
class StrokeLinejoinProperty {}

export function strokeLinejoin(source: (('crop' | 'arcs' | 'miter') | ('bevel' | 'round' | 'fallback'))): StrokeLinejoinProperty
export function strokeLinejoin() { return new StrokeLinejoinProperty() }

// property stroke-miterlimit
// <number>
class StrokeMiterlimitProperty {}

export function strokeMiterlimit(source: number): StrokeMiterlimitProperty
export function strokeMiterlimit() { return new StrokeMiterlimitProperty() }

// property stroke-break
// bounding-box | slice | clone
class StrokeBreakProperty {}

export function strokeBreak(source: 'bounding-box' | 'slice' | 'clone'): StrokeBreakProperty
export function strokeBreak() { return new StrokeBreakProperty() }

// property stroke-dasharray
// none | [<length-percentage> | <number>]+#
class StrokeDasharrayProperty {}

export function strokeDasharray(source: 'none' | RecurseTuple<Recurse<(LengthPercentage | number)>>): StrokeDasharrayProperty
export function strokeDasharray() { return new StrokeDasharrayProperty() }

// property stroke-dashoffset
// <length-percentage> | <number>
class StrokeDashoffsetProperty {}

export function strokeDashoffset(source: LengthPercentage | number): StrokeDashoffsetProperty
export function strokeDashoffset() { return new StrokeDashoffsetProperty() }

// property stroke-dash-corner
// none | <length>
class StrokeDashCornerProperty {}

export function strokeDashCorner(source: 'none' | number): StrokeDashCornerProperty
export function strokeDashCorner() { return new StrokeDashCornerProperty() }

// property stroke-dash-justify
// none | [ stretch | compress ] || [ dashes || gaps ]
class StrokeDashJustifyProperty {}

export function strokeDashJustify(source: 'none' | (('stretch' | 'compress') | (('dashes' | 'gaps')))): StrokeDashJustifyProperty
export function strokeDashJustify() { return new StrokeDashJustifyProperty() }

// property stroke-color
// <color>#
class StrokeColorProperty {}

export function strokeColor(source: RecurseTuple<Color>): StrokeColorProperty
export function strokeColor() { return new StrokeColorProperty() }

// property stroke-image
// <paint>#
class StrokeImageProperty {}

export function strokeImage(source: RecurseTuple<Paint>): StrokeImageProperty
export function strokeImage() { return new StrokeImageProperty() }

// property stroke-origin
// match-parent | fill-box | stroke-box | content-box | padding-box | border-box
class StrokeOriginProperty {}

export function strokeOrigin(source: 'match-parent' | 'fill-box' | 'stroke-box' | 'content-box' | 'padding-box' | 'border-box'): StrokeOriginProperty
export function strokeOrigin() { return new StrokeOriginProperty() }

// property stroke-position
// <position>#
class StrokePositionProperty {}

export function strokePosition(source: RecurseTuple<Position>): StrokePositionProperty
export function strokePosition() { return new StrokePositionProperty() }

// property stroke-size
// <bg-size>#
class StrokeSizeProperty {}

export function strokeSize(source: RecurseTuple<BgSize>): StrokeSizeProperty
export function strokeSize() { return new StrokeSizeProperty() }

// property stroke-repeat
// <repeat-style>#
class StrokeRepeatProperty {}

export function strokeRepeat(source: RecurseTuple<RepeatStyle>): StrokeRepeatProperty
export function strokeRepeat() { return new StrokeRepeatProperty() }

// property stroke-opacity
// <'opacity'>
class StrokeOpacityProperty {}

export function strokeOpacity(source: OpacityProperty): StrokeOpacityProperty
export function strokeOpacity() { return new StrokeOpacityProperty() }

// property backdrop-filter
// none | <filter-value-list>
class BackdropFilterProperty {}

export function backdropFilter(source: 'none' | FilterValueList): BackdropFilterProperty
export function backdropFilter() { return new BackdropFilterProperty() }

// property filter
// none | <filter-value-list>
class FilterProperty {}

export function filter(source: 'none' | FilterValueList): FilterProperty
export function filter() { return new FilterProperty() }

// property flood-color
// <color>
class FloodColorProperty {}

export function floodColor(source: Color): FloodColorProperty
export function floodColor() { return new FloodColorProperty() }

// property flood-opacity
// <alpha-value>
class FloodOpacityProperty {}

export function floodOpacity(source: AlphaValue): FloodOpacityProperty
export function floodOpacity() { return new FloodOpacityProperty() }

// property color-interpolation-filters
// auto | sRGB | linearRGB
class ColorInterpolationFiltersProperty {}

export function colorInterpolationFilters(source: 'auto' | 'sRGB' | 'linearRGB'): ColorInterpolationFiltersProperty
export function colorInterpolationFilters() { return new ColorInterpolationFiltersProperty() }

// property lighting-color
// <color>
class LightingColorProperty {}

export function lightingColor(source: Color): LightingColorProperty
export function lightingColor() { return new LightingColorProperty() }

// property math-style
// normal | compact
class MathStyleProperty {}

export function mathStyle(source: 'normal' | 'compact'): MathStyleProperty
export function mathStyle() { return new MathStyleProperty() }

// property math-shift
// normal | compact
class MathShiftProperty {}

export function mathShift(source: 'normal' | 'compact'): MathShiftProperty
export function mathShift() { return new MathShiftProperty() }

// property math-depth
// auto-add | add(<integer>) | <integer>
class MathDepthProperty {}

export function mathDepth(source: 'auto-add' | { 'add': [number] } | number): MathDepthProperty
export function mathDepth() { return new MathDepthProperty() }

// property offset-path
// none | <offset-path> || <coord-box>
class OffsetPathProperty {}

export function offsetPath(source: 'none' | (OffsetPath | CoordBox)): OffsetPathProperty
export function offsetPath() { return new OffsetPathProperty() }

// property offset-distance
// <length-percentage>
class OffsetDistanceProperty {}

export function offsetDistance(source: LengthPercentage): OffsetDistanceProperty
export function offsetDistance() { return new OffsetDistanceProperty() }

// property offset-position
// normal | auto | <position>
class OffsetPositionProperty {}

export function offsetPosition(source: 'normal' | 'auto' | Position): OffsetPositionProperty
export function offsetPosition() { return new OffsetPositionProperty() }

// property offset-anchor
// auto | <position>
class OffsetAnchorProperty {}

export function offsetAnchor(source: 'auto' | Position): OffsetAnchorProperty
export function offsetAnchor() { return new OffsetAnchorProperty() }

// property offset-rotate
// [ auto | reverse ] || <angle>
class OffsetRotateProperty {}

export function offsetRotate(source: (('auto' | 'reverse') | Angle)): OffsetRotateProperty
export function offsetRotate() { return new OffsetRotateProperty() }

// property offset
// [ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?
class OffsetProperty {}

export function offset(source: [(([OffsetPositionProperty, ([OffsetPathProperty, ((OffsetDistanceProperty | OffsetRotateProperty))])])), (['/', OffsetAnchorProperty])]): OffsetProperty
export function offset(source: [(([OffsetPositionProperty, ([OffsetPathProperty, ((OffsetDistanceProperty | OffsetRotateProperty))])])), void]): OffsetProperty
export function offset(source: [(([OffsetPositionProperty, ([OffsetPathProperty, void])])), (['/', OffsetAnchorProperty])]): OffsetProperty
export function offset(source: [(([OffsetPositionProperty, ([OffsetPathProperty, void])])), void]): OffsetProperty
export function offset(source: [(([OffsetPositionProperty, void])), (['/', OffsetAnchorProperty])]): OffsetProperty
export function offset(source: [(([OffsetPositionProperty, void])), void]): OffsetProperty
export function offset(source: [(([void, ([OffsetPathProperty, ((OffsetDistanceProperty | OffsetRotateProperty))])])), (['/', OffsetAnchorProperty])]): OffsetProperty
export function offset(source: [(([void, ([OffsetPathProperty, ((OffsetDistanceProperty | OffsetRotateProperty))])])), void]): OffsetProperty
export function offset(source: [(([void, ([OffsetPathProperty, void])])), (['/', OffsetAnchorProperty])]): OffsetProperty
export function offset(source: [(([void, ([OffsetPathProperty, void])])), void]): OffsetProperty
export function offset(source: [(([void, void])), (['/', OffsetAnchorProperty])]): OffsetProperty
export function offset(source: [(([void, void])), void]): OffsetProperty
export function offset() { return new OffsetProperty() }

// property scroll-timeline-name
// [ none | <dashed-ident> ]#
class ScrollTimelineNameProperty {}

export function scrollTimelineName(source: RecurseTuple<('none' | DashedIdent)>): ScrollTimelineNameProperty
export function scrollTimelineName() { return new ScrollTimelineNameProperty() }

// property scroll-timeline-axis
// [ block | inline | x | y ]#
class ScrollTimelineAxisProperty {}

export function scrollTimelineAxis(source: RecurseTuple<('block' | 'inline' | 'x' | 'y')>): ScrollTimelineAxisProperty
export function scrollTimelineAxis() { return new ScrollTimelineAxisProperty() }

// property scroll-timeline
// [ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#
class ScrollTimelineProperty {}

export function scrollTimeline(source: RecurseTuple<([ScrollTimelineNameProperty, ScrollTimelineAxisProperty])>): ScrollTimelineProperty
export function scrollTimeline(source: RecurseTuple<([ScrollTimelineNameProperty, void])>): ScrollTimelineProperty
export function scrollTimeline() { return new ScrollTimelineProperty() }

// property view-timeline-name
// [ none | <dashed-ident> ]#
class ViewTimelineNameProperty {}

export function viewTimelineName(source: RecurseTuple<('none' | DashedIdent)>): ViewTimelineNameProperty
export function viewTimelineName() { return new ViewTimelineNameProperty() }

// property view-timeline-axis
// [ block | inline | x | y ]#
class ViewTimelineAxisProperty {}

export function viewTimelineAxis(source: RecurseTuple<('block' | 'inline' | 'x' | 'y')>): ViewTimelineAxisProperty
export function viewTimelineAxis() { return new ViewTimelineAxisProperty() }

// property view-timeline-inset
// [ [ auto | <length-percentage> ]{1,2} ]#
class ViewTimelineInsetProperty {}

export function viewTimelineInset(source: RecurseTuple<(Repeat1to2<('auto' | LengthPercentage)>)>): ViewTimelineInsetProperty
export function viewTimelineInset() { return new ViewTimelineInsetProperty() }

// property view-timeline
// [ <'view-timeline-name'> [ <'view-timeline-axis'> || <'view-timeline-inset'> ]? ]#
class ViewTimelineProperty {}

export function viewTimeline(source: RecurseTuple<([ViewTimelineNameProperty, ((ViewTimelineAxisProperty | ViewTimelineInsetProperty))])>): ViewTimelineProperty
export function viewTimeline(source: RecurseTuple<([ViewTimelineNameProperty, void])>): ViewTimelineProperty
export function viewTimeline() { return new ViewTimelineProperty() }

// property animation-range
// [ <'animation-range-start'> <'animation-range-end'>? ]#
class AnimationRangeProperty {}

export function animationRange(source: RecurseTuple<([AnimationRangeStartProperty, AnimationRangeEndProperty])>): AnimationRangeProperty
export function animationRange(source: RecurseTuple<([AnimationRangeStartProperty, void])>): AnimationRangeProperty
export function animationRange() { return new AnimationRangeProperty() }

// property animation-range-start
// [ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#
class AnimationRangeStartProperty {}

export function animationRangeStart(source: RecurseTuple<('normal' | LengthPercentage | [TimelineRangeName, LengthPercentage] | [TimelineRangeName, void])>): AnimationRangeStartProperty
export function animationRangeStart() { return new AnimationRangeStartProperty() }

// property animation-range-end
// [ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#
class AnimationRangeEndProperty {}

export function animationRangeEnd(source: RecurseTuple<('normal' | LengthPercentage | [TimelineRangeName, LengthPercentage] | [TimelineRangeName, void])>): AnimationRangeEndProperty
export function animationRangeEnd() { return new AnimationRangeEndProperty() }

// property timeline-scope
// none | <dashed-ident>#
class TimelineScopeProperty {}

export function timelineScope(source: 'none' | RecurseTuple<DashedIdent>): TimelineScopeProperty
export function timelineScope() { return new TimelineScopeProperty() }

// property stroke-alignment
// center | inner | outer
class StrokeAlignmentProperty {}

export function strokeAlignment(source: 'center' | 'inner' | 'outer'): StrokeAlignmentProperty
export function strokeAlignment() { return new StrokeAlignmentProperty() }

// property stroke-dashcorner
// none | <length>
class StrokeDashcornerProperty {}

export function strokeDashcorner(source: 'none' | number): StrokeDashcornerProperty
export function strokeDashcorner() { return new StrokeDashcornerProperty() }

// property stroke-dashadjust
// none | [stretch | compress] [dashes | gaps]?
class StrokeDashadjustProperty {}

export function strokeDashadjust(source: 'none' | [('stretch' | 'compress'), ('dashes' | 'gaps')] | [('stretch' | 'compress'), void]): StrokeDashadjustProperty
export function strokeDashadjust() { return new StrokeDashadjustProperty() }



// helpers
type Recurse<T> = T | Recurse<T>[];
type RecurseAny<T> = Recurse<T> | null;
type RecurseTuple<T> = T | T[];
type Ident = string;
type DashedIdent = Ident;
type CustomIdent = Ident;
type ReversedCounterName = string;
type PaletteIdentifier = string;
type UnicodeRange = string;
type Declaration = {};
type DeclarationList = Declaration[];
type MediaQuery = {};
type MediaQueryList = MediaQuery[];
class Percentage {};
class HexColor {};
class AlphaValue {};
type Repeat1to2<T> = [T] | [T, T];
type Repeat2<T> = [T, T];
type Repeat3<T> = [T, T, T];
type Repeat4<T> = [T, T, T, T];
type Repeat1to4<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T];
type Repeat16<T> = [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T];
type Repeat0to3<T> = [] | [T] | [T, T] | [T, T, T];
type Repeat1to3<T> = [T] | [T, T] | [T, T, T];
type Repeat2to3<T> = [T, T] | [T, T, T];
