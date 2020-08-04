# 2020-08-02 Refactoring

## Review

- Process는 하나의 실행단위
- Linux Command Line에서 `|` 를 기준으로 **왼쪽의 결과값이 오른쪽의 입력값이 된다.**
  - `sudo lsof -n -i -s TCP:LISTEN,ESTABLISHED | grep python` 에서 TCP 통신을 하고 있는 파일들의 리스트가 `|` 왼쪽의 결과값이고 `grep` 명령어는 그 파일들(TCP 통신중인 파일들) 중 python이란 문자열을 찾습니다. 
- Animal, Move Class가 각각 있다고 했을 때, Animal이 Move에 의존하고 있다고 가정해봅시다. 이런 상황에서 만약 Move가 변경되면 이는 Animal에게 영향을 줍니다. 프로그래밍은 이러한 의존성을 줄이기를 원합니다. Move 클래스를 변경시켜도 Animal에게 영향을 주지않는 구조를 선호합니다. 따라서 Move Interface를 생성하고 Animal과 Move Class가 이 Move Interface에 의존하게끔 구조를 변경합니다.
- 

