//normal function-------------
function sum(){
    return 12;
}
let ans=sum();
console.log(ans);
//-------------------------------async
async function sum1(){
    return 12;
}
let ans1=sum1();
console.log(ans1);
///-------------------------------await---------------------
async function sum3(){
    return 12;
}
let ans3=await sum();
console.log(ans3);
//---------------------- promise pending
async function sum4() {
    let c=fetch();
    return c;
}
async function fetch(){
    return "I am a async function "
}
let ans4=sum4();
console.log(ans4)
//--------------------------------promise resolved
async function sum5() {
    let c=fetch1();
    return c;
}
async function fetch1(){
    return "I am a async function "
}
let ans5=await sum5();
console.log(ans5)
//----------------------then and catch
let out6=sum();
console.log(out6,"Before");
out6.then((res)=>{
    console.log(res),"Then";
}).catch((err)=>{
    console.log(err,"Catch")
})
