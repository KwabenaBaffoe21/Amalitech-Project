const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let showlist = document.getElementById("show-list");
function addTask(){
    showlist.classList.add("show-task");
    newTask();
}

function newTask(){
        if(inputBox.value === ""){
            alert("You have to add task");
        }else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "&#x2715";
            li.appendChild(span);
        }
        inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        showlist.classList.remove("show-task")
    }
}, false);

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/icon-sun.svg";
        document.getElementById("img").style.backgroundImage="url(images/bg-desktop-dark.jpg)";
    }else{
        icon.src = "images/icon-moon.svg";
        document.getElementById("img").style.backgroundImage="url(images/bg-desktop-light.jpg)";
    }
    
} 