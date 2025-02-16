let arr=[]
let set=false;
async function fetchData(){
    let response=await fetch("https://dummyjson.com/products");
    let data=await response.json();
    arr=Array.from(data.products);
    console.log(arr);
    set ? alert("Already Fetched"):createTable();
    set=true;
}

let ct=0;
function createDiv(tr){
    let td=document.createElement('td');
    let div=document.createElement('div');
    div.id=arr[ct].id;
    let tittle=document.createElement("h3");
    tittle.textContent=arr[ct].title;
    let img=document.createElement("img");

    img.src=arr[ct].images[0];
    img.alt = arr[ct].title;
    img.style.width = "200px"
    img.style.height="150px";
    let prize=document.createElement("h6");
    prize.textContent="$"+ arr[ct].price;
    let disc=document.createElement("h5");
    disc.textContent=arr[ct].discountPercentage+"off";
    disc.style.color="red";
    let org=document.createElement("h5");
    let o = parseFloat(arr[ct].price) - (parseFloat(arr[ct].discountPercentage) * parseFloat(arr[ct].price) / 100);
    org.textContent="Discount Cost $"+o;
    div.appendChild(tittle);
    div.appendChild(img);
    div.appendChild(prize);
    div.appendChild(disc);
    div.appendChild(org);
    console.log(arr[ct]);
    div.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    div.style.maxWidth = "300px";
    div.style.margin = "auto";
    div.style.textAlign = "center";
    div.style.fontFamily = "Arial";
    div.style.padding = "10px";
    div.style.height="450px";
    td.appendChild(div);
    tr.appendChild(td); 
}
function createTable(){
    /*let btnSearch=document.createElement("button");
    btnSearch.val="Search";
    btnSearch.innerHTML="Search";
    btnSearch.onclick=function(){
        let filter=document.getElementById("search").value;
        filter=filter.toLowerCase();
        let arr2=document.getElementsByTagName("h3");
        for(let idx=0;idx<arr2.length;idx++){
            let serText=arr2[idx].textContent.toLowerCase();
            let par =arr2[idx].parentElement.parentElement;
            if(serText.includes(filter)){
                par.style.display="table-cell";
                arr2[idx].style.border = "none";
            }
        }
    }*/
   //----------------------------
   let btnSearch = document.createElement("button");
    btnSearch.innerHTML = "Search";
    btnSearch.onclick = function () {
        let filter = document.getElementById("search").value.toLowerCase(); // Get the input value
        let arr2 = document.getElementsByTagName("h3"); // All the <h3> elements
        let set=false;
        // Reset the styles of all products (in case they were previously highlighted)
        for (let idx = 0; idx < arr2.length; idx++) {
            let productDiv = arr2[idx].parentElement.parentElement; // Target the parent <td> element
            productDiv.style.display = "table-cell"; // Make sure everything is visible
        }
        for (let idx = 0; idx < arr2.length; idx++) {
            let serText = arr2[idx].textContent.toLowerCase(); 
            let productDiv = arr2[idx].parentElement.parentElement; 

            if (serText.includes(filter)) {
                productDiv.style.display = "table-cell"; 
                set=true;
             } else {
                productDiv.style.display = "none"; 
            }
        }
        if(!set){
            alert("Not found");  
        }
    }
   //---------------------------
    let btn=document.createElement("button");
    btn.value="Load More..";
    btn.innerHTML="Load More..";
    btn.onclick=function(){
        if(ct!=30){
            for(let r=0;r<2;r++){
                let tr=document.createElement("tr");
                createDiv(tr);
                ct++;
                createDiv(tr);
                ct++;
                createDiv(tr);
                ct++;
                createDiv(tr);
                ct++;
                createDiv(tr);
                ct++;
                table.appendChild(tr);
            }
        }else{
            alert("Already reached the limit");
        }
    }
    let div2=document.getElementById("header");
    div2.appendChild(btnSearch);
    let table=document.createElement("table");
    for(let r=0;r<2;r++){
        let tr=document.createElement("tr");
        createDiv(tr);
        ct++;
        createDiv(tr);
        ct++;
        createDiv(tr);
        ct++;
        createDiv(tr);
        ct++;
        createDiv(tr);
        ct++;
        table.appendChild(tr);
    }
    table.style.width = "80%";
    table.style.borderCollapse = "collapse";
    table.style.textAlign="center";
    table.style.marginTop = "20px";
    table.style.border="1px solid black";
    table.style.marginLeft="auto";
    table.style.marginRight="auto";
    let tbody=document.createElement("tbody");
    
    
    table.appendChild(tbody);
    document.body.appendChild(table);
    let div3=document.createElement("div")
    div3.appendChild(btn);
    document.body.appendChild(div3);
    div3.style.display = "flex"
    div3.style.justifyContent="center";
}

