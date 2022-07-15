import React from "react";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "./atoms";
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
        if (source.droppableId === destination?.droppableId) {
            setToDos((boards) => {
                const copyArr = [...boards[source.droppableId]];
                copyArr.splice(source.index, 1);
                copyArr.splice(destination?.index, 0, draggableId)
                return {
                    ...boards,
                    [source.droppableId]: copyArr,
                };
            });
        }
    };
    return (
        <Wrapper>
            <Boards>
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.keys(toDos).map((toDoKey, index) => {
                        return <Board toDos={toDos[toDoKey]} key={toDoKey} boardId={toDoKey}/>
                    })}
                </DragDropContext>
            </Boards>
        </Wrapper>
    )
}

export default App;
