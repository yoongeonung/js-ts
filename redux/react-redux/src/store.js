import {configureStore, createSlice} from "@reduxjs/toolkit";

const todos = createSlice({
    name: "todosReducer",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({text: action.payload, id: Date.now()});
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            return state.map(todo => {
                if (todo.id === parseInt(action.payload.id)) {
                    return {
                        ...todo,
                        text: action.payload.text === "" ? todo.text : action.payload.text,
                    }
                }
                return todo;
            });
        }
    }
});

export const {
    addTodo,
    deleteTodo,
    updateTodo
} = todos.actions;

export default configureStore({reducer: todos.reducer});
