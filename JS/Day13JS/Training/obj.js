personA={
    fname:"aa",
    lname:"bbb",
    full:function(){
        return this.fname+this.lname
    }
}
console.log(personA.full());

personB={
    fname:"bbb",
    lname:"ccc",
    ///full:,
}
console.log(personA.full.call(personB))
/////////------------------------------------call apply bind
let out = personA.full.bind(personB)
console.log(out())