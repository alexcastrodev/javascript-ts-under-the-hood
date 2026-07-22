const multiply = (num: number, quantity: number = 2): number => num * quantity;
const divide = (num: number, quantity: number = 2): number => num / quantity;

const pipe = <T>(...fns: Array<(input: T) => T>) => (input: T) =>
  fns.reduce((acc, fn) => fn(acc), input);


// https://github.com/tc39/proposal-pipeline-operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator
// https://github.com/microsoft/TypeScript/issues/17718

const data = 11 |> multiply |> divide;