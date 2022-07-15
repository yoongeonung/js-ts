import DraggableCard from "./DraggableCard";
import {Droppable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {Todo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 15px 20px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<AreaProps>`
  background-color: ${props => props.isDraggingOver ? 'pink' : props.isDraggingFromThisWith ? 'red' : 'purple'};
  flex-grow: 1;
  transition: background-color 0.3s ease-in;
`;

const Form = styled.form`
  width: 100%;
  
  input {
    width: 100%;
  }
`;

interface AreaProps {
    isDraggingFromThisWith: boolean,
    isDraggingOver: boolean
}

interface BoardProps {
    toDos: Todo[];
    boardId: string;

}

interface FormProp {
    toDo: string;
}

function Board({toDos, boardId}: BoardProps) {
    const setTodos = useSetRecoilState(toDoState);
    const {register, setValue, handleSubmit} = useForm<FormProp>();
    const onValid = (data:FormProp) => {
        console.log(data);
        const newTodo = {
            id: Date.now(),
            text: data.toDo,
        }
        setTodos((allBoards) => {
            return {
                ...allBoards,
                [boardId]: [newTodo, ...allBoards[boardId]],
            }
        });
        setValue('toDo', '');
    }
    return (<Wrapper>
        <Title>{boardId}</Title>
        <Form onSubmit={handleSubmit(onValid)}>
            <input {...register('toDo')} placeholder={`Add task on ${boardId}`}/>
        </Form>
        <Droppable droppableId={boardId}>
            {(provided, snapshot) => {
                return (
                    <Area ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}
                          isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}>
                        {toDos.map((toDo, index) => {
                            return <DraggableCard toDoId={toDo.id} toDoText={toDo.text} key={toDo.id} index={index}/>
                        })}
                        {provided.placeholder}
                    </Area>)
            }}
        </Droppable>
    </Wrapper>)

}

export default Board;