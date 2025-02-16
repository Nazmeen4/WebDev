//Strict
//----------------------------------------------------------"use strict";
var v;
console.log(v); //undefined
//reference Error: v is not defined
//console.log(v2) //undeclare
//Lesson 46-53------------------------------------
let teacher ='Kyle';
function otherClass(){
    teacher='suzzy';
    lecture='React';
    console.log("Welcome");
}

console.log(teacher);
//console.log(lecture);
otherClass();
console.log(teacher);
console.log(lecture);
//lesson 55----------------------------55------------------------------------------------------------
let student = "Nazmeen";  //red marbel
function assignStudent(){ //red marbel but inside this will be other color like blue marbel
    student = "Khateeja"; //still a red marbel because thw variable exixts. 
    function question(number){ //blue marbel but the parameter will be of other color
        console.log(student,number); // student--red, number ---green
    }
    question("Ask"); //blue marbel
}
console.log(student); //Nazmeen
assignStudent(); //Khateeja Ask
console.log(student); //khateeja
// question("Ask Douts"); //error
//-----------------------------------------------56
function teacher1(){

}
const myteacher =function anotherTeacher(){
    console.log("Hello");
}
console.log(teacher1());
console.log(myteacher());
console.log(anotherTeacher()); // error as this one is in another scope...
/*
Named function has more benifits.
for debugging
for named stack
*/

