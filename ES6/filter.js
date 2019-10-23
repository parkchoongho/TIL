// ES5
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "egg", type: "dairy" },
  { name: "yogurt", type: "dairy" }
];

const fruits = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") fruits.push(products[i]);
}

// ES6
const dairys = products.filter(element => {
  return element.type === "dairy";
});

// console.log(dairys);

// 실제로는?
const comments = [
  { id: 1, author: "빈산", contents: "블라블라" },
  { id: 2, author: "김신", contents: "계란이 왔어요" },
  { id: 3, author: "빈산", contents: "블라블라" },
  { id: 4, author: "김신", contents: "미국에서 왔어요" }
];

const kimshin = comments.filter(coment => comments.author === "김신");

// 실습 1
const numbers = [1, 3, 4, 5, 10, 54, 25, 330, 220, 5];
// 10 ~ 100 사이의 숫자만 뽑아 그결과를 보여주세요
const selectedNumbers = numbers.filter(number => 10 < number && number < 100);
// console.log(selectedNumbers);

// 실습 2
function reject(arr, callback) {
  return arr.filter(element => !callback(element));
}

const nums = reject(numbers, number => number > 10);
console.log(nums);
