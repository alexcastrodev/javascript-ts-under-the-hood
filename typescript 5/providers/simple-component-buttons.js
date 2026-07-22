"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var provider_1 = require("./provider");
var CounterButtons = function () {
    var _a = (0, react_1.useContext)(provider_1.MyContext), increment = _a.increment, decrement = _a.decrement;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: increment, children: "Increment" }), (0, jsx_runtime_1.jsx)("button", { onClick: decrement, children: "Decrement" })] }));
};
exports.default = CounterButtons;
