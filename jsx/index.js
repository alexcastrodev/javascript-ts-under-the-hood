"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var index3_1 = require("./index3");
function Index() {
    var _a = react_1.default.useState(0), count = _a[0], setCount = _a[1];
    var countMemozed = react_1.default.useMemo(function () {
        return count + 1;
    }, [count]);
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Index ", countMemozed, " "] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCount(count + 1); } }), (0, jsx_runtime_1.jsx)(index3_1.default, {})] });
}
exports.default = Index;
