"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var simple_component_1 = require("./simple-component");
var simple_component_buttons_1 = require("./simple-component-buttons");
var provider_1 = require("./provider");
var App = function () {
    return ((0, jsx_runtime_1.jsxs)(provider_1.MyProvider, { children: [(0, jsx_runtime_1.jsx)(simple_component_1.default, {}), (0, jsx_runtime_1.jsx)(simple_component_buttons_1.default, {})] }));
};
exports.default = App;
