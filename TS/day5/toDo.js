// localStorage.clear();
var table = document.createElement("table");
var main = document.getElementById("divMain");
table.id = "table";
var tbody = document.createElement("tbody");
table.appendChild(tbody);
//local storage
//function to save
function saveTask() {
    var allTask = [];
    var task = document.querySelectorAll('tbody tr');
    allTask = [];
    task.forEach(function (taskRow) {
        var row = taskRow;
        allTask.push({
            id: row.cells[0].innerHTML,
            tittle: row.cells[1].querySelector("input").value,
            description: row.cells[2].querySelector("input").value,
            dueDate: row.cells[3].querySelector("input").value,
            priority: row.cells[4].querySelector("select").value,
            status: row.cells[5].querySelector("select").value,
            category: row.cells[6].querySelector("select").value,
            createdDate: row.cells[7].querySelector("input").value,
            action: row.cells[8].querySelector("input[type='checkbox']").checked
        });
    });
    localStorage.setItem("task", JSON.stringify(allTask));
}
//load from local
function loadTask() {
    var task = localStorage.getItem("task");
    tbody.innerHTML = "";
    if (task) {
        var taskArr = JSON.parse(task);
        tableHead();
        taskArr.forEach(function (row) {
            console.log(row);
            addTask(row);
        });
    }
}
function addTask(task) {
    if (task === void 0) { task = {}; }
    //adding rows
    var rowInput = document.createElement("tr");
    //first cell task
    var taskCell = document.createElement("td");
    taskCell.innerHTML = task.id || (Math.floor((Math.random() * 1000) + 1)).toString();
    rowInput.appendChild(taskCell);
    //second cell tittle
    var tittleCell = document.createElement("td");
    var tittleInput = document.createElement("input");
    tittleInput.value = task.tittle || "";
    //tittleInput.oninput =saveTask;
    tittleCell.appendChild(tittleInput);
    rowInput.appendChild(tittleCell);
    //third cell description
    var descriptionCell = document.createElement("td");
    var descriptionInput = document.createElement("input");
    descriptionInput.value = task.description || "";
    //descriptionInput.oninput =saveTask;
    descriptionCell.appendChild(descriptionInput);
    rowInput.appendChild(descriptionCell);
    //fourth cell dueDate
    var dueDateCell = document.createElement("td");
    var dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.value = task.dueDate || "";
    // dueDateInput.oninput =saveTask;
    dueDateCell.appendChild(dueDateInput);
    rowInput.appendChild(dueDateCell);
    //fifth cell priority
    var priorityCell = document.createElement("td");
    var priorityInput = document.createElement("select");
    //optoin1
    var opt1Priority = document.createElement("option");
    opt1Priority.innerHTML = "High";
    opt1Priority.value = "High";
    priorityInput.appendChild(opt1Priority);
    //option2
    var opt2Priority = document.createElement("option");
    opt2Priority.innerHTML = "Medium";
    opt2Priority.value = "Medium";
    priorityInput.appendChild(opt2Priority);
    //option3
    var opt3Priority = document.createElement("option");
    opt3Priority.innerHTML = "Low";
    opt3Priority.value = "Low";
    priorityInput.appendChild(opt3Priority);
    priorityInput.value = task.priority || "Medium";
    // priorityInput.onchange =saveTask;
    priorityCell.appendChild(priorityInput);
    rowInput.appendChild(priorityCell);
    //sixth cell status
    var statusCell = document.createElement("td");
    var statusInput = document.createElement("select");
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
    statusInput.appendChild(opt3Status);
    statusInput.value = task.status || "In-Progress";
    // statusInput.onchange=saveTask;
    statusCell.appendChild(statusInput);
    rowInput.appendChild(statusCell);
    //seventhCell category
    var categoryCell = document.createElement("td");
    var categoryInput = document.createElement("select");
    //optoin1
    var opt1Category = document.createElement("option");
    opt1Category.innerHTML = "Fitness";
    opt1Category.value = "Fitness";
    categoryInput.appendChild(opt1Category);
    //option2
    var opt2Category = document.createElement("option");
    opt2Category.innerHTML = "Education";
    opt2Category.value = "Education";
    categoryInput.appendChild(opt2Category);
    //option3
    var opt3Category = document.createElement("option");
    opt3Category.innerHTML = "Office";
    opt3Category.value = "Office";
    categoryInput.appendChild(opt3Category);
    categoryInput.value = task.category || "Education";
    // categoryInput.onchange=saveTask;
    categoryCell.appendChild(categoryInput);
    rowInput.appendChild(categoryCell);
    //eighth cell created date
    var createdDateCell = document.createElement("td");
    var createdDateInput = document.createElement("input");
    createdDateInput.type = "date";
    createdDateInput.innerHTML = task.createdDate || "";
    //categoryInput.oninput=saveTask;
    createdDateCell.appendChild(createdDateInput);
    rowInput.appendChild(createdDateCell);
    //nineth cell action
    //total 3 actions...
    //1. edit
    //2. delete
    //3. mark as completed.
    //4. save option
    var actionCell = document.createElement("td");
    var btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.onclick = function () {
        tittleInput.disabled = false;
        descriptionInput.disabled = false;
        dueDateInput.disabled = false;
        priorityInput.disabled = false;
        statusInput.disabled = false;
        categoryInput.disabled = false;
        createdDateInput.disabled = false;
        saveTask();
    };
    var btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    btnDelete.onclick = function () {
        rowInput.remove();
        var totalTask = document.querySelectorAll("tbody tr");
        var len = totalTask.length;
        if (len == 0) {
            var thead1 = document.querySelector("thead");
            thead1 === null || thead1 === void 0 ? void 0 : thead1.remove();
        }
    };
    var markComplete = document.createElement("input");
    markComplete.type = "checkBox";
    markComplete.value = "true";
    markComplete.onchange = function () {
        if (markComplete.checked) {
            rowInput.style.textDecoration = markComplete.checked ? "line-through" : "none";
            saveTask();
        }
        else {
            rowInput.style.textDecoration = "none";
        }
    };
    var btnSave = document.createElement("button");
    btnSave.innerHTML = "Save";
    btnSave.onclick = function () {
        tittleInput.disabled = true;
        descriptionInput.disabled = true;
        dueDateInput.disabled = true;
        priorityInput.disabled = true;
        statusInput.disabled = true;
        categoryInput.disabled = true;
        createdDateInput.disabled = true;
        saveTask();
    };
    actionCell.appendChild(btnEdit);
    actionCell.appendChild(btnDelete);
    actionCell.appendChild(btnSave);
    actionCell.appendChild(markComplete);
    rowInput.appendChild(actionCell);
    console.log("test");
    rowInput.ondblclick = function (event) {
        console.log("Double Clicked");
        var row = event.currentTarget;
        var inputs = row.querySelectorAll("input, select");
        inputs.forEach(function (input) {
            input.disabled = false;
        });
    };
    tbody.appendChild(rowInput);
}
function tableHead() {
    var totalTask = document.querySelectorAll("tbody tr");
    if (totalTask.length == 0) {
        var thead = document.createElement("thead");
        var newRow = document.createElement("tr");
        var taskId = document.createElement("th"); //1
        taskId.innerHTML = "Task Id";
        newRow.appendChild(taskId);
        var tittle = document.createElement("th"); //2
        tittle.innerHTML = "Tittle";
        newRow.appendChild(tittle);
        var description = document.createElement("th"); //3
        description.innerHTML = "Description";
        newRow.appendChild(description);
        var dueDate = document.createElement("th"); //4
        dueDate.innerHTML = "Due Date";
        newRow.appendChild(dueDate);
        var priority = document.createElement("th"); //5
        priority.innerHTML = "Priority";
        newRow.appendChild(priority);
        var status_1 = document.createElement("th"); //6
        status_1.innerHTML = "Status";
        newRow.appendChild(status_1);
        var category = document.createElement("th"); //7
        category.innerHTML = "Category";
        newRow.appendChild(category);
        var createdDate = document.createElement("th"); //8
        createdDate.innerHTML = "Created Date";
        newRow.appendChild(createdDate);
        var action = document.createElement("th"); //9
        action.innerHTML = "Actions";
        newRow.appendChild(action);
        thead.appendChild(newRow);
        table.appendChild(thead);
    }
}
function createTask() {
    tableHead();
    addTask();
}
if (main)
    main.appendChild(table);
document.addEventListener("DOMContentLoaded", loadTask);
//search function
function searchTask() {
    var filter = document.getElementById('search').value.trim().toLowerCase();
    var rows = document.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
        var appear = false;
        var taskRow = row;
        var text = taskRow.cells[1].querySelector("input").value;
        text = text.toLowerCase();
        if (text.indexOf(filter) != -1) {
            appear = true;
        }
        row.style.display = appear ? "" : "none";
    });
}
function filter(filter, filter2) {
    var rows = document.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
        var appear = false;
        var taskRow = row;
        var text = taskRow.cells[5].querySelector("select").value;
        text = text.toLowerCase();
        console.log(text, "filterText");
        if ((text.indexOf(filter)) != -1) {
            appear = true;
            console.log(text.indexOf(filter));
        }
        if (filter2) {
            if ((text.indexOf(filter2)) != -1) {
                appear = true;
            }
        }
        row.style.display = appear ? "" : "none";
    });
}
//filter
function filterTask() {
    var filterText = document.getElementById('filter').value.toLowerCase();
    console.log(filterText);
    switch (filterText) {
        case 'completed': {
            filter("completed");
            break;
        }
        case 'all': {
            filter("");
            break;
        }
        case 'pending': {
            console.log("pending");
            filter("in-progress", "not-started");
            break;
        }
    }
}
