interface Person {
    name: string;
}

//<T> 정확한 T로 다시 형변환 시켜준다는 의미
function getRandomElement<T>(list: T[]):T{
    const randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}

function getRandomElementNumber(list: number[]):number{
    const randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}


const randomString = getRandomElement(["A","B","B","C"]);
console.log("문자열 배열에서 랜던함 문자 추출:",randomString);

const randomStringNumber =getRandomElementNumber([1,2,3]);;
console.log("문자열 배열에서 랜던함 문자 추출:",randomStringNumber);