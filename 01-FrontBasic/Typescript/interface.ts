interface User {
    name: string;
    age: number;
}

type MemberType = {
    name: string;
    age: number;
}

function greeting(user: User): string {
    return `Hello,${user.name}`;
}

let user: User = { name: "Alice", age: 20 };
console.log(greeting(user));

//인터페이스는 인터페이스를 상속받아 기능을 확장할 수 있음

interface Person{
    name:string;
}
interface Person{
    address:string;   
}
interface Group{
    group:string;
}
//Employee 인터페이스는 extends(확장) 키워드를 이용해 특정 인터페이스를 상속받아 기능을 확장할 수 있음
interface Employee extends Person,Group{
    department:string;
}

let employee = {
    name:"Alice",
    department:"Development",
    address:"경기도 성남시...",
    group:"IT"
}

//객체지향적으로 인터페이스를 사용
//OOP(Object Oriented Programming)에서의 인터페이스 인터페이스에서 정의한 속성과 기능을 정의하고
//해당 인터페이스를 상속받은 클래스는 반드시 해당 인터페이스에서 정의한 속성/기능을 구현해야하는 제약 제공

//인터페이스는 직접적인 기능구현을 하지 않고 형식만 정의해서 해당 형식을 구현하거나 확장할 수 있는 방법을 제공
interface Movable {
    speed:number;
    move():void;
}

//Car라는 클래스는 Movable 인터페이스를 상속받아 해당 인터페이스의 속성과 기능을 클래스 내에서 구현(Implements)
class Car implements Movable{
    speed:number;

    //생성자 함수: 클래스를 통해 객체가 생성되는 시점에 자동 호출되는 함수
    //클래스를 이용해 객체를 만들어 내는 과정 new Car()를 인스턴스화 한다라고 표현
    constructor(speed:number){
        //this는 현재 클래스내부에 접근하기 위한 예약어
        //this.speed는 클래스 내 내부속성인 상단에 클래스내에 정의된 speed속성
        //뒤에 오는 speed는 객체를 생성하는 시점에 new Car(500); 생성자함수로 전달되는 속도값 파라매터
        this.speed = speed;
    }

    move(){
        console.log(`현재 자동차는 ${this.speed.toString()}km 속도로 이동중`);
    }
}

//클래스를 이용해 myCar라는 객체(Object)를 생성
//new 연산자를 이용해 클래스의 객체를 만들고 만들어진 객체는 프로그램이 실행되는 컴퓨터의 메모리에 저장되며 이러한 과정을 인스턴스화라고 표현 
//클래스는 인스턴화 될때 클래스내 정의된 생성자함수가 자동으로 실행되고 해당 함수에 파라메터를 전달할 수 있음 
let myCar = new Car(100);
myCar.move();