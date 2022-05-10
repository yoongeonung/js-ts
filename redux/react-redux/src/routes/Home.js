import React, {useState} from 'react';
import {connect} from "react-redux";
import {actionCreator} from "../store";
import Todo from "../components/Todo";

const Home = ({todos, addTodo}) => {
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="please write your todos" value={text} onChange={onChange}/>
            </form>
            <ul>
                {todos.map(todo => <Todo {...todo} key={todo.id}/>)}
            </ul>
        </>

    );
}
// store.getState() 와 같은 의미
const mapStateToProps = (state) => {
    return {todos : state}
}

// store.dispatch() 와 같은 의미
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: text => dispatch(actionCreator.addTodo(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);