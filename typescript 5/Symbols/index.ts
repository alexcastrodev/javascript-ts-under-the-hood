const MyLife = {
    [Symbol.for('Life')]: () => console.log('Xumbrela'),
}

console.log(MyLife[Symbol.for('Life')]())