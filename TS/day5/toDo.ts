// localStorage.clear();
let table = document.createElement("table");
let main = document.getElementById("divMain");
table.id="table";
let tbody = document.createElement("tbody");
table.appendChild(tbody);
interface taskInterface{
    id:string;
    tittle:string;
    description:string;
    dueDate:string;
    priority:string;
    status:string;
    category:string;
    createdDate:string;
    action:boolean;

}
//local storage
//function to save
function saveTask():void{
    let allTask:taskInterface[]=[];
    let task = document.querySelectorAll('tbody tr');
    allTask=[];
    task.forEach((taskRow)=>{
        let row =taskRow as HTMLTableRowElement;
        allTask.push({
            id:row.cells[0].innerHTML,
            tittle: (row.cells[1].querySelector("input") as HTMLInputElement).value,
            description: (row.cells[2].querySelector("input") as HTMLInputElement).value,
            dueDate: (row.cells[3].querySelector("input") as HTMLInputElement).value,
            priority: (row.cells[4].querySelector("select") as HTMLSelectElement).value,
            status: (row.cells[5].querySelector("select") as HTMLSelectElement).value,
            category: (row.cells[6].querySelector("select") as HTMLSelectElement).value,
            createdDate: (row.cells[7].querySelector("input") as HTMLInputElement).value,
            action:(row.cells[8].querySelector("input[type='checkbox']") as HTMLInputElement).checked
        });
    });
    localStorage.setItem("task",JSON.stringify(allTask));
}
//load from local
function loadTask():void{
    let task=localStorage.getItem("task");
    tbody.innerHTML="";
    if(task){
        let taskArr: taskInterface[]=JSON.parse(task);
        tableHead();
        taskArr.forEach((row)=>{
            console.log(row);
            addTask(row);
        })
    }

}

function addTask(task: Partial<taskInterface> = {}):void{
    //adding rows
    let rowInput = document.createElement("tr");
    //first cell task
    let taskCell=document.createElement("td");
    taskCell.innerHTML=task.id ||(Math.floor((Math.random() * 1000) + 1)).toString();
    rowInput.appendChild(taskCell);
    //second cell tittle
    let tittleCell = document.createElement("td");
    let tittleInput=document.createElement("input");
    tittleInput.value=task.tittle|| "";
    //tittleInput.oninput =saveTask;
    tittleCell.appendChild(tittleInput);
    rowInput.appendChild(tittleCell);
    //third cell description
    let descriptionCell = document.createElement("td");
    let descriptionInput = document.createElement("input");
    descriptionInput.value= task.description || "";
    //descriptionInput.oninput =saveTask;
    descriptionCell.appendChild(descriptionInput);
    rowInput.appendChild(descriptionCell)
    //fourth cell dueDate
    let dueDateCell = document.createElement("td");
    let dueDateInput = document.createElement("input");
    dueDateInput.type="date";
    dueDateInput.value=task.dueDate || "";
    // dueDateInput.oninput =saveTask;
    dueDateCell.appendChild(dueDateInput);
    rowInput.appendChild(dueDateCell)
    //fifth cell priority

    let priorityCell = document.createElement("td");
    let priorityInput = document.createElement("select");
    //optoin1
    let opt1Priority = document.createElement("option");
    opt1Priority.innerHTML="High";
    opt1Priority.value="High";
    priorityInput.appendChild(opt1Priority);
    //option2
    let opt2Priority = document.createElement("option");
    opt2Priority.innerHTML="Medium";
    opt2Priority.value="Medium";
    priorityInput.appendChild(opt2Priority)
    //option3
    let opt3Priority = document.createElement("option");
    opt3Priority.innerHTML="Low";
    opt3Priority.value="Low";
    priorityInput.appendChild(opt3Priority)

    priorityInput.value=task.priority || "Medium"
    // priorityInput.onchange =saveTask;
    priorityCell.appendChild(priorityInput)
    rowInput.appendChild(priorityCell);
    
    //sixth cell status
    let statusCell = document.createElement("td");
    let statusInput = document.createElement("select");
   //optoin1
    var opt1Status = document.createElement("option");
    opt1Status.innerHTML = "Completed";
    opt1Status.value = "Completed";
    statusInput.appendChild(opt1Status);
    //option2
    var opt2Status = document.createElement("option");
    opt2Status.innerHTML = "In-Progress";
    opt2Status.value = "In-Progress";
    statusInput.appendChild(opt2Status);
    //option3
    var opt3Status = document.createElement("option");
    opt3Status.innerHTML = "Not-started";
    opt3Status.value = "Not-started";
    statusInput.appendChild(opt3Status)

    statusInput.value=task.status || "In-Progress";
    // statusInput.onchange=saveTask;
    statusCell.appendChild(statusInput);
    rowInput.appendChild(statusCell);

    //seventhCell category
    let categoryCell = document.createElement("td");
    let categoryInput = document.createElement("select");
    //optoin1
    let opt1Category = document.createElement("option");
    opt1Category.innerHTML="Fitness";
    opt1Category.value="Fitness";
    categoryInput.appendChild(opt1Category);
    //option2
    let opt2Category = document.createElement("option");
    opt2Category.innerHTML="Education";
    opt2Category.value="Education";
    categoryInput.appendChild(opt2Category)
    //option3
    let opt3Category = document.createElement("option");
    opt3Category.innerHTML="Office";
    opt3Category.value="Office";
    categoryInput.appendChild(opt3Category)
    
    categoryInput.value=task.category || "Education";
    // categoryInput.onchange=saveTask;
    categoryCell.appendChild(categoryInput);
    rowInput.appendChild(categoryCell);

    //eighth cell created date
    let createdDateCell = document.createElement("td");
    let createdDateInput = document.createElement("input");
    createdDateInput.type="date";
    createdDateInput.innerHTML=task.createdDate || "";
    //categoryInput.oninput=saveTask;
    createdDateCell.appendChild(createdDateInput);
    rowInput.appendChild(createdDateCell)
    
    //nineth cell action
        //total 3 actions...
        //1. edit
        //2. delete
        //3. mark as completed.
        //4. save option
    
    let actionCell = document.createElement("td");
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML="Edit";
    btnEdit.onclick=function(){
        tittleInput.disabled =false;
        descriptionInput.disabled =false;
        dueDateInput.disabled =false;
        priorityInput.disabled =false;
        statusInput.disabled =false;
        categoryInput.disabled =false;
        createdDateInput.disabled =false;
        saveTask();
    }

    let btnDelete = document.createElement("button");
    btnDelete.innerHTML="Delete";
    btnDelete.onclick=function(){
        rowInput.remove();
        let totalTask: NodeListOf<HTMLTableRowElement>= document.querySelectorAll("tbody tr");
        let len = totalTask.length;
        if(len == 0){
            let thead1=document.querySelector("thead");
            thead1?.remove();
        }
    }
    let markComplete = document.createElement("input")
    markComplete.type="checkBox";
    markComplete.value="true";
    markComplete.onchange=function(){
        if(markComplete.checked){
            rowInput.style.textDecoration = markComplete.checked ? "line-through" : "none";
            saveTask();
        }else{
            rowInput.style.textDecoration="none";
        }
    }
    let btnSave=document.createElement("button");
    btnSave.innerHTML="Save";
    btnSave.onclick=function(){
        tittleInput.disabled = true;
        descriptionInput.disabled = true;
        dueDateInput.disabled = true;
        priorityInput.disabled = true;
        statusInput.disabled = true;
        categoryInput.disabled = true;
        createdDateInput.disabled = true;
        saveTask();
    }

    actionCell.appendChild(btnEdit);
    actionCell.appendChild(btnDelete);
    actionCell.appendChild(btnSave);
    actionCell.appendChild(markComplete);
    rowInput.appendChild(actionCell);
    console.log("test")
    rowInput.ondblclick = function (event: MouseEvent) {
        console.log("Double Clicked");
        let row = event.currentTarget as HTMLTableRowElement ;
        let inputs:NodeListOf<HTMLInputElement | HTMLSelectElement> = row.querySelectorAll("input, select");
        inputs.forEach((input) => {
            (input as HTMLInputElement | HTMLSelectElement).disabled = false;
        });
    };
    
    tbody.appendChild(rowInput);
}
function tableHead():void{
    let totalTask = document.querySelectorAll("tbody tr");
    if(totalTask.length == 0){
        let thead = document.createElement("thead");
        let newRow=document.createElement("tr");

        let taskId=document.createElement("th");        //1
        taskId.innerHTML="Task Id";
        newRow.appendChild(taskId);

        let tittle=document.createElement("th");        //2
        tittle.innerHTML="Tittle";
        newRow.appendChild(tittle);

        let description=document.createElement("th");       //3
        description.innerHTML="Description";
        newRow.appendChild(description);

        let dueDate=document.createElement("th");       //4
        dueDate.innerHTML="Due Date";
        newRow.appendChild(dueDate);

        let priority=document.createElement("th");          //5
        priority.innerHTML="Priority";
        newRow.appendChild(priority);

        let status=document.createElement("th");            //6
        status.innerHTML="Status";
        newRow.appendChild(status);

        let category=document.createElement("th");          //7
        category.innerHTML="Category";
        newRow.appendChild(category);

        let createdDate=document.createElement("th");           //8
        createdDate.innerHTML="Created Date";
        newRow.appendChild(createdDate);

        let action=document.createElement("th");            //9
        action.innerHTML="Actions";
        newRow.appendChild(action);
        thead.appendChild(newRow);
        table.appendChild(thead);
    }
}
function createTask():void{
    tableHead();
    addTask();
    
}
if(main) main.appendChild(table);
document.addEventListener("DOMContentLoaded", loadTask);




//search function
function searchTask(){
    let filter=(document.getElementById('search')as HTMLInputElement).value.trim().toLowerCase();
    let rows=document.querySelectorAll('tbody tr');

    rows.forEach((row) => {
        let appear:boolean = false;
        let taskRow =row as HTMLTableRowElement;
        let text=(taskRow.cells[1].querySelector("input") as HTMLInputElement).value
        text=text.toLowerCase();
        if(text.indexOf(filter)!=-1){
            appear=true;
        }
        (row as HTMLElement).style.display = appear ? "" : "none";
    });
}

function filter(filter:string, filter2?:string):void{
    let rows=document.querySelectorAll('tbody tr');
    rows.forEach((row) => {
        let appear:boolean = false;
        let taskRow =row as HTMLTableRowElement;
        let text=(taskRow.cells[5].querySelector("select") as HTMLSelectElement).value
        text=text.toLowerCase();
        console.log(text,"filterText")
        if((text.indexOf(filter)) !=-1){
            appear=true;
            console.log(text.indexOf(filter))
        }
        if(filter2){
            if((text.indexOf(filter2)) !=-1){
                appear=true;
            }
        }
        (row as HTMLElement).style.display = appear ? "" : "none";
    });
}
//filter
function filterTask(){
    let filterText=(document.getElementById('filter')as HTMLInputElement).value.toLowerCase();
    console.log(filterText)
    switch(filterText){
        case 'completed': {
            filter("completed"); 
            break;
        }
        case 'all':{
            filter("");
            break;
        }
        case 'pending':{
            console.log("pending")
            filter("in-progress","not-started");
            break;
        }
    }
}