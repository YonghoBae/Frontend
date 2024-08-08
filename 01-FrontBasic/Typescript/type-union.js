//변수 union타입 number형 또는 string으로 지정
var productCode = "10000";
productCode = 20000;
//code라는 매개변수를 number형 또는 string으로 지정
function getCode(code) {
    //파라메터로 전달된 코드의 데이터 타입이 숫자형이면 숫자형을 문자로 변화하고 문자열
    if (typeof code === "number") {
        code = "p-" + code.toString();
    }
    return code;
}
//동일 함수에 숫자를 전달하는 경우
console.log("getCode:", getCode(1000));
//동일 함수에 문자를 전달하는 경우
console.log("getCode:", getCode("p-2000"));
//배열 내의 값들에 대한 타입을 지정하고 제한 가능 
var userData = ['홍길동2', 40, false];
var state = "open";
// let oddNumber:OddNumbersUnderTen = 2;
