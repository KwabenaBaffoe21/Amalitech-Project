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
        saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        showlist.classList.remove("show-task")
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

var icon = document.getElementById("icon");
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "light");
let localData = localStorage.getItem("theme");
if(localData == "light"){
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    document.body.classList.remove("dark-theme");
    document.getElementById("img").style.backgroundImage="url(images/bg-desktop-light.jpg)";
}else if(localData == "dark"){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    document.body.classList.add("dark-theme");
    document.getElementById("img").style.backgroundImage="url(images/bg-desktop-dark.jpg)";
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme","dark")
        document.getElementById("img").style.backgroundImage="url(images/bg-desktop-dark.jpg)";
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme","light")
        document.getElementById("img").style.backgroundImage="url(images/bg-desktop-light.jpg)";
    }
} 

showTask()