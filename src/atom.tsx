import { atom, selector } from "recoil";

export enum Cateroies {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Cateroies;
}

export const categoryState = atom<Cateroies>({
  key:"category",
  default:Cateroies.TO_DO,
})

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
})

export const toDoSelector = selector({
  key:"todoSelector",
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  }
})