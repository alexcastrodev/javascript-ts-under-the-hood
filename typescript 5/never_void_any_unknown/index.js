function throwError(message) {
    throw new Error(message);
}
function logMessage(message) {
    console.log(message);
}
function noReturnValue() {
    // This function doesn't return any value explicitly.
    // The default return value is `undefined`.
}
function processValue(value) {
    return value.toString();
}
function processNewValue(value) {
    if (typeof value === "string") {
        // Explicit type assertion is required here
        return value;
    }
    return "Unknown value";
}
function processNewNewValue(value) {
    // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
    return value.toString();
}
function checkIfFalsy(value) {
    if (!value) {
        throwError("Value is falsy!");
    }
    return true;
}
function throwError2(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // Do something indefinitely
    }
}
