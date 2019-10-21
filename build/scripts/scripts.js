(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],2:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//ALL THE DOM ELEMENTS STORED HERE
var DOM = {};
var _default = DOM;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

//*** DATE AND TIME
var DateTime = function DateTime() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, DateTime);
  (0, _defineProperty2["default"])(this, "getMonth", function () {
    var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
    var numMonth = _this.month;
    _this.month = monthArr[numMonth];
  });
  var fullDate = new Date();
  this.year = fullDate.getFullYear();
  this.month = fullDate.getMonth();
  this.date = fullDate.getDate();
  this.hours = fullDate.getHours();
  this.mins = fullDate.getMinutes();
} //converting month from number to month name
;

exports["default"] = DateTime;
;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/defineProperty":2,"@babel/runtime/helpers/interopRequireDefault":3}],6:[function(require,module,exports){
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
  //setting date and time class
  state.date = new _DateTime["default"](); //convert month from nums to month name

  state.date.getMonth();
}; //*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)


window.addEventListener('load', function () {
  //date and time controller
  dateController();
});
console.log(state);

},{"./modules/configs/path":4,"./modules/models/DateTime":5,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[6]);
