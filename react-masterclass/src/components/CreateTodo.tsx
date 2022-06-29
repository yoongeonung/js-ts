import React from "react";
import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from "../atoms";


interface TodoForm {
    todo: string;
}

function CreateTodo() {
    const setTodo = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<TodoForm>();
    const onSubmit = (data: TodoForm) => {
        setTodo(prev => [...prev, {id: Date.now(), text: data.todo, category}]);
        setValue("todo", "");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("todo", {required: "todo is required"})} type="text"
                   placeholder={"What is your todos"}/>
            {errors?.todo?.message && <div>{errors?.todo?.message}</div>}
            <button>add</button>
        </form>
    )
}

export default CreateTodo;