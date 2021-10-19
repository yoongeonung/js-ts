const logText = <T>(text: T): T => {
  console.log(text);
  return text;
};

logText<string>('kakao');
logText<number>(1234);

interface TextProp {
  length: number;
}

const logTextLength = <T extends TextProp>(value: T): T => {
  console.log(value.length);
  return value;
};

logTextLength('kakao1234');

interface ICar {
  wheel: number;
  windows: number;
  engine: string;
}
/**
 * keyof 를 이용한 타입 필터링
 * 인터페이스의 key값이 T의 밸류값으로서 필터링효과를 낸다
 * 즉 인터페이스에 정의된 "key"값만이 값으로서 들어올수있다. "wheel", "windows", "engine"
 * 인터페이스에 설정된 타입들은 전혀 무관계!
 */
const makeCar = <T extends keyof ICar>(value: T): T => {
  return value;
};
makeCar('engine');
console.log(makeCar('engine'));
