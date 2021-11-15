var button = document.getElementById("enter");
var input = document.getElementById("user");
var ul = document.querySelector("ul");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var cancel = document.querySelector(".del");
var list = document.querySelector("li");

function inputlength() {
    return input.value.length;
}
    
function createListElement() {
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addEventAfterClick() {
        if (inputlength() > 0) {
            createListElement();
        }
}

function addEventAfterkeypress(event) {
    if (inputlength() > 0 && event.keyCode === 13) {
        createListElement();
    }  
}

button.addEventListener("click", addEventAfterClick);  
input.addEventListener("keypress", addEventAfterkeypress);


function removeList() {
    if (cancel.innerText === "Delete" || list.className === "undone") {
        cancel.innerText = "Redo";
        list.className = "done";
    } else{
        cancel.innerText = "Delete";
        list.className = "none";
    }
}    
cancel.addEventListener("click" , removeList);

function colorgradient(input){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    +")";
}


color1.addEventListener("input" , colorgradient);
 

color2.addEventListener("input" , colorgradient);






    



