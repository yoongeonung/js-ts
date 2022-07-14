import {atom, selector} from "recoil";

export const toDoState = atom({
    key:'toDos',
    default: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
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