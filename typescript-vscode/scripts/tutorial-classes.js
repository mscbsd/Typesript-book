var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person.staticMethod = function () {
        console.log("Static Method");
    };
    Person.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p = new Person("Marcelo");
Person.staticMethod();
p.greetPerson();
//# sourceMappingURL=tutorial-classes.js.map