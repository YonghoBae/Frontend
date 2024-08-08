//변수별 타입을 지정하고 값을 할당
var memberName = "김철수";
var age = 5;
var price = 10000;
var isMale = true;
var totalPayPrice = 0;
function showTotalPrice(price, count) {
    totalPayPrice = price * count;
    console.log("totalPayPrice: ".concat(totalPayPrice));
}

console.log('사용자명: ', memberName);
console.log('나이: ', age);
console.log('가격: ', price);
console.log('성별: ', isMale);

showTotalPrice(price, 5);
