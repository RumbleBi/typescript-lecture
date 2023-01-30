// called Type Annotation
const test: string = "test";

// void == undefined
function test2(num: number): void {
  //   return num * num;
}

const test3 = (num: number = 100): number => num * num;

// never type
// 반환에 예외를 두는 타입 void 와는 다르다.

function makeError(message: string): never {
  // return message;
  throw new Error(message);
}

// 중단하지 않는 함수의 경우

function infiniteLoop(): never {
  while (true) {
    console.log("infinite_loop");
  }
  // return true;
}

// Object
function printName(person: { first: string; last: string }): void {}

// printName({ first: "Tom" });
printName({ first: "Tom", last: "Jenkins" });

// error: missing age property
// printName({ first: "Mick", last: "Jagger", age: 10 });

// but.. this way is ok
const human = { first: "Jone", last: "Sina", age: 100 };
printName(human);

// 직접 객체 리터럴을 작성하면 필요한 프로퍼티만 들어오도록 체크하지만,
// 변수로 넣게 된다면 필요한 타입이 있는지만 체크하고 나머지 사용하지 않는 프로퍼티는 무시한다.

let coordinate: { x: number; y: number } = { x: 20, y: 10 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
