//empty object or not
function isEmpty(obj) {
    for(let key in obj){
        return true;
    }
    return false;
}
let obj={};
console.log(isEmpty(obj));
obj.name="John";
console.log(isEmpty(obj));
delete obj.name;
console.log(isEmpty(obj));