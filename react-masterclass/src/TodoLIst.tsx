import React from "react";
import {useForm} from "react-hook-form";

function TodoLIst() {
    const {register, watch} = useForm();
    const message = watch();
    console.log(message);
    return (
        <>
            <form>
                <input {...register("todo")} type="text" placeholder={"please text ur todos"}/>
            </form>
        </>
    )
}

export default TodoLIst;