const y1 = null;
const x1 = y1 ?? 'other';
console.log(x1); // Output: 'other', because y1 is null

const y2 = undefined;
const x2 = y2 ?? 'other';
console.log(x2); // Output: 'other', because y2 is undefined

const y3 = 0;
const x3 = y3 ?? 'other';
console.log(x3); // Output: 0, because y3 is 0 (not nullish)

const y4 = '';
const x4 = y4 ?? 'other';
console.log(x4); // Output: '', because y4 is an empty string (not nullish)