// ES5
const computers = [
  { name: "mac-air", ram: 8 },
  { name: "gram", ram: 4 },
  { name: "mac-pro", ram: 16 }
];

let everyComputersAvailable = true;
let someComputersAvailable = false;

for (let i = 0; i < computers.length; i++) {
  const computer = computers[i];
  if (computer.ram < 8) {
    everyComputersAvailable = false;
  }
  if (computer.ram > 8) {
    someComputersAvailable = true;
  }
}

// ES6
everyComputersAvailable = computers.every(computer => computer.ram > 8);
someComputersAvailable = computers.some(computer => computer.ram > 8);

// 실제로는?
const data = [
  { name: "park", answer: "you pork" },
  { name: "choong", answer: "" },
  { name: "ho", answer: "great" }
];

const everyUserAnswered = data.every(e => e.answer.length > 0);

// 실습 1
const users = [
  { id: 1, submit: false },
  { id: 2, submit: true },
  { id: 3, submit: false },
  { id: 4, submit: false }
];

const everySubmit = users.every(ele => ele.submit);
const someSubmit = users.some(ele => ele.submit);

// console.log(everySubmit, someSubmit);

function some(arr, callback) {
  return !arr.every(ele => !callback(ele));
}
console.log(some(users, ele => ele.submit));
