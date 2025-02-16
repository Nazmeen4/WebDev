//function
export function calculate(x,y,z){
    
    switch(z){
        case '+': return x+y;
        case '-':return x-y; 
        case '*':return x*y; 
        case '/':return (y==0)?"Division by zero is not possible":x/y;
        case '%':return (y==0)?"Division by zero is not possible":x%y;
        default: return "Invalid Operator";
    }
}
export function cal(x,y,z){
    if(typeof(x)=="number" && typeof(y)=="number"){
        return calculate(x,y,z);
    }
    else if(typeof(x)=="number" && typeof(z)=="number"){
        return calculate(x,z,y);
    }
    else if(typeof(y)=="number" && typeof(z)=="number"){
        return calculate(z,y,x);
    }
    else{
        return "Invalid Input";
    }
}
let v1="+"
console.log(cal(2,3,v1));
console.log(cal(2,'+',3));
console.log(cal('+',2,3));
console.log(cal(2,3,4));