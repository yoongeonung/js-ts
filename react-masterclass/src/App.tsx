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
        if (!destination) return;
        if (source.droppableId === destination?.droppableId) {
            setToDos((boards) => {
                const boardCopy = [...boards[source.droppableId]];
                const taskObj = boardCopy[source.index];
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, taskObj)
                return {
                    ...boards,
                    [source.droppableId]: boardCopy,
                };
            });
        }
        if (source.droppableId !== destination.droppableId) {
            setToDos(boards => {
                const sourceArr = [...boards[source.droppableId]];
                const taskObj = sourceArr[source.index];
                console.log(sourceArr);
                const targetArr = [...boards[destination.droppableId]];
                sourceArr.splice(source.index, 1);
                targetArr.splice(destination.index, 0, taskObj);
                return {
                    ...boards,
                    [source.droppableId]: sourceArr,
                    [destination.droppableId]: targetArr,
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
