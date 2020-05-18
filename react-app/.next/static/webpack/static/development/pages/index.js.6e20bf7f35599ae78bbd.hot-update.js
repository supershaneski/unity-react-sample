webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PropertyItem.js":
/*!************************************!*\
  !*** ./components/PropertyItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PropertyItem; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/shane/Documents/projects/github/unity-react-sample/react-app/components/PropertyItem.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction PropertyItem(_ref) {\n  _s();\n\n  var _this = this;\n\n  var label = _ref.label,\n      items = _ref.items,\n      value = _ref.value;\n  console.log(\"value\", value);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(value),\n      itemValue = _useState[0],\n      setItemValue = _useState[1];\n\n  var handleSelect = function handleSelect(e) {\n    setItemValue(e.target.value);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-2591677603\" + \" \" + \"property-item-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    className: \"jsx-2591677603\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, label), __jsx(\"select\", {\n    onChange: handleSelect,\n    value: itemValue,\n    className: \"jsx-2591677603\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, items.map(function (item, index) {\n    return __jsx(\"option\", {\n      key: index,\n      value: item,\n      className: \"jsx-2591677603\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 33\n      }\n    }, item);\n  })), __jsx(\"button\", {\n    className: \"jsx-2591677603\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"Update\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2591677603\",\n    __self: this\n  }, \".property-item-container.jsx-2591677603{background-color:white;padding:2px;margin-bottom:2px;display:grid;grid-template-columns:45px auto 60px;grid-gap:3px;}label.jsx-2591677603{font-family:arial,sans-serif;font-size:0.8em;}select.jsx-2591677603{outline:none;}button.jsx-2591677603{outline:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuZS9Eb2N1bWVudHMvcHJvamVjdHMvZ2l0aHViL3VuaXR5LXJlYWN0LXNhbXBsZS9yZWFjdC1hcHAvY29tcG9uZW50cy9Qcm9wZXJ0eUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJhLEFBR3dDLEFBUU8sQUFJakIsQUFHQSxhQUZqQixBQUdBLFVBZmdCLE1BUUksTUFQRSxVQVF0QixRQVBpQixhQUN3QixxQ0FDeEIsYUFDakIiLCJmaWxlIjoiL1VzZXJzL3NoYW5lL0RvY3VtZW50cy9wcm9qZWN0cy9naXRodWIvdW5pdHktcmVhY3Qtc2FtcGxlL3JlYWN0LWFwcC9jb21wb25lbnRzL1Byb3BlcnR5SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BlcnR5SXRlbSh7IGxhYmVsLCBpdGVtcywgdmFsdWUgfSkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgdmFsdWUpO1xuXG4gICAgY29uc3QgW2l0ZW1WYWx1ZSwgc2V0SXRlbVZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xuICAgICAgICBzZXRJdGVtVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IGxhYmVsIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0gdmFsdWU9e2l0ZW1WYWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAucHJvcGVydHktaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1cHggYXV0byA2MHB4O1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdfQ== */\\n/*@ sourceURL=/Users/shane/Documents/projects/github/unity-react-sample/react-app/components/PropertyItem.js */\"));\n}\n\n_s(PropertyItem, \"PEeRrD7YTaJu4jui5WqiSnjRQrI=\");\n\n_c = PropertyItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"PropertyItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb3BlcnR5SXRlbS5qcz9mZjdiIl0sIm5hbWVzIjpbIlByb3BlcnR5SXRlbSIsImxhYmVsIiwiaXRlbXMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIml0ZW1WYWx1ZSIsInNldEl0ZW1WYWx1ZSIsImhhbmRsZVNlbGVjdCIsImUiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxZQUFULE9BQStDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFMURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCOztBQUYwRCxrQkFJeEJHLHNEQUFRLENBQUNILEtBQUQsQ0FKZ0I7QUFBQSxNQUluREksU0FKbUQ7QUFBQSxNQUl4Q0MsWUFKd0M7O0FBSzFELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkYsZ0JBQVksQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNSLEtBQVYsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsU0FDSSxtRUFDSTtBQUFBLHdDQUFlLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0YsS0FBVCxDQURKLEVBRUk7QUFBUSxZQUFRLEVBQUVRLFlBQWxCO0FBQWdDLFNBQUssRUFBRUYsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFMLEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN2QixXQUNJO0FBQVEsU0FBRyxFQUFFQSxLQUFiO0FBQW9CLFdBQUssRUFBRUQsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDQSxJQUFsQyxDQURKO0FBR0gsR0FKRCxDQUZSLENBRkosRUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixDQURKO0FBQUE7QUFBQTtBQUFBLG01RkFESjtBQXVDSDs7R0FoRHVCYixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9wZXJ0eUl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eUl0ZW0oeyBsYWJlbCwgaXRlbXMsIHZhbHVlIH0pIHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHZhbHVlKTtcblxuICAgIGNvbnN0IFtpdGVtVmFsdWUsIHNldEl0ZW1WYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgc2V0SXRlbVZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBsYWJlbCB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9IHZhbHVlPXtpdGVtVmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxidXR0b24+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgLnByb3BlcnR5LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NXB4IGF1dG8gNjBweDtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PropertyItem.js\n");

/***/ })

})