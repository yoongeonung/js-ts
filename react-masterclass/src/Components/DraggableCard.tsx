import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: inherit;
  background-color: ${(props) => props.theme.cardColor};
  text-align: center;
  padding: 15px 20px;
  margin-bottom: 10px;
`;

interface DraggableCardProp {
    toDoId: number,
    toDoText: string;
    index: number
}

function DraggableCard({toDoId, toDoText, index}:DraggableCardProp) {
    return <Draggable key={toDoId} draggableId={String(toDoId)} index={index}>
        {(provided) => (
            <Card {...provided.draggableProps} {...provided.dragHandleProps}
                  ref={provided.innerRef}>
                {toDoText}
            </Card>
        )}
    </Draggable>
}

export default React.memo(DraggableCard);