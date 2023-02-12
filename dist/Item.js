"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Item(_ref) {
  var children = _ref.children,
    css = _ref.css,
    className = _ref.className,
    key = _ref.key,
    padding = _ref.padding,
    margin = _ref.margin;
  return /*#__PURE__*/_react.default.createElement("li", {
    key: key,
    css: css,
    className: className,
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      listStyle: "none",
      padding: padding,
      margin: margin
    }
  }, children);
}