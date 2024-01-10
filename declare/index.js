"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var ident_1 = require("./ident");
var type_1 = require("./builders/type");
var property_1 = require("./builders/property");
var shorthand_1 = require("./builders/shorthand");
var method_1 = require("./builders/method");
var sourceBase = (0, path_1.join)(__dirname, 'declarations');
var drainBase = (0, path_1.join)('source', 'declarations');
(0, fs_1.mkdirSync)(drainBase, { recursive: true });
var sources = {};
for (var _i = 0, _a = (0, fs_1.readdirSync)(sourceBase); _i < _a.length; _i++) {
    var sourcePath = _a[_i];
    if (sourcePath.endsWith('.js')) {
        var declarations = require((0, path_1.join)(sourceBase, sourcePath));
        for (var name_1 in declarations) {
            var ident = ident_1.Ident.fromCamelCase(name_1);
            var declaration = declarations[name_1];
            declaration.name = ident;
        }
        sources[sourcePath] = declarations;
    }
}
for (var sourcePath in sources) {
    if (sourcePath.endsWith('.js')) {
        var declarations = sources[sourcePath];
        var writer = (0, fs_1.createWriteStream)((0, path_1.join)(drainBase, sourcePath.replace('.js', '.ts')));
        // import base types
        writer.write("import { Style } from '../style';\n");
        writer.write("import { StyleProperty } from '../property';\n");
        writer.write('\n');
        // import all types
        var imports = [];
        for (var name_2 in declarations) {
            var declaration = declarations[name_2];
            for (var _b = 0, _c = declaration.requirements(); _b < _c.length; _b++) {
                var requirement = _c[_b];
                var exportedMemberName = requirement.name.toCamelCase();
                // don't import local types
                if (!(exportedMemberName in declarations)) {
                    var found = false;
                    for (var sourcePath_1 in sources) {
                        if (exportedMemberName in sources[sourcePath_1]) {
                            var importStatement = "import { ".concat(requirement.name.toClassCamelCase(), " } from './").concat(sourcePath_1.replace('.js', ''), "';");
                            if (!imports.includes(importStatement)) {
                                imports.push(importStatement);
                            }
                            found = true;
                        }
                    }
                    if (!found) {
                        throw new Error("Type '".concat(exportedMemberName, "' cloud not be imported"));
                    }
                }
            }
        }
        writer.write(imports.join('\n'));
        writer.write('\n\n');
        for (var name_3 in declarations) {
            var ident = ident_1.Ident.fromCamelCase(name_3);
            var declaration = declarations[name_3];
            writer.write("// ".concat(ident.toSpaced(), "\n"));
            if (declaration instanceof shorthand_1.ShorthandDeclaration) {
                writer.write("export class ".concat(ident.toPropertyClassName(), " extends StyleProperty {\n"));
                writer.write("\tconstructor(\n");
                for (var _d = 0, _e = declaration.children; _d < _e.length; _d++) {
                    var child = _e[_d];
                    writer.write("\t\tprivate ".concat(child.name.toCamelCase(), ": ").concat(child.name.toPropertyClassName()).concat(declaration.children.indexOf(child) == declaration.children.length - 1 ? '' : ',', "\n"));
                }
                writer.write('\t) {\n');
                writer.write("\t\tsuper('".concat(ident.toDashed(), "', [").concat(declaration.children.map(function (child) { return child.name.toCamelCase(); }).join(', '), "]);\n"));
                writer.write('\t}\n');
                writer.write("}\n\n");
            }
            if (declaration instanceof method_1.MethodDeclaration) {
                writer.write("export class ".concat(declaration.name.toClassCamelCase(), " {\n"));
                var constructorArguments = [];
                var passArguments = [];
                for (var property in declaration.parameters) {
                    var initializer = declaration.parameters[property](property);
                    writer.write("\tprivate ".concat(property, ": ").concat(initializer.type, ";\n"));
                    constructorArguments.push(initializer.argument);
                    passArguments.push(initializer.pass);
                }
                writer.write('\n');
                writer.write('\tconstructor(\n');
                writer.write("\t\t".concat(constructorArguments.join(',\n\t\t'), "\n"));
                writer.write('\t) {\n\t');
                writer.write(declaration.creator.trim().split('\n').map(function (line) { return "\t".concat(line); }).join('\n'));
                writer.write('\n\t}\n\n');
                writer.write('\ttoString() {\n');
                writer.write("\t\treturn `".concat(declaration.valueConverter, "`;\n"));
                writer.write('\t}\n');
                writer.write("}\n\n");
                writer.write("export function ".concat(declaration.name.toCamelCase(), "(").concat(constructorArguments.join(', '), ") { return new ").concat(declaration.name.toClassCamelCase(), "(").concat(passArguments.join(', '), "); }\n\n"));
            }
            else if (declaration instanceof type_1.TypeDeclaration) {
                writer.write("export type ".concat(ident.toClassCamelCase(), " = ").concat(declaration, ";\n"));
                if (declaration.defaultNumberConverterDeclaration) {
                    writer.write("Style.numberConverter['".concat(declaration.name.toCamelCase(), "'] = ").concat(declaration.defaultNumberConverterDeclaration.name.toClassCamelCase(), ";\n"));
                }
                writer.write('\n');
            }
            if (declaration instanceof property_1.PropertyTypeDeclaration) {
                writer.write("export class ".concat(ident.toPropertyClassName(), " extends StyleProperty {\n"));
                var constructorArguments = [];
                var passArguments = [];
                for (var property in declaration.initializer) {
                    var initializer = declaration.initializer[property](property);
                    writer.write("\tprivate ".concat(property, ": ").concat(initializer.type, ";\n"));
                    constructorArguments.push(initializer.argument);
                    passArguments.push(initializer.pass);
                }
                writer.write('\n');
                writer.write('\tconstructor(\n');
                writer.write("\t\t".concat(constructorArguments.join(',\n\t\t'), "\n"));
                writer.write('\t) {\n');
                writer.write("\t\tsuper('".concat(ident.toDashed(), "');\n\n"));
                for (var property in declaration.initializer) {
                    writer.write("\t\tthis.".concat(property, " = ").concat(property, ";\n"));
                }
                writer.write('\t}\n\n');
                writer.write('\ttoValueString() {\n');
                writer.write("\t\treturn `".concat(declaration.valueConverter, "`;\n"));
                writer.write('\t}\n');
                writer.write('}\n\n');
                writer.write("export const ".concat(ident.toCommandName(), " = (").concat(constructorArguments.join(', '), ") => new ").concat(ident.toPropertyClassName(), "(").concat(passArguments.join(', '), ");\n\n"));
            }
        }
        for (var name_4 in declarations) {
            var ident = ident_1.Ident.fromCamelCase(name_4);
            var declaration = declarations[name_4];
            if (declaration instanceof shorthand_1.ShorthandDeclaration) {
                var initializers = [];
                // create direct initializer
                // → overflow(overflowX('scroll'), overflowY('scroll'))
                writer.write("export function ".concat(ident.toCommandName(), "(").concat(declaration.children.map(function (child) { return "".concat(child.name.toCamelCase(), ": ").concat(child.name.toPropertyClassName()); }).join(', '), ")\n"));
                initializers.push("if (".concat(declaration.children.map(function (child, index) { return "arguments[".concat(index, "] instanceof ").concat(child.name.toPropertyClassName()); }).join(' && '), ") { return new ").concat(declaration.name.toPropertyClassName(), "(").concat(declaration.children.map(function (child, index) { return "arguments[".concat(index, "]"); }).join(', '), "); }"));
                // create child initializer
                // → overflow('scroll', 'auto') = overflowX('scroll') + overflowY('auto')
                var childInitializer = declaration.constructChildInitializer();
                if (childInitializer) {
                    writer.write("export function ".concat(ident.toCommandName(), "(").concat(childInitializer.namedArguments.join(', '), ")\n"));
                    initializers.push(childInitializer.initializer);
                }
                // check for same parameter initializing
                // → overflow('scroll') = overflowX('scroll') + overflowY('scroll')
                var commonParameterInitializer = declaration.constructCommonParameterInitializer();
                if (commonParameterInitializer) {
                    writer.write("export function ".concat(ident.toCommandName(), "(").concat(commonParameterInitializer.arguments.join(', '), ")\n"));
                    initializers.push(commonParameterInitializer.initializer);
                }
                // write function implementation
                writer.write("export function ".concat(ident.toCommandName(), "() {\n"));
                for (var _f = 0, initializers_1 = initializers; _f < initializers_1.length; _f++) {
                    var initializer = initializers_1[_f];
                    writer.write("\t".concat(initializer, "\n"));
                }
                writer.write('}\n\n');
                writer.write("".concat(ident.toPropertyClassName(), ".shorthand = [").concat(declaration.children.map(function (child) { return child.name.toPropertyClassName(); }).join(', '), "];\n\n"));
            }
        }
        writer.close();
    }
}
var indexWriter = (0, fs_1.createWriteStream)((0, path_1.join)(drainBase, 'index.ts'));
for (var sourcePath in sources) {
    indexWriter.write("export * from './".concat(sourcePath.replace('.js', ''), "';\n"));
}
indexWriter.end();
