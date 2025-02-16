//code for button
document.body.style.backgroundColor="Plum";
let arr=[];
let student={
    name:"name",
    rollno:"roll",
    section:"section",
    id:"id"
}
let form=document.getElementById("form");
form.style.background="Tan"
//table
let table=document.createElement('table');
//adding style
table.style.width = "80%";
table.style.borderCollapse = "collapse";
table.style.textAlign="center";
table.style.marginTop = "20px";
table.style.border="1px solid black";
table.style.marginLeft="auto";
table.style.marginRight="auto";



let tbody=document.createElement('tbody'); //table body
let unique=[];
document.body.appendChild(table);
function validate(name,roll,id){
    let pat=/^[a-zA-z ]+/;
    if(! pat.test(name)) {
        alert("Not valid name");
        return false;
    }
    pat =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!pat.test(id)){
        alert("Not valid id");
        return false;
    }
    return true;
}
function submitButton(){
    let name=document.getElementById("fName").value;
    let rollno=document.getElementById("RollNo").value;
    let section=document.getElementById("Section").value;
    let id=document.getElementById("mail").value;
    if(!validate(name,rollno,id)) return;
    if(unique.includes(rollno)){
        alert("Enter unique roll number");
        return;
    }
    unique.push(rollno);
    alert("Submitted Succesfully");
    arr.push({
        [student.name]:name,
        [student.rollno]:rollno,
        [student.section]:section,
        [student.id]:id
    })
    let thead=document.createElement('thead'); //thead
    if(unique.length == 1){
        let theadA=['Student Name','Roll No','section','Email id'];
        theadA.forEach((heading)=>{
        let th =document.createElement('th');
        th.textContent=heading;
        if(heading=="Roll No"){
            let btn=document.createElement("button");
            btn.type="button";
            btn.innerHTML="Sort";
            btn.id="sort";
            btn.onclick=function(){
                let orgArr=[];
                let order=document.getElementById("sort").innerHTML;
                let row=Array.from(tbody.querySelectorAll('tr'));
                    row.sort((a,b)=>{
                        let A = a.cells[1].textContent.trim();
                        let B= b.cells[1].textContent.trim();
                        return A.localeCompare(B);
                    });
                //tbody.innerHTML="";
                row.forEach(r => tbody.appendChild(r));
            }
            th.append(btn);
        }
        thead.appendChild(th);
        })
        table.append(thead);
    }
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let td5=document.createElement('td');
    let td6=document.createElement('td');
    let btnDel=document.createElement('button');
    btnDel.innerHTML="X";

    btnDel.onclick=function(){
        unique.splice((unique.indexOf(rollno)),1);
        if(unique.length==0) thead.remove();
        tr.remove();
    }
    let btnEdit=document.createElement('button');
    btnEdit.innerHTML='Edit';
    btnEdit.onclick=function(){
        document.getElementById("fName").value = name;
        document.getElementById("RollNo").value = rollno;
        document.getElementById("Section").value = section;
        document.getElementById("mail").value = id;
        unique.splice((unique.indexOf(rollno)),1);
        unique.splice((unique.indexOf(id)),1);
        tr.remove();
        name=document.getElementById("fName").value;
        rollno=document.getElementById("RollNo").value;
        section=document.getElementById("Section").value;
        id=document.getElementById("mail").value;
        if(unique.includes(rollno));
    }
    td5.appendChild(btnDel);
    td6.appendChild(btnEdit);
    td1.textContent=name;
    td2.textContent=rollno;
    td3.textContent=section;
    td4.textContent=id;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.style.border="1px solid black";
    tbody.append(tr);
    updatePagination();
    
}
table.appendChild(tbody);
table.style.backgroundColor="LightGreen";

//select options for no. of pages need to dispaly 

let selectSize=document.createElement("select");
selectSize.id="selectOption" //giving id as select option
let opt0=document.createElement("option");
opt0.value=0;
opt0.innerHTML="Orignal";
let opt1=document.createElement("option");
opt1.value=5;
opt1.innerHTML="5";
let opt2=document.createElement("option");
opt2.value=10;
opt2.innerHTML="10";
selectSize.appendChild(opt0);
selectSize.appendChild(opt1);
selectSize.appendChild(opt2);
document.body.appendChild(selectSize);
//count for page
let count;
let noOfPage; 
let noOfRow;
function updatePagination(){
    count=0;
    noOfPage=document.getElementById("selectOption").value;
    console.log(noOfPage);
    if (noOfPage === 0) {
        hide();
        display(0, arrR.length - 1);
        return;
    }
    let arrR=document.getElementsByTagName('tr');
    noOfRow=Math.ceil(arrR.length/noOfPage);
    hide();
    display(0,arrR.length);
}

selectSize.addEventListener("change", updatePagination);
//button previous
let btnPrev = document.createElement("button");
btnPrev.type="button";
btnPrev.innerHTML="<-";
document.body.appendChild(btnPrev)
btnPrev.onclick=function(){
    if(count>0){
        hide();
        count--;
        let start = count*noOfPage;
        let end= start+noOfPage-1;
        pgno.innerHTML=`PageNo ${count+1}`;
        display(start,end); 
        togglePaginationButtons();
    }
}
//button next
let btnNext = document.createElement("button");
btnNext.type="button";
btnNext.innerHTML="->";
let pgno =document.createElement("text");
pgno.innerHTML="PageNo 1";
document.body.appendChild(pgno);
document.body.appendChild(btnNext);
btnNext.onclick=function(){
    if(count >= 0 && count < noOfRow-1){
        hide();
        count++;
        let start = count*noOfPage;
        let end= start+noOfPage-1;
        pgno.innerHTML=`PageNo ${count+1}`;
        display(start,end);
        togglePaginationButtons();
    }
    
}


//serach
function searchTable(){
    let filter=document.getElementById('search').value;
    let rowArr=document.getElementsByTagName('tr');
    for(let row=0;row< rowArr.length; row++){
        let valArr=rowArr[row].getElementsByTagName('td');
        let appear =false;
        for(let col = 0; col< valArr.length; col++){
            let tabledata=valArr[col].textContent;
            if(tabledata.includes(filter)){
                appear = true;
                break;
            }
        }
        rowArr[row].style.display=(appear)? "" : "none";
    }
}
//sort the table


//chat GPT
/*function sortTable() {
    let orgArr = [];
    let order = document.getElementById("sort").innerHTML;
    let row = Array.from(tbody.querySelectorAll('tr'));
    
    // Store a shallow copy of the rows for the original order
    if (orgArr.length === 0) {
        orgArr = [...row];  // Only copy once at the beginning
    }
    
    if (order === "sort") {
        // Sort the rows based on the roll number (assuming it's in the second column)
        row.sort((a, b) => {
            let A = a.cells[1].textContent.trim();  // Assuming roll number is in the second column
            let B = b.cells[1].textContent.trim();
            return A.localeCompare(B);  // Use localeCompare to compare text
        });

        // Change button text to "original"
        document.getElementById("sort").innerHTML = "original";
    } else {
        // Reset to original order
        row = [...orgArr];  // Restore the original order
        document.getElementById("sort").innerHTML = "sort";
        console.log(row,orgArr);
    }

    // Clear tbody and re-append rows in the sorted or original order
    tbody.innerHTML = "";
    row.forEach(r => tbody.appendChild(r));  // Append rows in the current order
}*/


//filter table based on Section..
/*function filterTable(){
    let filterby=document.getElementById("SectionFilter").value;
    let rowArr=document.getElementsByTagName('tr');
    rowArr.forEach(element => {
        if((element.cells[2].localeCompare(filterby))===0){
            element.style.display='';
        }
        else{
            element.style.display="none";
        }
    });
}*/
function filterTable(){
    let filter=document.getElementById('SectionFilter').value;
        let rowArr=document.getElementsByTagName('tr');
        if(filter=="None"){
            for(let row=0;row< rowArr.length; row++){
                rowArr[row].style.display="";
            }
        }else{
            for(let row=0;row< rowArr.length; row++){
                let valArr=rowArr[row].getElementsByTagName('td');
                let appear =false;
                //for(let col = 0; col< valArr.length; col++){
                    let tabledata=valArr[2].textContent;
                    //console.log(valArr[2].textContent)
                    if(tabledata && tabledata.includes(filter)){
                        rowArr[row].style.display="";
                    }else{
                        rowArr[row].style.display="none";
                    }
                //}
                //rowArr[row].style.display=(appear)? "" : "none";
            }
        }
}



//pagination
function hide(){
    let arr=document.getElementsByTagName('tr');
    for(let row=0;row<arr.length;row++){
        arr[row].style.display="none";
    }
}
function display(start,end){
    let arr=document.getElementsByTagName('tr');
    for(let row=start;row<arr.length && row <= end  ;row++){
        arr[row].style.display="";
    }
}
function togglePaginationButtons() {
    let btnPrev = document.querySelector("button[type='button'][innerHTML='<-']");
    let btnNext = document.querySelector("button[type='button'][innerHTML='->']");
    
    if (count === 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }

    if (count === noOfPage-1) {
        btnNext.disabled = true;
    } else {
        btnNext.disabled = false;
    }
}