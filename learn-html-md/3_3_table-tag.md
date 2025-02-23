# Table Tag

- `<table>` - 표
- `<tr>`  - 행(가로)
- `<td>` - 열(세로)

## Table 기본 태그
- `<table>`<br/>
표를 만드는 태그로써, 표 전체를 감싸는 데 사용
- `<caption>`<br/>
표의 제목이나 설명을 작성하는 태그
- `<tr>`<br/>
표의 **행**을 의미하는 태그. 자식으로 `<th>`태그나 `<td>`태그가 반드시 있어야 한다.
  - `<th>`<br/>
  표의 **제목 열**을 의미하는 태그.
  - `<td>`<br/>
  표의 **일반 열**을 의미하는 태그.
## Table 그룹 관련 태그
- `<colgroup>`<br/>
열을 그룹으로 묶을 수 있게 해주는 태그이다.
- `<col>`<br/>
<t/>`<colgroup>`태그의 자식으로 열 단위를 나눌 수 있다.<br/>
<t/>ex) `<col span="3">` &rarr; 세 개의 열을 그룹으로 묶음
- `<thead>`<br/>
표의 제목 열들을 묶는 그룹태그
- `<tbody>`<br/>
표의 일반적인 데이터들을 묶는 그룹태그
- `<tfoot>`<br/>
표의 하단 영역을 묶는 그룹태그

## Table Tag 관련 속성
- `<th>`, `<td>`
  - colspan - 열을 병합하는 속성. ex) `<td colspan="2">`
  - rowspan - 행을 병합하는 속성. ex) `<td rowspan="2">`
- `<col>`
  - span - 열을 그룹화 함. ex) `<col span="3">` &rarr; 세 개의 열을 묶음
