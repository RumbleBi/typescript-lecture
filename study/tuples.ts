// fixed length type
const type: [string, number, boolean] = ["a", 1, true];
// error
// const type2: [string, number, boolean] = ["a", 1, 1];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

// error
// goodRes[0] = "200";

// ok
// 튜플, 타입스크립트는 백그라운드에서 작동되는 방식이므로 타입 체크가 완료되고 자바스크립트가 작동하는 방식이기 때문에 구조상으로 가능하다.
goodRes.push("push");

const res: HTTPResponse[] = [
  [404, "ERROR"],
  [200, "OK"],
];
