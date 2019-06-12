/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patterns_02_components_card_card__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patterns_02_components_card_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__patterns_02_components_card_card__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Import main css file.


// Import local dependencies


var CLASS_FACTORY = {
  // '.js-Picture': Picture,
};

var app = null;

var App = function () {
  function App() {
    _classCallCheck(this, App);

    if (!("querySelector" in document) || !("addEventListener" in window) || !document.documentElement.classList) {
      return;
    }

    this.bind(document);
  }

  _createClass(App, [{
    key: "bind",
    value: function bind(context) {
      var _this = this;

      var el = void 0;

      if (typeof context === "string") {
        el = document.querySelector(context);
      } else if (typeof context[0] !== "undefined") {
        // TODO: Check why desctructuring also causes lint error.
        // eslint-disable-next-line prefer-destructuring
        el = context[0];
      } else {
        el = context;
      }

      // Initializ all js plugins from the factory collection.
      Object.keys(CLASS_FACTORY).forEach(function (key) {
        var mangledKey = key.toLowerCase().replace(".js-", "");

        if (!_this[mangledKey]) {
          _this[mangledKey] = [];
        }

        Array.prototype.push.apply(_this[mangledKey], [].slice.call(el.querySelectorAll(key)).map(function (element) {
          return new CLASS_FACTORY[key](element);
        }));
      });
    }
  }]);

  return App;
}();

if (typeof Drupal === "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    app = new App();
  });
} else {
  // TODO: Add 'Drupal' to globals in eslint config
  // eslint-disable-next-line no-undef
  Drupal.behaviors.rxevolveFrontend = {
    attach: function attach(context) {
      if (app) {
        app.bind(context);
      } else {
        app = new App();
      }
    }
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(4),
    variables = _require.variables;

// eslint-disable-next-line no-console


console.log("card.js loaded, card-color: ", variables.CardColor);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1560347030928
      var cssReload = require("!../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"variables":{"CardColor":"rgb(235, 83, 23)"}}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjk2ZDcwNWQ5NTk2ZGFmYzYwYzIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fcGF0dGVybnMvMDItY29tcG9uZW50cy9jYXJkL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX3BhdHRlcm5zLzAwLXRoZW1lL3RoZW1lLmpzb24iXSwibmFtZXMiOlsiQ0xBU1NfRkFDVE9SWSIsImFwcCIsIkFwcCIsImRvY3VtZW50Iiwid2luZG93IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYmluZCIsImNvbnRleHQiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm1hbmdsZWRLZXkiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInB1c2giLCJhcHBseSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJlbGVtZW50IiwiRHJ1cGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJlaGF2aW9ycyIsInJ4ZXZvbHZlRnJvbnRlbmQiLCJhdHRhY2giLCJyZXF1aXJlIiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyIsIkNhcmRDb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQjtBQUNwQjtBQURvQixDQUF0Qjs7QUFJQSxJQUFJQyxNQUFNLElBQVY7O0lBRU1DLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFFBQ0UsRUFBRSxtQkFBbUJDLFFBQXJCLEtBQ0EsRUFBRSxzQkFBc0JDLE1BQXhCLENBREEsSUFFQSxDQUFDRCxTQUFTRSxlQUFULENBQXlCQyxTQUg1QixFQUlFO0FBQ0E7QUFDRDs7QUFFRCxTQUFLQyxJQUFMLENBQVVKLFFBQVY7QUFDRDs7Ozt5QkFFSUssTyxFQUFTO0FBQUE7O0FBQ1osVUFBSUMsV0FBSjs7QUFFQSxVQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JDLGFBQUtOLFNBQVNPLGFBQVQsQ0FBdUJGLE9BQXZCLENBQUw7QUFDRCxPQUZELE1BRU8sSUFBSSxPQUFPQSxRQUFRLENBQVIsQ0FBUCxLQUFzQixXQUExQixFQUF1QztBQUM1QztBQUNBO0FBQ0FDLGFBQUtELFFBQVEsQ0FBUixDQUFMO0FBQ0QsT0FKTSxNQUlBO0FBQ0xDLGFBQUtELE9BQUw7QUFDRDs7QUFFRDtBQUNBRyxhQUFPQyxJQUFQLENBQVlaLGFBQVosRUFBMkJhLE9BQTNCLENBQW1DLGVBQU87QUFDeEMsWUFBTUMsYUFBYUMsSUFBSUMsV0FBSixHQUFrQkMsT0FBbEIsQ0FBMEIsTUFBMUIsRUFBa0MsRUFBbEMsQ0FBbkI7O0FBRUEsWUFBSSxDQUFDLE1BQUtILFVBQUwsQ0FBTCxFQUF1QjtBQUNyQixnQkFBS0EsVUFBTCxJQUFtQixFQUFuQjtBQUNEOztBQUVESSxjQUFNQyxTQUFOLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FDRSxNQUFLUCxVQUFMLENBREYsRUFFRSxHQUFHUSxLQUFILENBQ0dDLElBREgsQ0FDUWQsR0FBR2UsZ0JBQUgsQ0FBb0JULEdBQXBCLENBRFIsRUFFR1UsR0FGSCxDQUVPO0FBQUEsaUJBQVcsSUFBSXpCLGNBQWNlLEdBQWQsQ0FBSixDQUF1QlcsT0FBdkIsQ0FBWDtBQUFBLFNBRlAsQ0FGRjtBQU1ELE9BYkQ7QUFjRDs7Ozs7O0FBR0gsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDeEIsV0FBU3lCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEM0IsVUFBTSxJQUFJQyxHQUFKLEVBQU47QUFDRCxHQUZEO0FBR0QsQ0FKRCxNQUlPO0FBQ0w7QUFDQTtBQUNBeUIsU0FBT0UsU0FBUCxDQUFpQkMsZ0JBQWpCLEdBQW9DO0FBQ2xDQyxZQUFRLHlCQUFXO0FBQ2pCLFVBQUk5QixHQUFKLEVBQVM7QUFDUEEsWUFBSU0sSUFBSixDQUFTQyxPQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xQLGNBQU0sSUFBSUMsR0FBSixFQUFOO0FBQ0Q7QUFDRjtBQVBpQyxHQUFwQztBQVNELEM7Ozs7OztlQ3hFcUI4QixtQkFBT0EsQ0FBQyxDQUFSLEM7SUFBZEMsUyxZQUFBQSxTOztBQUVSOzs7QUFDQUMsUUFBUUMsR0FBUixDQUFZLDhCQUFaLEVBQTRDRixVQUFVRyxTQUF0RCxFOzs7Ozs7QUNIQTtBQUNBLE9BQU8sS0FBVTtBQUNqQjtBQUNBLHFHQUFxRyxZQUFZLFNBQVMsRUFBRTtBQUM1SDtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQSxrQkFBa0IsYUFBYSxnQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjk2ZDcwNWQ5NTk2ZGFmYzYwYzIiLCIvLyBJbXBvcnQgbWFpbiBjc3MgZmlsZS5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbi8vIEltcG9ydCBsb2NhbCBkZXBlbmRlbmNpZXNcbmltcG9ydCBcIi4vX3BhdHRlcm5zLzAyLWNvbXBvbmVudHMvY2FyZC9jYXJkXCI7XG5cbmNvbnN0IENMQVNTX0ZBQ1RPUlkgPSB7XG4gIC8vICcuanMtUGljdHVyZSc6IFBpY3R1cmUsXG59O1xuXG5sZXQgYXBwID0gbnVsbDtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKFxuICAgICAgIShcInF1ZXJ5U2VsZWN0b3JcIiBpbiBkb2N1bWVudCkgfHxcbiAgICAgICEoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93KSB8fFxuICAgICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmQoZG9jdW1lbnQpO1xuICB9XG5cbiAgYmluZChjb250ZXh0KSB7XG4gICAgbGV0IGVsO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dFswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gVE9ETzogQ2hlY2sgd2h5IGRlc2N0cnVjdHVyaW5nIGFsc28gY2F1c2VzIGxpbnQgZXJyb3IuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIGVsID0gY29udGV4dFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpeiBhbGwganMgcGx1Z2lucyBmcm9tIHRoZSBmYWN0b3J5IGNvbGxlY3Rpb24uXG4gICAgT2JqZWN0LmtleXMoQ0xBU1NfRkFDVE9SWSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgbWFuZ2xlZEtleSA9IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCIuanMtXCIsIFwiXCIpO1xuXG4gICAgICBpZiAoIXRoaXNbbWFuZ2xlZEtleV0pIHtcbiAgICAgICAgdGhpc1ttYW5nbGVkS2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShcbiAgICAgICAgdGhpc1ttYW5nbGVkS2V5XSxcbiAgICAgICAgW10uc2xpY2VcbiAgICAgICAgICAuY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKGtleSkpXG4gICAgICAgICAgLm1hcChlbGVtZW50ID0+IG5ldyBDTEFTU19GQUNUT1JZW2tleV0oZWxlbWVudCkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cbmlmICh0eXBlb2YgRHJ1cGFsID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBhcHAgPSBuZXcgQXBwKCk7XG4gIH0pO1xufSBlbHNlIHtcbiAgLy8gVE9ETzogQWRkICdEcnVwYWwnIHRvIGdsb2JhbHMgaW4gZXNsaW50IGNvbmZpZ1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgRHJ1cGFsLmJlaGF2aW9ycy5yeGV2b2x2ZUZyb250ZW5kID0ge1xuICAgIGF0dGFjaDogY29udGV4dCA9PiB7XG4gICAgICBpZiAoYXBwKSB7XG4gICAgICAgIGFwcC5iaW5kKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBwID0gbmV3IEFwcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9pbmRleC5qcyIsImNvbnN0IHsgdmFyaWFibGVzIH0gPSByZXF1aXJlKFwiLi4vLi4vMDAtdGhlbWUvdGhlbWUuanNvblwiKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKFwiY2FyZC5qcyBsb2FkZWQsIGNhcmQtY29sb3I6IFwiLCB2YXJpYWJsZXMuQ2FyZENvbG9yKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fcGF0dGVybnMvMDItY29tcG9uZW50cy9jYXJkL2NhcmQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjAzNDcwMzA5MjhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1widmFyaWFibGVzXCI6e1wiQ2FyZENvbG9yXCI6XCJyZ2IoMjM1LCA4MywgMjMpXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL19wYXR0ZXJucy8wMC10aGVtZS90aGVtZS5qc29uXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=