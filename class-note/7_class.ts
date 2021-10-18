class PersonTest {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
}

const testPerson = () => {
  let person = new PersonTest('kakao', 20);
  console.log(person.getAge);
};

testPerson();
