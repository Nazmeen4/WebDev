//typeOf

function printAll(val:string|string[]):void{
    if(typeof(val)=== 'string'){
        console.log(val);
    }else{
        val.forEach((item)=>{
            console.log(item);
        });
    }
}
let name1:string="Help Everyone";
printAll(name1);
let nameAll:string[]=['Jack','jill','rose'];
printAll(nameAll);

//in operator

type bird={
    fly():void,
    noOfLegs:number;
}
type fish={
    swim():void,
    noOfGills:number;
}
function animalMove(animal : bird| fish){
    if("fly" in animal){
        animal.fly();
        console.log(animal.noOfLegs)
        console.log("Its a bird type");
    }else{
        animal.swim();
        console.log(animal.noOfGills);
        console.log("Its a fish type");
    }
}
let animal:fish={
    swim:()=>{
        console.log("I am fish and I can swim");
    },
    noOfGills:20,
}
animalMove(animal);

//instanceOf

class person{
    nameOfStudent:string="Jack";
    ageOfStudent:number=21;
    setValues(name2:string,age:number):void{
        this.ageOfStudent=age;
        this.nameOfStudent=name2;
    }
}
class employee{

}
let obj4=new person();
function display(obj:person | employee){
    if(obj instanceof person){
        console.log("Inside the person scope");
        obj.setValues("Jill",23);
        console.log(obj.ageOfStudent,obj.nameOfStudent);
    }else{
        console.log("Inside employee scope");
    }
}
display(obj4);