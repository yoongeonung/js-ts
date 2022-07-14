import {atom, selector} from "recoil";

interface TodoState {
    [key: string]: string[];
}

export const toDoState = atom<TodoState>({
    key:'toDos',
    default: {
        to_do : ['a', 'b', 'c', 'f'],
        doing : ['d', 'e'],
        done: ['g', 'h'],
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