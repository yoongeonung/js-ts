const form = document.querySelector("#todo-form");
const ul = document.querySelector("#todo-list");
const input = document.querySelector("#todo-form input");

let TODOS = [];

function saveTODOs() {
    localStorage.setItem("todos", JSON.stringify(TODOS));
}

function deleteLi(event) {
    const parentElementLi = event.target.parentElement;
    parentElementLi.remove();
    TODOS = TODOS.filter((wantToDeleteLi) => wantToDeleteLi.id !== parseInt(parentElementLi.id));
    saveTODOs();
}

function paintLi(todoObj) {
    const li = document.createElement("li");
    li.id = todoObj.id;
    const span = document.createElement("span");
    span.innerText = todoObj.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🧑🏻‍💻";
    deleteBtn.addEventListener("click", deleteLi);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = input.value;
    input.value = "";
    const todoObj = {
        text: inputValue,
        id: Date.now(),
    }
    TODOS.push(todoObj);
    paintLi(todoObj);
    saveTODOs();
}

form.addEventListener("submit", handleSubmit);

const storedTODOs = localStorage.getItem("todos");
if (storedTODOs !== null) {
    const parsedTODOs = JSON.parse(storedTODOs);
    TODOS = parsedTODOs;
    parsedTODOs.forEach(paintLi);
}