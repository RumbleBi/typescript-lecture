class Player {
  // static 을 쓰면 프로퍼티가 개별 인스턴스가 아닌 플레이어 클래스에만 존재하게 한다.
  // 클래스만 사용하고 싶은 기능을 추가할 때에 사용.
  static description = "Player In Our Game";
  #score = 0;
  lives = 10;
  loseLife() {
    this.lives -= 1;
  }
  // class 에서 작성한 초기값을 동적으로 바꿀때 constructor 에서 값을 변경할 수 있다.
  constructor(first, last) {
    this.first = first;
    this.last = last;
    // console.log("CONSTRUCTOR");
  }
  // getter
  // getter 를 통해 private field에 접근할 수 있으며 또한 값도 변경할 수 있다.
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive.");
    }
    this.#score = newScore;
  }

  taunt() {
    console.log("BOOYAH!");
  }
}

const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);

// private fields
// console.log(player1.#score);

// const player2 = new Player("charlie", "brown");
// player2.taunt();

// admin. 으로 접근하면 player 클래스의 인스턴스들에 접근할 수 있다.
class AdminPlayer extends Player {
  constructor(first, last, power) {
    // super() 키워드는 부모 constructor 를 호출한다. 아래의 새로운 인스턴스를 호출할 때, 자식 constructor도 있다면 자식을 우선적으로 한다.
    super(first, last);
    this.power = power;
  }
  isAdmin = true;
}
const admin = new AdminPlayer("admin", "mcAdmin", ["delete"]);
// JS는 부모 클래스에 constructor 함수가있으면 자동으로 그 함수를 호출한다. 즉 위에 적힌 first, last를 호출하게 된다.
