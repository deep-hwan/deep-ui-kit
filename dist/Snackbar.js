"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AlartSnackbar;
var _css = require("@emotion/css");
var _react = _interopRequireWildcard(require("react"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function AlartSnackbar(_ref) {
  var children = _ref.children,
    isView = _ref.isView,
    onCancel = _ref.onCancel;
  var ref = (0, _react.useRef)();
  var clickModalOutside = function clickModalOutside(event) {
    var _ref$current;
    if (isView && !((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target))) {
      onCancel();
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', clickModalOutside);
    return function () {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [isView]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: (0, _css.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        z-index: 99999;\n        //\n        position: fixed;\n        top: ", ";\n        left: 50%;\n        transform: translateX(-50%);\n        //\n        width: 100%;\n        max-width: 500px;\n        //\n        display: flex;\n        flex-direction: column;\n        padding: 30px 20px;\n        //\n        opacity: ", ";\n        //\n        transition: 0.3s ease-in-out;\n        overflow-y: auto;\n\n        &::-webkit-scrollbar {\n          display: none;\n        }\n\n        @media (max-width: 600px) {\n          top: auto;\n          bottom: ", ";\n        }\n      "])), isView ? '0' : '-100%', isView ? 1 : 0, isView ? '0' : '-100%')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          position: relative;\n          width: 100%;\n          background-color: #fff;\n          border-radius: 14px;\n          box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);\n          padding: 16px 16px;\n          display: flex;\n          flex-direction: column;\n          row-gap: 4px;\n        "])))
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _css.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            z-index: 999;\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            width: 20px;\n            height: 20px;\n            display: flex;\n            justify-content: center;\n            cursor: pointer;\n            align-items: center;\n            user-select: none;\n            transition: 0.3s ease-in-out;\n            border: none;\n            cursor: pointer;\n            background-color: transparent;\n\n            svg {\n              width: 100%;\n              height: 100%;\n              fill: #e0e0e0;\n            }\n          "]))),
    type: "button",
    onClick: function onClick() {
      return onCancel();
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
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
  })))), children));
}