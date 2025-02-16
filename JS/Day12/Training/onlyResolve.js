new Promise((outer)=>{
        outer(
            new Promise((inner)=>{
                setTimeout(()=>{
                    console.log("Hello from Inner");
                    inner("Done Inner");
                    return "Outer from inner";
                },2000);
            }).then((msg)=>{
                console.log(msg);
            })
        )
}).then((msg)=>{
    console.log(msg);
})