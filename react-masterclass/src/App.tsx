import React from "react";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "./atoms";
import DraggableCard from "./Components/DraggableCard";
import Board from "./Components/Board";

const Wrapper = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`



const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;



function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({draggableId, destination, source}: DropResult) => {
        if (!destination) return
        // setToDos((currVal) => {
        //     const copyArr = [...currVal];
        //     copyArr.splice(source.index, 1);
        //     copyArr.splice(destination?.index, 0, draggableId)
        //     return copyArr;
        // })
    };
    return (
        <Wrapper>
            <Boards>
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.keys(toDos).map(toDoKey => {
                       return <Board toDos={toDos[toDoKey]} key={toDoKey} />
                    })}
                </DragDropContext>
            </Boards>
        </Wrapper>
    )
}

export default App;
