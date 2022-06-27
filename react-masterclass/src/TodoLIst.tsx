import React from "react";
import {useForm} from "react-hook-form";

interface TodoForm {
    Email: string;
    Firstname: string;
    Lastname: string;
    Userid: string;
    Password1: string;
    Password2: string;
    extraError?: string;
}

function TodoLIst() {
    const {register, handleSubmit, formState:{errors}, setError} = useForm<TodoForm>();
    const onValid = (data: TodoForm) => {
        if (data.Password1 !== data.Password2) {
            setError("Password1", {message: "not same!"}, {shouldFocus:true})
        }
    }
    console.log(errors);
    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("Email", {
                    required: "require email",
                    pattern: {value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "Only allow to naver.com"},
                    validate: (value) => {
                        const idLneg = value.split("@")[0].length;
                        if (idLneg < 3) {
                            return "3자이상만 허용";
                        }
                    }
                })} placeholder={"Email"}/>
                <span>{errors?.Email?.message}</span>
                <input {...register("Firstname", {required: true})} placeholder={"Firstname"}/>
                <input {...register("Lastname", {required: true})} placeholder={"Lastname"}/>
                <input {...register("Userid", {required: true})} placeholder={"Userid"}/>
                <input {...register("Password1", {required: true})} placeholder={"Password1"}/>
                <input {...register("Password2", {required: true})} placeholder={"Password2"}/>
                <button>Add</button>
            </form>
        </>
    )
}

export default TodoLIst;