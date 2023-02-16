"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.Tab = Tab;
var _css = require("@emotion/css");
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//button
function Button(props) {
  var styles = props.styles,
    children = props.children,
    type = props.type,
    onClick = props.onClick,
    color = props.color,
    palette = props.palette;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    type: type ? type : 'button',
    className: (0, _css.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        ", "\n        transition: 0.3s ease-in-out;\n        border: 0;\n        background-color: ", ";\n        color: ", ";\n        width: 100%;\n        height: 3.467em;\n        border-radius: 20em;\n        font-size: 0.938em;\n        text-align: center;\n        cursor: pointer;\n\n        &:hover {\n          opacity: 0.92;\n        }\n      "])), styles, palette ? palette : '#333', color ? color : '#fff')
  }, children);
}

//tab
function Tab(props) {
  var styles = props.styles,
    children = props.children,
    type = props.type,
    onClick = props.onClick,
    color = props.color,
    palette = props.palette,
    border = props.border;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    type: type ? type : 'button',
    className: (0, _css.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        ", "\n        transition: 0.3s ease-in-out;\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n        padding: 0.45em 0.625em;\n        border-radius: 6px;\n        font-size: 0.875rem;\n        color: #666;\n        cursor: pointer;\n\n        &:hover {\n          background-color: #f5f5f5;\n        }\n      "])), styles, border ? border : '#ccc', palette ? palette : '#fff', color ? color : '#555')
  }, children);
}