# Font Style

#### 글꼴 관련 속성

- `font-family` - 글꼴 종류를 지정
  기본값 : 웹브라우저 기본 글꼴
- `font-size` - 글자 크기를 지정
- `font-style` - 글자를 이텔릭체로 표시할지 지정
- `font-weight` - 글자 굵기를 지정
- `font-variant` - 소문자를 작은 대문자로 바꾸는 속성

#### 웹 폰트

- <a href="https://fonts.google.com">구글 웹 폰트</a>
  `<link>`또는 `@import`문을 사용하여 웹 폰트를 적용할 수 있다

```css
<style>
/* Noto Sans KR 폰트 다운로드 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');
/*
	h1 태그에 'Noto Sans KR' 폰트 적용,
	만약 다운로드 실패하면 '바탕'글꼬 적용
*/
h1 {
	font-family: 'Noto Sans KR', 바탕;
}
</style>
```

#### 단위

- `px` : 픽셀 단위
- `rem` : 루트 요소의 글꼴 크기
- `em` : 요소의 글꼴 크기
- `vw` : viewport 너비의 1%
- `vh` : viewport 높이의 1%

#### 글자 색상

`color`속성으로 지정하며 16진수 값, rgb값, hsl값, 색상 이름이 사용됨

- 색상 키워드
  - red, yellow, green 등
  - `transparent`키워드
    transparent == rgba(0,0,0,0)
    색을 입힌 항목의 뒷편이 모두 보임
- RGB/RGBA 표기법
  - ex rgb(0,0,0), rgba(0,0,0,0)
- 16진수 표기법

  - ex #ff0000, #ff00ff, #808000 등 16진수

- hsl/hsla 표기법
  - ex hsl(H, S, L[, A]), hsla(H, S, L, A)

#### 그 외 글자 관련 속성

- `text-align`
  블록 요소(block element), 테이블 셀 박스(table-cell box)안에서 글자를 가로 정렬 하는 데 사용
  값 으로는 `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, `match-parent` 키워드가 올 수 있다
- `line-height`
  줄 간격을 설정합니다.
  `*line-height`**줄 높이**를 정하는 속성
  ◦ default: `1.25`임. **1.5이상 줘야 글을 읽기가 용이함.\***
  normal, 2.5, 3em, 150%, 32px 등 높이값을 설정 가능
- `letter-spacing`
  글자 사이의 간격
- `word-spacing`
  단어 사이의 간격, 픽셀 단위나 em으로 조정
- `text-indent`
  들여쓰기
- `text-transform`
  대문자로 또는 소문자로 바꾸는 속성
- `text-decoration`
  글자를 장식하는데, 즉 꾸미는데 사용합니다. `<a>`태그에 밑줄을 없앨 때 많이 사용합니다.
  ex text-decoration: none;
  underline, dotted, overline, none 과 같은 값이 올 수 있음
- `text-shadow`
  글자에 그림자를 넣을 수 있습니다. `가로, 세로, 번짐, 색상`
  ex text-shadow: 5px 5px 3px #222;
- `list-style`
  리스트 스타일 변경하기
- `white-space`
  요소가 공백 문자를 처리하는 법을 지정
- `word-break`
  텍스트가 자신의 콘텐츠 박스 밖으로 오버플로 할 때 줄을 바꿀 지 지정
