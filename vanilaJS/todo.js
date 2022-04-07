const form = document.querySelector("#todo-form");
const ul = document.querySelector("#todo-list");
const input = document.querySelector("#todo-form input");

let todoItems = [];

const saveTodoItemsToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
};

const onClickedDeleteBtn = event => {
    const parentElementLi = event.target.parentElement;
    parentElementLi.remove();
    todoItems = todoItems.filter((wantToDeleteLi) => wantToDeleteLi.id !== parseInt(parentElementLi.id));
    saveTodoItemsToLocalStorage();
};

const createLi = todoObj => {
    const li = document.createElement("li");
    li.id = todoObj.id;
    return li;
};

const createSpan = todoObj => {
    const span = document.createElement("span");
    span.innerText = todoObj.text;
    return span;
};

const createDeleteBtn = () => {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🧑🏻‍💻";
    deleteBtn.addEventListener("click", onClickedDeleteBtn);
    return deleteBtn;
};

const paintTodoItem = todoObj => {
    const li = createLi(todoObj);
    const span = createSpan(todoObj);
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
    const todoObj = {
        text: inputValue,
        id: Date.now(),
    }
    return todoObj;
};

const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = createTodoItem();
    todoItems.push(todoItem);
    paintTodoItem(todoItem);
    saveTodoItemsToLocalStorage();
}

const main = () => {
    form.addEventListener("submit", handleSubmit);

    const getTodoItemsToLocalStorage = localStorage.getItem("todos");
    if (getTodoItemsToLocalStorage !== null) {
        todoItems = JSON.parse(getTodoItemsToLocalStorage);
        todoItems.forEach((todoItem) => paintTodoItem(todoItem));
    }
}

main();