"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackTab = BackTab;
exports.CancelTab = CancelTab;
var _css = require("@emotion/css");
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// backTab
function BackTab(props) {
  var styles = props.styles,
    onClick = props.onClick,
    size = props.size,
    color = props.color,
    padding = props.padding;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    type: "button",
    className: (0, _css.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        ", "\n        transition: 0.3s ease-in-out;\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n        padding: ", ";\n\n        &:hover {\n          opacity: 0.6;\n        }\n      "])), styles, padding)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          width: ", ";\n          height: ", ";\n\n          path {\n            fill: #333;\n          }\n        "])), size ? size : '20px', size ? size : '20px')
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22",
    css: (0, _css.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            width: 100%;\n            height: 100%;\n          "])))
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "back-icon",
    transform: "translate(-216 -86)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    id: "\uC0AC\uAC01\uD615_8376",
    "data-name": "\uC0AC\uAC01\uD615 8376",
    transform: "translate(216 86)",
    fill: "none",
    opacity: "0"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "\uD328\uC2A4_32763",
    "data-name": "\uD328\uC2A4 32763",
    d: "M21.558,2.406l-9.408,8.2a1.445,1.445,0,0,1-1.955.024l-9.749-8A1.429,1.429,0,0,1,0,1.614a1.4,1.4,0,0,1,.427-1A1.428,1.428,0,0,1,1.416.206h.019a1.416,1.416,0,0,1,.953.356l8.739,7.117,8.454-7.3A1.463,1.463,0,0,1,21.56.392,1.4,1.4,0,0,1,22,1.4a1.394,1.394,0,0,1-.442,1.006",
    transform: "translate(232 86) rotate(90)",
    fill: color ? color : 'current'
  })))));
}

// CancelTab
function CancelTab(props) {
  var styles = props.styles,
    onClick = props.onClick,
    size = props.size,
    color = props.color,
    padding = props.padding;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    type: "button",
    className: (0, _css.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        ", "\n        transition: 0.3s ease-in-out;\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n        padding: ", ";\n\n        &:hover {\n          opacity: 0.6;\n        }\n      "])), styles, padding)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          width: ", ";\n          height: ", ";\n\n          path {\n            fill: #444;\n          }\n        "])), size ? size : '20px', size ? size : '20px')
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16.495 16.509"
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "cancel-tab",
    d: "M16.141,14.286l-.183.171v0l.177-.177L10.081,8.239l6-6A1.332,1.332,0,0,0,16.078.369a1.342,1.342,0,0,0-1.862.013l-5.991,6-5.993-6A1.338,1.338,0,0,0,.366.4a1.331,1.331,0,0,0,.02,1.85L6.379,8.237l-6,6.009A1.33,1.33,0,0,0,.385,16.11a1.354,1.354,0,0,0,1.858-.02l5.991-5.981,5.99,5.98a1.318,1.318,0,0,0,.913.415c.036,0,.071.005.107.005a1.159,1.159,0,0,0,.845-.364,1.328,1.328,0,0,0,.052-1.859",
    transform: "translate(0 0)",
    className: (0, _css.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n              transition: 0.3s ease-in-out;\n            "])))
  }))));
}