let userName ="Jack"; //implicit
console.log(userName);
let age : number =32; //explicit
console.log(age)

//userName=33 //throes error
let fName : string ="Rose";
console.log(fName);
//Math.round(fName); //gives error

//any keyword

let lName :any ="Jill";
console.log(lName);
Math.round(lName); //this not gives error as the type ois any
console.log(typeof lName)
