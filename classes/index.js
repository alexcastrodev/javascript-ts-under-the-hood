"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator(name) {
        this.name = name;
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    };
    return Calculator;
}());
exports.default = Calculator;
