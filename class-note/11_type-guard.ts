interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: 'kakao', skill: 'Java', age: 20 };
};

// type assertion으로 커버 가능하지만 가독성 밑 코드가 장대하다.
let test = introduce();
if ((test as Developer).skill) {
  console.log((test as Developer).skill);
}

// 타입가드 사용시에는 접두어로 is를 붙인다.
// 즉 함수를 이용해서 타입을 체크, is 키워드를 통해 해당 타입만을 반환
const isDeveloper = (target: Developer | Person): target is Developer =>
  (target as Developer).skill !== undefined;
