let zero: 0 = 0;

// error
// zero = 2

const answers = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}`;
};
// only yes | no | maybe
answers("no");
// error
// answers("test");
