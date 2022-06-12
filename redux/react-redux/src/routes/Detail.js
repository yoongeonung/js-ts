import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const Detail = ({state}) => {
    const params = useParams();
    const todo = state.find(todo => todo.id === parseInt(params.id));
    return (
        <>
            <h1>{todo?.text}</h1>
            <h4>createdAt : {Date(todo?.id)}</h4>
        </>
    );
}

const mapStateToProps = (state) => {
    return {state};
}

export default connect(mapStateToProps)(Detail);