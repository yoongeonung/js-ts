interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let Yoon: User = {
  name: 'Yoon',
  age: 20,
};

// 함수에 인터페이스 활용
const getUser = (user: User): User => {
  console.log(user);
  return user;
};
let user = getUser(Yoon);

// 함수의 구조에 인터페이스 활용
interface Sum {
  (a: number, b: number): number;
}

const sumFunc: Sum = (a: number, b: number): number => {
  return a + b;
};

// indexing
// 키값의 변수명이나 타입은 상관없이 밸류의 타입만을 정의하는 방법
interface NumberArr {
  [index: number]: number;
}
const numArray: NumberArr = [];
numArray[0] = 0;

// dictionary pattern????
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  sth: /abc/,
  123: /abc/,
};

// extend interface
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let someone: Developer = {
  name: 'someone',
  age: 100,
  language: 'ts',
};
