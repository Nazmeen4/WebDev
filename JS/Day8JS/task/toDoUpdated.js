let toDo=[];
let obj={
    task:"Name",
    status:"Status",
    date:"Date"
}




//adding
obj.task="Task1";
obj.status="Pending";
obj.date="01-09-2021";
toDo.push(...obj);
console.log(toDo);
obj.task="Task2";
obj.status="Pending";
obj.date="01-09-2021";
toDo.push(obj);
console.log(toDo);
