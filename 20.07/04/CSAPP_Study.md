## 2020.07.05 CS:APP 스터디

- 최적화 과정은 3단계로 구분된다.
  1. **자료구조, 알고리즘 선택 (이것이 가장 중요)**
  2. 컴파일러를 잘 이해하고 코드 작성
  3. multicore를 활용한 프로그래밍
- 프로그램 최적화 <=> 인간이 읽기 쉬움 (trade off 관계일 때가 많음)
- 실제 현업에서 중요한 최적화는 **메모리 copy를 줄이는 것** (정말 정말 중요)
- Instruction Level에서 parrallel은 pipelining을 의미한다. (SIMD는 다음주에)
- **Critical Path**: 프로그램의 동작 시간에 가장 큰 영향을 미치는 PipeLine
- **Optimization Level** 파라미터를 기억할 것! (-o1, -o2, -o3)
- 컴파일러는 완벽하지 않다!! (memory aliasing, functino call side effect)
- 프로그램의 퍼포먼스를 **clock cycle** 개수로 측정
- **Interpreter vs Compiler** 비교 (컴파일러는 다른 언어로 변환을 시켜주는 반면에 InterPreter는 변환 시키지 않는다.)
- 선형회귀란? 
- 흑마법!!