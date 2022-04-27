const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");

let count = 0;
number.innerText = count;

const updateNumber = () => {
    number.innerText = count;
}

const handleAdd = () => {
    count++;
    updateNumber();
};

const handleMinus = () => {
    count--;
    updateNumber();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);