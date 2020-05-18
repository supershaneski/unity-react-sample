webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UnityLoader.js":
/*!***********************************!*\
  !*** ./components/UnityLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__[\"default\"] = (function (containerElement) {\n  //console.log(containerElement.offsetWidth, containerElement.offsetHeight);\n  (function (window) {\n    'use strict';\n\n    function unityPlugin() {\n      var tdx = {};\n      var MAX_INDEX = 100000;\n      var retval = Array(MAX_INDEX + 1).fill();\n      var retindex = 0;\n\n      function getRetIndex() {\n        return retindex >= MAX_INDEX ? 0 : retindex++;\n      }\n\n      function getRetValue(index) {\n        var value = retval[index];\n        delete retval[index];\n        return value;\n      }\n\n      function sendMessage(func_name, param) {\n        if (typeof gameInstance === \"undefined\") {\n          console.log(\"Error : \" + func_name);\n          return;\n        }\n\n        console.log(\"Send Message : \" + func_name);\n        gameInstance.SendMessage(\"SceneManager\", func_name, param);\n        return true;\n      }\n\n      function makeParam() {\n        var param = {\n          index: arguments[0],\n          args: null\n        };\n\n        if (arguments.length > 1 && arguments[1] !== null) {\n          param.args = arguments[1];\n        }\n\n        return JSON.stringify(param);\n      } // Utility\n\n\n      tdx.SetRetValue = function (index, value) {\n        retval[index] = value;\n      }; // Events\n\n\n      tdx.OnLoad = function (callback) {\n        return callback;\n      };\n\n      tdx._OnLoad = function () {\n        this.OnLoad();\n      };\n\n      tdx.OnRotationPlay = function (callback) {\n        return callback;\n      };\n\n      tdx._OnRotationPlay = function () {\n        this.OnRotationPlay();\n      };\n\n      tdx.OnRotationStop = function (callback) {\n        return callback;\n      };\n\n      tdx._OnRotationStop = function () {\n        this.OnRotationStop();\n      };\n\n      tdx.OnChangeColor = function (callback) {\n        return callback;\n      };\n\n      tdx._OnChangeColor = function (attr) {\n        this.OnChangeColor(attr);\n      }; // Methods\n\n\n      tdx.GetTankProperty = function () {\n        var index = getRetIndex();\n        var propName = arguments[0];\n        sendMessage(\"GetTankProperty\", makeParam(index, propName));\n        return getRetValue(index);\n      };\n\n      tdx.GetTankColor = function () {\n        var index = getRetIndex();\n        sendMessage(\"GetTankColor\", makeParam(index));\n        return getRetValue(index);\n      };\n\n      tdx.SetTankColor = function () {\n        var color = arguments[0];\n        sendMessage(\"SetTankColor\", makeParam(-1, color));\n      };\n\n      tdx.GetTitle = function () {\n        var index = getRetIndex();\n        sendMessage(\"GetTitle\", makeParam(index));\n        return getRetValue(index);\n      };\n\n      tdx.SetTitle = function () {\n        var title = arguments[0];\n        sendMessage(\"SetTitle\", makeParam(-1, title));\n      };\n\n      tdx.GetRank = function () {\n        var index = getRetIndex();\n        sendMessage(\"GetRank\", makeParam(index));\n        return getRetValue(index);\n      };\n\n      tdx.SetRank = function () {\n        var rank = arguments[0];\n        sendMessage(\"SetRank\", makeParam(-1, rank));\n      };\n\n      tdx.GetPower = function () {\n        var index = getRetIndex();\n        sendMessage(\"GetPower\", makeParam(index));\n        return getRetValue(index);\n      };\n\n      tdx.SetPower = function () {\n        var power = arguments[0];\n        sendMessage(\"SetPower\", makeParam(-1, power));\n      };\n\n      tdx.GetArmor = function () {\n        var index = getRetIndex();\n        sendMessage(\"GetArmor\", makeParam(index));\n        return getRetValue(index);\n      };\n\n      tdx.SetArmor = function () {\n        var armor = arguments[0];\n        sendMessage(\"SetArmor\", makeParam(-1, armor));\n      };\n\n      tdx.GetSpeed = function () {\n        var index = getRetIndex();\n        sendMessage(\"GetSpeed\", makeParam(index));\n        return getRetValue(index);\n      };\n\n      tdx.SetSpeed = function () {\n        var speed = arguments[0];\n        sendMessage(\"SetSpeed\", makeParam(-1, speed));\n      };\n\n      tdx.Play = function () {\n        sendMessage(\"Play\", makeParam(-1, arguments));\n      };\n\n      tdx.Stop = function () {\n        sendMessage(\"Stop\", makeParam(-1, arguments));\n      };\n\n      Object.defineProperty(tdx.SetRetValue, \"name\", {\n        value: \"SetRetValue\"\n      });\n      return tdx;\n    }\n    /*if(typeof(window.TdxPlayer) === 'undefined'){\n        window.TdxPlayer = unityPlugin();\n    }*/\n\n\n    if (typeof window.InterJSPlugin === 'undefined') {\n      window.InterJSPlugin = unityPlugin();\n    } //var gameInstance = UnityLoader.instantiate(\"unity-container\", \"/data/Build.json\");\n\n  })(window);\n\n  var gameInstance = UnityLoader.instantiate(\"unity-container\", \"/data/Build.json\");\n\n  function getPluginContext() {\n    return window.InterJSPlugin;\n  }\n\n  return {\n    getPluginContext: getPluginContext\n  };\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VuaXR5TG9hZGVyLmpzPzU3ZmUiXSwibmFtZXMiOlsiY29udGFpbmVyRWxlbWVudCIsIndpbmRvdyIsInVuaXR5UGx1Z2luIiwidGR4IiwiTUFYX0lOREVYIiwicmV0dmFsIiwiQXJyYXkiLCJmaWxsIiwicmV0aW5kZXgiLCJnZXRSZXRJbmRleCIsImdldFJldFZhbHVlIiwiaW5kZXgiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwiZnVuY19uYW1lIiwicGFyYW0iLCJnYW1lSW5zdGFuY2UiLCJjb25zb2xlIiwibG9nIiwiU2VuZE1lc3NhZ2UiLCJtYWtlUGFyYW0iLCJhcmd1bWVudHMiLCJhcmdzIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNldFJldFZhbHVlIiwiT25Mb2FkIiwiY2FsbGJhY2siLCJfT25Mb2FkIiwiT25Sb3RhdGlvblBsYXkiLCJfT25Sb3RhdGlvblBsYXkiLCJPblJvdGF0aW9uU3RvcCIsIl9PblJvdGF0aW9uU3RvcCIsIk9uQ2hhbmdlQ29sb3IiLCJfT25DaGFuZ2VDb2xvciIsImF0dHIiLCJHZXRUYW5rUHJvcGVydHkiLCJwcm9wTmFtZSIsIkdldFRhbmtDb2xvciIsIlNldFRhbmtDb2xvciIsImNvbG9yIiwiR2V0VGl0bGUiLCJTZXRUaXRsZSIsInRpdGxlIiwiR2V0UmFuayIsIlNldFJhbmsiLCJyYW5rIiwiR2V0UG93ZXIiLCJTZXRQb3dlciIsInBvd2VyIiwiR2V0QXJtb3IiLCJTZXRBcm1vciIsImFybW9yIiwiR2V0U3BlZWQiLCJTZXRTcGVlZCIsInNwZWVkIiwiUGxheSIsIlN0b3AiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkludGVySlNQbHVnaW4iLCJVbml0eUxvYWRlciIsImluc3RhbnRpYXRlIiwiZ2V0UGx1Z2luQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSw4Q0FBZSx5RUFBQUEsZ0JBQWdCLEVBQUk7QUFFL0I7QUFFQSxHQUFDLFVBQVNDLE1B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RCxTQUFPO0FBQ0hHLG9CQUFnQixFQUFoQkE7QUFERyxHQUFQO0FBR0gsQ0ExTkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VuaXR5TG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY29udGFpbmVyRWxlbWVudCA9PiB7XG4gICAgXG4gICAgLy9jb25zb2xlLmxvZyhjb250YWluZXJFbGVtZW50Lm9mZnNldFdpZHRoLCBjb250YWluZXJFbGVtZW50Lm9mZnNldEhlaWdodCk7XG5cbiAgICAoZnVuY3Rpb24od2luZG93KXtcbiAgICBcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVuaXR5UGx1Z2luKCkge1xuXG4gICAgICAgICAgICB2YXIgdGR4ID0ge307XG5cbiAgICAgICAgICAgIHZhciBNQVhfSU5ERVggPSAxMDAwMDA7XG5cdFx0ICAgIHZhciByZXR2YWwgPSBBcnJheShNQVhfSU5ERVggKyAxKS5maWxsKCk7XG4gICAgICAgICAgICB2YXIgcmV0aW5kZXggPSAwO1xuICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJldEluZGV4KClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJldGluZGV4ID49IE1BWF9JTkRFWCk/MDpyZXRpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmV0VmFsdWUoaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmV0dmFsW2luZGV4XTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmV0dmFsW2luZGV4XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShmdW5jX25hbWUsIHBhcmFtKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZ2FtZUluc3RhbmNlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgOiBcIiArIGZ1bmNfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmQgTWVzc2FnZSA6IFwiICsgZnVuY19uYW1lKTtcblxuICAgICAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5TZW5kTWVzc2FnZShcIlNjZW5lTWFuYWdlclwiLCBmdW5jX25hbWUsIHBhcmFtKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBtYWtlUGFyYW0oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogbnVsbFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0uYXJncyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXRpbGl0eVxuICAgICAgICAgICAgdGR4LlNldFJldFZhbHVlID0gZnVuY3Rpb24oaW5kZXgsIHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHZhbFtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEV2ZW50c1xuICAgICAgICAgICAgdGR4Lk9uTG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0ZHguX09uTG9hZCA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9uTG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4Lk9uUm90YXRpb25QbGF5ID0gZnVuY3Rpb24oY2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRkeC5fT25Sb3RhdGlvblBsYXkgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5PblJvdGF0aW9uUGxheSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4Lk9uUm90YXRpb25TdG9wID0gZnVuY3Rpb24oY2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRkeC5fT25Sb3RhdGlvblN0b3AgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5PblJvdGF0aW9uU3RvcCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4Lk9uQ2hhbmdlQ29sb3IgPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4Ll9PbkNoYW5nZUNvbG9yID0gZnVuY3Rpb24oYXR0cilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9uQ2hhbmdlQ29sb3IoYXR0cik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNZXRob2RzXG4gICAgICAgICAgICB0ZHguR2V0VGFua1Byb3BlcnR5ID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldFJldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiR2V0VGFua1Byb3BlcnR5XCIsIG1ha2VQYXJhbShpbmRleCwgcHJvcE5hbWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmV0VmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4LkdldFRhbmtDb2xvciA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRSZXRJbmRleCgpO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiR2V0VGFua0NvbG9yXCIsIG1ha2VQYXJhbShpbmRleCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXRWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4LlNldFRhbmtDb2xvciA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJTZXRUYW5rQ29sb3JcIiwgbWFrZVBhcmFtKC0xLCBjb2xvcikpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGR4LkdldFRpdGxlID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldFJldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJHZXRUaXRsZVwiLCBtYWtlUGFyYW0oaW5kZXgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmV0VmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRkeC5TZXRUaXRsZSA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIlNldFRpdGxlXCIsIG1ha2VQYXJhbSgtMSwgdGl0bGUpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRkeC5HZXRSYW5rID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldFJldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJHZXRSYW5rXCIsIG1ha2VQYXJhbShpbmRleCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXRWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4LlNldFJhbmsgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuayA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIlNldFJhbmtcIiwgbWFrZVBhcmFtKC0xLCByYW5rKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguR2V0UG93ZXIgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0UmV0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIkdldFBvd2VyXCIsIG1ha2VQYXJhbShpbmRleCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXRWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4LlNldFBvd2VyID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBwb3dlciA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIlNldFBvd2VyXCIsIG1ha2VQYXJhbSgtMSwgcG93ZXIpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRkeC5HZXRBcm1vciA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRSZXRJbmRleCgpO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiR2V0QXJtb3JcIiwgbWFrZVBhcmFtKGluZGV4KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFJldFZhbHVlKGluZGV4KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0ZHguU2V0QXJtb3IgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGFybW9yID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiU2V0QXJtb3JcIiwgbWFrZVBhcmFtKC0xLCBhcm1vcikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4LkdldFNwZWVkID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldFJldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJHZXRTcGVlZFwiLCBtYWtlUGFyYW0oaW5kZXgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmV0VmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRkeC5TZXRTcGVlZCA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BlZWQgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJTZXRTcGVlZFwiLCBtYWtlUGFyYW0oLTEsIHNwZWVkKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguUGxheSA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIlBsYXlcIiwgbWFrZVBhcmFtKC0xLCBhcmd1bWVudHMpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRkeC5TdG9wID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiU3RvcFwiLCBtYWtlUGFyYW0oLTEsIGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRkeC5TZXRSZXRWYWx1ZSwgXCJuYW1lXCIsIHsgdmFsdWU6IFwiU2V0UmV0VmFsdWVcIiB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRkeDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLyppZih0eXBlb2Yod2luZG93LlRkeFBsYXllcikgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgIHdpbmRvdy5UZHhQbGF5ZXIgPSB1bml0eVBsdWdpbigpO1xuICAgICAgICB9Ki9cbiAgICAgICAgaWYodHlwZW9mKHdpbmRvdy5JbnRlckpTUGx1Z2luKSA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgd2luZG93LkludGVySlNQbHVnaW4gPSB1bml0eVBsdWdpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy92YXIgZ2FtZUluc3RhbmNlID0gVW5pdHlMb2FkZXIuaW5zdGFudGlhdGUoXCJ1bml0eS1jb250YWluZXJcIiwgXCIvZGF0YS9CdWlsZC5qc29uXCIpO1xuICAgIFxuICAgIH0pKHdpbmRvdyk7XG5cblxuICAgIHZhciBnYW1lSW5zdGFuY2UgPSBVbml0eUxvYWRlci5pbnN0YW50aWF0ZShcInVuaXR5LWNvbnRhaW5lclwiLCBcIi9kYXRhL0J1aWxkLmpzb25cIik7XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0UGx1Z2luQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5JbnRlckpTUGx1Z2luO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBsdWdpbkNvbnRleHQsXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UnityLoader.js\n");

/***/ })

})