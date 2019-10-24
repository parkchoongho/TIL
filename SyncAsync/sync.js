function foo() {
  console.log("Hello!");
}

function bar() {
  foo();
  console.log("Bye!");
}

function hoo() {
  bar();
  console.log("Help!");
}
console.log("Start!");
hoo();
console.log("End!");

// 함수 선언 변수 선언 모두 맨위로 끌러올려지는 것을 호이스팅이라고 한다.
// 그것을 제외하고는 모두 위에서 아래로 진행된다.
