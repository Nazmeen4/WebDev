//enums

//const enums..
//in this type the values are by default assign to it. start from 0
enum direction {
    up, //0
    down, //1
    left, //2
    right //3
}
let up =direction.up;
console.log(up);
//up=23; //if we try to assign any value it throws the error. asthe enums are constant.

console.log(direction.up);

//string enums
enum promiseState{
    pending = "Pending",
    resolve = "Fulfill",
    reject= "Error",
}
console.log(promiseState.resolve);

 //hybrid enums

 enum orderStatus{
    pending="Pending",
    done="Done",
    inProgress="In progress",
    delay=10,
 }
console.log(orderStatus.pending);
console.log(typeof(orderStatus.delay));  //number
console.log(typeof(orderStatus.done));  //string
console.log(typeof(orderStatus)); //Object

 //numeric enums

 enum signal{
    red=1,
    yellow=2,
    green=3,
 }
 console.log(signal.red);

 enum status1 {  //this will get initalize to the values in increasing order
    statusNotFound = 200,
    pageNotFound, //201
    errorAtLoading, //202 
 }
 console.log(status1)


 interface trafficSignal{
   red:signal.red,
   green:signal.green,
   yellow:signal.yellow,
 }
 //console.log(trafficSignal); //we cant console the type 
 let signal2:trafficSignal={
   red:1,
   green:3,
   yellow:2, //here if i try to assign 4 to yellow it throws the error as the enums are constant
   //assigning the values other than the enum will throw the error
 }
 

interface trafficSignalNew{
   red:signal,
   light:signal[],
}

let signal3:trafficSignalNew={
   red:1,
   light:[1,2,3],  //this array will accept only the values of enum i.e, 1,2,3. if er try number other than this
   //it will give error.
}
