(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//ALL THE DOM ELEMENTS STORED HERE
var DOM = {};
var _default = DOM;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("./modules/configs/path"));

//APP IMPORTS
//state
//here stored:
// date and time
// location
// local weather
var state = {}; //*** DATE AND TIME CONTROLLER

var dateController = function dateController() {}; //*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)


window.addEventListener('load', function () {
  //date and time controller
  dateController();
});
console.log(state);

},{"./modules/configs/path":2,"@babel/runtime/helpers/interopRequireDefault":1}]},{},[3]);
