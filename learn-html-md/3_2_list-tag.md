# List Tag

- `<ol>`, `<ul>`<br/>
순서가 있는 목록, 순서가 없는 목록
  - `<li>`<br/>
  목록 하위 항목으로 사용되며, `<ul>`태그 or `<ol>`태그의 하위에 위치한다
- `<dl>`<br/>
정의 목록(Definitoin List)의 약자로, **사전처럼 용어를 설명하는 목록**을 만든다   
ex) A는 B이다. 와 같은 Key = Value로 사용한다
  - `<dt>`<br/>
  정의 용어(Defiiton Term)의 약자로, 정의되는 용어의 **제목**을 넣을때 사용한다
  - `<dd>`<br/>
  정의 설명(Definiton Description)의 약자로, 용어를 **설명**하는데 사용한다<br/>

**⚠️주의사항**
<br/>
- `<dl>`태그는 하나 이상의 `<dt>-<dd>`쌍의 태그를 가지고 있어야 한다
  - 단, `<dt>-<dd>`태그가 반드시 하나의 짝으로 지어저야 하는 것은 아님
- `<li>`, `<dt>-<dd>` 태그는 독립적으로 사용X
- `<ul>`태그 하위요소로는 `<li>`태그가 위치해야 한다
