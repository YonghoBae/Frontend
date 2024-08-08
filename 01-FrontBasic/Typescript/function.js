function add1(a, b) {
    return a + b;
}
function add2(a, b) {
    console.log("결과값:", a + b);
}
var result1 = add1(10, 10);
var data1 = 20;
var data2 = 30;
add2(data1, data2);
//일반함수
function greeting1(name) {
    return "Hello, ".concat(name);
}
//익명함수
var greeting2 = function (name) {
    return "Hello, ".concat(name);
};
//화살표함수
var greeting3 = function (name) {
    return "Hello, ".concat(name);
};
console.log(greeting1("홍길동1"));
console.log(greeting2("홍길동2"));
console.log(greeting3("홍길동3"));
