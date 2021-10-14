// 변수에 인터페이스 활용
var Yoon = {
    name: 'Yoon',
    age: 20
};
// 함수에 인터페이스 활용
var getUser = function (user) {
    console.log(user);
    return user;
};
var user = getUser(Yoon);
var sumFunc = function (a, b) {
    return a + b;
};
var stringArray = [];
stringArray[0] = 'string';
stringArray['kakao'] = 'String';
console.log(stringArray);
