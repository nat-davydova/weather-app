(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],2:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//ALL THE DOM ELEMENTS STORED HERE
var DOM = {};
var _default = DOM;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

//*** DATE AND TIME
var DateTime = function DateTime() {
  (0, _classCallCheck2["default"])(this, DateTime);
  var fullDate = new Date();
  this.year = fullDate.getFullYear();
  this.month = fullDate.getMonth();
  this.date = fullDate.getDate();
  this.hours = fullDate.getHours();
  this.mins = fullDate.getMinutes();
};

exports["default"] = DateTime;
;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/interopRequireDefault":2}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _DateTime = _interopRequireDefault(require("./modules/models/DateTime"));

var _path = _interopRequireDefault(require("./modules/configs/path"));

//APP IMPORTS
//import models
//import configs
//state
//here stored:
// date and time
// location
// local weather
var state = {}; //*** DATE AND TIME CONTROLLER

var dateController = function dateController() {
  state.date = new _DateTime["default"]();
}; //*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)


window.addEventListener('load', function () {
  //date and time controller
  dateController();
});
console.log(state);

},{"./modules/configs/path":3,"./modules/models/DateTime":4,"@babel/runtime/helpers/interopRequireDefault":2}]},{},[5]);
