function add1(a: number, b: number): number {
  return a + b;
}

function add2(a: number, b: number): void {
  console.log("결과값:", a + b);
}

const result1: number = add1(10, 10);

const data1: number = 20;
const data2: number = 30;
add2(data1, data2);

//일반함수
function greeting1(name: string): string {
  return `Hello, ${name}`;
}

//익명함수
let greeting2 = function (name: string): string {
  return `Hello, ${name}`;
};

//화살표함수
let greeting3 = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(greeting1("홍길동1"));
console.log(greeting2("홍길동2"));
console.log(greeting3("홍길동3"));

//?: 선택적 속성/변수 = 해당값을 반드시 전달할 필요없고 전달해도 안해도 됨
function greet(name: string = "Guest", msg?: string): string {
  if (msg) {
    return `${name}:${msg}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(greet());
console.log(greet("배용호"));
console.log(greet("배용호", "수고링~"));
