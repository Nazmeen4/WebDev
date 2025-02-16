//premitive types
//string
let name = 'John';
console.log(name);
//boolean
let isApproved = true;
console.log(isApproved);
//bigint
let bigInt = 1234567890123456789012345678901234569762567890n;
console.log(bigInt);
//symbol
let symbol = Symbol('a');
let symbol2 = Symbol('a');
console.log(symbol === symbol2); //false
console.log(symbol, symbol2);
console.log(typeof symbol);
let neg=-0;
console.log(neg);
console.log(1/0);
console.log(1/neg);
//undefined
let x;
console.log(x);
//null
let y = null;
console.log(y);
//object
let person = {
    name: 'John',
    age: 30
};
console.log(person);
//array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(typeof selectedColors);
console.log(typeof person);
console.log(typeof name);
console.log(typeof isApproved);
console.log(typeof bigInt);
console.log(typeof symbol);
console.log(typeof x);
console.log(typeof y);
//dynamic typing
let z = 1;
console.log(typeof z);
z = 'a';
console.log(typeof z);
z = true;
console.log(typeof z);
z = null;
console.log(typeof z);
z = undefined;
console.log(typeof z);
z = {};
console.log(typeof z);
//objexts person
let person1 = {
    name : 'john',
    age : 20
}
console.log(person1);
console.log(person1.name);
person1.name = 'jane';
console.log(person1.name);
console.log(person1);
//toString
let num=123
num=num.toString();
console.log(num);
console.log(typeof num);
Number(num);
console.log(num);
console.log(typeof num); 
num=Number(num);
console.log(num);
console.log(typeof num); 
