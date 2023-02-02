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
  // 자식 클래스까지 사용할 수 있도록 설정
  protected _score: number = 0;
  //   private _score: number = 0;

  constructor(public first: string, public last: string) {
    // this 구문을 사용해 접근할 필요 없음
  }

  private secretMethod(): void {
    console.log("secretMethod");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  // get 을 통해 public 하게 접근할 수 있도록한다
  get score(): number {
    return this._score;
  }
  // set 을 통해 private 한 값을 변경한다.
  set score(newScore: number) {
    // TS 에서는 음수를 넣어도 에러체크가 안됨. 오직 타입만 확인가능 JS에서 에러가 뜸.
    if (newScore < 0) {
      throw new Error("cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999;
  }
}

const elton = new Player("Elton", "Steele");
elton.score;

//

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "black");

// Abstract class
// 새로운 클래스를 생성할 수 없음
// 패턴을 정의하고, 자식 클래스에서 필요한 메서드를 정의하는데 사용
abstract class Employee {
  constructor(public first: string, public last: string) {}
  // Employee class 를 사용, 확장하려면 반드시 getPay() 를 사용해야한다.
  abstract getPay(): number;
  greet() {
    console.log("hello");
  }
}
// new Cat();

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

const betty = new FullTimeEmployee("Betty", "white", 99900);
console.log(betty.getPay());
