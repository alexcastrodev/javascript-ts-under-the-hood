"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var provider_1 = require("./provider");
var DisplayCount = function () {
    var count = (0, react_1.useContext)(provider_1.MyContext).count;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("h2", { children: ["Count: ", count] }) }));
};
exports.default = DisplayCount;
