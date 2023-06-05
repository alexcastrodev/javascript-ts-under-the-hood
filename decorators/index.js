var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyKey, " with arguments: ").concat(JSON.stringify(args)));
        var result = originalMethod.apply(this, args);
        console.log("Method ".concat(propertyKey, " returned: ").concat(JSON.stringify(result)));
        return result;
    };
    return descriptor;
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.calculateSum = function (a, b) {
        return a + b;
    };
    __decorate([
        logMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ExampleClass.prototype, "calculateSum", null);
    return ExampleClass;
}());
var exampleClass = new ExampleClass();
exampleClass.calculateSum(1, 2);
