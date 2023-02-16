"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = Text;
exports.Title = Title;
var _css = require("@emotion/css");
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// 타이틀
function Title(props) {
  var as = props.as,
    children = props.children,
    styles = props.styles,
    fontSize = props.fontSize,
    color = props.color,
    w = props.w;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, as === 'h1' && /*#__PURE__*/_react.default.createElement("h1", {
    className: (0, _css.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '3.375rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), as === 'h2' && /*#__PURE__*/_react.default.createElement("h2", {
    className: (0, _css.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '3rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), as === 'h3' && /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _css.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '2.625rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), as === 'h4' && /*#__PURE__*/_react.default.createElement("h4", {
    className: (0, _css.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '2.25rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), as === 'h5' && /*#__PURE__*/_react.default.createElement("h5", {
    className: (0, _css.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '1.875rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), as === 'h6' && /*#__PURE__*/_react.default.createElement("h6", {
    className: (0, _css.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '1.75rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), as === 'strong' && /*#__PURE__*/_react.default.createElement("strong", {
    className: (0, _css.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '1.625rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children), !as && /*#__PURE__*/_react.default.createElement("strong", {
    className: (0, _css.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '1.625rem', color ? color : '#333', w ? w : 'bold', styles)
  }, children));
}

// Text
function Text(props) {
  var as = props.as,
    children = props.children,
    fontSize = props.fontSize,
    color = props.color,
    w = props.w,
    styles = props.styles;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, as === 'p' && /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _css.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            white-space: pre-line;\n            ", "\n          "])), fontSize ? fontSize : '0.938rem', color ? color : '#333', w ? w : 'normal', styles)
  }, children), as === 'span' && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _css.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            white-space: pre-line;\n            ", "\n          "])), fontSize ? fontSize : '0.813rem', color ? color : '#333', w ? w : 'normal', styles)
  }, children), !as && /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _css.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            margin: 0;\n            font-size: ", ";\n            color: ", ";\n            font-weight: ", ";\n            transition: 0.3s ease-in-out;\n            ", "\n          "])), fontSize ? fontSize : '0.938rem', color ? color : '#333', w ? w : 'normal', styles)
  }, children));
}