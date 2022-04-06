const clockDisplay = document.querySelector("#clock");

let hour;
let minute;
let seconds;

const getTime = () => {
    hour = new Date().getHours().toString().padStart(2,'0');
    minute = new Date().getMinutes().toString().padStart(2,'0');
    seconds = new Date().getSeconds().toString().padStart(2,'0');
    clockDisplay.innerHTML = `${hour} : ${minute} : ${seconds}`;
}

const startClock = () => {
    setInterval(getTime, 1000);
}

getTime();
startClock();