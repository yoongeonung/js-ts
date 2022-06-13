// decl interface
interface User {
    name: string;
    age: number;
}

// decl interface to var
let user: User = {
  name: "yoon",
  age: 20,
};

// decl interface to func
let repo =  new Map();
const getUser = (id: number): User => {
    return repo.get(id);
}
const user1 = getUser(1);
console.log(user1);

// interface for functions spec
interface SumFunction {
    (a:number, b:number): number;
}
let sumFunc: SumFunction = (a, b) => a+b;
const numberResult = sumFunc(1, 2);
console.log(numberResult)

// indexing
interface StringArray {
    [index: number]: string;
}

let strArr: StringArray = ['a', 'b', 'c'];
// compile error
// strArr[0] = 10;

// dictionary pattern
interface StringRegexDic {
    [key: string]: RegExp;
}

var objDic: StringRegexDic = {
    cssFile : /\.css$/,
    jsFile : /\.js$/,
}

// extends interface
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

let yoon: Developer = {
    name: "yoon",
    age: 20,
    language: "go"
}