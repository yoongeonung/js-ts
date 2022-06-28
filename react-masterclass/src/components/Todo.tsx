import React from "react";
import {Category, ITodo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";


function Todo({text, category}: ITodo) {
    const setTodos = useSetRecoilState(toDoState);
    const onClick = (clickedCategory : Category) => {
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