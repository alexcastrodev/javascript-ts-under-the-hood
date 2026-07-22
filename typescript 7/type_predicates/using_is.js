"use strict";
function isCat(animal) {
    return animal.kind === "cat";
}
function handle(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
const dog = { kind: "dog", bark: () => console.log("woof") };
handle(dog);
