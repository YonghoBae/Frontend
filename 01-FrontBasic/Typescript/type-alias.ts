//새로운 타입을 만드는데 string타입과 number타입을 둘다 지원하는 개발자 정의 타입
type StringOrNumber = string | number;

let sample:StringOrNumber;

sample = "안녕하세요";
sample = 11111;

//객체 타입을 지정하는 방법
//회원데이터 객체의 타입을 미리 정의
type MemberType = {
    name:string;
    age:number;
    address:{city:string; country:string};
}

//
let personData = {
    name:"yongho",
    age:24,
    adress:{
        city:"Seoul",
        country:"South Korea"
    }
}