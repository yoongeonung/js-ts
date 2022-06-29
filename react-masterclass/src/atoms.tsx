import {atom, selector} from "recoil";

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

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const todos = get(toDoState);
        const category = get(categoryState);
        return (
                todos.filter(todo => todo.category === category)
        )
    }
})

export const categoryState = atom<Category>({
    key:"category",
    default: Category.TODO
})