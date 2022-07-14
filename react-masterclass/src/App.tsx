import React from "react";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "./atoms";
import DraggableCard from "./Components/DraggableCard";

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 15px 20px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;



function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({draggableId, destination, source}: DropResult) => {
        if (!destination) return
        setToDos((currVal) => {
            const copyArr = [...currVal];
            copyArr.splice(source.index, 1);
            copyArr.splice(destination?.index, 0, draggableId)
            return copyArr;
        })
    };
    return (
        <Wrapper>
            <Boards>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={'one'}>
                        {(provided) => {
                            return <Board ref={provided.innerRef} {...provided.droppableProps}>
                                {toDos.map((toDo, index) => {
                                    return <DraggableCard toDo={toDo} index={index} key={toDo}/>
                                })}
                                {provided.placeholder}
                            </Board>
                        }}
                    </Droppable>
                </DragDropContext>
            </Boards>
        </Wrapper>
    )
}

export default App;
