let obj={
    for:"Loop keyword",
    while:"Loop keyword again",
    return :"A keyword??",
}
console.log(obj.return) //gives th outputt as "A keyword??"

//using other than alphanumeric in the key
//only underscore is allowed
let obj1={
    obj_Name:"Object with _ in  key name",
    objmy__: "Object with _ in  key name",
}
console.log(obj1);