# 스캐치 프로젝트 정리

- 기존에 만들었던 스캐치 프로젝트 https://github.com/JEJU-Ratus/scatch


### 목표
- 해당 프로젝트를 간단하게 만들기

- firebase 연동하기

### commit message 규칙
- feat : 새로운 기능에 대한 커밋
- fix : build 빌드 관련 파일 수정에 대한 커밋
- build : 빌드 관련 파일 수정에 대한 커밋
- chore : 그 외 자잘한 수정에 대한 커밋(rlxk qusrud)
- ci : CI 관련 설정 수정에 대한 커밋
- docs : 문서 수정에 대한 커밋
- style : 코드 스타일 혹은 포맷 등에 관한 커밋
- refactor : 코드 리팩토링에 대한 커밋
- test : 테스트 코드 수정에 대한 커밋

위의 규칙을 최대한 따르려고 노력할 것이다.

### 진행 과정

- 우선 css 및 JS를 정리할 것이다.
  - asset 폴더를 만들어, css,js폴더를 추가하고 해당 카테고리 아래로 css를 이동할 것이다.
  - common.css파일을 추가해 자주 사용하는 코드를 이동 시키고, css 파일 명을 좀 더 직관적으로 변경
  - layout.css파일을 추가해 header와 footer에 반복적으로 사용되는 코드들을 몹는다.
  - import를 사용해 html의 css호출을 간략화 할 것이다.

- 또한 css네이밍을 BEM으로 교체할 것이다.
  - BEM은 Block Element Modifier의 줄임말로, 세 파트로 나누어서 네이밍 하는 방법론이다.
  - Block은 독립적으로 존재할 수 있는가를 기준으로 삼는다.
  - Element는 Block에 종속되어 있는 것으로, 독립적으로 사용하지 않을 것 같은 요소들이다.
  - Modifier은 수정자로, element와 유사하지만 약간의 스타일이 다른 경우 사용한다.
  - Block__Elelment--modifier로 사용된다.

위의 두가지를 동시에 진행 하기로 한다.

### 진행 상황

- index.html(메인페이지)을 BEM 규칙에 맞게 네이밍하고, id를 부여해 JS코드를 수정하였다.
- 기존의 index.css, index.js, frame.css,frame.js 등의 코드들을 좀 더 규칙성 파일을 생성하여 나누어 정리하였다.
- 또한 필요없는 코드를 삭제하였다.
- intro.html(사이트소개)를 BEM 규칙에 맞게 네이밍 하고, 리팩토링 하였다.