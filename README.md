# 스캐치 프로젝트 정리

- 기존에 만들었던 스캐치 프로젝트 https://github.com/JEJU-Ratus/scatch


### 목표
- 해당 프로젝트를 간단하게 만들기

- firebase 연동하기

### 진행과정

- 우선 css네이밍을 BEM으로 교체할 것이다.
  - BEM은 Block Element Modifier의 줄임말로, 세 파트로 나누어서 네이밍 하는 방법론이다.
  - Block은 독립적으로 존재할 수 있는가를 기준으로 삼는다.
  - Element는 Block에 종속되어 있는 것으로, 독립적으로 사용하지 않을 것 같은 요소들이다.
  - Modifier은 수정자로, element와 유사하지만 약간의 스타일이 다른 경우 사용한다.
  - Block__Elelment--modifier로 사용된다.