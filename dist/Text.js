"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Text;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Text(props) {
  var as = props.as,
    children = props.children,
    css = props.css,
    className = props.className,
    fontSize = props.fontSize,
    color = props.color,
    w = props.w;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, as === "p" && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: fontSize ? fontSize : "0.938rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "normal",
      margin: 0
    },
    css: css,
    className: className
  }, children), as === "span" && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: fontSize ? fontSize : "0.813rem",
      color: color ? color : "#797979",
      fontWeight: w ? w : "normal"
    },
    css: css,
    className: className
  }, children), !as && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: fontSize ? fontSize : "0.938rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "normal",
      margin: 0
    },
    css: css,
    className: className
  }, children));
}