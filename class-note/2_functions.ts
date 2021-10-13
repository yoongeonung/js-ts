// functions parameter & return type definition
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(10, 20));

// oprtional parameter
const log = (a: number, b: number, c?: string): number => {
  console.log(c !== undefined ? c : 'default');
  return a + b;
};

log(1, 2, 'kakao');
log(2, 3);
