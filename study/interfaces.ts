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
