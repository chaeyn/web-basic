# Form

`<form>`요소는 정보를 제출하기 위해 어디부터 어디까지가 양식인지 지정하는 역할

```html
<form action="/signup" method="post">
  <div class="form-example">
    <label for="name">이름: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">이메일: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="제출하기" />
  </div>
</form>
```

## 속성

- `<action>`- 데이터를 처리할 서버 프로그램의 URL
- `<method>`- 양식을 제출할 때 사용할 HTTP메서드
  - `<post>`- 양식 데이터를 **요청 본문**으로 전송
  - `<get>`- 양식 데이터를 **URL의 쿼리스트링**으로 붙여서 전송

## Input 태그

`<input>`요소로 데이터를 입력 받을 수 있다. `type`속성을 통하여 다양한 방법으로 데이터 받기 가능

- `text`- 일반적인 텍스트
- `password`- 비밀번호
- `email`- email 데이터(이메일 유효성 검증)
- `tel`- 전화번호(모바일 접근시 숫자키패드)

### label

`<label>`레이블 태그는 입력받는 필드를 설명할 때 사용

```html
<!-- label 태그 하위에 놓는 법 -->
<label>
  이름 :
  <input type="text" id="name" />
</label>

<!-- for와 id속성을 사용하여 label 태그와 연결지음 -->
<label for="name">이름 : </label>
<input type="text" id="name" />
```

### checkbox

여러개의 체크박스 항목 중 2개 이상 선택 가능, 체크박스 선택 시 선택된 체크박스의 `value`값이 서버로 전송됨

```html
<ul>
  <li>
    <label for="apple">사과</label>
    <input id="apple" type="checkbox" value="apple" />
  </li>
  <li>
    <label for="orange">오렌지</label>
    <input id="orange" type="checkbox" value="orange" />
  </li>
  <li>
    <label for="banana">바나나</label>
    <input id="banana" type="checkbox" value="banana" />
  </li>
</ul>
```

### radio

여러 개의 라이도 항목 중 1개 선택 가능, 선택된 항목의 `value`값이 서버로 전송됨<br/>
여러개 중 하나를 선택하게 하려면(ex 네이버쇼핑 옵션선택)그 여러 항목의 ` <radio name="">``name `속성 값을 같은 값으로 그룹핑 해야 함

```html
<ul>
  <li>
    <label for="strawberry">딸기</label>
    <input id="strawberry" name="fruit" type="radio" value="strawberry" />
  </li>
  <li>
    <label for="grape">포도</label>
    <input id="grape" name="fruit" type="radio" value="grape" />
  </li>
  <li>
    <label for="peach">복숭아</label>
    <input id="peach" name="fruit" type="radio" value="peach" />
  </li>
</ul>
```

### number

```html
<input type="number" />
```

- `min`속성으로 최솟값 지정
- `max`속성으로 최댓값 지정
- `value`속성은 요소의 현재 값이며, 초기에 value값이 화면에 표시됨

### range

- `min`속성으로 최솟값 지정
- `max`속성으로 최댓값 지정
- `value`속성은 요소의 현재 값이며, 초기에 value값이 화면에 표시됨

### 날짜/시간

` date``month``week``time``datetime``datetime-local `값을 사용

- `min`속성으로 최소 날짜 지정
- `max`속성으로 최대 날짜 지정

### hidden

눈에 보이지 않지만 서버로 값을 전송해야 할 때 사용하는 요소
ex 가입시간, 가입경로 등

```html
<input type="hidden" name="source" value="google" />
```

### file

`accept`속성을 사용하면 허용하는 파일 유형 지정 가능

```html
<input type="file" />
```

### image

제출 버튼으로 사용할 이미지 버튼

```html
<input type="image" src="버튼으로 사용할 이미지 경로" />
```

### button

버튼모양의 위젯 생성

```html
<input type="button">클릭</button>
```

## Form 데이터 태그 속성

- `required`
  입력값이 필수라는 것을 명시함
- `readonly`
  필드를 읽기전용으로 만듬
- `disabled`
  비활성화 시키며, 해당 필드는 서버로 전송X
- `autofocus`
  초기에 해당 필드에 커서 위치시킴
- `placeholder`
  입력값의 설명을 삽입함

### fieldset

양식의 여러 컨트롤과 <label>을 묶을 때 사용

#### legend

요소는 부모 `<fieldset>`콘텐츠의 설명을 나타냄

### Textarea

`<textarea>`는 여러줄의 데이터를 입력받음

#### 속성

- `rows`- 화면에 표시되는 행수 지정
- `cols`- 화면에 표시되는 컬럼 수 지정

### Select

`<select>`는 옵션 메뉴 제공. `<option>`태그로 각 항목을 나타내며 `<select>`태그는 `<option>`태그를 감싼다.

```html
<select name="goods" id="goods">
  <option value="10kg">사과 10kg</option>
  <option value="20kg" selected>사과 20kg</option>
  <option value="30kg">사과 30kg</option>
  <option value="40kg">사과 40kg</option>
  <option value="50kg">사과 50kg</option>
</select>
```

옵션 안의 내용은 사용자에게 보여지고, 실제 서버로 전송되는 값은 `value`안의 값

- `selected`속성은 `<select>`요소에서 선택된 항목(사과 20kg)을 가리킨다

### Datelist

다른 컨트롤에서 고를 수 있는, 추천하는 선택지를 나타내는 `<option>`요소를 담는 것, 자동완성 제공

```html
<label for="ice-cream-choice">맛을 선택하세요</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

### Button
`<button>`요소는 클릭 가능한 버튼을 나타냄. `<form>`내부는 물론 버튼 기능이 필요한 곳이라면 어디에나 배치 가능

```html
<button type="button">추가하기</button>
```

#### `<type>`
버튼의 행동 방식 선언
- `submit`: 버튼이 서버로 데이터를 제출(기본값)
- `reset`: 모든 입력 필드를 초기값으로 되돌림
- `button`: 기본 행동이 없고, JS측 코드를 명령할 때 사용