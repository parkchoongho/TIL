// ES5
const computer = {
  model: "macbook-pro",
  year: 2017,
  price: 400
};

// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

// ES6
// cf) trailing 설정을 통하여 객체나 배열 마지막 요소에 ,를 붙이게 끔 할 수 있다.
const laptop = {
  model: "gram",
  year: 2018,
  price: 100
};

const { model, year, price } = laptop;

// 실제로는?
const tag = `<h1>${laptop.model}은 ${laptop.year}년 그리고 ${laptop.price}만원에 출시되었습니다.</h1>`;
const newTag = `<h1>${model}은 ${year}년 그리고 ${price}만원에 출시되었습니다.</h1>`;

const laptops = [
  {
    model: "gram",
    year: 2018,
    price: 100
  },
  {
    model: "samsung",
    year: 2019,
    price: 100
  },
  {
    model: "apple",
    year: 2019,
    price: 200
  }
];

laptops.map(({ model, year, price }) => {
  console.log(model, year, price);
});
