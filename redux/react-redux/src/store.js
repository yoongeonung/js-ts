import {applyMiddleware, createStore} from "redux";
import loggerMiddleware from "./lib/loggerMiddleware";

const ADD = "ADD";
const DELETE = "DELETE";
const UPDATE = "UPDATE";

const addTodo = text => {
    return {
        type : ADD,
        text
    }
}

const deleteTodo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const updateTodo = (text,id) => {
    return {
        type: UPDATE,
        text,
        id: parseInt(id)
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
        case UPDATE:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        text: action.text === "" ? todo.text : action.text,
                    }
                }
                return todo;
            })
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export const actionCreator = {
    addTodo,
    deleteTodo,
    updateTodo
}
export default store;
