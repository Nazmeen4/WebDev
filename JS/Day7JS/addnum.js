function isEmpty(obj){
    for(let key in obj){
        return true;
    }
    return false;
}
function sumSalary(obj){
    if(isEmpty(obj)){
        let sum=0;
        for(let key in obj){
            if(typeof(obj[key])=="number"){
                sum+=obj[key];
            }
        }
        return sum;
    }
    return 0;
}
let obj={
    name:"Jon",
    salary:1012,
    name2:"Jon2",
    salary2:2000
}
console.log(sumSalary(obj));