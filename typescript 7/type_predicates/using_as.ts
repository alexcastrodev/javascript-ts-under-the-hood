interface Cat {
  kind: "cat";
  meow(): void;
}

interface Dog {
  kind: "dog";
  bark(): void;
}

type Animal = Cat | Dog;

function handle(animal: Animal) {
  const cat = animal as Cat;
  cat.meow();
}

const dog: Animal = { kind: "dog", bark: () => console.log("woof") };

handle(dog);
