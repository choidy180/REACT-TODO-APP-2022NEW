import React from "react";
import { useSetRecoilState } from "recoil";
import { Cateroies, ITodo, toDoState } from "../atom";

const food = ["pizza","mango","kimchi","kimbab"]
const front = ["pizza"]
const back = ["kimchi", "kimbab"]
const finalPart = [...front, "감", ...back];

function ToDo({text, category, id}: ITodo){
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget:{name},
    } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text, id, category:name as any};
      return [
        // 새로운 배열 생성 [이벤트 타켓넘버로 이전 원소를 넣고 newToDo넣고 그 이후 target이후 배열 넣음]
        ...oldToDos.slice(0, targetIndex), 
        newToDo , 
        ...oldToDos.slice(targetIndex + 1)];
    })
  };
  return (
    <li>
      <span>{text}</span> 
      {category !== Cateroies.TO_DO &&  
        <button name={Cateroies.TO_DO + ""} onClick={onClick}>To Do</button>
      }
      {category !== Cateroies.DOING &&  
        <button name={Cateroies.DOING + ""} onClick={onClick}>Doing</button>
      }
      {category !== Cateroies.DONE && 
        <button name={Cateroies.DONE + ""} onClick={onClick}>Done</button>
      }
    </li>
  )
}

export default ToDo;