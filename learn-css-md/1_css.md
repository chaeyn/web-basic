# CSS란?

Cascading Style Sheets의 약자로, HTML문서를 꾸밀 때 사용하는 스타일을 잘 정리한 시트(문서)

## CSS 구조
- `선택자` or `Selector` - 꾸미고 싶은 HTML 요소를 선택 ex `h1`
- `속성명` - 꾸미고 싶은 속성명을 입력 ex `color`
- `속성값` - 어떻게 꾸밀지 속성값을 입력 ex `blue`
<img src="https://gymcoding.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd817a499-8e89-4df0-8a65-512630794444%2FHTML_CSS.001.jpeg?table=block&id=32e03c9c-b6df-4206-ad4d-1f48c40a9733&spaceId=34c3bb9a-fd4a-4827-a490-5a2912b6a1ed&width=1530&userId=&cache=v2">

## CSS 적용 방법

- **인라인 스타일 - Inline Style Sheet**
- **내부 스타일 - Internal Style Sheet**
- **외부 스타일 - External Style Sheet**

세 가지 방법이 있지만 주로 External Style(외부 스타일)위주로 사용함

- 외부 style.css파일 정의
```css
/* style.css File */
h1 {
  color: cyan;
}
.article {
  border: 1px solid black;
  padding: 30px;
}
```
- HTML파일에서 외부 style.css파일 연결
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Apply CSS</title>
  <!-- 외부 스타일(External Style)-->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 외부 스타일 적용 -->
  <h1>코딩</h1>
  <div class="article">우리는 코딩을 배우고 있어요!</div>
</body>
</html>
```
