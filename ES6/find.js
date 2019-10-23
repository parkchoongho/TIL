// ES5
const users = [
  { name: "Natalie" },
  { name: "Tony" },
  { name: "Hluk" },
  { name: "Thor" }
];
let user = null;
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Tony") {
    user = users[i];
    break;
  }
}

// ES6 발견한 가장 첫 번째 요소만을 반환한다.
user = users.find(user => {
  return user.name === "Tony";
});

console.log(user);

// 실제로는?
const data = [
  { id: 1, name: "Natalie" },
  { id: 2, name: "Tony" },
  { id: 3, name: "Hluk" },
  { id: 4, name: "Thor" }
];

const whatIWant = data.find(e => e.id === 1);

// 실습 1
const products = [
  { name: "banana", type: "fruits" },
  { name: "carrot", type: "vegatables" },
  { name: "apple", type: "fruits" },
  { name: "egg", type: "dairy" },
  { name: "yogurt", type: "dairy" }
];
const egg = products.find(e => e.name === "egg");
console.log(egg);
