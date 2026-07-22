"use strict";
function handle(animal) {
    const cat = animal;
    cat.meow();
}
const dog = { kind: "dog", bark: () => console.log("woof") };
handle(dog);
