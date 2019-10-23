// ES5
const numbers = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// ES6
sum = numbers.reduce((acc, number) => {
  //   console.log(acc, number);
  return acc + number;
}, 0);

let multiply = numbers.reduce((acc, number) => acc * number, 1);

const strings = ["apple", "is", "good"];

const summedString = strings.reduce((acc, string) => acc + string, "");

// console.log(summedString);

// map 함수 구현하기

let dNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);

// console.log(dNumbers);

// 실제로는?
/*
    올바르게 닫힌 괄호: (((()))), ()(),(), (()(()))
    올바르게 닫히지 않은 괄호: ), )()()(), ()())
*/

function isGoodParens(string) {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === "(") {
      acc++;
    } else {
      acc--;
    }
    return acc;
  }, 0);
}

// 실습 1
const attenders = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "sitting" },
  { id: 5, type: "sitting" }
];
// reduce를 사용해서 서 있는 사람, 혹은 앉아있는 사람의 수를 출력

const sittings = attenders.reduce((acc, attender) => {
  if (attender.type === "sitting") {
    acc++;
    return acc;
  } else {
    return acc;
  }
}, 0);

// console.log(sittings);

// 실습 2
const samples = [10, 20, 30, 20, 40, 10, 50];

function unique(arr) {
  return arr.reduce((acc, sample) => {
    // console.log(acc);
    if (!acc.includes(sample)) {
      acc.push(sample);
      return acc;
    } else {
      return acc;
    }
  }, []);
}

function justOne(arr) {
  return arr.reduce((acc, sample) => {
    if (!acc.find(element => element === sample)) acc.push(sample);

    return acc;
  }, []);
}

const selectedSamples = justOne(samples);
console.log(selectedSamples);
