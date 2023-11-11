const inputBox = document.getElementById("input-box");
const addBtn = document.querySelector(".todo-app button");

const listContainer = document.getElementById("list-container");

// if user press add button, the task should be added 
addBtn.addEventListener("click",(e)=>{
    if(inputBox.value === ""){
        alert("You must write something");
    }else{
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // adding remove icon X
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value="";  
    saveData();
})


// checked or removing task
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)
// the false value is event bubbling 


// Storing the task in the browser 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// displaying the data using getItem
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// localStorage and sessionStorage are web storage objects that you can use to save information on the browser. 

// 1.sessionStorage() ->Data added to sessionStorage can survive trough page reloads. 
//2.localStorage() -> localStorage keeps your data even with the browser closing and reopening.

