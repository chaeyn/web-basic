# Inline VS Block

- `<div>`태그는 주로 영역 분할을 하거나 컨테이너의 역할을 한다
  - display: block

- `<span>`특정 텍스트나 문장 영역을 지정하여 스타일링을 할 때 사용한다
  - display: inline

## Block Element

블록 레벨 요소는 부모 요소의 **전체 공간**을 차지하여 "블록"을 만든다<br/>
ex) `<h1>~<h6>` `<ol>` `<ul>` `<li>` `<p>`
- 화면 구성이나 레이아웃을 짤 때에는 블록 레벨 요소를 사용
- 블록 레벨 요소는 한 칸을 전부 차지하기 때문에 여러 개의 요소를 사용했을 때 세로로 나열됨
- width, height, margin 속성이 적용됨

## Inline Element

인라인 레벨 요소는 줄바꿈을 하지 않고 요소를 구성하는 **태그에 할당된 공간만 차지**한다<br/>
ex) `<a>` `<em>` `<img>` `<span>`
- 인라인 레벨 요소는 콘텐츠 영역 만큼 차지하기 때문에 여러 개의 요소를 사용했을 때 가로로 나열됨
- margin-top, margin-bottom 적용X 대신 line-height 사용
- width, height 속성 적용X
- text-align같은 속성 사용X
