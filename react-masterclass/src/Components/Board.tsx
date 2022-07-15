import DraggableCard from "./DraggableCard";
import {Droppable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 15px 20px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface BoardProps {
    toDos: string[];
    boardId: string;

}

function Board({toDos, boardId}: BoardProps) {
    return (<Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
            {(provided) => {
                return (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {toDos.map((toDo, index) => {
                            return <DraggableCard toDo={toDo} key={toDo} index={index}/>
                        })}
                        {provided.placeholder}
                    </div>)
            }}
        </Droppable>
    </Wrapper>)

}

export default Board;