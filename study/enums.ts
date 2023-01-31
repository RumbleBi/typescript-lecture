// 상수를 이름지은 집합을 표현

enum OrderStatus {
  PENDING, // 0  defaultValue
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// enum 의 경우 JS로 컴파일 될 경우 파일에 추가적인 코드가 생긴다. *function()함수로 선언된 코드
// 그러므로 컴파일 과정에서 성능상의 문제가 발생할 수 있다.

// 그래서 const 를 붙여 생성하기도 한다. 이는 JS컴파일 결과로 같은 결과를 보여준다.
// JS의 const 처럼 선언식에 사용하는 것과는 다르다.

const enum Test {
  TEST = "TEST",
  TEST2 = "TEST2",
  TEST3 = "TEST3",
}

// type 을 통해 작성한 타입은 자동완성기능이 없지만 enum 을 사용하여 만든 상수는 자동완성기능이 생긴다.
