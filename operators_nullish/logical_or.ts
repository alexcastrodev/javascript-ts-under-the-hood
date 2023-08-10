const yy1 = null;
const xx1 = y1 || 'other';
console.log(x1); // Output: 'other', because y1 is null

const yy2 = undefined;
const xx2 = y2 || 'other';
console.log(x2); // Output: 'other', because y2 is undefined

const yy3 = 0;
const xx3 = y3 || 'other';
console.log(x3); // Output: 'other', because y3 is 0 (falsy)

const yy4 = '';
const yx4 = y4 || 'other';
console.log(x4); // Output: 'other', because y4 is an empty string (falsy)
