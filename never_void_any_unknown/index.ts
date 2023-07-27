function throwError(message: string): never {
    throw new Error(message);
}

function logMessage(message: string): void {
    console.log(message);
  }
  
function noReturnValue(): void {
    // This function doesn't return any value explicitly.
    // The default return value is `undefined`.
}
  
function processValue(value: any): string {
    return value.toString();
}


function processNewValue(value: unknown): string {
    if (typeof value === "string") {
      // Explicit type assertion is required here
      return value as string;
    }
    return "Unknown value";
}

function processNewNewValue(value: unknown): string {
    // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
    return value.toString();
}

function checkIfFalsy(value: any): never | boolean {
    if (!value) {
      throwError("Value is falsy!");
    }
    return true;
}

function throwError2(message: string): never {
    throw new Error(message);
  }
  
function infiniteLoop(): never {
    while (true) {
      // Do something indefinitely
    }
}
