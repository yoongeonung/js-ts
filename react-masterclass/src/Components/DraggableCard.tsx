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
    toDo: string,
    index: number
}

function DraggableCard({toDo, index}:DraggableCardProp) {
    return <Draggable key={toDo} draggableId={toDo} index={index}>
        {(provided) => (
            <Card {...provided.draggableProps} {...provided.dragHandleProps}
                  ref={provided.innerRef}>
                {toDo}
            </Card>
        )}
    </Draggable>
}

export default React.memo(DraggableCard);