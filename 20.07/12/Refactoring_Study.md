## 2020.07.12 Refactoring 스터디

- Function Signature 용어 기억하기
- 리버스 프록시가 왜 '리버스'인가?
-  https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching 해당 글 읽기
- Cache Invalidation
  - 정확하게 어떤 문제들이 해당되는가?
- Off-By-One
- Indirection 효과
  - **All Problems in computer science can be solved by another level of indirection**
  - 이 문구가 의미하는 바는?
- Primitive Obsession => 지나치게 원시타입만 사용하려는 것을 의미한다. (내가 원하는 타입을 만들어서 활용하는 것이 중요. => 클래스를 만드는 것을 두려워말라)
- 함수를 명령으로 바꾸기 => 함수를 클래스의 메서드로 바꿔라.
- For 루프를 Pipeline으로 바꾸기
- functools.partial 써볼것, 함수형 언어의 currying이란?
- 전역변수의 단점 4가지
  - Global and static objects cause implicit dependencies/coupling, thus they break the idea of encapsulation.
  - It's hard to reason about them - logical scope for understanding behaviour of these objects is expanded to the whole program.
  - It's hard to mock/stub them.
  - Global objects pollute the main scope.