user={
    name:"Jack",
    age:20,
}
admin={
    name:"Jill",
    age:21,
}
function ask(){
    console.log(this.name);
}
user.ask=ask;
admin.ask=ask;
user.ask();
admin.ask();
//function that return an object

function returnObj(){
    return{
        name:"Jack&JIll",
        age:30,
        salary:this,
    }
}
let fromFun=returnObj();
console.log(fromFun.salary);