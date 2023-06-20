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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
//styles
import styled from "@emotion/styled";
//
export default function ScrollTopTab() {
    var _a = useState(0), ScrollY = _a[0], setScrollY = _a[1];
    var handleFollow = function () {
        setScrollY(window.pageYOffset);
    };
    var handleTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setScrollY(0);
    };
    useEffect(function () {
        var watch = function () {
            window.addEventListener("scroll", handleFollow);
        };
        watch();
        return function () {
            window.removeEventListener("scroll", handleFollow);
        };
    }, [ScrollY]);
    return (_jsx(_Fragment, { children: ScrollY > 100 && (_jsx(Tab, __assign({ type: "button", onClick: handleTop }, { children: _jsx(TopTabIcon, {}) }))) }));
}
// 스타일
var Tab = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  width: 44px;\n  height: 44px;\n  border-radius: 100px;\n  background-color: #fff;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #666;\n  font-weight: 500;\n  cursor: pointer;\n  z-index: 7777;\n  user-select: none;\n  transition: 0.3s ease-in-out;\n  outline: none;\n  border: none;\n\n  svg {\n    width: 20px;\n  }\n\n  @media (max-width: 600px) {\n    width: 42px;\n    height: 42px;\n\n    svg {\n      width: 18px;\n    }\n  }\n"], ["\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  width: 44px;\n  height: 44px;\n  border-radius: 100px;\n  background-color: #fff;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #666;\n  font-weight: 500;\n  cursor: pointer;\n  z-index: 7777;\n  user-select: none;\n  transition: 0.3s ease-in-out;\n  outline: none;\n  border: none;\n\n  svg {\n    width: 20px;\n  }\n\n  @media (max-width: 600px) {\n    width: 42px;\n    height: 42px;\n\n    svg {\n      width: 18px;\n    }\n  }\n"])));
//아이콘
var TopTabIcon = function () { return (_jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, { children: _jsxs("g", __assign({ id: "scroll", transform: "translate(-98 -931)" }, { children: [_jsx("rect", { id: "\uC0AC\uAC01\uD615_8383", "data-name": "\uC0AC\uAC01\uD615 8383", width: "16", height: "16", transform: "translate(98 931)", fill: "none" }), _jsx("g", __assign({ id: "\uADF8\uB8F9_95636", "data-name": "\uADF8\uB8F9 95636", transform: "translate(99 947) rotate(-90)" }, { children: _jsx("g", __assign({ id: "\uADF8\uB8F9_94352", "data-name": "\uADF8\uB8F9 94352", transform: "translate(0 0)" }, { children: _jsx("path", { id: "\uD328\uC2A4_86881", "data-name": "\uD328\uC2A4 86881", d: "M10.448,13.759a1.055,1.055,0,0,1-1.432-.084A.983.983,0,0,1,9,12.326l3.763-4.32H.994A1,1,0,0,1,0,7a.989.989,0,0,1,.3-.7,1.007,1.007,0,0,1,.7-.284H12.7L9.14,1.692A.986.986,0,0,1,9.162.306,1.063,1.063,0,0,1,9.913,0h.005A1.115,1.115,0,0,1,10.7.36l5.03,6.054a.989.989,0,0,1,.008,1.358Z", transform: "translate(0 0.001)", fill: "#333" }) })) }))] })) }))); };
var templateObject_1;
