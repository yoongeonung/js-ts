import {createStore} from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");

const countModifier = (state = 0, action) => {
    console.log(action);
    if (action.type === "ADD") {
        return state + 1;
    } else if (action.type === "MINUS") {
        return state - 1;
    } else {
        return state;
    }
}

const countStore = createStore(countModifier);

console.log(countStore.getState());

add.addEventListener("click", () => countStore.dispatch({type: "ADD"}));
minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}));


countStore.subscribe(() => {
    number.innerText = countStore.getState();
});