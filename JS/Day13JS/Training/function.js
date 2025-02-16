// function expression vs function declaration
function outer(){
    let a=20;
    function inner(){
        return "Hello World";
    }
    console.log(inner()); //access
}
outer()
//console.log(inner()); //error
let a;
function outer1(){
    val=20;
    let a =function (){
        console.log("Hello From inner");
        return("Bye");
    }
    a();
}
outer1();
a();