//promises
let myPromise = new Promise((resolve,reject)=>{
    let val=true;
    setTimeout(()=>{
        if(val){
        resolve("Success");
        }else{
            reject("Failure");
        }
    },5000);
});
myPromise
    .then((message)=>{
        console.log("From then ",message);
    })
    .catch((message)=>{
        console.log("From catch ",message);
    })
//--------------------promises using custome resolve and reject
let myProm =new Promise((resolve,reject)=>{
    let val=true;
    setTimeout(()=>{
        if(val){
            resolve("Success");
        }else{
            reject("Failure");
        }
    },2000);
})
let resolveFun = (message)=>{
    console.log(message);
};
let rejectFun = (message)=>{
    console.log(message);
};
myProm
    .then(resolveFun)
    .catch(rejectFun)