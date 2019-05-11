# javascript
* HTML 및 CSS Control

# HTML에 Javascript 적용 - 방법 1
* HTML의 onclick 속성을 통해서 Javascript 적용 가능

# HTML에 Javascript 적용 - 방법 2
* script 태그 사용해서 사이에 Javascript 코드 삽입

* HTML과 섞이지 않아 유지 보수에 좋다

# HTML에 Javascript 적용 - 방법 3
* script태그에 src = "./ ~.js" 옵션을 넣어 자바스크립트 코드를 파일로 분리하고, 그 파일을 전달

* 브라우저의 캐쉬 기능을 통해서 속도의 향상, 전송량의 경량화를 도모할 수 있다

* script 태그의 위치는 head 태그에 넣기 보다는 body가 낫다
  + 헤드에 넣으려면 페이지가 모두 로드된 후에 스크립트가 해석되도록 window.onload 등을 이용해서 NULL 오류의 발생을 막아야 한다.
  + head에 넣을 경우 헤더 내용 해석하느라 body 태그 끝 에 넣었을 때보다 약간 느려짐

# DOM
