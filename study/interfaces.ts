// 객체의 타입을 지정할 때 사용

// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 200, y: 100 };

interface Point {}

const pt: Point = { x: 200, y: 100 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

const userInfo: Person = { first: "Tomas", last: "Haddy", id: 123123 };

// type vs interface
// type 의 경우에는 두 개 이상의 타입지정이 불가능하지만 interface의 경우에는 같은 이름의 타입지정이 가능하며 선언된 타입들이 한데 묶여 사용할 수 있다.

interface Dog {
  name: string;
  age: number;
}
interface Dog {
  breed: string;
  bark(): string;
}

const eleon: Dog = {
  name: "Eleon",
  age: 10,
  breed: "Korean Dog",
  bark() {
    return "woof!";
  },
};

// 또한 클래스의 상속과 같이 확장도 가능하다.

interface ServiceDog extends Dog {
  job: "guide dog" | "bome dog";
}

const alice: ServiceDog = {
  job: "guide dog",
  name: "Alice",
  age: 20,
  breed: "Korean Dog",
  bark() {
    return "woof! woof!";
  },
};

// 다중 상속 또한 가능하다.

interface A {
  test: string;
}
interface B {
  test2: string;
}
interface C extends A, B {
  test3: string;
}
const ABC: C = {
  test: "1",
  test2: "2",
  test3: "3",
};

// type alias 에도 상속이 가능하긴하다. 하지만 중복된 이름은 불가능하다.

type Day = {
  sat: string;
};
type Day2 = Day & {
  sun: string;
};
const weekend: Day2 = {
  sat: "sat",
  sun: "sun",
};
