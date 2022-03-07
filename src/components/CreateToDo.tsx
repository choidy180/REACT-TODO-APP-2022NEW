import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm{
  toDo: string;
}

function CreateToDo(){
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos((oldToDos)=>[{text: toDo, id: Date.now() ,category: "TO_DO"}, ...oldToDos])
    setValue("toDo","");
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("toDo", {
        required: "Todo를 입력하세요",
      })} placeholder="Write a to do" />
      <button>Add</button>
    </form>
  )
}

export default CreateToDo;