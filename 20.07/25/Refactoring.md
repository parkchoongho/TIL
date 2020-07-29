## 2020.07.25 Refactoring 스터디

### Takeaways

- 서버의 동시성 구현: Thread로 구현 => 파이썬은 Thread를 활용한 프로그래밍일 할 수없다. (따라서 자바 짱짱맨!!!)
- IP Hashing: **그림 넣기**
- 프로세스가 다르면 virtual address space가 다르다. => 왜? 프로세스마다 VA를 할당하기 때문이다. (프로세스마다 자신만의 VA를 가지게 되는 것)
- [https://www.mobt3ath.com/uplode/book/book-63208.pdf](https://www.mobt3ath.com/uplode/book/book-63208.pdf) => 리눅스 커맨드라인 공부하자! 관심이다!!
- 리팩토링 책(p128) 서브 클래스를 위임으로 바꾸기: **그림넣기**
- 리팩토링 책(p130) Dto(Data Transfer Object)란? [https://martinfowler.com/eaaCatalog/dataTransferObject.html](https://martinfowler.com/eaaCatalog/dataTransferObject.html) => Dto를 쓰고 싶어하는 이유
- 리팩토링 책(p130) JVM이 무엇인지 공부하자. ByteCode란 무엇?
- 리팩토링 책(p130) 부모클래스는 모두 추상클래스여야 한다는 말도 있음.
- 상속 문법을 배우면, 처음에 ‘중복'을 없애는 의미만 강조하지만, 실제로 코드가 복잡해지면 상속은 인터페이스로서 사용하는게 더 유의미하다. + 공통부분은 결국 delegate로 해결하게 된다.
- 리팩토링 책 (p131) 당신은 언제 주석을 답니까? 언제 달지 말아야할까요? # TODO인풋으로 어떤 타입이어야하는지 아웃풋으로 어떤 타입인지? black magic이 일어났을 때빠르게 코드를 짜야할 때, 일단 돌아가야하는 코드를 짜야할 때 http://youngrok.com/QuickAndDirty
- 리팩토링 책 (p134) 모든 클래스마다 테스트코드를 짠다.
- Fail하는 테스트를 짜야하는 이유는?
- https://news.ycombinator.com/item?id=18442637

