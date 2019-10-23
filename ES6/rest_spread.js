// ES5
const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((acc, num) => (acc += num), 0);
};

// ES6

const addAll = (...numbers) => {
  //   console.log(numbers);
  return numbers.reduce((acc, num) => (acc += num), 0);
};

// console.log(addAll(1, 2, 3));

const defaultColors = ["red", "blue", "yellow"];
const addedColors = ["orange", "green"];

const sum = defaultColors.concat(addedColors);
const es6Sum = [...defaultColors, ...addedColors];
// console.log(sum);
// console.log(es6Sum);

// 실제로는?
function logging() {
  console.log(arguments);
  console.log(...arguments);
}
// 일반 객체는 펼칠 수 없고 arguments만 펼칠 수 있다.
logging(1, 2, 3, 4);

// console.log(...{ "0": 2, "1": 3 });
