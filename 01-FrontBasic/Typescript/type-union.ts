//변수 union타입 number형 또는 string으로 지정
let productCode:string | number = "10000";
productCode = 20000;

//code라는 매개변수를 number형 또는 string으로 지정
function getCode(code:number|string):string{
    //파라메터로 전달된 코드의 데이터 타입이 숫자형이면 숫자형을 문자로 변화하고 문자열
    if(typeof code === "number"){
        code = "p-"+code.toString();
    }
    return code;
}

//동일 함수에 숫자를 전달하는 경우
console.log("getCode:",getCode(1000));
//동일 함수에 문자를 전달하는 경우
console.log("getCode:",getCode("p-2000"));

//배열 내의 값들에 대한 타입을 지정하고 제한 가능 
const userData:(string | number | boolean)[] = ['홍길동2',40,false];

//type선언자를 이용해 개발자가 원하는 타입을 정의하고 사용 가능
type ProcessStates = "open" | "closed";

let state:ProcessStates = "open";

//특정값만 설정할 수 있는 type변수에 할당할 수 없는 값을 지정하면 에러 발생
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// let oddNumber:OddNumbersUnderTen = 2;