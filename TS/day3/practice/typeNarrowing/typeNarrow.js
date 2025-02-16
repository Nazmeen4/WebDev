//typeOf
function printAll(val) {
    if (typeof (val) === 'string') {
        console.log(val);
    }
    else {
        val.forEach(function (item) {
            console.log(item);
        });
    }
}
var name1 = "Help Everyone";
printAll(name1);
var nameAll = ['Jack', 'jill', 'rose'];
printAll(nameAll);
function animalMove(animal) {
    if ("fly" in animal) {
        animal.fly();
        console.log(animal.noOfLegs);
        console.log("Its a bird type");
    }
    else {
        animal.swim();
        console.log(animal.noOfGills);
        console.log("Its a fish type");
    }
}
var animal = {
    swim: function () {
        console.log("I am fish and I can swim");
    },
    noOfGills: 20,
};
animalMove(animal);
//instanceOf
var person = /** @class */ (function () {
    function person() {
        this.nameOfStudent = "Jack";
        this.ageOfStudent = 21;
    }
    person.prototype.setValues = function (name2, age) {
        this.ageOfStudent = age;
        this.nameOfStudent = name2;
    };
    return person;
}());
var employee = /** @class */ (function () {
    function employee() {
    }
    return employee;
}());
var obj4 = new person();
function display(obj) {
    if (obj instanceof person) {
        console.log("Inside the person scope");
        obj.setValues("Jill", 23);
        console.log(obj.ageOfStudent, obj.nameOfStudent);
    }
    else {
        console.log("Inside employee scope");
    }
}
display(obj4);
