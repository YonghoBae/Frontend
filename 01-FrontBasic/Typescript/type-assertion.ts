let notSure:any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log("notSure: ",notSure);

let fullName:any = "Yongho.Bae";

//변수의 형변환1
let fullNameLength1:number = (<string>fullName).length;
//변수의 형변환2
let fullNameLength2:number = (fullName as string).length;

interface User{
    id:number;
    name:string;
    email:string;
    telephone:string;
}

let user = {} as User;
user.id = 1;
user.name = "Bae";
user.email = "test@naver.com";

console.log("user===>",user);