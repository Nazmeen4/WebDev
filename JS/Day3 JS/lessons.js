//lesson 05 & 06
console.log(typeof notdeclare);
//---->console.log(notdeclare);  //error
let a;
console.log(typeof a);
a=null;
console.log(typeof a);
a={};
console.log(typeof a);
a=[];
console.log(typeof a);
a=20;
console.log(typeof a);
a='hello';
console.log(typeof a);
a=true;
console.log(typeof a);


//-------------------------------------------------
//lesson 8
//NaN
console.log("----------------------");
var v=Number("123a");
console.log(typeof v); //number
console.log(v);
console.log(v/'a');
console.log( ('a'/'a')); //NaN
console.log(typeof (1/'a')); //number
//lesson 09
//------------------------------------------------
//neg zero
console.log("Neg Zero ------------------------");
console.log(-0 === 0); //true
console.log(0 === 0); //true
let neg=-0;
console.log(neg); //-0
neg=neg.toString();
console.log(neg); //0
console.log(Object.is(neg,-0)); //false
console.log(Math.sign(-0)); //-0
console.log(Math.sign(0)); //0   
console.log(Math.sign(-3)); //-1
console.log(Math.sign(3)); //1
function sign(x){
    return (x!== 0) ? Math.sign(x) : Object.is(x,-0)? -1 : 1;
}
console.log(sign(+0)); //1
console.log(sign(-0)); //-1
console.log(sign(-3)); //-1
console.log(sign(3)); //1
console.log(Object.is(0,-0)); //false
console.log(0 === -0); //true
//--------------------------------------------------------
console.log("-----------------------------------------");
