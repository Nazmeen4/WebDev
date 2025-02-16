import {cal as cal} from '../../Day8JS/task/calc.js';
let div_main=document.createElement("div");
div_main.id="main-div";
document.body.appendChild(div_main);
let operand1=document.createElement("input");
operand1.id="operand1";
let operand2=document.createElement("input");
operand2.id="operand2";
let operator=document.createElement("input");
operator.id="operator";
let button=document.createElement("button");
button.innerHTML="Calculate";
button.id="calculate1";
let result=document.createElement("input");
result.id="result";
result.disabled=true;
div_main.appendChild(operand1);
div_main.appendChild(operand2);
div_main.appendChild(operator);
div_main.appendChild(button);
div_main.appendChild(result);
button.onclick=function(){
    let x=parseInt(operand1.value);
    let y=parseInt(operand2.value);
    let z=operator.value.trim();
    if(z=='-'){
        result.style.backgroundColor="red";
    }else if(z=='+'){
        result.style.backgroundColor="green";
    }else if(z=='*'){
        result.style.backgroundColor="blue";
    }else if(z=='/'){
        result.style.backgroundColor="orange";
    }else{
        result.style.backgroundColor="purple";
    }
    console.log(x,y,z);
    let res=cal(x,y,z);
    console.log(res);
    result.value=res;
}
