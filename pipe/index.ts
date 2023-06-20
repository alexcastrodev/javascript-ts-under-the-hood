const multiply = (num, quantity = 2) => num * quantity
const divide = (num, quantity = 2) => num / quantity

const pipe = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input)

let result = pipe(multiply, divide)(6)

// https://github.com/tc39/proposal-pipeline-operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator
// https://github.com/microsoft/TypeScript/issues/17718

// let result2 = 11 |> multiply |> divide


