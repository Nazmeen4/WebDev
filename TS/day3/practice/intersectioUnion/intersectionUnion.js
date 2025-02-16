var shapeOfObject = "circle"; //if we assign Circle to the variale It will through the error
var shapeOfObject1 = 'trapezium';
console.log(shapeOfObject);
console.log(shapeOfObject1);
var student1 = {
    name: "Jack",
    age: 20,
    section: "IT",
    id: "213A",
};
console.log(student1);
var student2 = {
    name: "Jack",
    //age :20, //this will work
    section: "IT",
    id: "213A", //If we comment this one then it will throw an error as any one of the type need to inccluded completely.
};
console.log(student2);
