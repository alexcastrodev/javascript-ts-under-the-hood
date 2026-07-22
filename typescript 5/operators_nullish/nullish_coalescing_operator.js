var y1 = null;
var x1 = y1 !== null && y1 !== void 0 ? y1 : 'other';
console.log(x1); // Output: 'other', because y1 is null
var y2 = undefined;
var x2 = y2 !== null && y2 !== void 0 ? y2 : 'other';
console.log(x2); // Output: 'other', because y2 is undefined
var y3 = 0;
var x3 = y3 !== null && y3 !== void 0 ? y3 : 'other';
console.log(x3); // Output: 0, because y3 is 0 (not nullish)
var y4 = '';
var x4 = y4 !== null && y4 !== void 0 ? y4 : 'other';
console.log(x4); // Output: '', because y4 is an empty string (not nullish)
