interface Person {
  name: string;
  age: number;
}

type typePerson = {
  name: string;
  age: number;
};

let person1: Person;
let person2: typePerson;
// 유니온 타입등 필요한 타입을 조합해서 사용할때 타입별칭을 이용해서 사용
