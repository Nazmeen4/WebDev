function isEmpty(obj){
    for(let key in obj){
        return true;
    }
    return false;
}
function mulwith2(obj){
    if(isEmpty(obj)){
        for(let key in obj){
            if(typeof(obj[key])=="number"){
                obj[key]*=2;
            }
        }
    }
}
let obj={
    name:"Jon",
    salary:1012,
    name2:"Jon2",
    salary2:2000
}
console.log(obj);
mulwith2(obj);
console.log(obj);