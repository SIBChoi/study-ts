- 타입스크립트

1. 개발(lint-time)중 에러캐치에 도움을 준다.
2. 타입스크립트는 자바스크립트를 작성하는 것과 동일하다. 단지 타입유형을 추가할 뿐.
3. 타입스크립트는 실행에 영향을 주지 않는다. (성능 최적화등 x 런타임시 js로 컴파일 후 js가 실행)

in termial (tsc [File].ts => node [File].js) === ts-node [File].ts

app내부에서 정의하는 모든 값에는 유형이 있다.
모든 value에는 유형이 있다. 유형을 정의한다는 것은 유형의 속한 속성을 알 수 있다는 것.
type은 컴파일러시 오류가 있는지 코드를 분석하는데 사용된다.
협업하는 개발자에게 코드의 흐름을 이해시키기 쉽다.
다른 개발자가 나의 코드가 무엇인지 이해하기 쉽게 만든다.

1. Primitive Types: string, number, boolean, null, undifined, void, symbol
2. Object Types: array, object, function, class

key word

1. interface => 객체의 구조를 정의하는데 사용.
   높은 재사용코드를 만들 수 있다.

유형주석을 사용하는 상황. (nay type)

1. 함수가 any타입을 리턴할 때
2. 함수의 선언과 초기값설정을 한줄에서 하지 않을 때.

함수를 사용할 때 파라미터와 리턴타입에는 유형주석을 사용.
변수의 선언과 초기값을 한줄에 작성할 때는 유형추론을 사용.

Tuple

1. 배열과 똑같은 형태이다. 하지만 요소를 넣을 때 구체적인 순서로 넣는다.
   not super useful, 배열내의 요소가 무엇을 의미하는지 알 수가 없다.
