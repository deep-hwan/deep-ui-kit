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
import { jsx as _jsx } from "react/jsx-runtime";
import { css } from "@emotion/css";
export function Section(props) {
    var styles = props.styles, children = props.children;
    return (_jsx("section", __assign({ className: css(__assign(__assign({}, styles), { position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", transition: "0.3s ease-in-out" })) }, { children: children })));
}
export function Row(props) {
    var styles = props.styles, children = props.children, gap = props.gap, start = props.start, end = props.end, padding = props.padding, margin = props.margin;
    return (_jsx("div", __assign({ className: css(__assign(__assign({}, styles), { width: "100%", display: "flex", flexDirection: "row", alignItems: start ? "start" : end ? "end" : "center", columnGap: gap, padding: padding, margin: margin, transition: "0.3s ease-in-out" })) }, { children: children })));
}
export function Column(props) {
    var styles = props.styles, children = props.children, gap = props.gap, center = props.center, end = props.end, padding = props.padding, margin = props.margin;
    return (_jsx("div", __assign({ className: css(__assign(__assign({}, styles), { width: "100%", display: "flex", flexDirection: "column", alignItems: center ? "center" : end ? "end" : "start", columnGap: gap, padding: padding, margin: margin, transition: "0.3s ease-in-out" })) }, { children: children })));
}
export function Box(props) {
    var styles = props.styles, children = props.children, gap = props.gap, center = props.center, end = props.end, padding = props.padding, margin = props.margin, maxWidth = props.maxWidth;
    return (_jsx("div", __assign({ className: css(__assign(__assign({}, styles), { width: "100%", maxWidth: maxWidth, display: "flex", flexDirection: "column", alignItems: center ? "center" : end ? "end" : "start", columnGap: gap, padding: padding, margin: margin, transition: "0.3s ease-in-out" })) }, { children: children })));
}
export function SizedBox(props) {
    var styles = props.styles, children = props.children, width = props.width, height = props.height;
    return (_jsx("div", __assign({ className: css(__assign(__assign({}, styles), { height: width ? "100%" : height, width: height ? "100%" : width })) }, { children: children })));
}
