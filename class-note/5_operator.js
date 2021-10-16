// union type
var logMessage = function (value) {
    // <- 이 라인에서는 두 타입의 공통된 메서드에만 접근 할 수 있다.->
    if (typeof value === 'number') {
        console.log(value.toLocaleString('abc'));
    }
    else {
        console.log(value.toLocaleUpperCase());
    }
};
logMessage('12345');
logMessage(12345);
