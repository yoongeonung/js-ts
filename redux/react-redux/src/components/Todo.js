import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {deleteTodo, updateTodo} from "../store";

const Todo = ({text, onDelBtnClick, onEditBtnClick, id}) => {
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState("");
    const editToggle = () => {
        setEdit(current => !current);
    }
    const onChange = ({target: {value}}) => {
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
                            <Link to={`/${id}`}>
                                {text}
                            </Link>
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
        onDelBtnClick: () => dispatch(deleteTodo(ownProps.id)),
        onEditBtnClick: editTodo => dispatch(updateTodo({text : editTodo, id: ownProps.id}))
    }
}

export default connect(null, mapDispatchToProps)(Todo);