"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dialog;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _react = _interopRequireWildcard(require("react"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function Dialog(props) {
  var children = props.children,
    view = props.view,
    onCancel = props.onCancel,
    title = props.title;
  var ref = (0, _react.useRef)();
  var clickModalOutside = function clickModalOutside(event) {
    var _ref$current;
    if (view && !((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target))) {
      onCancel();
    }
  };
  (0, _react.useEffect)(function () {
    if (view) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    document.addEventListener('mousedown', clickModalOutside);
    return function () {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [view]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(LayerBlur, {
    isActive: view
  }), /*#__PURE__*/_react.default.createElement(DialogView, {
    isActive: view,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(View, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onCancel
  }, /*#__PURE__*/_react.default.createElement(TabSvg, null)), children)));
}
var LayerBlur = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 9999;\n  //\n  position: fixed;\n  top: 0;\n  left: 0;\n  //\n  width: 100vw;\n  height: 100vh;\n  //\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n\n  /* backdrop-filter: blur(6px); */\n  background-color: rgba(0, 0, 0, 0.35);\n"])), function (_ref) {
  var isActive = _ref.isActive;
  return isActive ? 'flex' : 'none';
});
var DialogView = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  z-index: 99999;\n  //\n  position: fixed;\n  top: ", ";\n  left: 50%;\n  transform: ", ";\n  //\n\n  //\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  //\n  padding: 20px;\n  //\n  opacity: ", ";\n  //\n  transition: 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive ? '48%' : '100%';
}, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? 'translate(-50%, -50%)' : 'translate(-50%, 0)';
}, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive ? 1 : 0;
});
var View = _styled.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n  min-height: 300px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);\n\n  button {\n    position: absolute;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 0.938rem;\n    cursor: pointer;\n    position: absolute;\n    right: 16px;\n    top: 16px;\n\n    svg {\n      width: 26px;\n      fill: #ccc;\n      transition: 0.3s ease-in-out;\n\n      &:hover {\n        fill: #bbb;\n      }\n    }\n  }\n"])));
var TabSvg = function TabSvg() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 25"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "\uADF8\uB8F9_96430",
    "data-name": "\uADF8\uB8F9 96430",
    transform: "translate(-1139 -96)"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    id: "\uD0C0\uC6D0_1270",
    "data-name": "\uD0C0\uC6D0 1270",
    cx: "12.5",
    cy: "12.5",
    r: "12.5",
    transform: "translate(1139 96)",
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "xBtn",
    d: "M25.481,7.8a12.5,12.5,0,1,0,0,17.677,12.5,12.5,0,0,0,0-17.677m-6.32,12.824-2.519-2.519-2.52,2.52a1.038,1.038,0,0,1-1.467-1.467l2.52-2.52L12.66,14.126a1.038,1.038,0,0,1,1.467-1.467l2.515,2.516,2.515-2.515a1.035,1.035,0,0,1,1.464,1.464l-2.515,2.515,2.52,2.519-.221.221.221-.221a1.038,1.038,0,0,1-1.467,1.467",
    transform: "translate(1134.858 91.858)",
    fill: "current"
  })));
};