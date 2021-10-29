// interface
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}
let developer: Developer;
let person: Person;
//구조적으로 큰 타입에 구조적으로 작은 타입(partial type)은 호환되지 않는다. => 상속등의 개념과는 다르다.
// developer = person;
person = developer;

// function
let add = (a: number) => {};
let sum = (a: number, b: number, c: string) => {};
// 함수는 위와 달리 파라미터가 많은, 즉 구조적으로 더 큰 타입이 작은 타입에 들어갈 수 없다.
// add = sum;
sum = add;
