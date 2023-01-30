// type alias
type Person = {
  name: string;
  age: number;
};

const HelloName = (person: Person): string => {
  return `Hello ${person}!`;
};

// nasted objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}
function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 123123123,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

calculatePayout(mySong);

// optional property

type Point = {
  x: number;
  y: number;
  z?: number;
};

// it's ok
const myPoint: Point = { x: 2, y: 3 };

// readonly 객체 내의 특정 프로퍼티를 표시하거나 배열, 클래스에 접근할 때 사용함.

type User = {
  readonly id: number;
  readonly userData: { password: string; item: string };
  username: string;
};

const user: User = {
  id: 11222,
  userData: { password: "1q2w3e4r", item: "bat" },
  username: "king",
};

// 하지만 참조타입인 배열, 객체를 지정하면 값이 변경될 수 있다. 값을 참조하기 때문이다.
// 원시타입인 string, number, boolean 등은 변경할 수 없다.

// 읽기 전용 속성이므로 'id'에 할당할 수 없습니다.
// user.id = 12394;

// 가능
user.userData.password = "change";

// intersection type

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 10,
};
