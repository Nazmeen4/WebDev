import * as impo from '../../Day8JS/task/toDo.js';
let div_main=document.createElement("div")
div_main.id="main-div";
let div1=document.createElement("div");
div1.id="div1";

let div2=document.createElement("div");
div2.id="div2";
div_main.appendChild(div1);
div_main.appendChild(div2);
document.body.appendChild(div_main);
//task name field
let taskname =document.createElement("input");
let nameLabel1=document.createElement("p");
div1.appendChild(nameLabel1);
nameLabel1.textContent="Task Name:";
div1.appendChild(taskname);
//task date field
let taskdate=document.createElement("input");
taskdate.type="date";
div1.appendChild(taskdate);
//button to add task
let button=document.createElement("button");
button.innerHTML="+";

button.onclick=function(){
    let div_inner=document.createElement('div');
    div_inner.style.display = "flex";
    if(taskname.value != ""){
        let taskstatus=document.createElement("select");

        let opt1=document.createElement("option");
        opt1.text="Complete";
        opt1.value="Complete";
        taskstatus.appendChild(opt1);

        let opt2=document.createElement("option");
        opt2.text="In-Complete";
        opt2.value="In-Complete";
        taskstatus.appendChild(opt2);

        let opt3=document.createElement("option");
        opt3.value="Inprogress";
        opt3.text="Inprogress";
        taskstatus.appendChild(opt3);

        div_inner.appendChild(taskstatus);

        let list1=document.createElement("li");
        list1.textContent=taskname.value +"  "+ taskdate.value;
        div_inner.appendChild(list1);

        impo.addTask(taskname.value,taskstatus.value,taskdate.value);

        let button_delete=document.createElement("button");
        button_delete.innerHTML="-";
        button_delete.onclick=function(){
            list1.remove();
            button_delete.remove();
            taskstatus.remove();
            taskdate.value=today;
        }

        div_inner.appendChild(button_delete);
        div1.appendChild(div_inner);
        taskname.value="";
        console.log("Added task successfully");
        console.log(impo.toDo);
    }
};

div1.appendChild(button);
div1.appendChild(document.createElement("br"));

div1.appendChild(document.createElement("br"));

let search=document.createElement("input");
search.placeholder="Search for a task";
div1.appendChild(search);

let button_search=document.createElement("button");
button_search.textContent = "Search";
button_search.onclick=function(){
    let query= search.value;
    let taskDivs = div1.querySelectorAll('div');
    taskDivs.forEach(taskDiv => {
        let listItem = taskDiv.querySelector('li');
        if (listItem && listItem.textContent.toLowerCase().includes(query)) {
            taskDiv.style.display = "flex"; 
        } else {
            taskDiv.style.display = "none"; 
        }
    });
    

}

div1.appendChild(button_search);
div1.appendChild(document.createElement("br"));
