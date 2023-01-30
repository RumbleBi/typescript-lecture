let age: number | string = 20;

age = 22;
age = "22";

type A = {
  x: number;
  y: number;
};

type B = {
  z: number;
};

let coordinates: A | B = { z: 200 };
coordinates = { x: 20, y: 200 };

function cacluateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;

  // error
  // we need type narrowing
  //   return price * tax;
}

const stuff: (number | string)[] = [1, 2];
