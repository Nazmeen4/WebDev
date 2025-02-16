 async function loop()
    {for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },3000);
}
}
await loop();


function outer(){
    let count=0;
    return{
        increment:function(){
            count++;
            console.log(count);
        },
        decrement:function(){
            count--;
            console.log(count);
        }
    }
}
let count=outer();
count.decrement();
count.increment();