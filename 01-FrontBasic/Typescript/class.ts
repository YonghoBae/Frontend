//Case1) 클래스가 다른 클래스를 상속받아 속성/기능을 확장 -extends 사용

class Animal {
    name:string;

    move() {
      console.log(this.name +" is Moving along!");
    }
    
    //생성자함수: 클래스를 통해 객체가 생성될때(인스턴스화=new) 최초 한번만 실행되는 함수
    constructor(name: string ='') {
        //this는 생성자함수가 생성할 인스턴스(객체)를 가리킴
        this.name = name;
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(this.name +" is Woof! Woof!");
    }
  }
  
  //new 클래스를 통해 해당클래스를 인스턴화해 새로운 객체를 생성함
  //인스턴스화란 클래스를 이용해 새로운 객체를 만드는 과정을 말함
  let myDog = new Dog('누렁이');
  myDog.move(); // "Moving along!"
  myDog.bark(); // "Woof! Woof!"

  


//Case2) 클래스가 인터페이스를 상속받아 구현하면서 interface의 속성과 기능에 제약을 받아야 할때 -implements
  interface Movable {
    speed: number;
    move(): void;
  }
  
  //인터페이스를 상속받은 클래스는 인터페이스에 정의된 기능과 속성을 반드시 구현해야함
  class Car implements Movable {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move() {
      console.log(`The car is moving at ${this.speed} km/h`);
    }
  }
  
  let myCar = new Car(50);
  myCar.move(); // "The car is moving."


//C) 접근 제어자(access modifier) 사용 및 이해하기 

//사용자 유형 열거형 타입 
enum UserType {
  Admin = "admin",
  User = "user",
}

//관리자 역할 열거형 타입 
enum AdminRole {
  SystemAdmin = "SA",
  GeneralAdmin = "GA",
}

class User {
  public name: string;
  private password: string;
  protected email: string;
  protected userType: UserType;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.userType = UserType.User;
  }

  public greet() {
    console.log(`Hello, ${this.name}!`);
  }

  private config(){
    this.sendEmail('Personalization info is Configed');
    console.log(`Personalization info is Configed. sended email to ${this.email}`);
  }

  changePassword(newPassword: string) {
    this.password = newPassword;
    console.log(`password is changed to ${this.password}.`);
  }

  //시스템에서 사용자에게 메일 발송하기 
  protected sendEmail(message:string) {
    console.log(`Email sent to ${this.email} by admin`);
  }


}

let user = new User("John", "123456", "john@example.com");
user.greet();
//user.password =  "1234"; //password 속성 접근불가 에러발생
//user.email = "test"; //email 속성 접근불가 에러발생 자식클래스에서만 접근가능 

user.changePassword("1234"); //password 변경
//user.sendEmail("test"); //protected 속성은 상속받은 클래스 안에서만 접근가능//에러발생
//user.config(); //private 메소드는 해당 클래스 밖에서는 접근불가

class AdminUser extends User {

  private adminRole: AdminRole;

  constructor(name: string, password: string, email: string,adminRole?:AdminRole) {
      //super()는 부모클래스의 생성자함수를 호출함
      super(name,password,email);

      this.userType = UserType.Admin;
      this.adminRole = adminRole == undefined ? AdminRole.GeneralAdmin : adminRole;

      console.log(this.name); // public 속성은 상속받은 클래스에서 접근 가능
      //console.log(this.password); // private 속성은 상속받은 클래스에서 접근 불가
  }

  changeUserType(userType:UserType) {
    console.log(`User Type will chagne from ${this.userType} to ${userType}`);
    this.userType = userType;
    console.log(`now User Type is ${this.userType}`);
  }


  changeRoleType(roleType:AdminRole) {
      console.log(`Role Type will chagne from ${this.adminRole} to ${roleType}`);
      this.adminRole = roleType;

      //부모 클래스의 protected 메소드 호출실행
      this.sendEmail(`Role Type is changed for ${this.email} account`); //protected 속성은 상속받은 클래스에서 접근 가능
  }
}

let admin1 = new AdminUser("Admin", "123456", "admin@example.com");
//admin1.userType = UserType.Admin;  userType 속성 접근불가 에러발생
admin1.changeUserType(UserType.Admin); //changeUserType() 메소드를 통해 부모 클래스의 속성값을 변경
admin1.changeRoleType(AdminRole.SystemAdmin); //관리자 역할 을 바꾸려면 

//admin1.sendEmail("test"); //protected 속성은 상속받은 클래스 안에서만 접근가능//에러발생

// 선택적 매개변수를 이용한 클래스 생성자 함수 오버로딩처럼 구현하기 
let admin2= new AdminUser("Admin", "123456", "admin@example.com",AdminRole.SystemAdmin);



  //타입스크립트 컴파일과 JS모듈 파일 실행하기
//tsc --strictNullChecks class.ts
//node class.js
