//basic function type
console.log("----------------------------1--------------");
function ask(name : string, greet : string) {
    console.log(greet+" "+name);
}
ask("Jack","Good Morning"); //Good Morning Jack

console.log("----------------------------2--------------");
//function with return type(void)
function say(name: string , message: string): void{
    //return name+message ; //error
    console.log(name+ " " + message);
}
say("Nick","Do Homework");

console.log("----------------------------3--------------");
//return Type as Number
function cal(a:number,b:number):number {
    return (a+b);
}
console.log(cal(25,8));

console.log("----------------------------4--------------");
//return type as string
function greet(name:string , greet : string):string{
    return name+" "+greet;
}
let greet1 : string=greet("Jill", "Good evening");
console.log(greet1);
//let greet2: number=greet("Jack","Good Night") // throws error..

//return type as "any"


console.log("----------------------------5--------------");
function greetCal(val1: number, val2: string) : any{
    if(val1!=0){
        console.log('if')
        return (val1);
    }else{
        console.log('else')
        return(val1+" "+val2);
    }
}
let num:number =greetCal(0,"Help"); //error if its unknown
//it wont give any error if the return type is any
console.log(num,typeof num) // Error

console.log("----------------------------6--------------");
//function with return type as unknown
function askHelp(val1: number , val2 :boolean) : unknown{
    if(val2){
        return val1;
    }else{
        return val2;
    }
}
let num2  = askHelp(123,true);
let num3 = askHelp(123,false);
console.log(num2+ " "+ num3);
if(typeof num2 != 'number'){
    console.log("Its a number ",num2);
}else if(typeof num3 == 'boolean'){
    console.log("It's a boolean value",num3);
}

console.log("Never TYpe------------------------7")

function infinity() : never{
    while(true){
        console.log("Inside an infinity loops");
    }
}
infinity();  // this will ruun infinite many time... they will never get end.

