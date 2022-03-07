import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList(){
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return(
    <>
      <h1>To Dos</h1>
      <hr/>
      <CreateToDo/>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))}
      </ul>
    </>
  )
}

// interface IForm{
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
//   extraError: string;
// }

// function TodoList(){
//   // register (객체) / watch (변화) / handleSubmit(확인) /setError (에러생성)
//   const { 
//     register, 
//     handleSubmit, 
//     // formState 내부 errors객체 접근
//     formState:{errors},
//     setError 
//   } = useForm<IForm>({
//     defaultValues:{
//       email: "@naver.com"
//     }
//   });
//   const onValid = (data:IForm) => {
//     if(data.password !== data.password1){
//       setError(
//         "password1", 
//         { message: "Password are not the same!!"},
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError",{message:"Server offline."});
//   }
//   console.log(errors);
//   return (
//     <>
//       <form 
//         style={{display:"flex", flexDirection:"column", width:"500px"}} 
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input {...register("email", {
//             required:"Email is Required", 
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })} 
//           placeholder="Email" 
//         />
//         <p>{errors?.email?.message}</p>
//         <input {...register("firstName", {
//           required:"write here!!"})} 
//           placeholder="First Name" 
//         />
//         <p>{errors?.firstName?.message}</p>
//         <input {...register("lastName", {
//           required:"write here!!"})} 
//           placeholder="Last Name" 
//         />
//         <p>{errors?.lastName?.message}</p>
//         <input {...register("username", {
//             required:"write here!!",
//             // 입력 금지어 설정
//             validate: {
//               noAdmin: (value) => value.includes("admin") ? "no admin allowed" : true,
//               noMaster: (value) => value.includes("master") ? "no master allowed" : true,
//             },
//           })} 
//           placeholder="Username" 
//         />
//         <p>{errors?.username?.message}</p>
//         <input {...register("password", {
//           required:"Password is required", 
//           minLength:{
//             value: 5,
//             message: "Your password is too short.",
//           }
//           })} 
//           placeholder="Password" 
//         />
//         <p>{errors?.password?.message}</p>
//         <input {...register("password1", {
//           required:"Password1 is required", 
//           minLength:{
//             value: 5,
//             message: "Your password1 is too short.",
//           }
//           })} 
//           placeholder="Password1" 
//         />
//         <p>{errors?.password1?.message}</p>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </>
//   )
// }

export default TodoList;
