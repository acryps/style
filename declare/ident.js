"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Ident = void 0;
var Ident = /** @class */ (function () {
    function Ident(parts) {
        this.parts = parts;
    }
    Ident.fromCamelCase = function (source) {
        return this.fromDashed(source.replace(/[A-Z]/g, function (match) { return "-".concat(match); }));
    };
    Ident.fromDashed = function (source) {
        return new Ident(source.split('-').map(function (item) { return item.toLowerCase(); }));
    };
    Ident.prototype.toCamelCase = function () {
        return this.parts.map(function (part, index) { return index ? "".concat(part[0].toUpperCase()).concat(part.substring(1).toLowerCase()) : part; }).join('');
    };
    Ident.prototype.toClassCamelCase = function () {
        return this.parts.map(function (part) { return "".concat(part[0].toUpperCase()).concat(part.substring(1).toLowerCase()); }).join('');
    };
    Ident.prototype.toDashed = function () {
        return this.parts.join('-');
    };
    Ident.prototype.toSpaced = function () {
        return this.parts.join(' ');
    };
    Ident.prototype.toPropertyClassName = function () {
        return "".concat(this.toClassCamelCase(), "StyleProperty");
    };
    Ident.prototype.toCommandName = function () {
        return this.toCamelCase();
    };
    Ident.prototype.merge = function (ident) {
        return new Ident(__spreadArray(__spreadArray([], this.parts, true), ident.parts, true));
    };
    return Ident;
}());
exports.Ident = Ident;
