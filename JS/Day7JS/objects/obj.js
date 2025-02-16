//object creations
//differnet ways of creating an objects
//1. using object literal
let person={
    name:"Johan",
    age:30
}
console.log(person);


//2. using new Object() syntax
let person1=new Object();
console.log(typeof person1);
person1.name="Jack";
person1.gender="Male";
console.log(person1);


//3. using constructor function
function person3F(name,age){
    this.name=name;
    this.age=age;
}
let persoN3=new person3F('Jill',40);
console.log(persoN3);
console.log(typeof person3F);
console.log(typeof persoN3);
/*
function Person(name,age){
    this.name = name;
    this.age = age;
}
let person2 = new Person('Jack',35);
console.log(person2);
*/


//4. using Object.create() method
let person3 = Object.create(person);
console.log(person3);


//5. using class syntax
class Person4{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let person4 = new Person4('Jill',40);
console.log(person4);
//6. using function returning object
function createPerson(name,age){
    return {
        name : name,
        age : age
    }
}
let person5 = createPerson('Joe',45);
console.log(person5);
