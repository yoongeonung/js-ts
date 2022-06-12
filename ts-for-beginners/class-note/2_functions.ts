// 함수의 파라미터 및 반환값 정의
function sum(a: number, b: number): number {
    return a + b;
}
const result = sum(10, 20);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
    console.log(a, b);
}
log("test");
log("test", "test");
