var yy1 = null;
var xx1 = y1 || 'other';
console.log(x1); // Output: 'other', because y1 is null
var yy2 = undefined;
var xx2 = y2 || 'other';
console.log(x2); // Output: 'other', because y2 is undefined
var yy3 = 0;
var xx3 = y3 || 'other';
console.log(x3); // Output: 'other', because y3 is 0 (falsy)
var yy4 = '';
var yx4 = y4 || 'other';
console.log(x4); // Output: 'other', because y4 is an empty string (falsy)
