import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import CreateTodo from "./CreateTodo";
import {Category, categoryState, toDoSelector} from "../atoms";
import Todo from "./Todo";


function TodoLIst() {
    const todos = useRecoilValue(toDoSelector);
    const setCategory = useSetRecoilState(categoryState);
    const onInput = ({currentTarget:{value}}:React.FormEvent<HTMLSelectElement>) => {
        setCategory(value as Category)
    }
    return (
        <>
            <CreateTodo/>
            <select onInput={onInput}>
                <option value={Category.TODO}>TODO</option>
                <option value={Category.DOING}>DOING</option>
                <option value={Category.DONE}>DONE</option>
            </select>
            <ul>
                <h2>Todo</h2>
                {todos.map(todo => <Todo key={todo.id} {...todo} />)}
            </ul>
        </>
    )
}

export default TodoLIst;