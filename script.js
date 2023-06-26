const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function showTask(){
let showList = document.getElementById("show-list");
showList.classList.add("show-container");
newTask();
}

function newTask(){
    if(inputBox.value === ""){
        alert("Enter a task and press Add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        showList.classList.remove("show-container");
    }
})