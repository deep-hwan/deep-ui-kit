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
function BottomSheet(props) {
    var children = props.children, view = props.view, onCancel = props.onCancel, theme = props.theme;
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(0), startY = _a[0], setStartY = _a[1];
    var _b = (0, react_1.useState)(0), currentY = _b[0], setCurrentY = _b[1];
    var handleTouchStart = function (event) {
        var touch = event.touches[0];
        setStartY(touch.clientY);
        setCurrentY(touch.clientY);
    };
    var handleTouchMove = function (event) {
        var touch = event.touches[0];
        setCurrentY(touch.clientY);
    };
    var handleTouchEnd = function () {
        var distance = currentY - startY;
        if (distance > 100) {
            // Close the button sheet
            onCancel();
        }
        setCurrentY(0);
        setStartY(0);
    };
    //
    // 외부클릭
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
    //
    // 모달 고정 핸들러
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
        if (view) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "auto";
        }
    }, [view]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(LayerBlur, { isActive: view }), (0, jsx_runtime_1.jsxs)(Sheet, __assign({ theme: theme, isActive: view, ref: ref, style: { transform: "translate(-50%, ".concat(currentY - startY, "px)") }, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd }, { children: [(0, jsx_runtime_1.jsx)(CloseBox, __assign({ theme: theme }, { children: (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onCancel, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd }) })), (0, jsx_runtime_1.jsx)(View, { children: children })] }))] }));
}
exports.default = BottomSheet;
var LayerBlur = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  background-color: rgba(0, 0, 0, 0.25);\n"], ["\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  background-color: rgba(0, 0, 0, 0.25);\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "flex" : "none");
});
var Sheet = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 99990;\n  position: fixed;\n  top: ", ";\n  left: 50%;\n  width: 100%;\n  max-width: 560px;\n  height: calc(100vh - 60px);\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 22px 22px 0 0;\n  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);\n  transition: 0.25s ease-in-out;\n  opacity: ", ";\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    top: ", ";\n    height: calc(100vh - 20px);\n  }\n"], ["\n  z-index: 99990;\n  position: fixed;\n  top: ", ";\n  left: 50%;\n  width: 100%;\n  max-width: 560px;\n  height: calc(100vh - 60px);\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 22px 22px 0 0;\n  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);\n  transition: 0.25s ease-in-out;\n  opacity: ", ";\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    top: ", ";\n    height: calc(100vh - 20px);\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "80px" : "100%");
}, function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#292929" : "#fff");
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? 1 : 0);
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "20px" : "100%");
});
var CloseBox = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  padding: 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    width: 50px;\n    height: 6px;\n    background-color: ", ";\n    border: none;\n    outline: none;\n    border-radius: 100px;\n    cursor: pointer;\n  }\n"], ["\n  width: 100%;\n  padding: 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    width: 50px;\n    height: 6px;\n    background-color: ", ";\n    border: none;\n    outline: none;\n    border-radius: 100px;\n    cursor: pointer;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#444" : "#e0e0e0");
});
var View = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &:-webkit-scrollbar-thumb {\n    background-color: #a2a2a2;\n    border-radius: 100px;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: #e2e2e2;\n  }\n  &::-webkit-scrollbar-button:start:decrement {\n    width: 0;\n    height: 0;\n    background-color: transparent;\n  }\n  &::-webkit-scrollbar-button:end:increment {\n    width: 0;\n    height: 0;\n    background-color: transparent;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &:-webkit-scrollbar-thumb {\n    background-color: #a2a2a2;\n    border-radius: 100px;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: #e2e2e2;\n  }\n  &::-webkit-scrollbar-button:start:decrement {\n    width: 0;\n    height: 0;\n    background-color: transparent;\n  }\n  &::-webkit-scrollbar-button:end:increment {\n    width: 0;\n    height: 0;\n    background-color: transparent;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
