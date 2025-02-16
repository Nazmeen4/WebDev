//union
type shape="circle" | 'triangle' | 'Rectangle'  //union
let shapeOfObject:shape = "circle"; //if we assign Circle1
//  to the variale It will through the error
type polygon = shape | 'quardrilateral' | 'trapezium'
let shapeOfObject1:polygon='trapezium';
console.log(shapeOfObject);
console.log(shapeOfObject1);


//intersection
type person={
    name:string,
    age:number,
}
type student= {
    section:string,
    id:string,
}
let student1 : person & student ={ // intersection need to to include all the properties of the type
    name :"Jack",
    age :20,
    section :"IT",
    id :"213A",
}
console.log(student1);

let student2 : person | student ={ // union need to to include either the properties of the any of type
    name :"Jack",
    //age :20, //this will work
    section :"IT",
    id :"213A", //If we comment this one then it will throw an error as any one of the type need to inccluded completely.
}
console.log(student2);
