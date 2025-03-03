# Table

- `<table>` 태그에 border 속성으로 테두리

  ```css
  table {
    border: 1px solid #222;
    border-collapse: collapse;
  }
  td,
  th {
    border: 1px solid #222;
  }
  ```

  - `<table>` 태그에 `border` 속성을 사용하여 테두리
  - `<td>` `<th>` 태그에 `border` 속성을 사용하여 테두리
  - `border-collapse: collapse;` 속성을 사용하여 중복된 테두리를 하나로 합침
- `<table>` 제목에 배경색 지정

  ```css
  th {
    background-color: #ccc;
  }
  ```
