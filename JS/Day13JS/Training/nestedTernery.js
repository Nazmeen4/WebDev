//basics
let age=101;
if(age<=3){
    console.log("Hello child");
}else if(age <= 30){
    console.log("Hello Youth");
}else if(age <=100){
    console.log("Hello Adult");
}else{
    console.log("NaN");
}
//Ternery operators(nested)
(age<=3)?console.log("Chile"):((age<=30)?console.log("Youth"):((age <=100)? console.log("Adult") : console.log("Nan")));