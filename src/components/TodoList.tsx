import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, Cateroies, toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList(){
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }
  console.log(category);
  return(
    <>
      <h1>To Dos</h1>
      <hr/>
      <select value={category} onInput={onInput}>
        <option value={Cateroies.TO_DO}>To Do</option>
        <option value={Cateroies.DOING}>Doing</option>
        <option value={Cateroies.DONE}>Done</option>
      </select>
      <CreateToDo/>
      {toDos?.map((toDo) => 
        <ToDo key={toDo.id} {...toDo}/>)
      }
    </>
  )
}

export default TodoList;
