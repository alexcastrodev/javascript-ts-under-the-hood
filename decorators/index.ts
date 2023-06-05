function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${propertyKey} returned: ${JSON.stringify(result)}`);
      return result;
    };
  
    return descriptor;
}

class ExampleClass {
    @logMethod
    calculateSum(a: number, b: number) {
      return a + b;
    }
}

const exampleClass = new ExampleClass();
exampleClass.calculateSum(1, 2);
