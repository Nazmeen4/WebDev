export let toDo=[];
export let obj={
    task:"Name",
    status:"Status",
    date:"Date"
}
export function addTask(task,status,date){
    toDo.push({
        [obj.task]:task,
        [obj.status]:status,
        [obj.date]:date
    })
}
export function deleteTask(task){
    toDo.map((item=>{
        if(item[obj.task]==task){
            let index=toDo.indexOf(item);
            console.log(index);
            toDo.splice(index,1);
        }
    }))
}
export function updateTask(task,status,date){
    toDo.find((item=>{
        if(item[obj.task]==task){
            item[obj.status]=status;
            item[obj.date]=date;
        }
    }))
}
export function searchTask(task){
    toDo.find((item=>{
        if(item[obj.task]==task){
            console.log(item);
        }
    }))
}
export function displayTask(){
    console.log(toDo);
}
export function sortTaskOnDateA(){
    toDo.sort((a,b) => {
        return new Date(a[obj.date]) - new Date(b[obj.date]);
    })
}
export function sortTaskOnDateD(){
    toDo.sort((a,b) => {
        return new Date(b[obj.date]) - new Date(a[obj.date]);
    })
}
export function filterTaskOnStatus(status){
    toDo.filter((item =>{
        if(item[obj.status]==status){
            console.log(item);
        }
    })
    )
}
export function deleteaAll(){
    toDo.splice(0,toDo.length);
}
/*console.log("To Do List");
addTask("Task1","Pending","2021-09-01");
addTask("Task2","Pending","2021-09-01");
addTask("Task3","Pending","2021-09-01");
addTask("Task4","Pending","2021-09-01");
displayTask();
updateTask("Task2","Completed","2021-09-02");
console.log("After Updating Task2");
displayTask();
deleteTask("Task3");
console.log("After Deleting Task3");
displayTask();
console.log("Search Task3");
searchTask("Task3");
sortTaskOnDateA();
console.log("Sort based on Date Ascending");
displayTask();
sortTaskOnDateD();
console.log("Sort based on Date Descending");
displayTask();
console.log("Filter based on Completed");
filterTaskOnStatus("Completed");
console.log("Filter based on Pending");
filterTaskOnStatus("Pending");
console.log("Delete All");
deleteaAll();
displayTask();*/