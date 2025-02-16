//closure
let val=function withIIFE(){
    let x=10;
    return (
        function(){
            x++;
            return x;
        }
    )();
     
}
let re = val();
console.log(re);
console.log(re);