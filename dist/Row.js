"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Row;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Row(_ref) {
  var children = _ref.children,
    className = _ref.className,
    css = _ref.css,
    gap = _ref.gap,
    start = _ref.start,
    end = _ref.end,
    padding = _ref.padding,
    margin = _ref.margin;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    css: css,
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: start && "start" || end && "end" || "center",
      columnGap: gap,
      padding: padding,
      margin: margin
    }
  }, children);
}