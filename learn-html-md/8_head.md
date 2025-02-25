# Head

## Head 태그란?

`<head>`태그는 문서정보(메타데이터)를 담고 있다.
브라우저 화면에 직접적으로 보이지는 않지만 숨은 데이터를 정의하는 태그들이 들어가 있음
ex ` <title>``<base>``<meta> `등

## Head 안에 배치할 수 있는 요소

- `<title>`<br/>
  브라우저의 페이지 탭에 보이는 문서 제목을 정의한다. 텍스트만 포함할 수 있으며 태그를 포함하더라도 무시한다

- `<link>`<br/>
  파비콘이나 Style Sheet를 연결할 때 사용

  ```html
  <!-- 파비콘 설정 -->
  <link rel="shortcut icon" href="./favicon.ico" />
  <!-- Style 시트 연결 -->
  <link href="/style.css" rel="stylesheet" />
  ```

- `<style>`<br/>
  스타일 규칙을 담고 있다

  ```css
  <style>
  .title {
  	color: blue;
  }
  </style>
  ```

- `<meta>`<br/>
  ` <base>``<link>``<script> `과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터를 나타낸다.

- `<script>`<br/>
  데이터나 JS코드를 웹 문서에 포함할 때 사용한다

## Open Graph

콘텐츠의 요약내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것

### 기본적으로 웹에 설정해야하는 og 메타태그

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
<!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

#### Naver블로그, 카카오톡 미리보기

```html
<meta property="og:title" content="콘텐츠 제목" />
<meta property="og:url" content="웹페이지 URL" />
<meta property="og:type" content="웹페이지 타입(blog, website 등)" />
<meta property="og:image" content="표시되는 이미지" />
<meta property="og:title" content="웹사이트 이름" />
<meta property="og:description" content="웹페이지 설명" />
```

#### 모바일 앱 미리보기

```html
<--iOS-->
<meta property="al:ios:url" content=" ios 앱 URL" />
<meta property="al:ios:app_store_id" content="ios 앱스토어 ID" />
<meta property="al:ios:app_name" content="ios 앱 이름" />
<--Android-->
<meta property="al:android:url" content="안드로이드 앱 URL" />
<meta property="al:android:app_name" content="안드로이드 앱 이름" />
<meta property="al:android:package" content="안드로이드 패키지 이름" />
<meta property="al:web:url" content="안드로이드 앱 URL" />
```
