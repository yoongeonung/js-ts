import React from "react";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {Category, toDoState} from "../atoms";


interface TodoForm {
    todo: string;
}

function CreateTodo() {
    const setTodo = useSetRecoilState(toDoState);
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<TodoForm>();
    const onSubmit = (data: TodoForm) => {
        setTodo(prev => [...prev, {id: Date.now(), text: data.todo, category: Category.TODO}]);
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