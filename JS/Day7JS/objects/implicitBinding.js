//implicit binding
let teacher={
    name1 : "Kyle",
    ask(question){ //without this it will get error
        console.log(this.name1,question);
    }
}
console.log(teacher);
let v=teacher;
v.name1="Suzy";
v.ask("Hello, Tell Me The implicit binding. Other Instance");
let v1=teacher;
v1.ask("Why?");
v1.ask("Hello, Tell Me The implicit binding");
//to have one same function with different names
function ask(question){
    console.log(this.name,question);
}
var obj1={
    name:"Nazmeen",
    ask : ask
}
var obj2={
    name:"Khateeja",
    ask: ask
}
obj1.ask("What is your topic?");
obj2.ask("What is your topic?");
