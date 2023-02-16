"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = Box;
exports.Column = Column;
exports.Padding = Padding;
exports.Row = Row;
exports.Section = Section;
exports.SizedBox = SizedBox;
var _css = require("@emotion/css");
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//Section
function Section(props) {
  var styles = props.styles,
    children = props.children;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: (0, _css.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        ", "\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        transition: 0.3s ease-in-out;\n      "])), styles)
  }, children);
}

//row
function Row(props) {
  var styles = props.styles,
    children = props.children,
    gap = props.gap,
    start = props.start,
    end = props.end,
    padding = props.padding,
    margin = props.margin;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        ", "\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: ", ";\n        column-gap: ", ";\n        padding: ", ";\n        margin: ", ";\n        transition: 0.3s ease-in-out;\n      "])), styles, start && 'start' || end && 'end' || 'center', gap, padding, margin)
  }, children);
}

//column
function Column(props) {
  var styles = props.styles,
    children = props.children,
    gap = props.gap,
    center = props.center,
    end = props.end,
    padding = props.padding,
    margin = props.margin;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        ", "\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: ", ";\n        column-gap: ", ";\n        padding: ", ";\n        margin: ", ";\n        transition: 0.3s ease-in-out;\n      "])), styles, center && 'center' || end && 'end' || 'start', gap, padding, margin)
  }, children);
}

//Box
function Box(props) {
  var styles = props.styles,
    children = props.children,
    gap = props.gap,
    center = props.center,
    end = props.end,
    padding = props.padding,
    margin = props.margin,
    maxWidth = props.maxWidth;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        ", "\n        width: 100%;\n        max-width: ", ";\n        display: flex;\n        flex-direction: column;\n        align-items: ", ";\n        column-gap: ", ";\n        padding: ", ";\n        margin: ", ";\n        transition: 0.3s ease-in-out;\n      "])), styles, maxWidth, center && 'center' || end && 'end' || 'start', gap, padding, margin)
  }, children);
}

//Padding
function Padding(props) {
  var styles = props.styles,
    children = props.children,
    R = props.R,
    L = props.L,
    T = props.T,
    B = props.B,
    vertical = props.vertical,
    horizontal = props.horizontal,
    marginLeft = props.marginLeft,
    marginRight = props.marginRight,
    marginTop = props.marginTop,
    marginBottom = props.marginBottom;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        ", "\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding-left: ", ";\n        padding-right: ", ";\n        padding-top: ", ";\n        padding-bottom: ", ";\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n\n        transition: 0.3s ease-in-out;\n      "])), styles, L || horizontal, R || horizontal, T || vertical, B || vertical, marginLeft, marginRight, marginTop, marginBottom)
  }, children);
}

//Padding
function SizedBox(props) {
  var styles = props.styles,
    children = props.children,
    width = props.width,
    height = props.height;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        ", "\n        height: ", ";\n        width: ", ";\n      "])), styles, width && '100%' || height, height && '100%' || width)
  }, children);
}