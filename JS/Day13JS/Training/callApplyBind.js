//call apply bind methods
//Borrow from the function


function greet(place,state){
    let name="Nazmeen";
    return (`Hello from ${this.name} Lives in ${place} ${state}`);
}
let obj={
    name:"Khateeja",
}

//call method
console.log(greet.call(obj,"Hyderabad","Telangana"));


//from function of other object
let obj1={
    name:"Amulya",
    ask:function(age,salary){
        return(`This is ${this.name} and my age is ${age} and salary is ${salary}`);
    }
}
let obj2={ name:"Niharaka"};
console.log(obj1.ask.call(obj2,"21",200000));

//apply method......It take second parameter as array...
console.log(obj1.ask.apply(obj2,[21,40000000]));

//bind method..It will return a function and we can invoke when needed.

let greetLater=obj1.ask.bind(obj2,20,23);
console.log(greetLater());