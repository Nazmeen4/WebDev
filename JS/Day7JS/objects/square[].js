let fruit="Apple";
let color={
    fruit:"red",
    grapes:"green",
    mango:"yellow",
}
console.log(color) //this gives the fruite :red but wanted apple red
let color2={
    [fruit]: "red",
    grapes:"green",
    mango:"yellow",
}
console.log(color2) //this gives the fruite :red but wanted apple red
let grape=color2.grapes;
console.log(grape)
console.log(color2.fruit) //gives undefine
console.log(color2[fruit]) //gives red