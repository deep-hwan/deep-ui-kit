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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
export default function Drawers(props) {
    var children = props.children, view = props.view, onCancel = props.onCancel, theme = props.theme;
    var ref = useRef(null);
    var clickModalOutside = function (event) {
        if (view && ref.current && !ref.current.contains(event.target)) {
            onCancel();
        }
    };
    useEffect(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
        if (view) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "auto";
        }
        document.addEventListener("mousedown", clickModalOutside);
        return function () {
            document.removeEventListener("mousedown", clickModalOutside);
        };
    }, [view]);
    return (_jsxs(_Fragment, { children: [_jsx(Layer, { isActive: view }), _jsxs(DrawerBox, __assign({ theme: theme, isActive: view, ref: ref }, { children: [_jsx(Sticky, { children: _jsx(CancelTab, __assign({ onClick: onCancel, theme: theme }, { children: _jsxs("svg", __assign({ viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [_jsx("path", { d: "M13 26.0181C20.1797 26.0181 26 20.1978 26 13.0181C26 5.83836 20.1797 0.0180664 13 0.0180664C5.8203 0.0180664 0 5.83836 0 13.0181C0 20.1978 5.8203 26.0181 13 26.0181Z", fill: theme === "dark" ? "#999" : "#fff" }), _jsx("rect", { x: "5", y: "5", width: "16", height: "16", rx: "8", fill: theme === "dark" ? "#999" : "#fff" }), _jsx("path", { d: "M22.193 3.8251C20.375 2.0069 18.0586 0.768664 15.5368 0.266967C13.015 -0.23473 10.4011 0.02265 8.0256 1.00656C5.65009 1.99046 3.61971 3.65671 2.1912 5.79457C0.762693 7.93243 0.000228882 10.4459 0.000228882 13.0171C0.000228882 15.5883 0.762693 18.1018 2.1912 20.2396C3.61971 22.3775 5.65009 24.0437 8.0256 25.0276C10.4011 26.0115 13.015 26.2689 15.5368 25.7672C18.0586 25.2655 20.375 24.0273 22.193 22.2091C24.6307 19.7712 26.0002 16.4647 26.0002 13.0171C26.0002 9.56947 24.6307 6.26304 22.193 3.8251ZM15.62 17.1611L13.001 14.5421L10.38 17.1631C10.1776 17.3655 9.90319 17.4791 9.61701 17.4791C9.33082 17.4791 9.05637 17.3655 8.854 17.1631C8.65164 16.9607 8.53796 16.6863 8.53796 16.4001C8.53796 16.1139 8.65164 15.8395 8.854 15.6371L11.475 13.0161L8.859 10.4001C8.6647 10.1961 8.55786 9.92427 8.56133 9.64259C8.56479 9.36091 8.67827 9.09175 8.87753 8.89263C9.07678 8.6935 9.34601 8.5802 9.6277 8.57692C9.90938 8.57364 10.1812 8.68066 10.385 8.8751L13.001 11.4921L15.616 8.8751C15.8178 8.67327 16.0916 8.55988 16.377 8.55988C16.6624 8.55988 16.9362 8.67327 17.138 8.8751C17.3398 9.07693 17.4532 9.35067 17.4532 9.6361C17.4532 9.92153 17.3398 10.1953 17.138 10.3971L14.522 13.0131L17.143 15.6321C17.3454 15.8345 17.459 16.1089 17.459 16.3951C17.459 16.6813 17.3454 16.9557 17.143 17.1581C16.9406 17.3605 16.6662 17.4741 16.38 17.4741C16.0938 17.4741 15.8194 17.3605 15.617 17.1581", fill: "#current" })] })) })) }), _jsx(View, { children: children })] }))] }));
}
// styled
var Layer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 9989;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.35);\n"], ["\n  z-index: 9989;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.35);\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "flex" : "none");
});
var DrawerBox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 9990;\n  display: none;\n  position: fixed;\n  top: 0;\n  right: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 400px;\n  height: 100vh;\n  background-color: ", ";\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);\n  overflow: auto;\n  transition: 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (max-width: 1080px) {\n    max-width: 320px;\n    display: flex;\n  }\n"], ["\n  z-index: 9990;\n  display: none;\n  position: fixed;\n  top: 0;\n  right: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 400px;\n  height: 100vh;\n  background-color: ", ";\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);\n  overflow: auto;\n  transition: 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (max-width: 1080px) {\n    max-width: 320px;\n    display: flex;\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? 0 : "-100%");
}, function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#2a2a2a" : "#fff");
});
var Sticky = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: 9997;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: sticky;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n"], ["\n  z-index: 9997;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: sticky;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n"])));
var CancelTab = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 22px;\n  min-width: 22px;\n  height: 22px;\n  min-height: 22px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  align-items: center;\n  user-select: none;\n  transition: 0.3s ease-in-out;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  outline: none;\n  transition: 0.25s ease-in-out;\n  margin-right: 14px;\n\n  svg {\n    width: 22px;\n    min-width: 22px;\n    height: 22px;\n    min-height: 22px;\n    fill: ", ";\n    transition: 0.25s ease-in-out;\n  }\n"], ["\n  width: 22px;\n  min-width: 22px;\n  height: 22px;\n  min-height: 22px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  align-items: center;\n  user-select: none;\n  transition: 0.3s ease-in-out;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  outline: none;\n  transition: 0.25s ease-in-out;\n  margin-right: 14px;\n\n  svg {\n    width: 22px;\n    min-width: 22px;\n    height: 22px;\n    min-height: 22px;\n    fill: ", ";\n    transition: 0.25s ease-in-out;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#404040" : "#e0e0e0");
});
var View = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
