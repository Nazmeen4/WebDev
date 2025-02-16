let obj1={
    name:"Amulya",
    age:20,
    detail:function(){
        return this.name + this.age;
    }
}
let obj2={
    name:"Nazmeen",
    age:21,
    detail:obj1.detail(),
}
console.log(obj1.detail());
console.log(obj2.detail);