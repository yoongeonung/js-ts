function logMessage(message: string | number) {
    if (typeof message === "string") {
        message.big();
    }
    if (typeof message === "number") {
        message.toString();
    }
    throw new TypeError("value must be string or number");
}

logMessage("kakao");
logMessage(123);

interface Developers {
    name:string;
    skill:string;
}

interface Persons {
    name:string;
    age:number;
}

function logMessage2(message2: Developers & Persons) {
    console.log(message2);
}

logMessage2({name:"kakao", skill:"go", age:11})