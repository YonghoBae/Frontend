function greeting(user) {
    return "Hello,".concat(user.name);
}
var user = { name: "Alice", age: 20 };
console.log(greeting(user));
var employee = {
    name: "Alice",
    department: "Development",
    address: "경기도 성남시...",
    group: "IT"
};
//Car라는 클래스는 Movable 인터페이스를 상속받아 해당 인터페이스의 속성과 기능을 클래스 내에서 구현(Implements)
var Car = /** @class */ (function () {
    //생성자 함수: 클래스를 통해 객체가 생성되는 시점에 자동 호출되는 함수
    //클래스를 이용해 객체를 만들어 내는 과정 new Car()를 인스턴스화 한다라고 표현
    function Car(speed) {
        //this는 현재 클래스내부에 접근하기 위한 예약어
        //this.speed는 클래스 내 내부속성인 상단에 클래스내에 정의된 speed속성
        //뒤에 오는 speed는 객체를 생성하는 시점에 new Car(500); 생성자함수로 전달되는 속도값 파라매터
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("\uD604\uC7AC \uC790\uB3D9\uCC28\uB294 ".concat(this.speed.toString(), "km \uC18D\uB3C4\uB85C \uC774\uB3D9\uC911"));
    };
    return Car;
}());
//클래스를 이용해 myCar라는 객체(Object)를 생성
//new 연산자를 이용해 클래스의 객체를 만들고 만들어진 객체는 프로그램이 실행되는 컴퓨터의 메모리에 저장되며 이러한 과정을 인스턴스화라고 표현 
//클래스는 인스턴화 될때 클래스내 정의된 생성자함수가 자동으로 실행되고 해당 함수에 파라메터를 전달할 수 있음 
var myCar = new Car(100);
myCar.move();
