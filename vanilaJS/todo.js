const form = document.querySelector("#todo-form");
const ul = document.querySelector("#todo-list");
const input = document.querySelector("#todo-form input");

let todoItems = [];

const saveTodoItemsToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
};

const createLi = id => {
    const li = document.createElement("li");
    li.id = id;
    return li;
};

const createSpan = text => {
    const span = document.createElement("span");
    span.innerText = text;
    return span;
};

const onClickedDeleteBtn = event => {
    const parentElementLi = event.target.parentElement;
    parentElementLi.remove();
    todoItems = todoItems.filter((wantToDeleteLi) => wantToDeleteLi.id !== parseInt(parentElementLi.id));
    saveTodoItemsToLocalStorage();
};

const createDeleteBtn = () => {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "☠️";
    deleteBtn.addEventListener("click", onClickedDeleteBtn);
    return deleteBtn;
};

const paintTodoItem = ({id,text}) => {
    const li = createLi(id);
    const span = createSpan(text);
    const deleteBtn = createDeleteBtn();

    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
};

const getInputValue = () => input.value;

const hideInputText = () => {
    input.value = "";
};

const createTodoItem = () => {
    const inputValue = getInputValue();
    hideInputText();
    return {
        text: inputValue,
        id: Date.now(),
    };
};

const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = createTodoItem();
    todoItems.push(todoItem);
    paintTodoItem(todoItem);
    saveTodoItemsToLocalStorage();
}

function hasTodoItemInLocalStorage() {
    const getTodoItemsToLocalStorage = localStorage.getItem("todos");
    if (getTodoItemsToLocalStorage !== null) {
        todoItems = JSON.parse(getTodoItemsToLocalStorage);
        todoItems.forEach((todoItem) => paintTodoItem(todoItem));
    }
}

const main = () => {
    form.addEventListener("submit", handleSubmit);
    hasTodoItemInLocalStorage();
}

main();