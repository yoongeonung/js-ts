import {atom, selector} from "recoil";


export interface Todo {
    id: number;
    text: string;
}

interface TodoState {
    [key: string]: Todo[];
}

export const toDoState = atom<TodoState>({
    key:'toDos',
    default: {
        Todo: [],
        Doing : [],
        Done: [],
    }
})

export const minuteState = atom({
    key: 'minutes',
    default: 0,
})

export const hourSelector = selector<number>({
    key: 'hours',
    get: ({get}) => {
        let minutes = get(minuteState);
        return minutes / 60;
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60
        set(minuteState, minutes);
    }
})