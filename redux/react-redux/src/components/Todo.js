import React, {useState} from 'react';
import {connect} from "react-redux";
import {actionCreator} from "../store";

const Todo = ({text, onDelBtnClick, onEditBtnClick}) => {
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState("");
    const editToggle = () => {
        setEdit(current => !current);
    }
    const onChange = ({target:{value}}) => {
        setEditTodo(value);
    }
    const onSubmit = e => {
        e.preventDefault();
        onEditBtnClick(editTodo);
        setEdit(current => !current);
    }
    return (
        <>
            {
                edit ? (
                    <div>
                        <form onSubmit={onSubmit}>
                            <input type="text" onChange={onChange} value={editTodo}/>
                        </form>
                    </div>
                ) : (
                    <>
                        <li>
                            {text}
                            <button onClick={onDelBtnClick}>削除</button>
                            <button onClick={editToggle}>修正</button>
                        </li>
                    </>
                )
            }
        </>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDelBtnClick: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
        onEditBtnClick: editTodo => dispatch(actionCreator.updateTodo(editTodo,ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);