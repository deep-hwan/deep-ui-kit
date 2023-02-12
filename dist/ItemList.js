"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItemList;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ItemList(_ref) {
  var children = _ref.children,
    css = _ref.css,
    className = _ref.className,
    gap = _ref.gap,
    row = _ref.row,
    padding = _ref.padding,
    margin = _ref.margin;
  return /*#__PURE__*/_react.default.createElement("ul", {
    css: css,
    className: className,
    style: {
      width: "100%",
      display: "flex",
      flexDirection: row ? "row" : "column",
      rowGap: gap,
      columnGap: row && gap,
      padding: padding ? padding : 0,
      margin: margin
    }
  }, children);
}