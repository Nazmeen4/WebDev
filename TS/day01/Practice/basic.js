var a1;
a1 = 10;
console.log(a1);
//undefine null
var a2;
console.log(a2);
console.log(typeof (a2));
var a4;
console.log(a4);
//any unkown
var a3;
a3 = "Hell";
a3.toUpperCase();
console.log(a3);
var a5;
a5 = "Hell";
//a5.toUpperCase(); //gets error
console.log(a5);
console.log(typeof a5);
/*

let s1: Shape; //the value of s1 need to be from Shape only. Other than thst not allowed
s1 = 'circle';
type Shape ='circle' | 'square' | 'rectangle'  //this will declare its own type
*/
//never
// function help() :never{
// }
var s1; //the value of s1 need to be from Shape only. Other than thst not allowed
s1 = 'circle';
s1 = 'square';
function getArea(shape) {
    switch (shape) {
        case "circle": return 3.41 * 5 * 5;
        case "square": return 3.41 * 5 * 4;
        case "rectangle": return 3.41 * 5 * 5;
        default: console.log("Never scope");
    }
}
console.log(getArea(s1), 'area');
