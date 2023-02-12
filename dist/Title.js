"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Title;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Title(props) {
  var as = props.as,
    children = props.children,
    css = props.css,
    className = props.className,
    fontSize = props.fontSize,
    color = props.color,
    w = props.w;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, as === "h1" && /*#__PURE__*/_react.default.createElement("h1", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "3.375rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children), as === "h2" && /*#__PURE__*/_react.default.createElement("h2", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "3rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children), as === "h3" && /*#__PURE__*/_react.default.createElement("h3", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "2.625em",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children), as === "h4" && /*#__PURE__*/_react.default.createElement("h4", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "2.25rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children), as === "h5" && /*#__PURE__*/_react.default.createElement("h5", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "1.875rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children), as === "h6" && /*#__PURE__*/_react.default.createElement("h6", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "1.75rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children), as === "strong" && /*#__PURE__*/_react.default.createElement("strong", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "1.625rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold"
    },
    className: className
  }, children), !as && /*#__PURE__*/_react.default.createElement("strong", {
    css: css,
    style: {
      fontSize: fontSize ? fontSize : "1.625rem",
      color: color ? color : "#333",
      fontWeight: w ? w : "bold",
      margin: 0
    },
    className: className
  }, children));
}