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

interface BoardProps {
    toDos: string[];
}

function Board({toDos}:BoardProps) {
    return <Droppable droppableId={'one'}>
        {(provided) => {
            return <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) => {
                    return <DraggableCard toDo={toDo} key={toDo} index={index} />
                })}
                {provided.placeholder}
            </Wrapper>
        }}
    </Droppable>
}

export default Board;