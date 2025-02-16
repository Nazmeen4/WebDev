function promiseInsideAFun(){
    return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("01 Prints Hello");
            },2000);
            resolve("Done");
        })
}
promiseInsideAFun().then((msg)=>{
    console.log("Second says Hello",msg);
})