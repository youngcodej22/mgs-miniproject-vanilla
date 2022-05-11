# 고민 and 질문

0. BEM 구조가 적당하다고 생각 그러나 막상 해보니 class 이름이 길어질때 고민이 되었다.
1. 파일 디렉토리 구조잡기 고민 이름이나
2. BEM에서 element의 경우, 이름이 너무 길어져서 하위 자식들을 그냥 상위 컴포넌트 클래스명으로만 연결 시켰더니 scss에서 들여쓰기가 될때 계층구조가 망가져서 고민이 되었다.
3. 지출관리 페이지를 마크업상 제일 앞에 뒀는데 문서에 의미론적 순서상 그렇게 해도 되나? 괜히 css처리 때문에 일부러 앞으로 넣었다.
4. scss 컴포넌트이름을 slide, card 처럼 공식적인 이름을 적고 싶은데 생각이 안나서 그냥 해당 컴포넌트 이름으로 지었다.
5. 이 레이아웃에서 추후 grid 시스템이 과연 필요한가 고민됐지만 일단 하지 않았다.
6. meta태그에 대한 공부가 더 필요한 것 같다. SEO에 대해서 좀 찾아봐야겠다.
7. 시각장애를 가지신분들을 고려한 코드를 만들어야하는데 그것에 대한 검증이 부족하다. 어렵다
8. 스크롤 내릴 때 nav를 `position:absoltue`를 잡았더니 다 안내려간다. 그 안쪽은 padding적용하긴 했는데 애매하다;;
9. json을 처음에 객체형태로 했었는데 추가 수정사항이 생겨서 바뀌기는했다. 만약 객체형태로 짜야했다면 data 받아오는것에 고민이 생긴다 `Object.key()를`사용하면 해결이될까?
10. "철연,주암"님도 말씀하셨지만 저금통 색깔에 대한 코드 구현? 막연하게 계좌에 대한 index와 저금통에 대한 index를 가지고 색깔 배열을 6가지정도로 홀수짝수로 넣으면 될 것 같다는 생각?

## 아쉬운점

1. js같은경우는 내가 모르는 지식이 명확할 거라는 생각이 드는데 html, css는 정답이 없고 다른 웹사이트를 찾아봐도 클래스명이나 코드 구성이 이상한 것들이 많아서 내가 마크업을 잘 하고 있는 것인지 계속 의문이 든다. 이거를 해소하기가 쉽지 않다.
   조언을 듣고 싶습니다.

2. 코드를 파일분할과 함수단위로 깔끔하게 짜고 싶은데 막상 그게 잘 안된다. 시간과 노력이 필요한 것 같다.

## 해야할 것

### 기능

1. 이체 버튼 연결
2. 데이터 계산해서 넣기
3. 저금통 추가 및 슬라이드
4. 네비게이션 기능
5. 이체페이지
6. 마우스 위치에 따른 이벤트 구현 (요섭님)(`removeEventListener`)
7. bundler (주암님)
8. drag (매니저님)

### 기타

1. json, ui에 따른 js를 파일과 함수 단위로 코드를 작성해야한다. 사용하기 쉽게
2. json data들을 실제 차트, 계좌에 계산된 데이터가 들어가야한다. date를 받아올때 해당 객체를 이용하자
3. 4조 치윤님 조처럼 코드 구조를 잘 짜고 주석처리도 잘 해야겠다.

---

# 중요한 것

- [hidden-h1](https://wdn.unl.edu/page-title-h1-best-practices)

## html

1. `article.accout > .ad`

- 독립적 구분 배포를 위해 `article 태그`사용

2. `<p>` 안에 `<a>`

- [stackoverflow](https://stackoverflow.com/questions/6101711/html-what-is-the-correct-order-of-a-and-p-tags)

3. `<p>`태그는 특이하게 본인자체가 `block`요소라서 `text-align`이 적용되어 안에 텍스트가 이동가능하다

## gage

https://codepen.io/kh-mamun/pen/OpJKXR

https://codepen.io/xgh/pen/ExaXgbb

## save

save라는 클래스네임 부족 account 필요?

## qrcode

qrcode search는 button인데 스크린리더때문에 alt 때문에 img로 처리해야할까?

## flex overflow

https://velog.io/@parkoon/%EC%88%98%ED%8F%89%EC%9C%BC%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-%EB%A7%8C%EB%93%A4%EA%B8%B0

## nth-of-type

https://webisfree.com/2015-10-10/[css]-nth-child()-%EC%84%A0%ED%83%9D%EC%9E%90%EC%97%90-%EB%8C%80%ED%95%9C-css-%EC%A0%81%EC%9A%A9%EB%B0%A9%EB%B2%95-%ED%99%80%EC%88%98-%EB%B0%8F-%EC%A7%9D%EC%88%98%EB%B2%88%EC%A7%B8-%EC%9A%94%EC%86%8C-%EC%84%A0%ED%83%9D
