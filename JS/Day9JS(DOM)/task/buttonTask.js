let div=document.createElement("div");
div.id="main-div";
document.body.appendChild(div);
let button=document.createElement("button");
button.innerHTML="Plus";
button.id="plus";
div.appendChild(button);
let textField=document.createElement("input");
div.appendChild(textField);
let count=0;
button.onclick=function(){
    count++;
    textField.value=count;
    console.log(count);
    console.log("Incremented");
    if(count>0){
        textField.style.backgroundColor="green";
    }
    else if(count==0){
        textField.style.backgroundColor="white";
    }
}
let button2=document.createElement("button");
button2.innerHTML="Minus";
button2.id="minus";
div.appendChild(button2);
button2.onclick=function(){
    count--;
    textField.value=count;
    console.log(count);
    console.log("Decremented");
    if(count<0){
        textField.style.backgroundColor="red";
    }
    else if(count==0){
        textField.style.backgroundColor="white";
    }
}
