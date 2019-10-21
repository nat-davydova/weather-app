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
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOM = void 0;
//ALL THE DOM ELEMENTS STORED HERE
var DOM = {
  date: {
    year: document.querySelector('.date__year'),
    month: document.querySelector('.date__month'),
    date: document.querySelector('.date__day')
  },
  time: {
    hours: document.querySelector('.time__hour'),
    mins: document.querySelector('.time__minutes')
  }
};
exports.DOM = DOM;

},{}],6:[function(require,module,exports){
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
    var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/defineProperty":2,"@babel/runtime/helpers/interopRequireDefault":3}],7:[function(require,module,exports){
"use strict";

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDate = void 0;

var _path = require("./../configs/path");

//import DOM from configs
//render date/time item into the DOM - helper function
var renderDateItem = function renderDateItem(item, uiElem) {
  uiElem.textContent = item;
}; //convert 1-digit numbers to 2-digits numbers


var twoDigitsConvert = function twoDigitsConvert(elem) {
  return "0".concat(elem);
}; //render date and time


var renderDate = function renderDate(dateObj) {
  //converting numbers into 2-digits
  if (dateObj.date < 10) {
    dateObj.date = twoDigitsConvert(dateObj.date);
  }

  if (dateObj.hours < 10) {
    dateObj.hours = twoDigitsConvert(dateObj.hours);
  }

  if (dateObj.mins < 10) {
    dateObj.mins = twoDigitsConvert(dateObj.mins);
  } //render year


  renderDateItem(dateObj.year, _path.DOM.date.year); //render month

  renderDateItem(dateObj.month, _path.DOM.date.month); //render date

  renderDateItem(dateObj.date, _path.DOM.date.date); //render hours

  renderDateItem(dateObj.hours, _path.DOM.time.hours); //render min

  renderDateItem(dateObj.mins, _path.DOM.time.mins);
};

exports.renderDate = renderDate;

},{"./../configs/path":5}],9:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],10:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _DateTime = _interopRequireDefault(require("./modules/models/DateTime"));

var _Location = _interopRequireDefault(require("./modules/models/Location"));

var dateView = _interopRequireWildcard(require("./modules/views/dateTimeVew"));

var locationView = _interopRequireWildcard(require("./modules/views/locationView"));

var _path = require("./modules/configs/path");

//APP IMPORTS
//import models
//import views
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

  state.date.getMonth(); //render date and time into UI

  dateView.renderDate(state.date);
}; //*** LOCATION CONTROLLER


var locationController = function locationController() {}; //*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)


window.addEventListener('load', function () {
  //date and time controller
  dateController(); //location controller

  locationController();
});
console.log(state);

},{"./modules/configs/path":5,"./modules/models/DateTime":6,"./modules/models/Location":7,"./modules/views/dateTimeVew":8,"./modules/views/locationView":9,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/interopRequireWildcard":4}]},{},[10]);
