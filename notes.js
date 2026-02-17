const addBtn = document.getElementById("addBtn");
const noteText = document.getElementById("noteText");
const notesList = document.getElementById("notesList");

addBtn.addEventListener("click", function () {
    const text = noteText.value.trim();

    if (text === "") return;

    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        notesList.removeChild(noteDiv);
    };

    noteDiv.appendChild(deleteBtn);
    notesList.appendChild(noteDiv);

    noteText.value = "";
});
