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