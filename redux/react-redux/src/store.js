import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

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

const reducer = (state = [], action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreator = {
    addTodo,
    deleteTodo
}
export default store;
