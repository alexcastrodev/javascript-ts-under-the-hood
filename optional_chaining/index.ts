const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
    },
} as any;
  
const dogName = adventurer.dog?.name || 'default' ;

const wolfName = adventurer.wolf?.name ?? 'default' ;