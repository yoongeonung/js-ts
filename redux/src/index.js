import {createStore} from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");
const ADD = "ADD";
const MINUS = "MINUS";


const countModifier = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
}

const countStore = createStore(countModifier);

console.log(countStore.getState());

add.addEventListener("click", () => countStore.dispatch({type: ADD}));
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));


countStore.subscribe(() => {
    number.innerText = countStore.getState();
});