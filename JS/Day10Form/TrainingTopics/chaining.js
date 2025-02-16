//obj.?property   --------------------------->  ?.
let obj={
    name:"Naz",
    age:22
}
console.log(obj.name)// Naz
console.log(obj.addres) //undefine
//console.log(obj.address.street) //gives error
console.log(obj.addres?.street) ///It Wont give error
//obj.function.?() ------------------------> ?.()
obj.ask=function(){
    console.log("Hello World");
}
console.log(obj.ask()); // Gives Output
//obj.say(); //Gives Error
console.log(obj.say?.()); //givws undefine
//obj?.[property] ----------------------> ?.[]
console.log(obj[ask()]);