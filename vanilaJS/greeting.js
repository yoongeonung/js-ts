const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASS_NAME_HIDDEN = "hidden";
const STORAGE_ITEM_NAME = "name";

const paintName = () => {
    greeting.innerHTML = `こんにちは、${getUserName()}さん`;
    loginInput.classList.add(CLASS_NAME_HIDDEN);
}

const getUserName = () => {
    return localStorage.getItem(STORAGE_ITEM_NAME);
}

const setUserName = () => {
    const userName = loginInput.value;
    localStorage.setItem(STORAGE_ITEM_NAME, userName);
}

const onFormSubmit = (event) => {
    event.preventDefault();
    setUserName();
    paintName();
}

const isUserName = () => {
    return getUserName() !== null;
}

const startPage = () => {
    if (isUserName()) {
        paintName();
        return;
    }
    loginForm.addEventListener("submit", onFormSubmit);
}

startPage();