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

# BOM - 1st Object Model
* 최상위 객체 - Window (전역객체)
  + 모든 내장 함수는 window라는 객체의 메소드 (따라서 window를 생략 가능)

    ex) a를 선언했을 때 window.a 로도 접근 가능

* Location 객체
  + 문서의 주소와 관련
  + location.href 통해서 현재 위치(url) 알아냄
  + location.host, location.protocol 등등의 다양한 옵션이 있다

  + 정리하자면
    (http://www.naver.com:80/module/1?id=1#hash)
      1          2        3     4      5    6

     1. protocol
     2. host
     3. port
     4. pathname
     5. search ( 서버에 전달된 인자 )
     6. hash ( 북마크 개념 )

  * Navigator 객체
    + 브라우저의 정보를 제공

    + 현존하는 여러 브라우저들은 표준화 기구의 스펙에 따라 만들어짐 ( 스펙에 규정되어 있지 않은 디테일한 부분은 서로 다름 )

# DOM - 2nd Object Model
* 문서를 Javascript로 제어하기 위해서 제어의 대상에 해당하는 객체를 우선 찾아야 한다. 그 방법은 아래와 같다.

  + document.getElementsByTagName : 해당 이름의 태그들을 유사 배열에 담아온다
  + document.getElementsByClassName : 클래스 기준으로 찾아옴
  + document.getElementById : id 값을 기준으로 객체를 조회하며 성능면에서 가장 우수!
  + document.querySelector(ALL) : CSS 문법 기준으로 찾아옴, ALL 사용시 하나만 가져오는 것이 아니라 다 가져온다

* 위보다 쉬운 방법들을 재사용할 수 있도록 정리해놓은 것이 '라이브러리' ( ex) jQuery )
