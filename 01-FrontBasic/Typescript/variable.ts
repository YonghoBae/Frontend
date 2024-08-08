//변수별 타입을 지정하고 값을 할당
var memberName:string = "김철수";
let age:number = 5;
let price:number = 10000;
const isMale:boolean = true;

let totalPayPrice:number = 0;

function showTotalPrice(price:number,count:number):void{
    totalPayPrice = price * count;
    console.log(`totalPayPrice: ${totalPayPrice}`);
}

console.log('사용자명: ',memberName);
console.log('나이: ',age);
console.log('가격: ',price);
console.log('성별: ',isMale);

showTotalPrice(price,5);