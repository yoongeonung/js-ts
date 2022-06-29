import React from "react";
import {useRecoilValue} from "recoil";
import CreateTodo from "./CreateTodo";
import {ITodo, toDoSelector, toDoState} from "../atoms";
import Todo from "./Todo";


function TodoLIst() {
    // const todos = useRecoilValue<ITodo[]>(toDoState);
    const [todos, doing, done] = useRecoilValue(toDoSelector);
    return (
        <>
            <CreateTodo/>
            <ul>
                <h2>Todo</h2>
                {todos.map(todo => <Todo key={todo.id} {...todo} />)}
                <hr/>
                <h2>Doing</h2>
                {doing.map(todo => <Todo key={todo.id} {...todo} />)}
                <hr/>
                <h2>Done</h2>
                {done.map(todo => <Todo key={todo.id} {...todo} />)}
                <hr/>
            </ul>
        </>
    )
}

export default TodoLIst;