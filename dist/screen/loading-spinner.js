"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
function LoadingSpinner(_a) {
    var size = _a.size;
    return ((0, jsx_runtime_1.jsx)(LoadingWrap, { children: (0, jsx_runtime_1.jsx)(Loading, { size: size }) }));
}
exports.default = LoadingSpinner;
//styled
var LoadingWrap = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n"], ["\n  width: 100%;\n  display: flex;\n"])));
var Loading = styled_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  min-width: ", ";\n  height: ", ";\n  min-height: ", ";\n  border: 3px solid #ccc;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  width: ", ";\n  min-width: ", ";\n  height: ", ";\n  min-height: ", ";\n  border: 3px solid #ccc;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size ? size : "30px");
}, function (_a) {
    var size = _a.size;
    return (size ? size : "30px");
}, function (_a) {
    var size = _a.size;
    return (size ? size : "30px");
}, function (_a) {
    var size = _a.size;
    return (size ? size : "30px");
});
var templateObject_1, templateObject_2;
