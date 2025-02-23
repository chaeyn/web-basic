# emmet

emmet은 HTML과 CSS의 자동완성 기능을 제공하여 작성시간을 빠르게 단축 시켜주는 확장 기능

### 자식노드 >
`div>ul>li`
```html
<div>
   <ul>
    <li></li>
   </ul>
</div>
```

### 형제노드 +
`div>ul+ol+div`
```html
<div>
  <ul></ul>
  <ol></ol>
  <div></div>
</div>
```

### 반복하기 *
`div>ul>li*3`
```html
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

### 아이디 \#
`span#item`
```html
<span id="item"></span>
```
`#item`
```html
<div class="title"></div>
```
태그의 기본값은 div이기 때문

### 클래스 .
`span.title`
```html
<span class="title"></span>
```
`.title`
```html
<div class="title"></div>
```

### 콘텐츠 {}
`p.container{Hello World}`
```html
<p class="container">Hello World</p>
```

### 자동 넘버링 $
`p.container{item$}*5`
```html
<p class="container">item1</p>
<p class="container">item2</p>
<p class="container">item3</p>
<p class="container">item4</p>
<p class="container">item5</p>
```
