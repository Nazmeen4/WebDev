let arr=[]
let set=false;
let container;
async function fetchData(){
    let response=await fetch("https://dummyjson.com/products");
    let data=await response.json();
    arr=Array.from(data.products);
    console.log(data);
    console.log(data.products[0].reviews[1].reviewerName);
    set ? alert("Already Fetched"):createMainDiv();
    set=true;
}

let ct=0;
function createDiv(tr){
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
    // console.log(arr[ct]);
    div.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    div.style.width = "250px"; // Fixed width
    div.style.height = "450px"; // Fixed height
    div.style.margin = "10px";
    div.style.textAlign = "center";
    div.style.fontFamily = "Arial";
    div.style.padding = "10px";
    div.style.backgroundColor = "#fff";
    div.style.borderRadius = "10px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-between";
    container.appendChild(div);
}
function createMainDiv(){
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
            let productDiv = arr2[idx].parentElement; // Target the parent <td> element
            productDiv.style.display = "block"; // Make sure everything is visible
        }
        for (let idx = 0; idx < arr2.length; idx++) {
            let serText = arr2[idx].textContent.toLowerCase(); 
            let productDiv = arr2[idx].parentElement; 

            if (serText.includes(filter)) {
                productDiv.style.display = "block"; 
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
        let filter = document.getElementById("search").value;
        if(ct!=30 && filter ==""){
            for(let r=0;r<10;r++){
                createDiv();
                ct++;
            }
        }else{
            alert("Already reached the limit");
        }
    }
    let div2=document.getElementById("header");
    div2.appendChild(btnSearch);
    container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.padding = "20px";
    container.style.gap = "10px";
    for(let r=0;r<10;r++){
        createDiv();
        ct++;
    }
    document.body.appendChild(container);
    let div3=document.createElement("div")
    div3.appendChild(btn);
    document.body.appendChild(div3);
    div3.style.display = "flex"
    div3.style.justifyContent="center";
}

