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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("react");
function Snackbar(props) {
    var children = props.children, view = props.view, onCancel = props.onCancel, cancelTab = props.cancelTab, theme = props.theme;
    var ref = (0, react_1.useRef)(null);
    var clickModalOutside = function (event) {
        if (view && ref.current && !ref.current.contains(event.target)) {
            onCancel();
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("mousedown", clickModalOutside);
        return function () {
            document.removeEventListener("mousedown", clickModalOutside);
        };
    }, [view]);
    return ((0, jsx_runtime_1.jsx)(Wrap, __assign({ view: view }, { children: (0, jsx_runtime_1.jsx)(Container, __assign({ ref: ref }, { children: (0, jsx_runtime_1.jsxs)(Box, __assign({ theme: theme }, { children: [cancelTab && ((0, jsx_runtime_1.jsx)(CancelTab, __assign({ type: "button", theme: theme, onClick: function () { return onCancel(); } }, { children: (0, jsx_runtime_1.jsxs)("svg", __assign({ viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13 26.0181C20.1797 26.0181 26 20.1978 26 13.0181C26 5.83836 20.1797 0.0180664 13 0.0180664C5.8203 0.0180664 0 5.83836 0 13.0181C0 20.1978 5.8203 26.0181 13 26.0181Z", fill: theme === "dark" ? "#999" : "#fff" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "5", width: "16", height: "16", rx: "8", fill: theme === "dark" ? "#999" : "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M22.193 3.8251C20.375 2.0069 18.0586 0.768664 15.5368 0.266967C13.015 -0.23473 10.4011 0.02265 8.0256 1.00656C5.65009 1.99046 3.61971 3.65671 2.1912 5.79457C0.762693 7.93243 0.000228882 10.4459 0.000228882 13.0171C0.000228882 15.5883 0.762693 18.1018 2.1912 20.2396C3.61971 22.3775 5.65009 24.0437 8.0256 25.0276C10.4011 26.0115 13.015 26.2689 15.5368 25.7672C18.0586 25.2655 20.375 24.0273 22.193 22.2091C24.6307 19.7712 26.0002 16.4647 26.0002 13.0171C26.0002 9.56947 24.6307 6.26304 22.193 3.8251ZM15.62 17.1611L13.001 14.5421L10.38 17.1631C10.1776 17.3655 9.90319 17.4791 9.61701 17.4791C9.33082 17.4791 9.05637 17.3655 8.854 17.1631C8.65164 16.9607 8.53796 16.6863 8.53796 16.4001C8.53796 16.1139 8.65164 15.8395 8.854 15.6371L11.475 13.0161L8.859 10.4001C8.6647 10.1961 8.55786 9.92427 8.56133 9.64259C8.56479 9.36091 8.67827 9.09175 8.87753 8.89263C9.07678 8.6935 9.34601 8.5802 9.6277 8.57692C9.90938 8.57364 10.1812 8.68066 10.385 8.8751L13.001 11.4921L15.616 8.8751C15.8178 8.67327 16.0916 8.55988 16.377 8.55988C16.6624 8.55988 16.9362 8.67327 17.138 8.8751C17.3398 9.07693 17.4532 9.35067 17.4532 9.6361C17.4532 9.92153 17.3398 10.1953 17.138 10.3971L14.522 13.0131L17.143 15.6321C17.3454 15.8345 17.459 16.1089 17.459 16.3951C17.459 16.6813 17.3454 16.9557 17.143 17.1581C16.9406 17.3605 16.6662 17.4741 16.38 17.4741C16.0938 17.4741 15.8194 17.3605 15.617 17.1581", fill: "#current" })] })) }))), (0, jsx_runtime_1.jsx)(View, { children: children })] })) })) })));
}
exports.default = Snackbar;
// styled
var Wrap = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 99999;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: ", ";\n  opacity: ", ";\n  display: flex;\n  justify-content: center;\n  transition: 0.3s ease-in-out;\n\n  @media (max-width: 600px) {\n    top: auto;\n    bottom: ", ";\n  }\n"], ["\n  z-index: 99999;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: ", ";\n  opacity: ", ";\n  display: flex;\n  justify-content: center;\n  transition: 0.3s ease-in-out;\n\n  @media (max-width: 600px) {\n    top: auto;\n    bottom: ", ";\n  }\n"])), function (_a) {
    var view = _a.view;
    return (view ? "0" : "-100%");
}, function (_a) {
    var view = _a.view;
    return (view ? 1 : 0);
}, function (_a) {
    var view = _a.view;
    return (view ? "0" : "-100%");
});
var Container = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 20px;\n"], ["\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 20px;\n"])));
var Box = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-height: 300px;\n  background-color: ", ";\n  border-radius: 18px;\n  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  transition: 0.3s ease-in-out;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &:-webkit-scrollbar-thumb {\n    background-color: #a2a2a2;\n    border-radius: 100px;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-height: 300px;\n  background-color: ", ";\n  border-radius: 18px;\n  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  transition: 0.3s ease-in-out;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &:-webkit-scrollbar-thumb {\n    background-color: #a2a2a2;\n    border-radius: 100px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#2a2a2a" : "#fff");
});
var View = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 16px;\n  white-space: pre-line;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 16px;\n  white-space: pre-line;\n"])));
var CancelTab = styled_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  z-index: 999;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 17px;\n  min-width: 17px;\n  height: 17px;\n  min-height: 17px;\n  display: flex;\n  align-items: center;\n  user-select: none;\n  transition: 0.3s ease-in-out;\n  border: none;\n  background-color: transparent;\n  justify-content: center;\n  cursor: pointer;\n  outline: none;\n\n  svg {\n    width: 17px;\n    min-width: 17px;\n    height: 17px;\n    min-height: 17px;\n    fill: ", ";\n    transition: 0.25s ease-in-out;\n  }\n"], ["\n  z-index: 999;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 17px;\n  min-width: 17px;\n  height: 17px;\n  min-height: 17px;\n  display: flex;\n  align-items: center;\n  user-select: none;\n  transition: 0.3s ease-in-out;\n  border: none;\n  background-color: transparent;\n  justify-content: center;\n  cursor: pointer;\n  outline: none;\n\n  svg {\n    width: 17px;\n    min-width: 17px;\n    height: 17px;\n    min-height: 17px;\n    fill: ", ";\n    transition: 0.25s ease-in-out;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#404040" : "#e0e0e0");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
