//in in objects
let obj ={
    apple:"red",
    for:"A loop keyword",
}
console.log("for" in obj) ////true
console.log(obj.apple)
console.log(obj.while) // it gives undefine
//we can use the . operator to check a key is in object or not as it return undefine if the key is not present
//but the edge case is when the valuew of a key is undefine then it will return undefine hence we can use in keyword to check the key is present or not
let test= {
    key:undefined,
}
console.log(test.key) //undefine
console.log(test.key1) ///undefine
console.log("key" in test) //true