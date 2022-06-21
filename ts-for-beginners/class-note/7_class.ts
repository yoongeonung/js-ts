class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        console.log('생성자 쉐키바릿')
        this.name = name;
        this.age = age;
    }
}

const kakao = new Person("kakao", 10);
console.log(kakao);

let parentA: Object = {};

