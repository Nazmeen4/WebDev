//finding html elements
let v1=document.getElementById("Practice-id");
let h1=document.getElementById("heading");
console.log(document.getElementById("heading"));
console.log(v1);
document.getElementById("heading").innerHTML="Hello People";
let new_tag_par=document.createElement("p");
v1.appendChild(new_tag_par);
new_tag_par.innerHTML="This isa a paragraph from dom";
v1.removeChild(h1);

