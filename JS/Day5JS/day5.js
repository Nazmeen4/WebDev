/*function sum(){
    const a=10;
    console.log(a);
    Sub();
    console.log(c);
}
function Sub(){
    let c='hello';
    console.log(c);
    //console.log(a);
}
sum()*/
//-------------------------------------------------
/*{
    var a=10;
    let b=20;
}
console.log(a);*/
// function f1(){
//     console.log(a);
//     var a=10;

// }
// f1();
(function(){
    console.log("Hello");
    var a=10;
    let c=20;
})();
 //console.log(c); //error
//-------------------------------------------------------------67
var teacher = "suzy";
function ask(question){
    console.log(teacher,question);
}
function otherClass(){
    //console.log("Welcome");
    var teacher = "Kyle";
    ask("Why");
}
otherClass();
//IIFE
var v =(function(question){
    console.log("IIFE",question);
    return question;
})("How");
console.log(v);
//-----------------------------block scoping
{
    let a=10;
    console.log(a);
}
//console.log(a); //error
{
    var b=20;
    console.log(b);
}
console.log(b);
//-------------------------------Hoisting
var teacher = "Kyle";
//ask();
console.log(teacher);
function ask(){
    console.log(teacher);
    teacher="Suzzy";
}
ask();
console.log(teacher);
//Greet();
var Greet=function(){
    console.log("Hello");
}
// var hoisting
student; //var will undefine.
var student;
console.log(student); //undefined
//let hoisting
/*student1;
let student1; //typeof let is error
console.log(student1);*/ // the let will uninitialize the variable
//const hoisting
student2;
var student2;
console.log(typeof student2);


