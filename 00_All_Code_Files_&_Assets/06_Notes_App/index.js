const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",(e)=>{
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.className = "delete-icon";
    img.src = "./Assets/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName == "IMG"){
        e.target.parentNode.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((note)=>{
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})