let a1 : number ;
a1=10;
console.log(a1);
//undefine null

let a2 : null;
console.log(a2);
console.log(typeof(a2));

let a4:undefined;
console.log(a4)


//any unkown

let a3: any;
a3="Hell";
a3.toUpperCase();
console.log(a3);

let a5: unknown;
a5="Hell";
//a5.toUpperCase(); //gets error
console.log(a5);
console.log(typeof a5)


/*

let s1: Shape; //the value of s1 need to be from Shape only. Other than thst not allowed
s1 = 'circle';
type Shape ='circle' | 'square' | 'rectangle'  //this will declare its own type
*/
//never
// function help() :never{

// }

let s1: Shape; //the value of s1 need to be from Shape only. Other than thst not allowed
s1 = 'circle';
type Shape ='circle' | 'square' | 'rectangle'  //this will declare its own type
s1='square';
function getArea(shape : Shape){
    switch(shape){
        case "circle" : return 3.41*5*5 ;
        case "square" : return 3.41*5*4 ;
        case "rectangle" : return 3.41*5*5 ;
        default : console.log("Never scope");
    }
}
console.log(getArea(s1),'area');
