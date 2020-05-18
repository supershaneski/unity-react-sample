module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/EventItem.js":
/*!*********************************!*\
  !*** ./components/EventItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/shane/Documents/projects/github/unity-react-sample/react-app/components/EventItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function EventItem({
  text,
  color
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["899739169", [color]]]) + " " + "event-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "899739169",
    dynamic: [color],
    __self: this
  }, `.event-item.__jsx-style-dynamic-selector{background-color:${color};display:inline-block;font-size:11px;padding:5px 10px;border-radius:5px;margin:0px 5px 5px 0px;box-shadow:0px 0px 3px #444;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuZS9Eb2N1bWVudHMvcHJvamVjdHMvZ2l0aHViL3VuaXR5LXJlYWN0LXNhbXBsZS9yZWFjdC1hcHAvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWEsQUFHK0QsOENBQ3pCLHFCQUNOLGVBQ0UsaUJBQ0Msa0JBQ0ssdUJBQ0ssNEJBQ2hDIiwiZmlsZSI6Ii9Vc2Vycy9zaGFuZS9Eb2N1bWVudHMvcHJvamVjdHMvZ2l0aHViL3VuaXR5LXJlYWN0LXNhbXBsZS9yZWFjdC1hcHAvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRJdGVtKHsgdGV4dCwgY29sb3IgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5ldmVudC1pdGVtIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCA1cHggNXB4IDBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjNDQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuRXZlbnRJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiBcIlwiLFxuICAgIGNvbG9yOiBcIiNlNmU2ZTZcIixcbn0iXX0= */
/*@ sourceURL=/Users/shane/Documents/projects/github/unity-react-sample/react-app/components/EventItem.js */`));
}
EventItem.defaultProps = {
  text: "",
  color: "#e6e6e6"
};

/***/ }),

/***/ "./components/PropertyItem.js":
/*!************************************!*\
  !*** ./components/PropertyItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertyItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/shane/Documents/projects/github/unity-react-sample/react-app/components/PropertyItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PropertyItem({
  label,
  items,
  value,
  onChange,
  onClick
}) {
  const handleSelect = e => {
    onChange(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2591677603" + " " + "property-item-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "jsx-2591677603",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, label), __jsx("select", {
    onChange: handleSelect,
    value: value,
    className: "jsx-2591677603",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, items.map((item, index) => {
    return __jsx("option", {
      key: index,
      value: item,
      className: "jsx-2591677603",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 33
      }
    }, item);
  })), __jsx("button", {
    onClick: onClick,
    className: "jsx-2591677603",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Update")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2591677603",
    __self: this
  }, ".property-item-container.jsx-2591677603{background-color:white;padding:2px;margin-bottom:2px;display:grid;grid-template-columns:45px auto 60px;grid-gap:3px;}label.jsx-2591677603{font-family:arial,sans-serif;font-size:0.8em;}select.jsx-2591677603{outline:none;}button.jsx-2591677603{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuZS9Eb2N1bWVudHMvcHJvamVjdHMvZ2l0aHViL3VuaXR5LXJlYWN0LXNhbXBsZS9yZWFjdC1hcHAvY29tcG9uZW50cy9Qcm9wZXJ0eUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJhLEFBR3dDLEFBUU8sQUFJakIsQUFHQSxhQUZqQixBQUdBLFVBZmdCLE1BUUksTUFQRSxVQVF0QixRQVBpQixhQUN3QixxQ0FDeEIsYUFDakIiLCJmaWxlIjoiL1VzZXJzL3NoYW5lL0RvY3VtZW50cy9wcm9qZWN0cy9naXRodWIvdW5pdHktcmVhY3Qtc2FtcGxlL3JlYWN0LWFwcC9jb21wb25lbnRzL1Byb3BlcnR5SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BlcnR5SXRlbSh7IGxhYmVsLCBpdGVtcywgdmFsdWUsIG9uQ2hhbmdlLCBvbkNsaWNrIH0pIHtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xuICAgICAgICBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgbGFiZWwgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgLnByb3BlcnR5LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NXB4IGF1dG8gNjBweDtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/shane/Documents/projects/github/unity-react-sample/react-app/components/PropertyItem.js */"));
}

/***/ }),

/***/ "./components/UnityLoader.js":
/*!***********************************!*\
  !*** ./components/UnityLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (containerElement => {
  (function (window) {
    'use strict';

    function unityPlugin() {
      var tdx = {};
      var MAX_INDEX = 100000;
      var retval = Array(MAX_INDEX + 1).fill();
      var retindex = 0;

      function getRetIndex() {
        return retindex >= MAX_INDEX ? 0 : retindex++;
      }

      function getRetValue(index) {
        var value = retval[index];
        delete retval[index];
        return value;
      }

      function sendMessage(func_name, param) {
        if (typeof gameInstance === "undefined") {
          console.log("Error : " + func_name);
          return;
        }

        console.log("Send Message : " + func_name); //console.log(gameInstance);

        gameInstance.SendMessage("SceneManager", func_name, param);
        return true;
      }

      function makeParam() {
        var param = {
          index: arguments[0],
          args: null
        };

        if (arguments.length > 1 && arguments[1] !== null) {
          param.args = arguments[1];
        }

        return JSON.stringify(param);
      } // Utility


      tdx.SetRetValue = function (index, value) {
        retval[index] = value;
      }; // Events


      tdx.OnLoad = function (callback) {
        return callback;
      };

      tdx._OnLoad = function () {
        this.OnLoad();
      };

      tdx.OnRotationPlay = function (callback) {
        return callback;
      };

      tdx._OnRotationPlay = function () {
        this.OnRotationPlay();
      };

      tdx.OnRotationStop = function (callback) {
        return callback;
      };

      tdx._OnRotationStop = function () {
        this.OnRotationStop();
      };

      tdx.OnChangeColor = function (callback) {
        return callback;
      };

      tdx._OnChangeColor = function (attr) {
        this.OnChangeColor(attr);
      }; // Methods


      tdx.GetTankProperty = function () {
        var index = getRetIndex();
        var propName = arguments[0];
        sendMessage("GetTankProperty", makeParam(index, propName));
        return getRetValue(index);
      };

      tdx.GetTankColor = function () {
        var index = getRetIndex();
        sendMessage("GetTankColor", makeParam(index));
        return getRetValue(index);
      };

      tdx.SetTankColor = function () {
        var color = arguments[0];
        sendMessage("SetTankColor", makeParam(-1, color));
      };

      tdx.GetTitle = function () {
        var index = getRetIndex();
        sendMessage("GetTitle", makeParam(index));
        return getRetValue(index);
      };

      tdx.SetTitle = function () {
        const title = arguments[0];
        sendMessage("SetTitle", makeParam(-1, title));
      };

      tdx.GetRank = function () {
        var index = getRetIndex();
        sendMessage("GetRank", makeParam(index));
        return getRetValue(index);
      };

      tdx.SetRank = function () {
        const rank = arguments[0];
        sendMessage("SetRank", makeParam(-1, rank));
      };

      tdx.GetPower = function () {
        var index = getRetIndex();
        sendMessage("GetPower", makeParam(index));
        return getRetValue(index);
      };

      tdx.SetPower = function () {
        var power = arguments[0];
        sendMessage("SetPower", makeParam(-1, power));
      };

      tdx.GetArmor = function () {
        var index = getRetIndex();
        sendMessage("GetArmor", makeParam(index));
        return getRetValue(index);
      };

      tdx.SetArmor = function () {
        var armor = arguments[0];
        sendMessage("SetArmor", makeParam(-1, armor));
      };

      tdx.GetSpeed = function () {
        var index = getRetIndex();
        sendMessage("GetSpeed", makeParam(index));
        return getRetValue(index);
      };

      tdx.SetSpeed = function () {
        var speed = arguments[0];
        sendMessage("SetSpeed", makeParam(-1, speed));
      };

      tdx.Play = function () {
        sendMessage("Play", makeParam(-1, arguments));
      };

      tdx.Stop = function () {
        sendMessage("Stop", makeParam(-1, arguments));
      };

      Object.defineProperty(tdx.SetRetValue, "name", {
        value: "SetRetValue"
      });
      return tdx;
    }

    if (typeof window.InterJSPlugin === 'undefined') {
      window.InterJSPlugin = unityPlugin();
    }
  })(window);

  const id = containerElement.id;
  var gameInstance = UnityLoader.instantiate(id, "/data/Build.json");

  function getPluginContext() {
    return window.InterJSPlugin;
  }

  return {
    getPluginContext
  };
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UnityLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UnityLoader */ "./components/UnityLoader.js");
/* harmony import */ var _components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PropertyItem */ "./components/PropertyItem.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EventItem */ "./components/EventItem.js");
var _jsxFileName = "/Users/shane/Documents/projects/github/unity-react-sample/react-app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.plugin = null;
    this.state = {
      title: "",
      rank: 0,
      power: 0,
      armor: 0,
      speed: 0,
      color: "",
      events: []
    };
    this.OnRotationPlay = this.OnRotationPlay.bind(this);
    this.OnRotationStop = this.OnRotationStop.bind(this);
    this.OnColorChange = this.OnColorChange.bind(this);
    this.OnLoad = this.OnLoad.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeRank = this.handleChangeRank.bind(this);
    this.handleChangePower = this.handleChangePower.bind(this);
    this.handleChangeArmor = this.handleChangeArmor.bind(this);
    this.handleChangeSpeed = this.handleChangeSpeed.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateRank = this.updateRank.bind(this);
    this.updatePower = this.updatePower.bind(this);
    this.updateArmor = this.updateArmor.bind(this);
    this.updateSpeed = this.updateSpeed.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
    const ret = Object(_components_UnityLoader__WEBPACK_IMPORTED_MODULE_2__["default"])(this.unityContainer);
    this.plugin = ret.getPluginContext();
    this.plugin.OnRotationPlay = this.OnRotationPlay;
    this.plugin.OnRotationStop = this.OnRotationStop;
    this.plugin.OnChangeColor = this.OnColorChange;
    this.plugin.OnLoad = this.OnLoad;
  }

  OnLoad() {
    const title = this.plugin.GetTitle();
    const rank = this.plugin.GetRank();
    const power = this.plugin.GetPower();
    const armor = this.plugin.GetArmor();
    const speed = this.plugin.GetSpeed();
    this.setState({
      title: title,
      rank: rank,
      power: power,
      armor: armor,
      speed: speed
    });
  }

  OnRotationPlay() {
    const newEvent = {
      text: "play",
      color: "#efefef"
    };
    const items = this.state.events || [];
    items.push(newEvent);
    this.setState({
      events: items
    });
  }

  OnRotationStop() {
    const newEvent = {
      text: "stop",
      color: "#cccccc"
    };
    const items = this.state.events || [];
    items.push(newEvent);
    this.setState({
      events: items
    });
  }

  OnColorChange(color) {
    const newEvent = {
      text: "color",
      color: color
    };
    const items = this.state.events || [];
    items.push(newEvent);
    this.setState({
      events: items
    });
  }

  handleChangeTitle(value) {
    this.setState({
      title: value
    });
  }

  handleChangeRank(value) {
    this.setState({
      rank: value
    });
  }

  handleChangePower(value) {
    this.setState({
      power: value
    });
  }

  handleChangeArmor(value) {
    this.setState({
      armor: value
    });
  }

  handleChangeSpeed(value) {
    this.setState({
      speed: value
    });
  }

  handleChangeColor(value) {
    this.setState({
      color: value
    });
  }

  updateTitle() {
    const title = this.state.title;
    this.plugin.SetTitle(title);
  }

  updateRank() {
    const rank = this.state.rank;
    this.plugin.SetRank(rank);
  }

  updatePower() {
    const power = this.state.power;
    this.plugin.SetPower(power);
  }

  updateArmor() {
    const armor = this.state.armor;
    this.plugin.SetArmor(armor);
  }

  updateSpeed() {
    const speed = this.state.speed;
    this.plugin.SetSpeed(speed);
  }

  updateColor() {
    const color = this.state.color;
    this.plugin.SetTankColor(color);
  }

  handlePlay() {
    this.plugin.Play();
  }

  handleStop() {
    this.plugin.Stop();
  }

  render() {
    const item_titles = ["Super Tank", "Tu-Tank-Hamon", "Tank You", "No Tanks"];
    const item_ranks = [1, 2, 3, 4, 5];
    const item_powers = [25, 50, 75, 100];
    const item_armors = [10, 20, 30, 40, 50];
    const item_speed = [5, 25, 45, 65, 85];
    const item_colors = ["#df80ff", "#80b3ff", "#00e6ac", "#ff8c1a", "#88cc00"];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-3687185677" + " " + "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "unity-container",
      ref: el => this.unityContainer = el,
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }), __jsx("div", {
      id: "app-container",
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "jsx-3687185677" + " " + "property-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, __jsx("h4", {
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 29
      }
    }, "Properties"), __jsx("div", {
      className: "jsx-3687185677" + " " + "subpanel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 29
      }
    }, __jsx(_components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Title",
      items: item_titles,
      onChange: this.handleChangeTitle,
      onClick: this.updateTitle,
      value: this.state.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 33
      }
    }), __jsx(_components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Rank",
      items: item_ranks,
      onChange: this.handleChangeRank,
      onClick: this.updateRank,
      value: this.state.rank,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 33
      }
    }), __jsx(_components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Power",
      items: item_powers,
      onChange: this.handleChangePower,
      onClick: this.updatePower,
      value: this.state.power,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 33
      }
    }), __jsx(_components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Armor",
      items: item_armors,
      onChange: this.handleChangeArmor,
      onClick: this.updateArmor,
      value: this.state.armor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 33
      }
    }), __jsx(_components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Speed",
      items: item_speed,
      onChange: this.handleChangeSpeed,
      onClick: this.updateSpeed,
      value: this.state.speed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 33
      }
    }), __jsx(_components_PropertyItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Color",
      items: item_colors,
      onChange: this.handleChangeColor,
      onClick: this.updateColor,
      value: this.state.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 33
      }
    }), __jsx("button", {
      onClick: this.handlePlay,
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 33
      }
    }, "Play Rotation"), "\xA0", __jsx("button", {
      onClick: this.handleStop,
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 33
      }
    }, "Stop Rotation"))), __jsx("div", {
      className: "jsx-3687185677" + " " + "event-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 25
      }
    }, __jsx("h4", {
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 29
      }
    }, "Events"), __jsx("div", {
      className: "jsx-3687185677" + " " + "subpanel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "jsx-3687185677",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 33
      }
    }, this.state.events.length > 0 && this.state.events.map((item, index) => {
      return __jsx(_components_EventItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: index,
        text: item.text,
        color: item.color,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 45
        }
      });
    })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3687185677",
      __self: this
    }, ".container.jsx-3687185677{background-color:white;position:absolute;width:100vw;height:100vh;left:0px;top:0px;display:grid;grid-template-columns:auto 300px;overflow:hidden;}#app-container.jsx-3687185677{background-color:white;position:relative;width:calc(100% - 10px);height:calc(100% - 10px);display:grid;grid-template-rows:180px auto;grid-gap:5px;padding:5px;}h4.jsx-3687185677{background-color:transparent;margin:0px;color:crimson;}p.jsx-3687185677{margin:0px;}.property-panel.jsx-3687185677{position:relative;width:100%;height:100%;display:grid;grid-template-rows:20px auto;}.event-panel.jsx-3687185677{position:relative;width:100%;height:100%;display:grid;grid-template-rows:20px auto;overflow:auto;}.subpanel.jsx-3687185677{background-color:white;}.subpanel.jsx-3687185677 div.jsx-3687185677{background-color:white;padding:5px;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuZS9Eb2N1bWVudHMvcHJvamVjdHMvZ2l0aHViL3VuaXR5LXJlYWN0LXNhbXBsZS9yZWFjdC1hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVBpQixBQUc0QyxBQVdBLEFBVU0sQUFLbEIsQUFHTyxBQU9BLEFBUUssQUFHQSxXQXBCM0IsT0FHZSxBQU9BLEtBcENPLEFBV0EsQUFpQ3RCLEFBR2dCLE1BMUJELEFBU0MsQUFPQSxNQVdFLEtBMUJBLENBckJGLEFBV1ksQUFtQlgsQUFPQSxRQVdqQixJQS9DaUIsQ0FxQmpCLEFBU2lDLEFBT0EsV0ExQkosQ0FWaEIsU0FDRCxRQUNLLEFBNEJqQixBQU9rQixPQTFCRCxNQVJvQixDQW1DckMsTUExQmtDLDBCQVJkLElBU0gsWUFSakIsQ0FTZ0IsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL3NoYW5lL0RvY3VtZW50cy9wcm9qZWN0cy9naXRodWIvdW5pdHktcmVhY3Qtc2FtcGxlL3JlYWN0LWFwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVW5pdHlMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Vbml0eUxvYWRlcic7XG5pbXBvcnQgUHJvcGVydHlJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvcGVydHlJdGVtJztcbmltcG9ydCBFdmVudEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgXG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGx1Z2luID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIHJhbms6IDAsXG4gICAgICAgICAgICBwb3dlcjogMCxcbiAgICAgICAgICAgIGFybW9yOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBjb2xvcjogXCJcIixcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuT25Sb3RhdGlvblBsYXkgPSB0aGlzLk9uUm90YXRpb25QbGF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuT25Sb3RhdGlvblN0b3AgPSB0aGlzLk9uUm90YXRpb25TdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuT25Db2xvckNoYW5nZSA9IHRoaXMuT25Db2xvckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLk9uTG9hZCA9IHRoaXMuT25Mb2FkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VUaXRsZSA9IHRoaXMuaGFuZGxlQ2hhbmdlVGl0bGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VSYW5rID0gdGhpcy5oYW5kbGVDaGFuZ2VSYW5rLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlUG93ZXIgPSB0aGlzLmhhbmRsZUNoYW5nZVBvd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlQXJtb3IgPSB0aGlzLmhhbmRsZUNoYW5nZUFybW9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlU3BlZWQgPSB0aGlzLmhhbmRsZUNoYW5nZVNwZWVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlQ29sb3IgPSB0aGlzLmhhbmRsZUNoYW5nZUNvbG9yLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlID0gdGhpcy51cGRhdGVUaXRsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhbmsgPSB0aGlzLnVwZGF0ZVJhbmsuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3dlciA9IHRoaXMudXBkYXRlUG93ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVBcm1vciA9IHRoaXMudXBkYXRlQXJtb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTcGVlZCA9IHRoaXMudXBkYXRlU3BlZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvciA9IHRoaXMudXBkYXRlQ29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGFuZGxlUGxheSA9IHRoaXMuaGFuZGxlUGxheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN0b3AgPSB0aGlzLmhhbmRsZVN0b3AuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICBjb25zdCByZXQgPSBVbml0eUxvYWRlcih0aGlzLnVuaXR5Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSByZXQuZ2V0UGx1Z2luQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnBsdWdpbi5PblJvdGF0aW9uUGxheSA9IHRoaXMuT25Sb3RhdGlvblBsYXk7XG4gICAgICAgIHRoaXMucGx1Z2luLk9uUm90YXRpb25TdG9wID0gdGhpcy5PblJvdGF0aW9uU3RvcDtcbiAgICAgICAgdGhpcy5wbHVnaW4uT25DaGFuZ2VDb2xvciA9IHRoaXMuT25Db2xvckNoYW5nZTtcbiAgICAgICAgdGhpcy5wbHVnaW4uT25Mb2FkID0gdGhpcy5PbkxvYWQ7XG5cbiAgICB9XG4gICAgXG4gICAgT25Mb2FkKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnBsdWdpbi5HZXRUaXRsZSgpO1xuICAgICAgICBjb25zdCByYW5rID0gdGhpcy5wbHVnaW4uR2V0UmFuaygpO1xuICAgICAgICBjb25zdCBwb3dlciA9IHRoaXMucGx1Z2luLkdldFBvd2VyKCk7XG4gICAgICAgIGNvbnN0IGFybW9yID0gdGhpcy5wbHVnaW4uR2V0QXJtb3IoKTtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0aGlzLnBsdWdpbi5HZXRTcGVlZCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICByYW5rOiByYW5rLFxuICAgICAgICAgICAgcG93ZXI6IHBvd2VyLFxuICAgICAgICAgICAgYXJtb3I6IGFybW9yLFxuICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIE9uUm90YXRpb25QbGF5KCkge1xuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHtcbiAgICAgICAgICAgIHRleHQ6IFwicGxheVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2VmZWZlZlwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLmV2ZW50c3x8W107XG4gICAgICAgIGl0ZW1zLnB1c2gobmV3RXZlbnQpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBpdGVtcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9uUm90YXRpb25TdG9wKCkge1xuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHtcbiAgICAgICAgICAgIHRleHQ6IFwic3RvcFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2NjY2NjY1wiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLmV2ZW50c3x8W107XG4gICAgICAgIGl0ZW1zLnB1c2gobmV3RXZlbnQpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBpdGVtcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9uQ29sb3JDaGFuZ2UoY29sb3IpIHtcblxuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHtcbiAgICAgICAgICAgIHRleHQ6IFwiY29sb3JcIixcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5ldmVudHN8fFtdO1xuICAgICAgICBpdGVtcy5wdXNoKG5ld0V2ZW50KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV2ZW50czogaXRlbXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGl0bGU6IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VSYW5rKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmFuazogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVBvd2VyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcG93ZXI6IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VBcm1vcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFybW9yOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlU3BlZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzcGVlZDogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZVRpdGxlKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgICAgIHRoaXMucGx1Z2luLlNldFRpdGxlKHRpdGxlKTtcbiAgICB9XG4gICAgdXBkYXRlUmFuaygpIHtcbiAgICAgICAgY29uc3QgcmFuayA9IHRoaXMuc3RhdGUucmFuaztcbiAgICAgICAgdGhpcy5wbHVnaW4uU2V0UmFuayhyYW5rKTtcbiAgICB9XG4gICAgdXBkYXRlUG93ZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvd2VyID0gdGhpcy5zdGF0ZS5wb3dlcjtcbiAgICAgICAgdGhpcy5wbHVnaW4uU2V0UG93ZXIocG93ZXIpO1xuICAgIH1cbiAgICB1cGRhdGVBcm1vcigpIHtcbiAgICAgICAgY29uc3QgYXJtb3IgPSB0aGlzLnN0YXRlLmFybW9yO1xuICAgICAgICB0aGlzLnBsdWdpbi5TZXRBcm1vcihhcm1vcik7XG4gICAgfVxuICAgIHVwZGF0ZVNwZWVkKCkge1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRoaXMuc3RhdGUuc3BlZWQ7XG4gICAgICAgIHRoaXMucGx1Z2luLlNldFNwZWVkKHNwZWVkKTtcbiAgICB9XG4gICAgdXBkYXRlQ29sb3IoKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5zdGF0ZS5jb2xvcjtcbiAgICAgICAgdGhpcy5wbHVnaW4uU2V0VGFua0NvbG9yKGNvbG9yKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5KCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5QbGF5KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlU3RvcCgpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uU3RvcCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBpdGVtX3RpdGxlcyA9IFtcIlN1cGVyIFRhbmtcIiwgXCJUdS1UYW5rLUhhbW9uXCIsIFwiVGFuayBZb3VcIiwgXCJObyBUYW5rc1wiXTtcbiAgICAgICAgY29uc3QgaXRlbV9yYW5rcyA9IFsxLCAyLCAzLCA0LCA1XTtcbiAgICAgICAgY29uc3QgaXRlbV9wb3dlcnMgPSBbMjUsIDUwLCA3NSwgMTAwXTtcbiAgICAgICAgY29uc3QgaXRlbV9hcm1vcnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcbiAgICAgICAgY29uc3QgaXRlbV9zcGVlZCA9IFs1LCAyNSwgNDUsIDY1LCA4NV07XG4gICAgICAgIGNvbnN0IGl0ZW1fY29sb3JzID0gW1wiI2RmODBmZlwiLCBcIiM4MGIzZmZcIiwgXCIjMDBlNmFjXCIsIFwiI2ZmOGMxYVwiLCBcIiM4OGNjMDBcIl07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVuaXR5LWNvbnRhaW5lclwiIHJlZj17KGVsKSA9PiB0aGlzLnVuaXR5Q29udGFpbmVyID0gZWx9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Qcm9wZXJ0aWVzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUl0ZW0gbGFiZWw9XCJUaXRsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1fdGl0bGVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGVUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcGVydHlJdGVtIGxhYmVsPVwiUmFua1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtX3JhbmtzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VSYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGVSYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJhbmt9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUl0ZW0gbGFiZWw9XCJQb3dlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtX3Bvd2Vyc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUG93ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwZGF0ZVBvd2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBvd2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcGVydHlJdGVtIGxhYmVsPVwiQXJtb3JcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtX2FybW9yc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VBcm1vcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlQXJtb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hcm1vcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5SXRlbSBsYWJlbD1cIlNwZWVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbV9zcGVlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTcGVlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlU3BlZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zcGVlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5SXRlbSBsYWJlbD1cIkNvbG9yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbV9jb2xvcnN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwZGF0ZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29sb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVQbGF5fT5QbGF5IFJvdGF0aW9uPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdG9wfT5TdG9wIFJvdGF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RXZlbnRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5ldmVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudEl0ZW0ga2V5PXtpbmRleH0gdGV4dD17aXRlbS50ZXh0fSBjb2xvcj17aXRlbS5jb2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNhcHAtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4MHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjcmltc29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9wZXJ0eS1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ldmVudC1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3VicGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1YnBhbmVsIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/shane/Documents/projects/github/unity-react-sample/react-app/pages/index.js */"));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shane/Documents/projects/github/unity-react-sample/react-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9wZXJ0eUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vbml0eUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJFdmVudEl0ZW0iLCJ0ZXh0IiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiLCJQcm9wZXJ0eUl0ZW0iLCJsYWJlbCIsIml0ZW1zIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJoYW5kbGVTZWxlY3QiLCJlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29udGFpbmVyRWxlbWVudCIsIndpbmRvdyIsInVuaXR5UGx1Z2luIiwidGR4IiwiTUFYX0lOREVYIiwicmV0dmFsIiwiQXJyYXkiLCJmaWxsIiwicmV0aW5kZXgiLCJnZXRSZXRJbmRleCIsImdldFJldFZhbHVlIiwic2VuZE1lc3NhZ2UiLCJmdW5jX25hbWUiLCJwYXJhbSIsImdhbWVJbnN0YW5jZSIsImNvbnNvbGUiLCJsb2ciLCJTZW5kTWVzc2FnZSIsIm1ha2VQYXJhbSIsImFyZ3VtZW50cyIsImFyZ3MiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiU2V0UmV0VmFsdWUiLCJPbkxvYWQiLCJjYWxsYmFjayIsIl9PbkxvYWQiLCJPblJvdGF0aW9uUGxheSIsIl9PblJvdGF0aW9uUGxheSIsIk9uUm90YXRpb25TdG9wIiwiX09uUm90YXRpb25TdG9wIiwiT25DaGFuZ2VDb2xvciIsIl9PbkNoYW5nZUNvbG9yIiwiYXR0ciIsIkdldFRhbmtQcm9wZXJ0eSIsInByb3BOYW1lIiwiR2V0VGFua0NvbG9yIiwiU2V0VGFua0NvbG9yIiwiR2V0VGl0bGUiLCJTZXRUaXRsZSIsInRpdGxlIiwiR2V0UmFuayIsIlNldFJhbmsiLCJyYW5rIiwiR2V0UG93ZXIiLCJTZXRQb3dlciIsInBvd2VyIiwiR2V0QXJtb3IiLCJTZXRBcm1vciIsImFybW9yIiwiR2V0U3BlZWQiLCJTZXRTcGVlZCIsInNwZWVkIiwiUGxheSIsIlN0b3AiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkludGVySlNQbHVnaW4iLCJpZCIsIlVuaXR5TG9hZGVyIiwiaW5zdGFudGlhdGUiLCJnZXRQbHVnaW5Db250ZXh0IiwiSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwbHVnaW4iLCJzdGF0ZSIsImV2ZW50cyIsImJpbmQiLCJPbkNvbG9yQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJoYW5kbGVDaGFuZ2VSYW5rIiwiaGFuZGxlQ2hhbmdlUG93ZXIiLCJoYW5kbGVDaGFuZ2VBcm1vciIsImhhbmRsZUNoYW5nZVNwZWVkIiwiaGFuZGxlQ2hhbmdlQ29sb3IiLCJ1cGRhdGVUaXRsZSIsInVwZGF0ZVJhbmsiLCJ1cGRhdGVQb3dlciIsInVwZGF0ZUFybW9yIiwidXBkYXRlU3BlZWQiLCJ1cGRhdGVDb2xvciIsImhhbmRsZVBsYXkiLCJoYW5kbGVTdG9wIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZXQiLCJ1bml0eUNvbnRhaW5lciIsInNldFN0YXRlIiwibmV3RXZlbnQiLCJwdXNoIiwicmVuZGVyIiwiaXRlbV90aXRsZXMiLCJpdGVtX3JhbmtzIiwiaXRlbV9wb3dlcnMiLCJpdGVtX2FybW9ycyIsIml0ZW1fc3BlZWQiLCJpdGVtX2NvbG9ycyIsImVsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBQSwwQ0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxLQUFLakIsS0FBTCxDQUFXQyxNQUFYLENBQWtCakQsTUFBbEIsR0FBMkIsQ0FBM0IsSUFBZ0MsS0FBS2dELEtBQUwsQ0FBV0MsTUFBWCxDQUFrQnpFLEdBQWxCLENBQXNCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUNuRSxhQUNJLE1BQUMsNkRBQUQ7QUFBVyxXQUFHLEVBQUVBLEtBQWhCO0FBQXVCLFlBQUksRUFBRUQsSUFBSSxDQUFDYixJQUFsQztBQUF3QyxhQUFLLEVBQUVhLElBQUksQ0FBQ1osS0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKO0FBR0gsS0FKK0IsQ0FGcEMsQ0FESixDQUZKLENBdENKLENBRkosQ0FESjtBQUFBO0FBQUE7QUFBQSw0eGVBREo7QUFvSEg7O0FBM1M4QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xuRCxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRJdGVtKHsgdGV4dCwgY29sb3IgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5ldmVudC1pdGVtIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCA1cHggNXB4IDBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjNDQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuRXZlbnRJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiBcIlwiLFxuICAgIGNvbG9yOiBcIiNlNmU2ZTZcIixcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eUl0ZW0oeyBsYWJlbCwgaXRlbXMsIHZhbHVlLCBvbkNoYW5nZSwgb25DbGljayB9KSB7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IGxhYmVsIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0gdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5wcm9wZXJ0eS1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDVweCBhdXRvIDYwcHg7XG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiZXhwb3J0IGRlZmF1bHQgY29udGFpbmVyRWxlbWVudCA9PiB7XG4gICAgXG4gICAgKGZ1bmN0aW9uKHdpbmRvdyl7XG4gICAgXG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICBmdW5jdGlvbiB1bml0eVBsdWdpbigpIHtcblxuICAgICAgICAgICAgdmFyIHRkeCA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgTUFYX0lOREVYID0gMTAwMDAwO1xuXHRcdCAgICB2YXIgcmV0dmFsID0gQXJyYXkoTUFYX0lOREVYICsgMSkuZmlsbCgpO1xuICAgICAgICAgICAgdmFyIHJldGluZGV4ID0gMDtcbiAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZXRJbmRleCgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXRpbmRleCA+PSBNQVhfSU5ERVgpPzA6cmV0aW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJldFZhbHVlKGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJldHZhbFtpbmRleF07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJldHZhbFtpbmRleF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZnVuY19uYW1lLCBwYXJhbSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGdhbWVJbnN0YW5jZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIgKyBmdW5jX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kIE1lc3NhZ2UgOiBcIiArIGZ1bmNfbmFtZSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lSW5zdGFuY2UpO1xuXG4gICAgICAgICAgICAgICAgZ2FtZUluc3RhbmNlLlNlbmRNZXNzYWdlKFwiU2NlbmVNYW5hZ2VyXCIsIGZ1bmNfbmFtZSwgcGFyYW0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1ha2VQYXJhbSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5hcmdzID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGFyYW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVdGlsaXR5XG4gICAgICAgICAgICB0ZHguU2V0UmV0VmFsdWUgPSBmdW5jdGlvbihpbmRleCwgdmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dmFsW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRXZlbnRzXG4gICAgICAgICAgICB0ZHguT25Mb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRkeC5fT25Mb2FkID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuT25Mb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguT25Sb3RhdGlvblBsYXkgPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4Ll9PblJvdGF0aW9uUGxheSA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9uUm90YXRpb25QbGF5KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguT25Sb3RhdGlvblN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4Ll9PblJvdGF0aW9uU3RvcCA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9uUm90YXRpb25TdG9wKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguT25DaGFuZ2VDb2xvciA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0ZHguX09uQ2hhbmdlQ29sb3IgPSBmdW5jdGlvbihhdHRyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuT25DaGFuZ2VDb2xvcihhdHRyKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1ldGhvZHNcbiAgICAgICAgICAgIHRkeC5HZXRUYW5rUHJvcGVydHkgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0UmV0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJHZXRUYW5rUHJvcGVydHlcIiwgbWFrZVBhcmFtKGluZGV4LCBwcm9wTmFtZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXRWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguR2V0VGFua0NvbG9yID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldFJldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJHZXRUYW5rQ29sb3JcIiwgbWFrZVBhcmFtKGluZGV4KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFJldFZhbHVlKGluZGV4KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0ZHguU2V0VGFua0NvbG9yID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIlNldFRhbmtDb2xvclwiLCBtYWtlUGFyYW0oLTEsIGNvbG9yKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZHguR2V0VGl0bGUgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0UmV0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIkdldFRpdGxlXCIsIG1ha2VQYXJhbShpbmRleCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXRWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4LlNldFRpdGxlID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiU2V0VGl0bGVcIiwgbWFrZVBhcmFtKC0xLCB0aXRsZSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4LkdldFJhbmsgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0UmV0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIkdldFJhbmtcIiwgbWFrZVBhcmFtKGluZGV4KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFJldFZhbHVlKGluZGV4KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0ZHguU2V0UmFuayA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5rID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiU2V0UmFua1wiLCBtYWtlUGFyYW0oLTEsIHJhbmspKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRkeC5HZXRQb3dlciA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRSZXRJbmRleCgpO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiR2V0UG93ZXJcIiwgbWFrZVBhcmFtKGluZGV4KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFJldFZhbHVlKGluZGV4KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0ZHguU2V0UG93ZXIgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHBvd2VyID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiU2V0UG93ZXJcIiwgbWFrZVBhcmFtKC0xLCBwb3dlcikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4LkdldEFybW9yID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldFJldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJHZXRBcm1vclwiLCBtYWtlUGFyYW0oaW5kZXgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmV0VmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRkeC5TZXRBcm1vciA9IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJtb3IgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJTZXRBcm1vclwiLCBtYWtlUGFyYW0oLTEsIGFybW9yKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZHguR2V0U3BlZWQgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0UmV0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIkdldFNwZWVkXCIsIG1ha2VQYXJhbShpbmRleCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXRWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGR4LlNldFNwZWVkID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBzcGVlZCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcIlNldFNwZWVkXCIsIG1ha2VQYXJhbSgtMSwgc3BlZWQpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRkeC5QbGF5ID0gZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiUGxheVwiLCBtYWtlUGFyYW0oLTEsIGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGR4LlN0b3AgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJTdG9wXCIsIG1ha2VQYXJhbSgtMSwgYXJndW1lbnRzKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGR4LlNldFJldFZhbHVlLCBcIm5hbWVcIiwgeyB2YWx1ZTogXCJTZXRSZXRWYWx1ZVwiIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGR4O1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGVvZih3aW5kb3cuSW50ZXJKU1BsdWdpbikgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgIHdpbmRvdy5JbnRlckpTUGx1Z2luID0gdW5pdHlQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KSh3aW5kb3cpO1xuICAgIFxuICAgIGNvbnN0IGlkID0gY29udGFpbmVyRWxlbWVudC5pZDtcbiAgICB2YXIgZ2FtZUluc3RhbmNlID0gVW5pdHlMb2FkZXIuaW5zdGFudGlhdGUoaWQsIFwiL2RhdGEvQnVpbGQuanNvblwiKTtcbiAgICBcbiAgICBmdW5jdGlvbiBnZXRQbHVnaW5Db250ZXh0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LkludGVySlNQbHVnaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGx1Z2luQ29udGV4dCxcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVbml0eUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1VuaXR5TG9hZGVyJztcbmltcG9ydCBQcm9wZXJ0eUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9wZXJ0eUl0ZW0nO1xuaW1wb3J0IEV2ZW50SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0V2ZW50SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgcmFuazogMCxcbiAgICAgICAgICAgIHBvd2VyOiAwLFxuICAgICAgICAgICAgYXJtb3I6IDAsXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIGNvbG9yOiBcIlwiLFxuICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5PblJvdGF0aW9uUGxheSA9IHRoaXMuT25Sb3RhdGlvblBsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5PblJvdGF0aW9uU3RvcCA9IHRoaXMuT25Sb3RhdGlvblN0b3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5PbkNvbG9yQ2hhbmdlID0gdGhpcy5PbkNvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuT25Mb2FkID0gdGhpcy5PbkxvYWQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVRpdGxlID0gdGhpcy5oYW5kbGVDaGFuZ2VUaXRsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVJhbmsgPSB0aGlzLmhhbmRsZUNoYW5nZVJhbmsuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VQb3dlciA9IHRoaXMuaGFuZGxlQ2hhbmdlUG93ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VBcm1vciA9IHRoaXMuaGFuZGxlQ2hhbmdlQXJtb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VTcGVlZCA9IHRoaXMuaGFuZGxlQ2hhbmdlU3BlZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VDb2xvciA9IHRoaXMuaGFuZGxlQ2hhbmdlQ29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlVGl0bGUgPSB0aGlzLnVwZGF0ZVRpdGxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlUmFuayA9IHRoaXMudXBkYXRlUmFuay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyID0gdGhpcy51cGRhdGVQb3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFybW9yID0gdGhpcy51cGRhdGVBcm1vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNwZWVkID0gdGhpcy51cGRhdGVTcGVlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yID0gdGhpcy51cGRhdGVDb2xvci5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RvcCA9IHRoaXMuaGFuZGxlU3RvcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIGNvbnN0IHJldCA9IFVuaXR5TG9hZGVyKHRoaXMudW5pdHlDb250YWluZXIpO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHJldC5nZXRQbHVnaW5Db250ZXh0KCk7XG4gICAgICAgIHRoaXMucGx1Z2luLk9uUm90YXRpb25QbGF5ID0gdGhpcy5PblJvdGF0aW9uUGxheTtcbiAgICAgICAgdGhpcy5wbHVnaW4uT25Sb3RhdGlvblN0b3AgPSB0aGlzLk9uUm90YXRpb25TdG9wO1xuICAgICAgICB0aGlzLnBsdWdpbi5PbkNoYW5nZUNvbG9yID0gdGhpcy5PbkNvbG9yQ2hhbmdlO1xuICAgICAgICB0aGlzLnBsdWdpbi5PbkxvYWQgPSB0aGlzLk9uTG9hZDtcblxuICAgIH1cbiAgICBcbiAgICBPbkxvYWQoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucGx1Z2luLkdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IHJhbmsgPSB0aGlzLnBsdWdpbi5HZXRSYW5rKCk7XG4gICAgICAgIGNvbnN0IHBvd2VyID0gdGhpcy5wbHVnaW4uR2V0UG93ZXIoKTtcbiAgICAgICAgY29uc3QgYXJtb3IgPSB0aGlzLnBsdWdpbi5HZXRBcm1vcigpO1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRoaXMucGx1Z2luLkdldFNwZWVkKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHJhbms6IHJhbmssXG4gICAgICAgICAgICBwb3dlcjogcG93ZXIsXG4gICAgICAgICAgICBhcm1vcjogYXJtb3IsXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgT25Sb3RhdGlvblBsYXkoKSB7XG4gICAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICAgICAgdGV4dDogXCJwbGF5XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZWZlZmVmXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuZXZlbnRzfHxbXTtcbiAgICAgICAgaXRlbXMucHVzaChuZXdFdmVudCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBldmVudHM6IGl0ZW1zLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgT25Sb3RhdGlvblN0b3AoKSB7XG4gICAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICAgICAgdGV4dDogXCJzdG9wXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjY2NjY2NjXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuZXZlbnRzfHxbXTtcbiAgICAgICAgaXRlbXMucHVzaChuZXdFdmVudCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBldmVudHM6IGl0ZW1zLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgT25Db2xvckNoYW5nZShjb2xvcikge1xuXG4gICAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICAgICAgdGV4dDogXCJjb2xvclwiLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLmV2ZW50c3x8W107XG4gICAgICAgIGl0ZW1zLnB1c2gobmV3RXZlbnQpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBpdGVtcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aXRsZTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVJhbmsodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByYW5rOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlUG93ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3dlcjogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUFybW9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYXJtb3I6IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VTcGVlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNwZWVkOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlQ29sb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZTtcbiAgICAgICAgdGhpcy5wbHVnaW4uU2V0VGl0bGUodGl0bGUpO1xuICAgIH1cbiAgICB1cGRhdGVSYW5rKCkge1xuICAgICAgICBjb25zdCByYW5rID0gdGhpcy5zdGF0ZS5yYW5rO1xuICAgICAgICB0aGlzLnBsdWdpbi5TZXRSYW5rKHJhbmspO1xuICAgIH1cbiAgICB1cGRhdGVQb3dlcigpIHtcbiAgICAgICAgY29uc3QgcG93ZXIgPSB0aGlzLnN0YXRlLnBvd2VyO1xuICAgICAgICB0aGlzLnBsdWdpbi5TZXRQb3dlcihwb3dlcik7XG4gICAgfVxuICAgIHVwZGF0ZUFybW9yKCkge1xuICAgICAgICBjb25zdCBhcm1vciA9IHRoaXMuc3RhdGUuYXJtb3I7XG4gICAgICAgIHRoaXMucGx1Z2luLlNldEFybW9yKGFybW9yKTtcbiAgICB9XG4gICAgdXBkYXRlU3BlZWQoKSB7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5zdGF0ZS5zcGVlZDtcbiAgICAgICAgdGhpcy5wbHVnaW4uU2V0U3BlZWQoc3BlZWQpO1xuICAgIH1cbiAgICB1cGRhdGVDb2xvcigpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yO1xuICAgICAgICB0aGlzLnBsdWdpbi5TZXRUYW5rQ29sb3IoY29sb3IpO1xuICAgIH1cblxuICAgIGhhbmRsZVBsYXkoKSB7XG4gICAgICAgIHRoaXMucGx1Z2luLlBsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdG9wKCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5TdG9wKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1fdGl0bGVzID0gW1wiU3VwZXIgVGFua1wiLCBcIlR1LVRhbmstSGFtb25cIiwgXCJUYW5rIFlvdVwiLCBcIk5vIFRhbmtzXCJdO1xuICAgICAgICBjb25zdCBpdGVtX3JhbmtzID0gWzEsIDIsIDMsIDQsIDVdO1xuICAgICAgICBjb25zdCBpdGVtX3Bvd2VycyA9IFsyNSwgNTAsIDc1LCAxMDBdO1xuICAgICAgICBjb25zdCBpdGVtX2FybW9ycyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xuICAgICAgICBjb25zdCBpdGVtX3NwZWVkID0gWzUsIDI1LCA0NSwgNjUsIDg1XTtcbiAgICAgICAgY29uc3QgaXRlbV9jb2xvcnMgPSBbXCIjZGY4MGZmXCIsIFwiIzgwYjNmZlwiLCBcIiMwMGU2YWNcIiwgXCIjZmY4YzFhXCIsIFwiIzg4Y2MwMFwiXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidW5pdHktY29udGFpbmVyXCIgcmVmPXsoZWwpID0+IHRoaXMudW5pdHlDb250YWluZXIgPSBlbH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlByb3BlcnRpZXM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VicGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5SXRlbSBsYWJlbD1cIlRpdGxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbV90aXRsZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwZGF0ZVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUl0ZW0gbGFiZWw9XCJSYW5rXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1fcmFua3N9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVJhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwZGF0ZVJhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5SXRlbSBsYWJlbD1cIlBvd2VyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1fcG93ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQb3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlUG93ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucG93ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUl0ZW0gbGFiZWw9XCJBcm1vclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1fYXJtb3JzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUFybW9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGVBcm1vcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFybW9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcGVydHlJdGVtIGxhYmVsPVwiU3BlZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtX3NwZWVkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVNwZWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGVTcGVlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNwZWVkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcGVydHlJdGVtIGxhYmVsPVwiQ29sb3JcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtX2NvbG9yc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVBsYXl9PlBsYXkgUm90YXRpb248L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0b3B9PlN0b3AgUm90YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FdmVudHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VicGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLmV2ZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50SXRlbSBrZXk9e2luZGV4fSB0ZXh0PXtpdGVtLnRleHR9IGNvbG9yPXtpdGVtLmNvbG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2FwcC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTgwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNyaW1zb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb3BlcnR5LXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV2ZW50LXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdWJwYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3VicGFuZWwgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==