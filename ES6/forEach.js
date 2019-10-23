// ES5
const colors = ["red", "green", "blue"];

// ES6
// colors.forEach(element => console.log(element));

// 실습 1
function forEach(arr, callback) {
  if (!Array.isArray(arr)) throw new Error("배열을 넣어주세요");
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(colors, e => console.log(e));

// forEach(1, e => console.log(e));

// 실습 2
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];

const area = [];

images.forEach(element => {
  const extent = element.h * element.w;
  area.push(extent);
});
console.log(area);
