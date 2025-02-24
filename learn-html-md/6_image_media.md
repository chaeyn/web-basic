# Image

## `<img>`

```html
<img src="image.jpg" alt="이미지" />
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

    ### 오디오&비디오

    #### 오디오

    `<audio>`태그는 HTML 문서에 소리 콘텐츠를 넣을 때 사용

    `src`속성 또는 `<source>`Element를 사용하여 한 개 이상의 오디오 소스 지정 가능, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 선택함

    - ex

    ```html
    <audio controls src="test.mp3"></audio>
    ```

    #### 비디오

    `<video>`태그는 HTML문서에 영상 콘텐츠를 삽입할 때 사용

    `src`속성 또는 `<source>`Element를 사용하여 한 개 이상의 비디오 소스 지정 가능, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 선택함

    - ex

    ```html
    <video controls src="test.mp4" type="video/mp4"></video>
    ```

  ### 하이퍼링크

  `<a>`태그는 `herf`속성을 사용하여 다른 페이지나 같은 페이지의 특정 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만든다.

  `target="_blank"`속성을 이용하면 새 탭에서 열 수 있다

  - 같은 폴더 안에 있는 다른 페이지 이동

  ```html
  <a href="test.html">다른 페이지 이동</a>
  <a href="test.html" target="_blank">새탭으로 페이지 열기</a>
  ```

  - 이미지에 하이퍼링크 걸기

  ```html
  <a href="inner.html"><img src="apple.png" alt="사과" width="200" /></a>
  ```

  - id속성이 apple인 위치로 이동

  ```html
  <!-- id가 apple인 요소로 이동 -->
  <a href="#apple">이동</a>
  <!-- 해당 요소 위치로 스크롤이 이동 -->
  <div id="apple">사과</div>
  ```

  - 이메일 보내기

  ```html
  <a href="mailto:chaulfe@gmail.com">이메일 보내기</a>
  ```

  - `target`
    - `_blank`:URL을 새 탭에서 열기
