var logText = function (text) {
    console.log(text);
    return text;
};
logText('kakao');
logText(1234);
var logTextLength = function (value) {
    console.log(value.length);
    return value;
};
logTextLength('kakao1234');
/**
 * keyof 를 이용한 타입 필터링
 * 인터페이스의 key값이 T의 밸류값으로서 필터링효과를 낸다
 * 즉 인터페이스에 정의된 "key"값만이 값으로서 들어올수있다. "wheel", "windows", "engine"
 * 인터페이스에 설정된 타입들은 전혀 무관계!
 */
var makeCar = function (value) {
    return value;
};
makeCar('engine');
console.log(makeCar('engine'));
