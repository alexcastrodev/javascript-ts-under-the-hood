class Something {
  declare firstName: string;
  declare lastName: string;
  declare age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// TypeScript code
// interface Person {
//   name: string;
//   age: number;
//   greet(): string;
// }

// Use `declare` to inform TypeScript about the existing JavaScript class
// declare class Person {
//   constructor(name: string, age: number);
//   greet(): string;
// }

// Now you can use the existing JavaScript class Person with type annotations
// const person: Person = new Person("Alice", 30);
// console.log(person.greet());
