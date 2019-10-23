// ES5
const numbers = [1, 2, 3];
const dNumbers = [];

for (let i = 0; i < numbers.map.length; i++) {
  dNumbers.push(numbers[i] * 2);
}

// ES6
const tNumbers = numbers.map(number => number * 2);

// console.log(tNumbers);

const data = [3, 5, 7, 9];

// 리액트에서 유용하게 쓰이는 코드
// data.map(e => {
//   return <h1>{e}</h1>;
// });

// 실습 1
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];

const heights = images.map(element => element.h);

// console.log(heights);

// 실습 2
function plunk(arr, key) {
  let result = [];

  result = arr.map(element => element[key]);

  return result;
}

const results = plunk(images, "h");

const widths = plunk(images, "w");

console.log(results);
console.log(widths);
