let genderType: "Male" | "Female";

genderType = "Male";

type User = {
    name:string;
    age:number;
    userType: "admin" | "user";
    address: {city: string; country:string;};
};

//user라는 json데이터를 생성하여 객체변수 user객체변수에 할당
const user:User = {
    name: "yongho",
    age: 24,
    userType: "admin",
    address:{
        city: "청주",
        country: "대한민국"
    },
};

//함수를 만들고 함수의 반환값을 특정값으로 제약
function getUserType(user:User):1|2{
    if(user.userType === "admin"){
        return 1;
    }else{
        return 2;
    }
}

getUserType(user);

//열거형
//특정값의 범위를 상수처럼 한번 할당해서 값의 범위를 제약
enum DisplayType {
    NoneDisplay = 0,
    Display = 1
};

const displayCode = 1;
const display = displayCode as DisplayType;

const displayTestCode:DisplayType = 1;
//아래와 같이 명시적으로 나타나는게 좀 더 좋음
const displayTestCode1:DisplayType = DisplayType.NoneDisplay;
const displayTestCode2:DisplayType = DisplayType.Display;

//열거형을 정의해서 사용하는 주요 목적은 코드성 데이터를 소스 내에 직접 박아서 사용하는 것은 좋지 않음
//반복적으로 또는 값이 범위가 제한되어 있는 데이터들을 enum타입을 이용해 값의 설명과 실제값을 표시하여 사용
if(display === DisplayType.Display){
    console.log("해당 게시글은 게시중 상태입니다.")
}

enum SNSType {
    None = "",
    Facebook = "F",
    Instagram = "I",
    Twitter = "T"
};

//enum타입은 값을 할당해주지 많으면 순서대로 0부터 초기화
enum EntryState{
    Inactive, //0
    Active, //1
    Pending //2
};

enum MemberType {
    Admin = 2,
    User = 1,
    Guest = 0
};

type Member = {
    id:number;
    email:string;
    password:string;
    entryState:EntryState;
    memberType:MemberType;
    snsType:SNSType;
};

const snsTypeCode: string = "F";

let member:Member = {
    id:1,
    email:"test@test.co.kr",
    password:"dsfwecgahae",
    memberType:MemberType.Admin,
    snsType:SNSType.Instagram,
    entryState:EntryState.Active
};