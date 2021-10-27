// typescript의 타입 추론
let a = 10;

// 타입 추론 기본2
interface Dropdown<T> {
  value: T;
  title: string;
}

let item: Dropdown<string> = {
  value: 'kakao',
  title: 'naver',
};

// 타입 추론 기본 3
interface DetailDropdown<E> extends Dropdown<E> {
  desc: string;
  tag: E;
}

let listItem: DetailDropdown<number> = {
  desc: 'good',
  tag: 1234,
  title: 'naver',
  value: 5678,
};
