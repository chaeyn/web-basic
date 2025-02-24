# Image

## `<img>`
```html
<img src="image.jpg" alt="이미지">
```
- `<src>`<br/>
  **필수**이며, 이미지의 경로를 지정
- `<alt>`<br/>
  이미지의 텍스트 설명, 이미지를 표시할 수 없는 경우에 이 속성값을 대신 보여줌
- `<height>`<br/>
  이미지의 고유 크기, 단위없음
- `<width>`<br/>
  이미지의 고유 너비, 단위없음

  ## 절대경로 vs 상대경로

  ### 절대경로

  Resources(이미지)의 절대경로는 말 그래도 절대적인(고유한)경로를 지정하는 것이다

    - 웹 이미지 절대경로 ex) http://naver.com/image.png

    http 프로토콜로 시작해서 전체 경로룰 입력함
  
    - /image.png, C:\user\desktop\image.png 등 루트, 컴퓨터 절대경로가 있지만<br/>웹 이미지가 사라지거나 내 컴퓨터에 있는 파일을 옮길 때<br/>절대경로를 수정해야 하는 불편함이 있어 주로 상대경로를 사용한다
 
  ### 상대경로

  - `index.html`에서 동일한 위치에 있는 image.png를 가져오려면<br/>
    `src="image.png"`또는 `src="./image.png`
    
  - `index.html`의 상위 폴더에 이미지가 있는 경우<br/>
    `src="../image.png"`
    
  - `index.html`의 하위 폴더에 이미지가 있는 경우<br/>
    `src="하위폴더/image.png"`
  
    
