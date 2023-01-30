let names: string[] = ["Jone", "Twitch"];
let ages: number[] = [123, 345];

names.push("Col");

let color: Array<string> = ["red", "blue"];
let numbers: Array<number> = [11, 111];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 100, y: 10 });

// 2, 3차원 배열 타입지정

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [
  [[123], [123]],
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
];
