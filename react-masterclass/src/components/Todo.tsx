import React from "react";
import {ITodo} from "../atoms";


function Todo({text}: ITodo) {
    return (
        <li>{text}</li>
    )
}

export default Todo;