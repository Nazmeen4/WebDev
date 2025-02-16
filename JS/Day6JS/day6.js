/*//closure function
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
} 
const newFunction = outerFunction('outside');
newFunction('inside');
//increment
function counter(){
    var count=0;
    return function(){
        count++;
        return count;
    }
}
const count = counter();
console.log(count());
console.log(count());
console.log(count());
const count2 = counter();
console.log(count2());
console.log(count2());
const count3 = function decrement(){
    var count = 0;
    return function(){
        count--;
        return count;
    }   
}
const decrement = count3();
console.log(decrement());
console.log(decrement());
console.log(decrement());
//normal function
const greet=function greet(name){
    return `Hello ${name}`;
}
console.log(greet('Nazmeen'));
console.log(typeof greet);*/
function counter(){
    var count=0;
    return function(){
        count++;
        return count;
    }
}
const count = counter();
console.log(count());
console.log(count());
const count2 = counter();
console.log(count2());
console.log(count2());
let power = function pow(x,y){
    return Math.pow(x,y);
}
let pow=function pow(){
    let x=1;
    return function(y){
        x++;
        console.log(Math.pow(y,x));
        
    }
}
let pow2=pow();
(pow2(10));
(pow2(2));

