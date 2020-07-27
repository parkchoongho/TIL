## CS:APP Study

### Profiling

Deterministic Profiling vs Statistical Profiler

https://hackernoon.com/how-profilers-work-1826163e1bbc

Deterministic Profiling:  코드를 안에 넣어서 시간을 계산 (따라서 Overhead가 있음)

Statistical Profiling: timer를 지속적으로 두는 것 timer가 별도로 돌면 overhead가 없음 (pc로 함수 스택을 tracking할 수 있기에 가능)

### N-bit Machine's VA의 크기는?

2^n 크기이다. 예를 들어 4-bit 머신의 경우는 2^4인 16 바이트가 VA의 크기이다.

### 1억개 숫자있을 때 비어있는 숫자의 개수 구하는 문제 구현해보기

1억개까지 비트가 있으면 각각의 숫자가 있으면 1이라 표현하고 없으면 0이라 표현한 후, 0인 숫자의 비트 개수를 센다.

### AMD, ARM 관계?

둘이 다르다

### Leaky Abstraction: SQL Table Index

SQL문을 보고 이게 빨리 작동하는 지를 알기 위해서는  Table의 구조를 확인해야한다. (추상화는 항상 구멍이 있다. 따라서 -1, -2 레벨단위로 그 추상화 내부를 세세히 알려고 하는 것이 중요하다.)

### 폰노이만 구조 vs 하버드 구조: 폰노이만 병목 이해하기

폰노이만 구조 Memory Bus가 병목이다

### RAID 찾아보기

여러개의 하드디스크에 중복되는 데이터를 나눠서 저장하는 기술

https://www.prepressure.com/library/technology/raid

### NAS (Network-Attached Storage)

데이터를 저장해놓고 특정 컴퓨터에서만 접근할 수 있는 일종의 저장장치이다.

### Cycle이란 단위를 쓰는 이유?

시간단위는 너무 작아 무의미하기 때문에 cycle이라는 단위를 사용한다. (전기를 한번 보내는 것을 cycle이라고 하고 4GHz라 하면 1초에 4GHz만큼 CPU가 전기신호를 보내는 것을 의미한다.)

### 시간 어림셈 하기

https://gist.github.com/jboner/2841832#file-latency-txt-L1-L32

https://gist.github.com/hellerbarde/2843375#file-latency_humanized-markdown

### Jeff Dean

구글의 개발자

기억하자!!

https://ppss.kr/archives/16672

### FPS (Frames Per Second)

DRAM은 main memory, frame buffer로 사용되어진다. 여기서의 frame이 fps의 f이다. 초당 프레임을 의미하는 것으로 결국 영상은 연속된 사진들을 의미하는 것인데 이각각의 사진을 프레임이라 부르고 60fps라는 것은 1초에 60장의 사진이 연속된다는 것을 의미한다. (따라서 숫자가 높을 수록 영상이 덜 끊기게 보여진다는 의미이다.)