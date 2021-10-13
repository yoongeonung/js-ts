// functions parameter & return type definition
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20));
// oprtional parameter
var log = function (a, b, c) {
    console.log(c !== undefined ? c : 'default');
    return a + b;
};
log(1, 2, 'kakao');
log(2, 3);
