// union type
const logMessage = (value: string | number) => {
  // <- 이 라인에서는 두 타입의 공통된 메서드에만 접근 할 수 있다.->
  if (typeof value === 'number') {
    console.log(value.toLocaleString());
  } else {
    console.log(value.toLocaleUpperCase());
  }
};
logMessage('12345');
logMessage(12345);

interface Person {
  name: string;
  age: number;
}

interface Developer {
  language: string;
  skill: string;
}
// intersection type -> never 즉 절대 있을수 없는 타입이 된다.
const logMessageIntersection = (value: Person & Developer) => {
  console.log(value);
  value.age;
  value.language;
  value.name;
  value.skill;
};

type Kakao = Person & Developer;

const logMessageIntersection2 = (value: Kakao) => {
  console.log(value.language);
};
