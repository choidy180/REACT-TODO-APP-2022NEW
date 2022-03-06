import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList(){
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChanege = (event:React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: {value},
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if(todo.length < 10){
//       return setTodoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={todo} onChange={onChanege} placeholder="Write a to do"/>
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   )
// }

interface IForm{
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

function TodoList(){
  // register (객체) / watch (변화) / handleSubmit(확인)
  const { 
    register, 
    handleSubmit, 
    formState:{errors}, 
  } = useForm<IForm>({
    defaultValues:{
      email: "@naver.com"
    }
  });
  const onValid = (data:any) => {
    console.log(data);
  }
  console.log(errors);
  return (
    <>
      <form 
        style={{display:"flex", flexDirection:"column", width:"500px"}} 
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", {
            required:"Email is Required", 
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })} 
          placeholder="Email" 
        />
        <p>{errors?.email?.message}</p>
        <input {...register("firstName", {
          required:"write here!!"})} 
          placeholder="First Name" 
        />
        <p>{errors?.firstName?.message}</p>
        <input {...register("lastName", {
          required:"write here!!"})} 
          placeholder="Last Name" 
        />
        <p>{errors?.lastName?.message}</p>
        <input {...register("username", {
          required:"write here!!"})} 
          placeholder="Username" 
        />
        <p>{errors?.username?.message}</p>
        <input {...register("password", {
          required:"Password is required", 
          minLength:{
            value: 5,
            message: "Your password is too short.",
          }
          })} 
          placeholder="Password" 
        />
        <p>{errors?.password?.message}</p>
        <input {...register("password1", {
          required:"Password1 is required", 
          minLength:{
            value: 5,
            message: "Your password1 is too short.",
          }
          })} 
          placeholder="Password1" 
        />
        <p>{errors?.password1?.message}</p>
        <button>Add</button>
      </form>
    </>
  )
}

export default TodoList;
