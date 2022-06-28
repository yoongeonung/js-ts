import {atom} from "recoil";

export enum Category {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export interface ITodo {
    id: number;
    text: string;
    category: Category
}

export const toDoState = atom<ITodo[]>({
    key: "todo",
    default: []
});