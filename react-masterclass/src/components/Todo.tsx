import React from "react";
import {Category, ITodo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";


function Todo({id,text, category}: ITodo) {
    const setTodos = useSetRecoilState(toDoState);
    const onClick = (clickedCategory : Category) => {
        setTodos(prev => {
            const index = prev.findIndex(v => v.id === id);
            const front = prev.slice(0, index);
            const back = prev.slice(index + 1);
            return [...front, {id, text, category: clickedCategory}, ...back];
        })
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Category.DOING && <button onClick={() => onClick(Category.DOING)}>Doing</button>}
            {category !== Category.TODO && <button onClick={() => onClick(Category.TODO)}>To Do</button>}
            {category !== Category.DONE && <button onClick={() => onClick(Category.DONE)}>Done</button>}
        </li>
    )
}

export default Todo;