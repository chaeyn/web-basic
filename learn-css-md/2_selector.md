# selector(선택자)

### 기본 선택자

#### 전체 선택자 (Universal selector)

```css
/* 모든 요소를 선택함. */
* {
  margin: 0;
  padding: 0;
}
```

- 용도 - 전체 선택자는 브라우저 기본 스타일을 초기화 하려고 할 때 자주 사용합니다.

#### 타입 선택자 (Type selector)

```css
/* 태그명이 h1인 요소를 모두 선택함. */
h1 {
  color: blue;
}
```

#### 클래스 선택자 (Class selector)

```css
/* class에 title을 갖고 있는 모든 요소를 선택함. 예) <h1 class="title"> */
.title {
  color: blue;
}
```

#### ID 선택자 (ID selector)

```css
/* id속성이 title인 요소를 선택함. */
#title {
  color: blue;
}
```

- id 선택자는 웹 문서에서 고유한 하나의 태그에만 사용해야 한다

#### 속성 선택자 (Attribute selector)

```css
/* <a>태그에 title 속성이 존재하는 모든 요소. 예) <a href="https://example.org">exam</a> */
a[href] {
  color: purple;
}

/* <a>태그에 href 속성이 "https://example.org" 해당 값과 일치하는 요소. */
a[href="https://example.org"]
{
  color: green;
}

/* <a>태그의 href 속성에 "example" 문자열을 포함하는 요소. */
a[href*="example"] {
  font-size: 2em;
}

/* <a>태그의 href 속성이 "www"로 시작하는 요소. */
a[href^="www"] {
  font-style: italic;
}

/* <a>태그의 href 속성이 ".org"로 끝나는 요소. */
a[href$=".org"] {
  font-style: italic;
}

/* <a>태그의 class속성이 클래스 속성에 'logo'라는 단어가 포함 된 요소 */
a[class~="logo"] {
  padding: 2px;
}
```

## 그룹선택자

```css
h1,
p {
  text-align: center;
}
```

- 선택자를 쉼표로 구분해 여러 선택자를 나열<br/>같은 스타일을 여러 선택자에 한꺼번에 정의할 수 있다

## 결합자

#### 자손 결합자

```css
/* <div>태그 하위에 있는 모든 <span>요소 */
div span {
  color: blue;
}
```

#### 자식 결합자

```css
/* <ul>태그의 바로 자식인 모든 <li>요소 */
ul > li {
  color: blue;
}
```

#### 일반 형제 결합자

```css
/* <p>태그의 뒤에(아래) 나오는 모든 <span>요소 */
p ~ span {
  color: blue;
}
```

#### 인접 형제 결합자

```css
/* <h2>태그 바로 뒤에 위치하는 <p>요소 */
h2 + p {
  color: blue;
}
```
