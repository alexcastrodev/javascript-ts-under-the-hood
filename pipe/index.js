var multiply = function (num, quantity) {
    if (quantity === void 0) { quantity = 2; }
    return num * quantity;
};
var divide = function (num, quantity) {
    if (quantity === void 0) { quantity = 2; }
    return num / quantity;
};
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (input) { return fns.reduce(function (acc, fn) { return fn(acc); }, input); };
};
var result = pipe(multiply, divide)(6);
