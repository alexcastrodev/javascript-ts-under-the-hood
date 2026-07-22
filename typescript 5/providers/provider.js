"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProvider = exports.MyContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
// Create the context
var MyContext = (0, react_1.createContext)();
exports.MyContext = MyContext;
// Create the provider component
var MyProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    var increment = function () {
        setCount(function (prevCount) { return prevCount + 1; });
    };
    var decrement = function () {
        setCount(function (prevCount) { return prevCount - 1; });
    };
    // Pass the state and functions as values to the context provider
    return ((0, jsx_runtime_1.jsx)(MyContext.Provider, { value: { count: count, increment: increment, decrement: decrement }, children: children }));
};
exports.MyProvider = MyProvider;
