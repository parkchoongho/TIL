## 2020.07.12 CS:APP 스터디 

- BoundCheck 는 n+1 번 일어난다
  - Loop 문에서 n까지 도는 것처럼 보여도 결국 n+1 만큼 checking을 하는 것이다.
- Branch Prediction의 동작원리
  - 우선 진행을 한 후, 만약 잘못 진행된 instruction이면 해당 내용을 버리고 다시 진행한다.
- SIMD
  - 엄청나게 큰 레지스터로 계산 능력이 훨씬 빠르다.
- 어셈블리에서 ()는 해당 레지스터에 저장된 메모리를 참조한다는 의미
- ex) (%rax) 이면 %rax에 저장되어 있는 메모리 주소값에 있는 값을 취한다는 뜻
- Latency, Issue, Capacity Time 구분하기
  - Latency는 하나의 계산에 소용되는 전체 클락 수, Issue 별개의 계산 사이에 소모되는 최소 클락 수, capacity는 동시에 실행 될 수 있는 계산의 수을 의미한다.
- 나눗셈은 pipelining 되어있지 않다.
- Loop Unrolling
  - 반복문을 푸는 것
- c의 strlen은 O(n)
- Buffering -> 
- Deterministic profiling vs Statistical Profilier 숙제 찾아보기
- 암달의 법칙 문제 내기