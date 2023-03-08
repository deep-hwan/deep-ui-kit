"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalSheet;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _react = _interopRequireWildcard(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ModalSheet(props) {
  var children = props.children,
    view = props.view,
    onCancel = props.onCancel,
    title = props.title;
  var ref = (0, _react.useRef)();

  //
  // 외부클릭
  var clickModalOutside = function clickModalOutside(event) {
    var _ref$current;
    if (view && !((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target))) {
      onCancel();
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', clickModalOutside);
    return function () {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [view]);

  //
  // 모달 고정 핸들러
  (0, _react.useEffect)(function () {
    var _ref$current2;
    (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.scrollTo(0, 0);
    if (view) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [view]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(LayerBlur, {
    isActive: view
  }), /*#__PURE__*/_react.default.createElement(Sheet, {
    isActive: view,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(Title, null, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onCancel
  }, /*#__PURE__*/_react.default.createElement(TabSvg, null))), /*#__PURE__*/_react.default.createElement(View, null, children)));
}
var LayerBlur = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 9999;\n  //\n  position: fixed;\n  top: 0;\n  left: 0;\n  //\n  width: 100vw;\n  height: 100vh;\n  //\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  //\n  -webkit-backdrop-filter: blur(6px);\n  /* backdrop-filter: blur(6px); */\n  background-color: rgba(0, 0, 0, 0.35);\n"])), function (_ref) {
  var isActive = _ref.isActive;
  return isActive ? 'flex' : 'none';
});
var Sheet = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  z-index: 99990;\n  //\n  position: fixed;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  //\n  width: 100%;\n  //\n  height: calc(100vh - 60px);\n  //\n  display: flex;\n  flex-direction: column;\n  //\n  background-color: #fff;\n  border-radius: 22px 22px 0 0;\n  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);\n  //\n  transition: 0.25s ease-in-out;\n  opacity: ", ";\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    top: ", ";\n    //\n    height: calc(100vh - 20px);\n  }\n"])), function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive ? '60%' : '100%';
}, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? 1 : 0;
}, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive ? '60%' : '100%';
});
var Title = _styled.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  /* background-color: #333; */\n\n  h1 {\n    font-size: 1.125rem;\n    color: #333;\n  }\n\n  button {\n    position: absolute;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 0.938rem;\n    cursor: pointer;\n    position: absolute;\n    right: 16px;\n    top: 16px;\n\n    svg {\n      width: 26px;\n      fill: #ccc;\n      transition: 0.3s ease-in-out;\n\n      &:hover {\n        fill: #bbb;\n      }\n    }\n  }\n"])));
var View = _styled.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    /* background-color: transparent; */\n  }\n\n  &:-webkit-scrollbar-thumb {\n    background-color: #999;\n    border-radius: 100px;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: #e2e2e2;\n  }\n  &::-webkit-scrollbar-button:start:decrement {\n    width: 0;\n    height: 0;\n    background-color: transparent;\n  }\n  &::-webkit-scrollbar-button:end:increment {\n    width: 0;\n    height: 0;\n    background-color: transparent;\n  }\n"])));
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