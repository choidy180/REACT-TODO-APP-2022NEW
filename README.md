# REACT-TODO-APP (+Recoil을 진하게 곁들인?)

## 기본 Setting
### npm i --save-dev @types/styled-components << styled-components Default 사용
### npm i recoil << 전역 상태관리 recoil 사용
### npm i typescript << typescript 사용
### npm i styled-reset << 모든 HTML Element, Components에 Global 설정으로 설정 초기화

## 2022-03-06
### 기본세팅 + 투두 생성 input 작업 완료

### npm install react-hook-form >> 사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form(react-hook-form)

### handleSubmit: ((data: Object, e?: Event) => void, (errors: Object, e?: Event) => void) => Function
### 이 함수는 form 유효성 검사가 성공하면 form 데이터를 받습니다.
### handleSubmit을 이용해서 onSubmit 이벤트 대체하기

### 🔶사용방법
### const {register, handleSubmit} = useForm();
### < form onSubmit={handleSubmit(parameter)} >
### 🔶handleSubmit 함수 설명
### -첫번째 인자(필수): 데이터가 유효할 때 호출되는 함수
### -두번째 인자(필수X): 데이터가 유효하지 않을 때 호출되는 함수
### 🔶input의 유효성 검사하기
### < input {...register("email",{required: true})} /> 라고 작성하고 input에 값을 적지 않고 내보내면 react-hook-form이 값이 유효한지(값이 있는지 없는지) 확인 후 오류가 있는 부분에 커서를 갖다준다.
### < input {...register("email",{required: true, minLength: 10})} /> 쓰면 글자수도 확인해줌

## 2022-03-07

### Recoil setting 완료
### useSetRecoilState << useState의 set~처럼 recoil(전역)으로 해당 변수? 값을 설정한다. 
### ex) const setToDos = useSetRecoilState(toDoState);

### useRecoilState << useState처럼 recoil 변수(상태)를 사용함을 선언함
### ex) const [toDos, setToDos] = useRecoilState(toDoState); 

### useRecoilValue << recoil 변수(상태)를 사용함을 선언
### ex) const toDos = useRecoilValue(toDoState); 

### 버튼 클릭시 TO_DO / DOING / DONE 상태 변화하게 구현 완료 Todo.tsx(slice 활용)

## 2022-03-09
### selector은 atom의 output을 변형시키는 도구이다.
### >> selector은 state를 가져다가 뭔가를 return 할 것이다.
### Selector는 파생된 state(derived state)의 일부를 나타낸다.
### 즉, 기존 state를 가져와서, 기존 state를 이용해 새로운 state를 만들어서 반환할 수 있다. 기존 state를 이용만할 뿐 변형시키지 않는다. derived state는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.

## 2022-03-10

## Enums

### 열거형은 TypeScript가 제공하는 기능 중 하나입니다.
### enum은 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다.
### 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있습니다. TypeScript는 숫자와 문자열-기반 열거형을 제공합니다.

### 숫자 열거형 (Numeric enums)
### enum Direction {
### Up = 1,
### Down,
### Left,
### Right,
### }

### 문자열 열거형 (String enums)
### enum Direction {
### Up = "UP",
### Down = "DOWN",
### Left = "LEFT",
### Right = "RIGHT",
### }
### 등등..

### https://www.typescriptlang.org/ko/docs/handbook/enums.html

## 2022-03-11
### 프로젝트 마무리
### 프로젝트 시작 > toDoState , 가장 처음 새로 추가하는 toDo들이 모두 toDoState로 들어간다. <br>
### toDo를 보려고 할시 selector를 이용함,  selector는 state를 가져다가 변형한다,<br> selector에서 값을 얻어오려면, state에서 값을 얻어올 때 쓰던 함수를 그대로 사용하면된다. <br>(useRecoilValue),  selector에서는 key와 함께 get(func)이 존재하고, 해당 function은 select가 어떤 것을 반환할지 결정함,<br>
### get function은 인자를 객체로 받는다. 해당 객체에는 또 다른 get function이 들어있고 해당 함수로 원하는 atom을 가져올 수 있다.<br><br>
### 해당 프로젝트에서는 두 개의 atom을 사용하고 있고, 모든 toDo를 저장하고있는 toDos atom과 category의 상태를 저장하는 atom이 그것이다.<br><br>

### HTML의 select 태그에서 카테고리를 선택하면 categoryState가 변하고 있고, 이 내용은 select가 변하고 있다와 동일함을 뜻한다. >> categoryState가 변할 때 마다 selector도 실행됨<br><br> 

### selector의 역할 >> toDo를 가져와서 categoryState에 맞는 toDo만 걸러서 반환한다. (선택한 toDo만 볼 수 있게 필터링한다.)<br>
### select의 onInput함수는 select의 value를 가져다가 setCategory함수에 넣어주고 있다. >> category를 설정함.
<br><br>

### 개발 시 어떠한 변수에 문자열을 사용시 계속 문자열을 사용하는 것은 좋지 않다. ex) "TO_DO", "DOING", "DONE" [개발시 실수할 가능성이 높음]<br>
### 이를 해결하기 위해 enum(열거)를 사용한다. 사용시 변수처럼 문자열을 사용가능하다.

<hr>

## 느낀 점?
### 🎨일단 좀 더 써보고 나서 숙련도를 올려야겠다고 느꼈다.

