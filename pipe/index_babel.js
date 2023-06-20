"use strict";

var _ref, _;
var multiply = function multiply(num) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return num * quantity;
};
var divide = function divide(num) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return num / quantity;
};
var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (input) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, input);
  };
};

// https://github.com/tc39/proposal-pipeline-operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator
// https://github.com/microsoft/TypeScript/issues/17718

var data = (_ref = (_ = 11, multiply(_)), divide(_ref));
