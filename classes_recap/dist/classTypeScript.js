"use strict";
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log("secretMethod");
//   }
// }
// const elton = new Player("Elton", "Steele");
// public, private 는 TS 전용 문법이다. public은 인스턴스를 어디서든 조회할 수 있게 하는것이고,
// private는 클래스 내에서만 조회할 수 있도록하는 것이다. JS의 # 문법과 같다. 하지만 컴파일 되는결과는 #이 붙지 않고나온다.
// elton.score;
// elton.secretMethod();
// 단축구문 파라미터프로퍼티
class Player {
    //   private _score: number = 0;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // 자식 클래스까지 사용할 수 있도록 설정
        this._score = 0;
        // this 구문을 사용해 접근할 필요 없음
    }
    secretMethod() {
        console.log("secretMethod");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    // get 을 통해 public 하게 접근할 수 있도록한다
    get score() {
        return this._score;
    }
    // set 을 통해 private 한 값을 변경한다.
    set score(newScore) {
        // TS 에서는 음수를 넣어도 에러체크가 안됨. 오직 타입만 확인가능 JS에서 에러가 뜸.
        if (newScore < 0) {
            throw new Error("cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const elton = new Player("Elton", "Steele");
elton.score;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// Abstract class
// 새로운 클래스를 생성할 수 없음
// 패턴을 정의하고, 자식 클래스에서 필요한 메서드를 정의하는데 사용
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("hello");
    }
}
// new Cat();
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
const betty = new FullTimeEmployee("Betty", "white", 99900);
console.log(betty.getPay());
