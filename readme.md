# How React and Typescript works under the hood

This is my study notes about React and how it works under the hood. 

I will test some implementations of React and show to my friends how it works.

## Dependencies

```bash
# Install dependencies  
yarn install
```

## JSX

This is a simple implementation of JSX.

### Build

```bash
# Build the project
yarn build:jsx
# Or
npx tsc jsx/index.tsx --jsx react-jsx
```

## Class

### Build

```bash
# Build the project
yarn build:class
# Or
npx tsc classes/index.ts
```


## Decorators

### Build

```bash
# Build the project
yarn build:decorator
# Or
npx tsc decorators/index.ts --experimentalDecorators --emitDecoratorMetadata
```

### Using

Based on this script in the end of the class:

```typescript
const exampleClass = new ExampleClass();
exampleClass.calculateSum(1, 2);
```

This is the output:

```bash
$ ~ node decorators/index.js 
Calling calculateSum with arguments: [1,2]
Method calculateSum returned: 3
```