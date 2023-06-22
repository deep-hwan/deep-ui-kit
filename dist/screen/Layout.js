"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizedBox = exports.Box = exports.Column = exports.Row = exports.Section = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var css_1 = require("@emotion/css");
function Section(props) {
    var children = props.children;
    return ((0, jsx_runtime_1.jsx)("section", __assign({ className: (0, css_1.css)({
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "0.3s ease-in-out",
        }) }, { children: children })));
}
exports.Section = Section;
function Row(props) {
    var children = props.children, gap = props.gap, start = props.start, end = props.end, padding = props.padding, margin = props.margin;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, css_1.css)({
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: start ? "start" : end ? "end" : "center",
            columnGap: gap,
            padding: padding,
            margin: margin,
            transition: "0.3s ease-in-out",
        }) }, { children: children })));
}
exports.Row = Row;
function Column(props) {
    var children = props.children, gap = props.gap, center = props.center, end = props.end, padding = props.padding, margin = props.margin;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: ", ";\n        row-gap: ", ";\n        padding: ", ";\n        margin: ", ";\n        transition: 0.3s ease-in-out;\n      "], ["\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: ", ";\n        row-gap: ", ";\n        padding: ", ";\n        margin: ", ";\n        transition: 0.3s ease-in-out;\n      "])), center ? "center" : end ? "end" : "start", gap, padding, margin) }, { children: children })));
}
exports.Column = Column;
function Box(props) {
    var children = props.children, gap = props.gap, center = props.center, end = props.end, padding = props.padding, margin = props.margin, maxWidth = props.maxWidth;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, css_1.css)({
            width: "100%",
            maxWidth: maxWidth,
            display: "flex",
            flexDirection: "column",
            alignItems: center ? "center" : end ? "end" : "start",
            rowGap: gap,
            padding: padding,
            margin: margin,
            transition: "0.3s ease-in-out",
        }) }, { children: children })));
}
exports.Box = Box;
function SizedBox(props) {
    var children = props.children, width = props.width, height = props.height;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, css_1.css)({
            height: width ? "100%" : height,
            width: height ? "100%" : width,
        }) }, { children: children })));
}
exports.SizedBox = SizedBox;
var templateObject_1;
