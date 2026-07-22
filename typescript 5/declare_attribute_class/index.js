var Something = /** @class */ (function () {
    function Something(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Something;
}());
var person = new Person("Alice", 30);
console.log(person.greet());
