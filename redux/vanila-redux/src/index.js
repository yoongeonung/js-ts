import {createStore} from "redux";

const ul = document.querySelector("#todo-ul");
const input = document.querySelector("input");
const form = document.querySelector("form");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text))
}
const dispatchDeleteToDo = (e) => {
    const id = e.target.parentNode.id;
    store.dispatch(deleteToDo(id));
}

const addToDo = text => {
    return {
        type: ADD_TODO, text
    }
}

const deleteToDo = id => {
    return {
        type: DELETE_TODO, id
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== parseInt(action.id));
        default:
            return state;
    }
}

const store = createStore(reducer);


const handleInput = (e) => {
    e.preventDefault();
    const todo = input.value;
    input.value = "";
    dispatchAddToDo(todo);


}

form.addEventListener("submit", handleInput)

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(todo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "del";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = todo.id;
        li.innerText = todo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
};

store.subscribe(paintToDos);