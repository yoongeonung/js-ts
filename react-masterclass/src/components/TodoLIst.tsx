import React from "react";
import {useRecoilValue} from "recoil";
import CreateTodo from "./CreateTodo";
import {ITodo, toDoState} from "../atoms";
import Todo from "./Todo";


function TodoLIst() {
    const todos = useRecoilValue<ITodo[]>(toDoState);
    console.log(todos)
    return (
        <>
            <CreateTodo/>
            <ul>
                {todos.map(todo => <Todo key={todo.id} {...todo} />)}
            </ul>
        </>
    )
}

export default TodoLIst;
